import { createFileRoute } from "@tanstack/react-router";
import { Check, Palette } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import { BmcButton } from "@/components/bmc-button";
import { OnboardingDialog } from "@/components/onboarding-dialog";
import { FirmMarker } from "@/components/firm-marker";
import { ResultsPanel } from "@/components/results-panel";
import { SearchCommand } from "@/components/search-command";
import { ShawarmaMarker } from "@/components/shawarma-marker";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { type MapRef, Map as MapView, MapRoute } from "@/components/ui/map";
import { useRoute } from "@/hooks/use-route";
import type { Firm } from "@/data/firms";
import { firms } from "@/data/firms";
import type { NearestResult } from "@/lib/geo";
import { DEFAULT_CATEGORIES } from "@/lib/cuisine-categories";
import { useNearestShawarma } from "@/hooks/use-nearest-shawarma";
import { cn } from "@/lib/utils";

const MAP_THEMES = [
	{
		id: "dark",
		label: "Mørk",
		group: "CartoDB",
		url: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
		swatch: "bg-[#1a1a2e]",
	},
	{
		id: "light",
		label: "Lys",
		group: "CartoDB",
		url: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
		swatch: "bg-[#e8e8e8]",
	},
	{
		id: "voyager",
		label: "Farger",
		group: "CartoDB",
		url: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
		swatch: "bg-[#f2efe9]",
	},
	{
		id: "liberty",
		label: "Liberty",
		group: "OpenFreeMap",
		url: "https://tiles.openfreemap.org/styles/liberty",
		swatch: "bg-[#f0eee6]",
	},
	{
		id: "bright",
		label: "Bright",
		group: "OpenFreeMap",
		url: "https://tiles.openfreemap.org/styles/bright",
		swatch: "bg-[#f5f3ed]",
	},
	{
		id: "colorful",
		label: "Colorful",
		group: "VersaTiles",
		url: "https://tiles.versatiles.org/assets/styles/colorful/style.json",
		swatch: "bg-[#f5ecd7]",
	},
	{
		id: "neutrino",
		label: "Neutrino",
		group: "VersaTiles",
		url: "https://tiles.versatiles.org/assets/styles/neutrino/style.json",
		swatch: "bg-[#d5d0e0]",
	},
] as const;

type MapThemeId = (typeof MAP_THEMES)[number]["id"];

const OSLO_CENTER: [number, number] = [10.7522, 59.9139];
const OSLO_ZOOM = 13;
const SELECTED_ZOOM = 15;

const MD_BREAKPOINT = 768;

const PANEL_WIDTH = 360;

function getPanelPadding() {
	if (typeof window === "undefined") return undefined;
	if (window.innerWidth >= MD_BREAKPOINT) {
		// Desktop: 360px panel on the right
		return { right: PANEL_WIDTH + 20 };
	}
	// Mobile: bottom sheet is 45vh
	return { bottom: window.innerHeight * 0.45 + 20 };
}

export const Route = createFileRoute("/")({
	component: App,
	ssr: false,
});

function App() {
	const [showOnboarding, setShowOnboarding] = useState(
		() => localStorage.getItem("onboarding-seen") !== "true",
	);
	const mapRef = useRef<MapRef>(null);
	const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
	const [enabledCategories, setEnabledCategories] = useState<Set<string>>(
		() => new Set(DEFAULT_CATEGORIES),
	);
	const [resultCount, setResultCount] = useState(10);
	const [maxDistance, setMaxDistance] = useState<number | undefined>(undefined);
	const [minRating, setMinRating] = useState<number | undefined>(undefined);
	const [openNow, setOpenNow] = useState(false);
	const [focusedPlaceId, setFocusedPlaceId] = useState<string | null>(null);
	const [mapThemeId, setMapThemeId] = useState<MapThemeId>("dark");

	const selectedMapTheme = MAP_THEMES.find((t) => t.id === mapThemeId)!;

	const filterOptions = useMemo(
		() => ({
			count: resultCount,
			maxDistanceMeters: maxDistance,
			enabledCategories,
			minRating,
			openNow: openNow || undefined,
		}),
		[resultCount, maxDistance, enabledCategories, minRating, openNow],
	);

	const results = useNearestShawarma(selectedFirm, filterOptions);

	const focusedResult = useMemo(
		() => results.find((r) => r.place.id === focusedPlaceId) ?? null,
		[results, focusedPlaceId],
	);

	const { route } = useRoute(
		selectedFirm,
		focusedResult
			? { longitude: focusedResult.place.longitude, latitude: focusedResult.place.latitude }
			: null,
	);

	const handleToggleCategory = useCallback((category: string) => {
		setEnabledCategories((prev) => {
			const next = new Set(prev);
			if (next.has(category)) {
				next.delete(category);
			} else {
				next.add(category);
			}
			return next;
		});
	}, []);

	const handleSelect = useCallback((firm: Firm | null) => {
		setSelectedFirm(firm);
		setFocusedPlaceId(null);
		if (firm && mapRef.current) {
			mapRef.current.flyTo({
				center: [firm.longitude, firm.latitude],
				zoom: SELECTED_ZOOM,
				duration: 1200,
				padding: getPanelPadding(),
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
		setFocusedPlaceId(null);
		if (mapRef.current) {
			mapRef.current.flyTo({
				center: OSLO_CENTER,
				zoom: OSLO_ZOOM,
				duration: 1200,
			});
		}
	}, []);

	const handleFocusPlace = useCallback(
		(result: NearestResult) => {
			setFocusedPlaceId((prev) =>
				prev === result.place.id ? null : result.place.id,
			);
			if (mapRef.current) {
				mapRef.current.flyTo({
					center: [result.place.longitude, result.place.latitude],
					zoom: 16,
					duration: 800,
					padding: getPanelPadding(),
				});
			}
		},
		[],
	);

	return (
		<div className="relative h-dvh w-full">
			<MapView
				ref={mapRef}
				className="h-full w-full"
				center={OSLO_CENTER}
				zoom={OSLO_ZOOM}
				styles={{ dark: selectedMapTheme.url, light: selectedMapTheme.url }}
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
							focused={focusedPlaceId === result.place.id}
							onFocus={() => handleFocusPlace(result)}
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

			<SearchCommand
				firms={firms}
				selectedFirm={selectedFirm}
				onSelect={handleSelect}
			/>

			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="absolute bottom-12 left-2 xs:bottom-12 xs:left-2 z-10 size-10 rounded-full bg-background/80! hover:bg-background/70! backdrop-blur-md shadow-lg border border-border/30"
						aria-label="Velg karttema"
					>
						<Palette className="size-[18px]" />
					</Button>
				</PopoverTrigger>
				<PopoverContent
					side="top"
					align="start"
					className="w-auto min-w-[180px] max-h-[60vh] overflow-y-auto p-2"
				>
					{(["CartoDB", "OpenFreeMap", "VersaTiles"] as const).map((group) => (
						<div key={group}>
							<p className="px-2 pt-1.5 pb-1 text-xs font-medium text-muted-foreground">
								{group}
							</p>
							{MAP_THEMES.filter((t) => t.group === group).map(
								(theme) => (
									<button
										key={theme.id}
										type="button"
										onClick={() => setMapThemeId(theme.id)}
										className={cn(
											"flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent",
											mapThemeId === theme.id && "bg-accent",
										)}
									>
										<span
											className={cn(
												"size-4 shrink-0 rounded-full border border-border/50",
												theme.swatch,
											)}
										/>
										<span className="flex-1 text-left">
											{theme.label}
										</span>
										{mapThemeId === theme.id && (
											<Check className="size-3.5 text-foreground" />
										)}
									</button>
								),
							)}
						</div>
					))}
				</PopoverContent>
			</Popover>

			{selectedFirm && (
				<ResultsPanel
					firm={selectedFirm}
					results={results}
					onClear={handleClear}
					onResultClick={handleFocusPlace}
					enabledCategories={enabledCategories}
					onToggleCategory={handleToggleCategory}
					resultCount={resultCount}
					onResultCountChange={setResultCount}
					maxDistance={maxDistance}
					onMaxDistanceChange={setMaxDistance}
					minRating={minRating}
					onMinRatingChange={setMinRating}
					openNow={openNow}
					onOpenNowChange={setOpenNow}
				/>
			)}

			<OnboardingDialog open={showOnboarding} onOpenChange={setShowOnboarding} />

			<BmcButton panelOpen={!!selectedFirm} />

			<a
				href="https://github.com/Sebastian-Sole"
				target="_blank"
				rel="noopener noreferrer"
				className="absolute bottom-10 right-2 xs:bottom-2 xs:right-auto xs:left-2 z-[5] w-fit rounded-md bg-background/80 px-2.5 py-1 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
			>
				Powered by Sole Innovations
			</a>
		</div>
	);
}
