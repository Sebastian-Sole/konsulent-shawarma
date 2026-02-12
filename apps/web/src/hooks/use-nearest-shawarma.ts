import { useMemo } from "react";
import type { Firm } from "@/data/firms";
import { shawarmaPlaces } from "@/data/shawarma-places";
import { findNearestPlaces, type NearestResult } from "@/lib/geo";

export function useNearestShawarma(
	firm: Firm | null,
	options?: {
		count?: number;
		maxDistanceMeters?: number;
		cuisines?: Set<string>;
		minRating?: number;
		openNow?: boolean;
	},
): NearestResult[] {
	const count = options?.count ?? 10;
	const maxDistanceMeters = options?.maxDistanceMeters;
	const cuisines = options?.cuisines;
	const minRating = options?.minRating;
	const openNow = options?.openNow;

	return useMemo(() => {
		if (!firm) return [];
		return findNearestPlaces(firm, shawarmaPlaces, count, {
			maxDistanceMeters,
			cuisines,
			minRating,
			openNow,
		});
		// cuisines is a Set - we serialize to track changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firm, count, maxDistanceMeters, cuisines && [...cuisines].join(","), minRating, openNow]);
}
