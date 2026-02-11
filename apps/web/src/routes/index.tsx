import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useRef, useState } from "react";
import { FirmMarker } from "@/components/firm-marker";
import { ResultsPanel } from "@/components/results-panel";
import { SearchCommand } from "@/components/search-command";
import { ShawarmaMarker } from "@/components/shawarma-marker";
import { type MapRef, Map as MapView } from "@/components/ui/map";
import type { Firm } from "@/data/firms";
import { firms } from "@/data/firms";
import type { NearestResult } from "@/lib/geo";
import { useNearestShawarma } from "@/hooks/use-nearest-shawarma";

const OSLO_CENTER: [number, number] = [10.7522, 59.9139];
const OSLO_ZOOM = 13;
const SELECTED_ZOOM = 15;

const MD_BREAKPOINT = 768;

function getMobilePadding() {
	if (typeof window === "undefined" || window.innerWidth >= MD_BREAKPOINT)
		return undefined;
	return { bottom: window.innerHeight * 0.45 + 20 };
}

export const Route = createFileRoute("/")({
	component: App,
	ssr: false,
});

function App() {
	const mapRef = useRef<MapRef>(null);
	const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
	const results = useNearestShawarma(selectedFirm);

	const handleSelect = useCallback((firm: Firm | null) => {
		setSelectedFirm(firm);
		if (firm && mapRef.current) {
			mapRef.current.flyTo({
				center: [firm.longitude, firm.latitude],
				zoom: SELECTED_ZOOM,
				duration: 1200,
				padding: getMobilePadding(),
			});
		} else if (mapRef.current) {
			mapRef.current.flyTo({
				center: OSLO_CENTER,
				zoom: OSLO_ZOOM,
				duration: 1200,
			});
		}
	}, []);

	const handleClear = useCallback(() => {
		setSelectedFirm(null);
		if (mapRef.current) {
			mapRef.current.flyTo({
				center: OSLO_CENTER,
				zoom: OSLO_ZOOM,
				duration: 1200,
			});
		}
	}, []);

	const handleResultClick = useCallback((result: NearestResult) => {
		if (mapRef.current) {
			mapRef.current.flyTo({
				center: [result.place.longitude, result.place.latitude],
				zoom: 16,
				duration: 800,
				padding: getMobilePadding(),
			});
		}
	}, []);

	return (
		<div className="relative h-dvh w-full">
			<MapView
				ref={mapRef}
				className="h-full w-full"
				center={OSLO_CENTER}
				zoom={OSLO_ZOOM}
			>
				{firms.map((firm) => (
					<FirmMarker
						key={firm.id}
						firm={firm}
						isSelected={selectedFirm?.id === firm.id}
						onClick={handleSelect}
					/>
				))}

				{selectedFirm &&
					results.map((result, i) => (
						<ShawarmaMarker
							key={result.place.id}
							result={result}
							rank={i + 1}
						/>
					))}
			</MapView>

			<SearchCommand
				firms={firms}
				selectedFirm={selectedFirm}
				onSelect={handleSelect}
			/>

			{selectedFirm && (
				<ResultsPanel
					firm={selectedFirm}
					results={results}
					onClear={handleClear}
					onResultClick={handleResultClick}
				/>
			)}
		</div>
	);
}
