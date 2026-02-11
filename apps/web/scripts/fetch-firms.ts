import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../src/data/firms.ts");

const BRREG_API = "https://data.brreg.no/enhetsregisteret/api/enheter";
const GEOCODE_API = "https://ws.geonorge.no/adresser/v1/sok";

const BRREG_PARAMS = {
	naeringskode: "62.200",
	kommunenummer: "0301",
	organisasjonsform: "AS",
	fraAntallAnsatte: "10",
	size: "100",
};

type BrregEntity = {
	organisasjonsnummer: string;
	navn: string;
	forretningsadresse?: {
		adresse?: string[];
		postnummer?: string;
		poststed?: string;
	};
};

type BrregResponse = {
	_embedded?: { enheter: BrregEntity[] };
	page: { totalPages: number; number: number };
};

type GeocodeResult = {
	adresser: {
		representasjonspunkt?: { lat: number; lon: number };
	}[];
};

type Firm = {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
};

async function fetchAllFirms(): Promise<BrregEntity[]> {
	const all: BrregEntity[] = [];
	let page = 0;
	let totalPages = 1;

	while (page < totalPages) {
		const params = new URLSearchParams({ ...BRREG_PARAMS, page: String(page) });
		const url = `${BRREG_API}?${params}`;
		console.log(`  Fetching page ${page + 1}/${totalPages}...`);

		const res = await fetch(url);
		if (!res.ok) throw new Error(`BRREG error: ${res.status}`);

		const data: BrregResponse = await res.json();
		totalPages = data.page.totalPages;

		if (data._embedded?.enheter) {
			all.push(...data._embedded.enheter);
		}
		page++;
	}

	return all;
}

function buildAddress(entity: BrregEntity): string {
	const addr = entity.forretningsadresse;
	if (!addr) return "";
	const street = addr.adresse?.filter(Boolean).join(", ") ?? "";
	const postal = [addr.postnummer, addr.poststed].filter(Boolean).join(" ");
	return [street, postal].filter(Boolean).join(", ");
}

async function geocode(
	address: string,
): Promise<{ lat: number; lon: number } | null> {
	const params = new URLSearchParams({ sok: address, treffPerSide: "1" });
	const res = await fetch(`${GEOCODE_API}?${params}`);
	if (!res.ok) return null;

	const data: GeocodeResult = await res.json();
	const point = data.adresser?.[0]?.representasjonspunkt;
	return point ? { lat: point.lat, lon: point.lon } : null;
}

function slugify(name: string): string {
	return name
		.toLowerCase()
		.replace(/[æ]/g, "ae")
		.replace(/[ø]/g, "o")
		.replace(/[å]/g, "a")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

function sleep(ms: number) {
	return new Promise((r) => setTimeout(r, ms));
}

async function main() {
	console.log("Fetching IT consulting firms from BRREG...");
	const entities = await fetchAllFirms();
	console.log(`Found ${entities.length} firms. Geocoding addresses...`);

	const firms: Firm[] = [];
	let skipped = 0;

	for (let i = 0; i < entities.length; i++) {
		const entity = entities[i];
		const address = buildAddress(entity);
		if (!address) {
			skipped++;
			continue;
		}

		const coords = await geocode(address);
		if (!coords) {
			console.log(`  [${i + 1}/${entities.length}] SKIP (no coords): ${entity.navn}`);
			skipped++;
			continue;
		}

		firms.push({
			id: slugify(entity.navn),
			name: entity.navn,
			address,
			latitude: coords.lat,
			longitude: coords.lon,
		});

		if ((i + 1) % 25 === 0) {
			console.log(`  [${i + 1}/${entities.length}] Geocoded ${firms.length} so far...`);
		}

		// Be polite to Kartverket
		await sleep(50);
	}

	console.log(`\nDone! ${firms.length} firms geocoded, ${skipped} skipped.`);

	// Sort alphabetically
	firms.sort((a, b) => a.name.localeCompare(b.name, "nb"));

	const ts = `export type Firm = {
\tid: string;
\tname: string;
\taddress: string;
\tlatitude: number;
\tlongitude: number;
};

export const firms: Firm[] = ${JSON.stringify(firms, null, "\t")};
`;

	writeFileSync(OUTPUT_PATH, ts, "utf-8");
	console.log(`Wrote ${firms.length} firms to ${OUTPUT_PATH}`);
}

main().catch((err) => {
	console.error("Fatal error:", err);
	process.exit(1);
});
