import { useEffect, useState } from "react";

type RouteData = {
	coordinates: [number, number][];
	distanceMeters: number;
	durationSeconds: number;
};

type UseRouteResult = {
	route: RouteData | null;
	isLoading: boolean;
};

const OSRM_BASE = "https://routing.openstreetmap.de/routed-foot/route/v1/foot";

export function useRoute(
	from: { longitude: number; latitude: number } | null,
	to: { longitude: number; latitude: number } | null,
): UseRouteResult {
	const [route, setRoute] = useState<RouteData | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!from || !to) {
			setRoute(null);
			setIsLoading(false);
			return;
		}

		const controller = new AbortController();
		setIsLoading(true);

		const url = `${OSRM_BASE}/${from.longitude},${from.latitude};${to.longitude},${to.latitude}?overview=full&geometries=geojson`;

		fetch(url, { signal: controller.signal })
			.then((res) => res.json())
			.then((data) => {
				if (data.code !== "Ok" || !data.routes?.length) {
					setRoute(null);
				} else {
					const r = data.routes[0];
					setRoute({
						coordinates: r.geometry.coordinates,
						distanceMeters: r.distance,
						durationSeconds: r.duration,
					});
				}
			})
			.catch((err) => {
				if (err.name !== "AbortError") {
					setRoute(null);
				}
			})
			.finally(() => {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			});

		return () => controller.abort();
	}, [from?.longitude, from?.latitude, to?.longitude, to?.latitude]);

	return { route, isLoading };
}
