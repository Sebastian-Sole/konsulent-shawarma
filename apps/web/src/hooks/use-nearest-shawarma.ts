import { useMemo } from "react";
import type { Firm } from "@/data/firms";
import { shawarmaPlaces } from "@/data/shawarma-places";
import { findNearestPlaces, type NearestResult } from "@/lib/geo";

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

	return useMemo(() => {
		if (!firm) return [];
		return findNearestPlaces(firm, shawarmaPlaces, count, {
			maxDistanceMeters,
			enabledCategories,
			minRating,
			openNow,
		});
		// enabledCategories is a Set - we serialize to track changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firm, count, maxDistanceMeters, enabledCategories && [...enabledCategories].join(","), minRating, openNow]);
}
