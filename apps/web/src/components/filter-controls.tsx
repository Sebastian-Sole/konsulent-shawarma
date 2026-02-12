import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
	CUISINE_CATEGORIES,
	CATEGORY_KEYS,
} from "@/lib/cuisine-categories";
import { cn } from "@/lib/utils";

const RESULT_COUNT_OPTIONS = [3, 5, 10, 15, 20];
const DISTANCE_MAX = 5000;
const DISTANCE_MIN = 500;
const DISTANCE_STEP = 250;

function formatDistance(meters: number | undefined): string {
	if (meters == null) return "Ingen grense";
	if (meters < 1000) return `${meters} m`;
	return `${(meters / 1000).toFixed(1)} km`;
}

type FilterControlsProps = {
	enabledCategories: Set<string>;
	onToggleCategory: (category: string) => void;
	resultCount: number;
	onResultCountChange: (count: number) => void;
	maxDistance: number | undefined;
	onMaxDistanceChange: (distance: number | undefined) => void;
};

export function FilterControls({
	enabledCategories,
	onToggleCategory,
	resultCount,
	onResultCountChange,
	maxDistance,
	onMaxDistanceChange,
}: FilterControlsProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="shrink-0">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
			>
				<span>Filtre</span>
				<ChevronDown
					className={cn(
						"size-4 transition-transform",
						open && "rotate-180",
					)}
				/>
			</button>

			{open && (
				<div className="flex flex-col gap-3 px-4 pb-3">
					{/* Result count */}
					<div className="flex items-center gap-2">
						<label className="text-xs font-medium text-slate-600 whitespace-nowrap">
							Antall resultater
						</label>
						<Select
							value={String(resultCount)}
							onValueChange={(v) =>
								onResultCountChange(Number(v))
							}
						>
							<SelectTrigger size="sm">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{RESULT_COUNT_OPTIONS.map((n) => (
									<SelectItem key={n} value={String(n)}>
										{n}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Max distance */}
					<div className="flex items-center gap-2">
						<label className="text-xs font-medium text-slate-600 whitespace-nowrap">
							Avstand
						</label>
						<Slider
							min={DISTANCE_MIN}
							max={DISTANCE_MAX}
							step={DISTANCE_STEP}
							value={[maxDistance ?? DISTANCE_MAX]}
							onValueChange={([v]) =>
								onMaxDistanceChange(
									v >= DISTANCE_MAX ? undefined : v,
								)
							}
							className="flex-1"
						/>
						<span className="text-xs text-slate-500 tabular-nums whitespace-nowrap min-w-14 text-right">
							{formatDistance(maxDistance)}
						</span>
					</div>

					{/* Cuisine category chips */}
					<div className="flex flex-wrap gap-1.5">
						{CATEGORY_KEYS.map((key) => {
							const cat = CUISINE_CATEGORIES[key];
							const active = enabledCategories.has(key);
							return (
								<button
									key={key}
									type="button"
									onClick={() => onToggleCategory(key)}
									className={cn(
										"rounded-full border px-3 py-1.5 text-xs font-medium transition-colors min-h-[34px]",
										active
											? `${cat.border} ${cat.color} ${cat.text}`
											: "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
									)}
								>
									{cat.label}
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
