import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = resolve(__dirname, "../src/data/shawarma-places.ts");
const CACHE_PATH = resolve(__dirname, ".google-cache.json");

const SHOULD_FETCH = process.argv.includes("--fetch");

// ── Budget safety ──────────────────────────────────────────────────
// Places API Text Search Enterprise + Atmosphere: 1,000 free/month.
// We cap well under that.
const COST_PER_REQUEST = 0.04;
const MAX_REQUESTS = 700;

// ── Types ──────────────────────────────────────────────────────────

type GoogleCacheEntry = {
	googleRating?: number;
	googleRatingCount?: number;
	openingHours?: string;
	fetchedAt: string;
};

type GoogleCache = Record<string, GoogleCacheEntry>;

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

// ── Cache ──────────────────────────────────────────────────────────

function loadCache(): GoogleCache {
	if (!existsSync(CACHE_PATH)) return {};
	return JSON.parse(readFileSync(CACHE_PATH, "utf-8"));
}

function saveCache(cache: GoogleCache) {
	writeFileSync(CACHE_PATH, JSON.stringify(cache, null, "\t"), "utf-8");
}

// ── Data file parsing ──────────────────────────────────────────────

function loadPlaces(): { places: ShawarmaPlace[]; allCuisines: string[] } {
	const content = readFileSync(DATA_PATH, "utf-8");

	const placesMatch = content.match(
		/export const shawarmaPlaces: ShawarmaPlace\[\] = (\[[\s\S]*\]);/,
	);
	const cuisinesMatch = content.match(
		/export const allCuisines: string\[\] = (\[.*?\]);/,
	);

	if (!placesMatch) throw new Error("Could not parse places from data file");
	if (!cuisinesMatch)
		throw new Error("Could not parse cuisines from data file");

	return {
		places: JSON.parse(placesMatch[1]),
		allCuisines: JSON.parse(cuisinesMatch[1]),
	};
}

function writePlaces(places: ShawarmaPlace[], allCuisines: string[]) {
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

export const shawarmaPlaces: ShawarmaPlace[] = ${JSON.stringify(places, null, "\t")};
`;
	writeFileSync(DATA_PATH, ts, "utf-8");
}

// ── Google Places API ──────────────────────────────────────────────

async function searchPlace(
	apiKey: string,
	name: string,
	lat: number,
	lng: number,
): Promise<GoogleCacheEntry | null> {
	const res = await fetch(
		"https://places.googleapis.com/v1/places:searchText",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Goog-Api-Key": apiKey,
				"X-Goog-FieldMask":
					"places.rating,places.userRatingCount,places.regularOpeningHours",
			},
			body: JSON.stringify({
				textQuery: `${name} Oslo`,
				locationBias: {
					circle: {
						center: { latitude: lat, longitude: lng },
						radius: 200,
					},
				},
				maxResultCount: 1,
			}),
		},
	);

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Google Places API error ${res.status}: ${text}`);
	}

	const data = await res.json();
	const place = data.places?.[0];
	if (!place) return null;

	const entry: GoogleCacheEntry = { fetchedAt: new Date().toISOString() };

	if (place.rating != null) entry.googleRating = place.rating;
	if (place.userRatingCount != null)
		entry.googleRatingCount = place.userRatingCount;
	if (place.regularOpeningHours?.weekdayDescriptions) {
		entry.openingHours =
			place.regularOpeningHours.weekdayDescriptions.join("; ");
	}

	return entry;
}

// ── Main ───────────────────────────────────────────────────────────

async function main() {
	const { places, allCuisines } = loadPlaces();
	const cache = loadCache();

	console.log(
		`Loaded ${places.length} places, ${Object.keys(cache).length} cached.`,
	);

	let requestCount = 0;
	let found = 0;
	let notFound = 0;

	if (SHOULD_FETCH) {
		const apiKey = process.env.GOOGLE_PLACES_API_KEY;
		if (!apiKey) {
			console.error(
				"Error: Set GOOGLE_PLACES_API_KEY environment variable.",
			);
			console.error("  GOOGLE_PLACES_API_KEY=your_key pnpm enrich-google --fetch");
			process.exit(1);
		}

		const needsFetch = places.filter((p) => !cache[p.id]);
		console.log(`${needsFetch.length} places need Google data.`);
		console.log(
			`Budget: max ${MAX_REQUESTS} requests (~$${(MAX_REQUESTS * COST_PER_REQUEST).toFixed(0)} at $${COST_PER_REQUEST}/req)\n`,
		);

		for (const place of needsFetch) {
			if (requestCount >= MAX_REQUESTS) {
				console.log(
					`\nHit request limit (${MAX_REQUESTS}). Stopping to stay within budget.`,
				);
				console.log(
					"Re-run to continue where you left off (cached results are preserved).",
				);
				break;
			}

			requestCount++;
			process.stdout.write(
				`  [${requestCount}/${needsFetch.length}] ${place.name}... `,
			);

			try {
				const result = await searchPlace(
					apiKey,
					place.name,
					place.latitude,
					place.longitude,
				);
				if (result) {
					cache[place.id] = result;
					found++;
					const parts = [];
					if (result.googleRating)
						parts.push(
							`${result.googleRating} (${result.googleRatingCount})`,
						);
					if (result.openingHours) parts.push("hours");
					console.log(parts.join(", ") || "no rating/hours");
				} else {
					cache[place.id] = { fetchedAt: new Date().toISOString() };
					notFound++;
					console.log("not found on Google");
				}
			} catch (err) {
				console.log(`error: ${err instanceof Error ? err.message : err}`);
				saveCache(cache);
				console.log(
					`\nSaved cache after error. Re-run to continue from where you left off.`,
				);
				process.exit(1);
			}

			// Rate limit: 100ms between requests
			await new Promise((r) => setTimeout(r, 100));
		}

		saveCache(cache);
	} else {
		console.log(
			"Apply-only mode (no API calls). Use --fetch to fetch from Google.\n",
		);
	}

	// Apply cache to all places
	const enriched = places.map((place) => {
		const cached = cache[place.id];
		if (!cached) return place;

		const result: ShawarmaPlace = { ...place };
		if (cached.googleRating != null) result.googleRating = cached.googleRating;
		if (cached.googleRatingCount != null)
			result.googleRatingCount = cached.googleRatingCount;
		if (!result.openingHours && cached.openingHours) {
			result.openingHours = cached.openingHours;
		}
		return result;
	});

	writePlaces(enriched, allCuisines);

	const withRating = enriched.filter((p) => p.googleRating).length;
	const withHours = enriched.filter((p) => p.openingHours).length;

	console.log("Done!");
	if (SHOULD_FETCH) {
		console.log(
			`  API requests this run: ${requestCount} (~$${(requestCount * COST_PER_REQUEST).toFixed(2)})`,
		);
		console.log(`  Found: ${found}, Not found: ${notFound}`);
	}
	console.log(`  Ratings: ${withRating}/${enriched.length} places`);
	console.log(`  Opening hours: ${withHours}/${enriched.length} places`);
}

main().catch((err) => {
	console.error("Fatal:", err);
	process.exit(1);
});
