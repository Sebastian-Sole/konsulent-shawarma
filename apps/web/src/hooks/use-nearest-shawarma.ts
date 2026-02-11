import { useMemo } from "react";
import type { Firm } from "@/data/firms";
import { shawarmaPlaces } from "@/data/shawarma-places";
import { findNearestPlaces, type NearestResult } from "@/lib/geo";

export function useNearestShawarma(
	firm: Firm | null,
	count = 5,
): NearestResult[] {
	return useMemo(() => {
		if (!firm) return [];
		return findNearestPlaces(firm, shawarmaPlaces, count);
	}, [firm, count]);
}
