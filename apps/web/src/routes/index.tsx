import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	ssr: false,
	validateSearch: (search: Record<string, unknown>) => ({
		company:
			typeof search.company === "string" && search.company.trim().length > 0
				? search.company
				: undefined,
	}),
});
