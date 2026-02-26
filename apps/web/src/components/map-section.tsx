import { forwardRef } from "react";
import { type MapRef, Map as MapView, MapRoute } from "@/components/ui/map";
import { FirmMarker } from "@/components/firm-marker";
import { ShawarmaMarker } from "@/components/shawarma-marker";
import type { Firm } from "@/data/firms";
import type { NearestResult } from "@/lib/geo";

type MapSectionProps = {
	className?: string;
	center: [number, number];
	zoom: number;
	mapStyleUrl: string;
	firms: Firm[];
	selectedFirm: Firm | null;
	results: NearestResult[];
	focusedPlaceId: string | null;
	route: { coordinates: [number, number][] } | null;
	onFirmClick: (firm: Firm) => void;
	onFocusPlace: (result: NearestResult) => void;
};

const MapSection = forwardRef<MapRef, MapSectionProps>(function MapSection(
	{
		className,
		center,
		zoom,
		mapStyleUrl,
		firms,
		selectedFirm,
		results,
		focusedPlaceId,
		route,
		onFirmClick,
		onFocusPlace,
	},
	ref,
) {
	return (
		<MapView
			ref={ref}
			className={className}
			center={center}
			zoom={zoom}
			styles={{ dark: mapStyleUrl, light: mapStyleUrl }}
		>
			{firms.map((firm) => (
				<FirmMarker
					key={firm.id}
					firm={firm}
					isSelected={selectedFirm?.id === firm.id}
					onClick={onFirmClick}
				/>
			))}

			{selectedFirm &&
				results.map((result, i) => (
					<ShawarmaMarker
						key={result.place.id}
						result={result}
						rank={i + 1}
						focused={focusedPlaceId === result.place.id}
						onFocus={() => onFocusPlace(result)}
					/>
				))}

			{route && (
				<MapRoute
					coordinates={route.coordinates}
					color="#e63946"
					width={5}
					opacity={0.9}
					interactive={false}
				/>
			)}
		</MapView>
	);
});

export default MapSection;
