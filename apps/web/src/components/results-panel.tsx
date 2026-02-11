import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import type { Firm } from "@/data/firms";
import type { NearestResult } from "@/lib/geo";
import { cn } from "@/lib/utils";
import { ShawarmaResultCard } from "./shawarma-result-card";

type ResultsPanelProps = {
	firm: Firm;
	results: NearestResult[];
	onClear: () => void;
};

export function ResultsPanel({ firm, results, onClear }: ResultsPanelProps) {
	return (
		<div
			className={cn(
				"absolute z-10 bg-white/90 backdrop-blur-md shadow-2xl border border-border/50",
				// Desktop: right side panel
				"right-0 top-0 h-full w-[360px] hidden md:flex flex-col",
				// Override for mobile: bottom sheet
				"max-md:flex max-md:flex-col max-md:right-0 max-md:bottom-0 max-md:left-0 max-md:top-auto max-md:h-[45vh] max-md:w-full max-md:rounded-t-2xl max-md:block",
			)}
		>
			<div className="flex items-center justify-between p-4 pb-2">
				<div className="min-w-0 flex-1">
					<h2 className="text-lg font-bold text-slate-900 truncate">
						{firm.name}
					</h2>
					<p className="text-xs text-slate-500 truncate">{firm.address}</p>
				</div>
				<Button
					variant="ghost"
					size="icon"
					onClick={onClear}
					className="shrink-0 ml-2 text-slate-700"
					aria-label="Lukk"
				>
					<X className="size-4" />
				</Button>
			</div>
			<Separator />
			<div className="px-4 pt-2 pb-1">
				<p className="text-sm font-medium text-slate-700">
					Nærmeste shawarma-steder
				</p>
			</div>
			<ScrollArea className="flex-1 px-4 pb-4">
				<div className="flex flex-col gap-2 pt-1">
					{results.map((result, i) => (
						<ShawarmaResultCard
							key={result.place.id}
							result={result}
							rank={i + 1}
						/>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
