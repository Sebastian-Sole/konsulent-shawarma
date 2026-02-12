import { useMemo } from "react";
import type { Firm } from "@/data/firms";
import { shawarmaPlaces } from "@/data/shawarma-places";
import { findNearestPlaces, type NearestResult } from "@/lib/geo";

export function useNearestShawarma(
	firm: Firm | null,
	options?: { count?: number; maxDistanceMeters?: number; cuisines?: Set<string> },
): NearestResult[] {
	const count = options?.count ?? 5;
	const maxDistanceMeters = options?.maxDistanceMeters;
	const cuisines = options?.cuisines;

	return useMemo(() => {
		if (!firm) return [];
		return findNearestPlaces(firm, shawarmaPlaces, count, {
			maxDistanceMeters,
			cuisines,
		});
		// cuisines is a Set - we serialize to track changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firm, count, maxDistanceMeters, cuisines && [...cuisines].join(",")]);
}
