import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../src/data/shawarma-places.ts");
const GOOGLE_CACHE_PATH = resolve(__dirname, ".google-cache.json");

const OVERPASS_ENDPOINTS = [
	"https://overpass-api.de/api/interpreter",
	"https://overpass.kumi.systems/api/interpreter",
];

// Fetch all restaurants and fast_food in Norway using area query
const QUERY = `[out:json][timeout:180];area["ISO3166-1"="NO"][admin_level=2]->.norway;(nw["amenity"="restaurant"](area.norway);nw["amenity"="fast_food"](area.norway););out center;`;

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
	openingHours?: string;
	googleRating?: number;
	googleRatingCount?: number;
};

type GoogleCacheEntry = {
	googleRating?: number;
	googleRatingCount?: number;
	openingHours?: string;
	fetchedAt: string;
};

type GoogleCache = Record<string, GoogleCacheEntry>;

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

const NAME_CUISINE_KEYWORDS: [RegExp, string[]][] = [
	// Asian
	[/sushi/i, ["sushi"]],
	[/ramen/i, ["ramen"]],
	[/wok/i, ["chinese"]],
	[/dim\s*sum/i, ["chinese"]],
	[/dumpling/i, ["chinese"]],
	[/bao\b/i, ["chinese"]],
	[/chinatown|china\b/i, ["chinese"]],
	[/pho\b/i, ["vietnamese"]],
	[/thai\b/i, ["thai"]],
	[/tandoori|tikka|curry\b|masala/i, ["indian"]],
	[/india|gandhi|bollywood|punjab/i, ["indian"]],
	[/nepal/i, ["nepalese"]],
	[/korea/i, ["korean"]],
	[/bibimbap/i, ["korean"]],
	[/udon/i, ["udon"]],
	[/noodle/i, ["noodle"]],
	[/filipino|pinoy/i, ["filipino"]],
	[/indonesi/i, ["indonesian"]],

	// Italian
	[/pizz[ea]/i, ["pizza"]],
	[/pinsa/i, ["pizza", "italian"]],
	[/pasta/i, ["pasta"]],
	[/trattoria|ristorante|osteria|piazza/i, ["italian"]],
	[/italiano|italia\b/i, ["italian"]],

	// Middle Eastern / Kebab
	[/kebab|d[öo]ner/i, ["kebab"]],
	[/shawarma/i, ["shawarma"]],
	[/falafel/i, ["falafel"]],
	[/damascus|aleppo/i, ["syrian", "middle_eastern"]],
	[/mandi\b/i, ["arab", "middle_eastern"]],
	[/lebanese|libanon/i, ["lebanese"]],
	[/persian|persi/i, ["persian"]],
	[/palesti/i, ["palestinian"]],

	// American / Burgers
	[/burger/i, ["burger"]],
	[/grill(?:en)?/i, ["grill"]],
	[/wings?\b/i, ["chicken"]],
	[/fried\s*chicken|fly\s*chicken/i, ["fried_chicken"]],
	[/steak\s*house/i, ["steak_house"]],
	[/bøfhus/i, ["steak", "steak_house"]],
	[/texburger|tex[\s-]?mex/i, ["tex-mex"]],

	// Latin American / Mexican
	[/taco|burrito|tortilla|mexicansk/i, ["mexican"]],
	[/los\s*tacos/i, ["mexican", "tacos"]],
	[/salsa\b/i, ["mexican"]],
	[/peruvi|ceviche/i, ["peruvian"]],
	[/colombian/i, ["colombian"]],

	// Seafood / Fish
	[/fish\s*(?:&|and|og)\s*chips/i, ["fish_and_chips"]],
	[/fisk|sjømat|seafood|skalldyr/i, ["seafood"]],

	// European / French / Spanish
	[/brasserie/i, ["french"]],
	[/frenchie|french/i, ["french"]],
	[/bistro/i, ["bistro"]],
	[/tapas|pintxos/i, ["tapas", "spanish"]],
	[/sangria/i, ["spanish"]],
	[/basque|bask/i, ["basque"]],

	// African
	[/ethiopi|lalibela/i, ["ethiopian"]],
	[/african/i, ["african"]],
	[/safari\b/i, ["african"]],

	// Balkan
	[/burek/i, ["balkan"]],
	[/balkan/i, ["balkan"]],

	// Turkish
	[/marmaris|turkish/i, ["turkish"]],

	// Drinks / Cafes / Dessert
	[/caf[eé]|kaff[eé]|coffee/i, ["coffee"]],
	[/bakeri|baker|bagel/i, ["bagel"]],
	[/konditori|kake/i, ["cake"]],
	[/juice|smoothie/i, ["juice"]],
	[/bubble\s*tea|boba/i, ["bubble_tea"]],
	[/vin\s*bar|vinbar|vinhus/i, ["wine"]],

	// Salad / Sandwich / Light
	[/salat|salad/i, ["salad"]],
	[/sandwich|sub\b|smørbrød/i, ["sandwich"]],

	// Norwegian / Nordic
	[/lunsj|lunch|kantine/i, ["norwegian"]],
	[/kro\b/i, ["norwegian"]],
	[/spiseri/i, ["norwegian"]],
	[/nordic|nordisk/i, ["nordic"]],
];

function guessCuisinesFromName(name: string): string[] {
	const matches: string[] = [];
	for (const [pattern, cuisines] of NAME_CUISINE_KEYWORDS) {
		if (pattern.test(name)) {
			for (const c of cuisines) {
				if (!matches.includes(c)) matches.push(c);
			}
		}
	}
	return matches;
}

function parseElement(el: OverpassElement): ShawarmaPlace | null {
	if (!el.tags?.name) return null;
	const lat = el.lat ?? el.center?.lat;
	const lon = el.lon ?? el.center?.lon;
	if (lat == null || lon == null) return null;

	const tags = el.tags;
	let cuisines = parseCuisines(tags.cuisine);
	if (cuisines.length === 0) {
		cuisines = guessCuisinesFromName(tags.name);
	}

	const parts = [
		[tags["addr:street"], tags["addr:housenumber"]]
			.filter(Boolean)
			.join(" "),
		tags["addr:city"] ?? "",
	].filter(Boolean);

	const place: ShawarmaPlace = {
		id: `osm-${el.id}`,
		name: tags.name,
		address: parts.join(", "),
		latitude: lat,
		longitude: lon,
		cuisines,
	};

	if (tags.opening_hours) {
		place.openingHours = tags.opening_hours;
	}

	return place;
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

	// Merge Google cache data if available
	let googleCache: GoogleCache = {};
	if (existsSync(GOOGLE_CACHE_PATH)) {
		googleCache = JSON.parse(readFileSync(GOOGLE_CACHE_PATH, "utf-8"));
		console.log(`Found Google cache with ${Object.keys(googleCache).length} entries.`);
	}

	for (const place of unique) {
		const cached = googleCache[place.id];
		if (!cached) continue;
		if (cached.googleRating != null) place.googleRating = cached.googleRating;
		if (cached.googleRatingCount != null) place.googleRatingCount = cached.googleRatingCount;
		if (!place.openingHours && cached.openingHours) place.openingHours = cached.openingHours;
	}

	const withHours = unique.filter((p) => p.openingHours).length;
	const withRating = unique.filter((p) => p.googleRating).length;
	console.log(`Opening hours: ${withHours}/${unique.length} places have data.`);
	console.log(`Google ratings: ${withRating}/${unique.length} places have data.`);

	const ts = `export type ShawarmaPlace = {
\tid: string;
\tname: string;
\taddress: string;
\tlatitude: number;
\tlongitude: number;
\tcuisines: string[];
\topeningHours?: string;
\tgoogleRating?: number;
\tgoogleRatingCount?: number;
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
