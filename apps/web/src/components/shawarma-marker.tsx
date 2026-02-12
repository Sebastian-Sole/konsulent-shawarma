import { ExternalLink, Footprints } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	MapMarker,
	MarkerContent,
	MarkerPopup,
	MarkerTooltip,
} from "@/components/ui/map";
import type { NearestResult } from "@/lib/geo";
import { getPlaceCategory } from "@/lib/cuisine-categories";
import { cn } from "@/lib/utils";

type ShawarmaMarkerProps = {
	result: NearestResult;
	rank: number;
};

export function ShawarmaMarker({ result, rank }: ShawarmaMarkerProps) {
	const { place, distanceMeters, walkingMinutes, googleMapsUrl } = result;
	const cat = getPlaceCategory(place.cuisines);

	return (
		<MapMarker longitude={place.longitude} latitude={place.latitude}>
			<MarkerContent>
				<div
					className={cn(
						"flex size-7 items-center justify-center rounded-full border-2 text-xs font-bold shadow-lg",
						cat.border,
						cat.color,
						cat.text,
					)}
				>
					{rank}
				</div>
			</MarkerContent>
			<MarkerTooltip>
				<div className="rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-slate-900 shadow-md">
					{place.name}
				</div>
			</MarkerTooltip>
			<MarkerPopup>
				<div className="w-56 rounded-lg bg-white p-3 shadow-xl">
					<p className="font-semibold text-slate-900">{place.name}</p>
					<p className="mt-0.5 text-xs text-slate-500">{place.address}</p>
					<div className="mt-2 flex items-center gap-2">
						<Badge variant="secondary" className="text-xs">
							{distanceMeters < 1000
								? `${Math.round(distanceMeters)} m`
								: `${(distanceMeters / 1000).toFixed(1)} km`}
						</Badge>
						<Badge variant="secondary" className="text-xs">
							<Footprints className="mr-1 size-3" />~{walkingMinutes} min
						</Badge>
					</div>
					<a
						href={googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-2 flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
					>
						Åpne i Google Maps
						<ExternalLink className="size-3" />
					</a>
				</div>
			</MarkerPopup>
		</MapMarker>
	);
}
