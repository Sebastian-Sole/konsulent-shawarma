import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = resolve(__dirname, "../src/data/shawarma-places.ts");
const OVERRIDES_PATH = resolve(__dirname, "cuisine-overrides.json");

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

function main() {
	const { places, allCuisines } = loadPlaces();
	const overrides: Record<string, string[]> = JSON.parse(
		readFileSync(OVERRIDES_PATH, "utf-8"),
	);

	console.log(
		`Loaded ${places.length} places, ${Object.keys(overrides).length} overrides.`,
	);

	let applied = 0;
	let alreadyFilled = 0;
	let noOverride = 0;

	const enriched = places.map((place) => {
		if (place.cuisines.length > 0) {
			alreadyFilled++;
			return place;
		}

		const cuisines = overrides[place.id];
		if (cuisines && cuisines.length > 0) {
			applied++;
			return { ...place, cuisines };
		}

		noOverride++;
		console.log(`  No override for: ${place.name} (${place.id})`);
		return place;
	});

	// Rebuild allCuisines from the enriched data
	const cuisineSet = new Set<string>();
	for (const place of enriched) {
		for (const c of place.cuisines) {
			cuisineSet.add(c);
		}
	}
	const updatedCuisines = [...cuisineSet].sort();

	writePlaces(enriched, updatedCuisines);

	const emptyAfter = enriched.filter((p) => p.cuisines.length === 0).length;

	console.log(`\nDone!`);
	console.log(`  Already had cuisines: ${alreadyFilled}`);
	console.log(`  Overrides applied: ${applied}`);
	console.log(`  No override found: ${noOverride}`);
	console.log(`  Empty cuisines remaining: ${emptyAfter}`);
	console.log(`  Total cuisines: ${updatedCuisines.length}`);
}

main();
