import { MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map";
import type { Firm } from "@/data/firms";
import { cn } from "@/lib/utils";

type FirmMarkerProps = {
	firm: Firm;
	isSelected: boolean;
	onClick: (firm: Firm) => void;
};

export function FirmMarker({ firm, isSelected, onClick }: FirmMarkerProps) {
	return (
		<MapMarker
			longitude={firm.longitude}
			latitude={firm.latitude}
			onClick={() => onClick(firm)}
		>
			<MarkerContent>
				<div
					className={cn(
						"rounded-full border-2 border-white shadow-lg transition-all duration-200",
						isSelected
							? "size-5 bg-green-500 ring-4 ring-green-400/40 scale-125"
							: "size-3.5 bg-blue-500 hover:scale-110",
					)}
				/>
			</MarkerContent>
			<MarkerTooltip>
				<div className="rounded-md bg-white px-2.5 py-1.5 text-sm font-medium text-slate-900 shadow-md">
					{firm.name}
				</div>
			</MarkerTooltip>
		</MapMarker>
	);
}
