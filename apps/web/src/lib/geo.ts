import type { Firm } from "@/data/firms";
import type { ShawarmaPlace } from "@/data/shawarma-places";
import { categoriesToCuisines } from "@/lib/cuisine-categories";
import { isOpenNow } from "@/lib/opening-hours";

const EARTH_RADIUS_M = 6_371_000;

function toRad(deg: number): number {
	return (deg * Math.PI) / 180;
}

export function haversineDistance(
	lat1: number,
	lon1: number,
	lat2: number,
	lon2: number,
): number {
	const dLat = toRad(lat2 - lat1);
	const dLon = toRad(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) ** 2 +
		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
	return EARTH_RADIUS_M * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function estimateWalkingMinutes(meters: number): number {
	return Math.round(meters / 80); // ~5 km/h
}

export function buildGoogleMapsUrl(
	fromLat: number,
	fromLng: number,
	toLat: number,
	toLng: number,
): string {
	return `https://www.google.com/maps/dir/?api=1&origin=${fromLat},${fromLng}&destination=${toLat},${toLng}&travelmode=walking`;
}

export type NearestResult = {
	place: ShawarmaPlace;
	distanceMeters: number;
	walkingMinutes: number;
	googleMapsUrl: string;
};

export function findNearestPlaces(
	firm: Firm,
	places: ShawarmaPlace[],
	count: number,
	options?: {
		maxDistanceMeters?: number;
		enabledCategories?: Set<string>;
		minRating?: number;
		openNow?: boolean;
	},
): NearestResult[] {
	let filtered = places;

	if (options?.enabledCategories && options.enabledCategories.size > 0) {
		const allowedCuisines = categoriesToCuisines(options.enabledCategories);
		filtered = filtered.filter((place) =>
			place.cuisines.some((c) => allowedCuisines.has(c)),
		);
	}

	if (options?.minRating != null) {
		filtered = filtered.filter(
			(place) =>
				place.googleRating != null &&
				place.googleRating >= options.minRating!,
		);
	}

	if (options?.openNow) {
		filtered = filtered.filter((place) => {
			if (!place.openingHours) return false;
			return isOpenNow(place.openingHours) === true;
		});
	}

	const results = filtered
		.map((place) => {
			const distanceMeters = haversineDistance(
				firm.latitude,
				firm.longitude,
				place.latitude,
				place.longitude,
			);
			return {
				place,
				distanceMeters,
				walkingMinutes: estimateWalkingMinutes(distanceMeters),
				googleMapsUrl: buildGoogleMapsUrl(
					firm.latitude,
					firm.longitude,
					place.latitude,
					place.longitude,
				),
			};
		})
		.sort((a, b) => a.distanceMeters - b.distanceMeters);

	const maxDist = options?.maxDistanceMeters;
	const distFiltered = maxDist
		? results.filter((r) => r.distanceMeters <= maxDist)
		: results;

	return distFiltered.slice(0, count);
}
