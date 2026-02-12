import { ExternalLink, Footprints } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { NearestResult } from "@/lib/geo";
import { getPlaceCategory } from "@/lib/cuisine-categories";
import { cn } from "@/lib/utils";

type ShawarmaResultCardProps = {
	result: NearestResult;
	rank: number;
	onClick?: () => void;
};

export function ShawarmaResultCard({
	result,
	rank,
	onClick,
}: ShawarmaResultCardProps) {
	const { place, distanceMeters, walkingMinutes, googleMapsUrl } = result;
	const cat = getPlaceCategory(place.cuisines);

	return (
		<div
			className="flex gap-3 rounded-lg border border-border/50 bg-white/80 p-3 backdrop-blur-sm cursor-pointer transition-colors hover:bg-white/95 active:bg-white"
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") onClick?.();
			}}
			role="button"
			tabIndex={0}
		>
			<div
				className={cn(
					"flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold",
					cat.border,
					cat.color,
					cat.text,
				)}
			>
				{rank}
			</div>
			<div className="min-w-0 flex-1">
				<p className="font-semibold text-slate-900 truncate">{place.name}</p>
				<p className="text-xs text-slate-500 truncate">{place.address}</p>
				<div className="mt-1.5 flex flex-wrap items-center gap-1.5">
					<Badge variant="secondary" className="text-xs">
						{distanceMeters < 1000
							? `${Math.round(distanceMeters)} m`
							: `${(distanceMeters / 1000).toFixed(1)} km`}
					</Badge>
					<Badge variant="secondary" className="text-xs">
						<Footprints className="mr-1 size-3" />~{walkingMinutes} min
					</Badge>
					<a
						href={googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="ml-auto flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
						onClick={(e) => e.stopPropagation()}
					>
						Google Maps
						<ExternalLink className="size-3" />
					</a>
				</div>
			</div>
		</div>
	);
}
