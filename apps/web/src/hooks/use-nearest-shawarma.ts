import { useEffect, useMemo, useState } from "react";
import type { Firm } from "@/data/firms";
import type { ShawarmaPlace } from "@/data/shawarma-places";
import { findNearestPlaces, type NearestResult } from "@/lib/geo";

let cachedPlaces: ShawarmaPlace[] | null = null;

export function useNearestShawarma(
	firm: Firm | null,
	options?: {
		count?: number;
		maxDistanceMeters?: number;
		enabledCategories?: Set<string>;
		minRating?: number;
		openNow?: boolean;
	},
): NearestResult[] {
	const count = options?.count ?? 10;
	const maxDistanceMeters = options?.maxDistanceMeters;
	const enabledCategories = options?.enabledCategories;
	const minRating = options?.minRating;
	const openNow = options?.openNow;

	const [places, setPlaces] = useState<ShawarmaPlace[]>(cachedPlaces ?? []);

	useEffect(() => {
		if (cachedPlaces) return;
		import("@/data/shawarma-places").then((mod) => {
			cachedPlaces = mod.shawarmaPlaces;
			setPlaces(mod.shawarmaPlaces);
		});
	}, []);

	return useMemo(() => {
		if (!firm || places.length === 0) return [];
		return findNearestPlaces(firm, places, count, {
			maxDistanceMeters,
			enabledCategories,
			minRating,
			openNow,
		});
		// enabledCategories is a Set - we serialize to track changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firm, places, count, maxDistanceMeters, enabledCategories && [...enabledCategories].join(","), minRating, openNow]);
}
