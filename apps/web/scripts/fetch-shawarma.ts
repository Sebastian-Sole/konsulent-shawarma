import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../src/data/shawarma-places.ts");

const OVERPASS_ENDPOINTS = [
	"https://overpass-api.de/api/interpreter",
	"https://overpass.kumi.systems/api/interpreter",
];

// Oslo bounding box: south, west, north, east
const OSLO_BBOX = "59.85,10.60,59.98,10.90";

// Fetch all restaurants and fast_food that have any cuisine tag
const QUERY = `[out:json][timeout:60];(nw["amenity"="restaurant"]["cuisine"](${OSLO_BBOX});nw["amenity"="fast_food"]["cuisine"](${OSLO_BBOX}););out center;`;

type OverpassElement = {
	type: "node" | "way";
	id: number;
	lat?: number;
	lon?: number;
	center?: { lat: number; lon: number };
	tags?: Record<string, string>;
};

type OverpassResponse = {
	elements: OverpassElement[];
};

type ShawarmaPlace = {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	cuisines: string[];
};

async function queryOverpass(): Promise<OverpassResponse> {
	let lastError: Error | undefined;

	for (const endpoint of OVERPASS_ENDPOINTS) {
		console.log(`  Trying ${endpoint}...`);
		try {
			const res = await fetch(endpoint, {
				method: "POST",
				body: `data=${encodeURIComponent(QUERY)}`,
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
			});

			if (!res.ok) {
				throw new Error(`Overpass API error: ${res.status}`);
			}

			console.log(`  Success!`);
			return await res.json();
		} catch (e) {
			const err = e instanceof Error ? e : new Error(String(e));
			console.log(`  Failed: ${err.message}`);
			lastError = err;
		}
	}

	throw lastError!;
}

function parseCuisines(raw: string | undefined): string[] {
	if (!raw) return [];
	// OSM uses semicolons, but some entries use commas
	return raw
		.split(/[;,]/)
		.map((c) => c.trim().toLowerCase().replace(/\s+/g, "_"))
		.filter(Boolean);
}

function parseElement(el: OverpassElement): ShawarmaPlace | null {
	if (!el.tags?.name) return null;
	const lat = el.lat ?? el.center?.lat;
	const lon = el.lon ?? el.center?.lon;
	if (lat == null || lon == null) return null;

	const tags = el.tags;
	const cuisines = parseCuisines(tags.cuisine);
	if (cuisines.length === 0) return null;

	const parts = [
		[tags["addr:street"], tags["addr:housenumber"]]
			.filter(Boolean)
			.join(" "),
		tags["addr:city"] ?? "Oslo",
	].filter(Boolean);

	return {
		id: `osm-${el.id}`,
		name: tags.name,
		address: parts.join(", "),
		latitude: lat,
		longitude: lon,
		cuisines,
	};
}

async function main() {
	console.log("Fetching food places from Overpass (OpenStreetMap)...");
	const data = await queryOverpass();
	console.log(`Got ${data.elements.length} raw elements.`);

	const places = data.elements
		.map(parseElement)
		.filter((p): p is ShawarmaPlace => p !== null);

	// Deduplicate by name+coords (nodes and ways can overlap)
	const seen = new Set<string>();
	const unique = places.filter((p) => {
		const key = `${p.name}|${p.latitude.toFixed(4)}|${p.longitude.toFixed(4)}`;
		if (seen.has(key)) return false;
		seen.add(key);
		return true;
	});

	unique.sort((a, b) => a.name.localeCompare(b.name, "nb"));

	// Collect all unique cuisines
	const cuisineSet = new Set<string>();
	for (const place of unique) {
		for (const c of place.cuisines) {
			cuisineSet.add(c);
		}
	}
	const allCuisines = [...cuisineSet].sort();

	console.log(`\nDone! ${unique.length} places (${places.length - unique.length} duplicates removed).`);
	console.log(`Found ${allCuisines.length} unique cuisines: ${allCuisines.join(", ")}`);

	const ts = `export type ShawarmaPlace = {
\tid: string;
\tname: string;
\taddress: string;
\tlatitude: number;
\tlongitude: number;
\tcuisines: string[];
};

export const DEFAULT_CUISINES = ["kebab", "shawarma", "middle_eastern", "arab", "gyro"];

export const allCuisines: string[] = ${JSON.stringify(allCuisines)};

export const shawarmaPlaces: ShawarmaPlace[] = ${JSON.stringify(unique, null, "\t")};
`;

	writeFileSync(OUTPUT_PATH, ts, "utf-8");
	console.log(`Wrote ${unique.length} places to ${OUTPUT_PATH}`);
}

main().catch((err) => {
	console.error("Fatal error:", err);
	process.exit(1);
});
