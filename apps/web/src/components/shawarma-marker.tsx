import { ExternalLink, Footprints, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { OpeningHoursDisplay } from "@/components/opening-hours-display";
import {
	MapMarker,
	MarkerContent,
	MarkerPopup,
} from "@/components/ui/map";
import type { NearestResult } from "@/lib/geo";
import { getPlaceCategory } from "@/lib/cuisine-categories";
import { cn } from "@/lib/utils";

type ShawarmaMarkerProps = {
	result: NearestResult;
	rank: number;
	focused?: boolean;
	onFocus?: () => void;
};

export function ShawarmaMarker({ result, rank, focused, onFocus }: ShawarmaMarkerProps) {
	const { place, distanceMeters, walkingMinutes, googleMapsUrl } = result;
	const cat = getPlaceCategory(place.cuisines);

	return (
		<MapMarker longitude={place.longitude} latitude={place.latitude} onClick={onFocus}>
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
			<MarkerPopup open={focused}>
				<div className="w-56 rounded-lg bg-white p-3 shadow-xl">
					<p className="font-semibold text-slate-900">{place.name}</p>
					<p className="mt-0.5 text-xs text-slate-500">{place.address}</p>
					<div className="mt-2 flex flex-wrap items-center gap-2">
						<Badge variant="secondary" className="text-xs">
							{distanceMeters < 1000
								? `${Math.round(distanceMeters)} m`
								: `${(distanceMeters / 1000).toFixed(1)} km`}
						</Badge>
						<Badge variant="secondary" className="text-xs">
							<Footprints className="mr-1 size-3" />~{walkingMinutes} min
						</Badge>
						{place.googleRating != null && (
							<Badge variant="secondary" className="text-xs">
								<Star className="mr-1 size-3 fill-amber-400 text-amber-400" />
								{place.googleRating}
							</Badge>
						)}
					</div>
					<div className="mt-1.5">
						<OpeningHoursDisplay
							openingHours={place.openingHours}
							compact
						/>
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
