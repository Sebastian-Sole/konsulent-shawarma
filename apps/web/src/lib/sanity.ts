import { createClient } from "@sanity/client";

let _client: ReturnType<typeof createClient> | null = null;

export function getSanityClient() {
	if (!_client) {
		_client = createClient({
			projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
			dataset: import.meta.env.VITE_SANITY_DATASET || "production",
			apiVersion: "2025-01-01",
			useCdn: true,
		});
	}
	return _client;
}
