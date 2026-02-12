import { Clock } from "lucide-react";
import { isOpenNow, getTodayHours } from "@/lib/opening-hours";
import { cn } from "@/lib/utils";

type OpeningHoursDisplayProps = {
	openingHours: string | undefined;
	compact?: boolean;
};

export function OpeningHoursDisplay({
	openingHours,
	compact,
}: OpeningHoursDisplayProps) {
	if (!openingHours) {
		return (
			<span className="inline-flex items-center gap-1 text-xs text-slate-400 whitespace-nowrap">
				<Clock className="size-3 shrink-0" />
				Ukjent åpning
			</span>
		);
	}

	const open = isOpenNow(openingHours);
	const todayHours = getTodayHours(openingHours);

	if (open === null && !todayHours) {
		return (
			<span className="inline-flex items-center gap-1 text-xs text-slate-400 whitespace-nowrap">
				<Clock className="size-3 shrink-0" />
				Ukjent åpning
			</span>
		);
	}

	if (compact) {
		const statusLabel = open === true ? "Åpent" : open === false ? "Stengt" : null;
		const hoursLabel = todayHours && todayHours !== "Stengt" ? todayHours : null;

		return (
			<span
				className={cn(
					"inline-flex items-center gap-1 text-xs font-medium whitespace-nowrap",
					open === true && "text-emerald-600",
					open === false && "text-red-500",
					open === null && "text-slate-400",
				)}
			>
				<Clock className="size-3 shrink-0" />
				{statusLabel}
				{statusLabel && hoursLabel && (
					<span className="text-slate-500 font-normal">{hoursLabel}</span>
				)}
				{!statusLabel && hoursLabel && hoursLabel}
			</span>
		);
	}

	return (
		<div className="flex items-center gap-1.5 text-xs">
			<Clock className="size-3 shrink-0 text-slate-400" />
			{open !== null && (
				<span
					className={cn(
						"font-medium",
						open ? "text-emerald-600" : "text-red-500",
					)}
				>
					{open ? "Åpent" : "Stengt"}
				</span>
			)}
			{todayHours && todayHours !== "Stengt" && (
				<span className="text-slate-500">{todayHours}</span>
			)}
		</div>
	);
}
