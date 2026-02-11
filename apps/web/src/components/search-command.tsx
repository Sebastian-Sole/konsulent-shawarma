import { Link } from "@tanstack/react-router";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import type { Firm } from "@/data/firms";
import { cn } from "@/lib/utils";

type SearchCommandProps = {
	firms: Firm[];
	selectedFirm: Firm | null;
	onSelect: (firm: Firm | null) => void;
};

export function SearchCommand({
	firms,
	selectedFirm,
	onSelect,
}: SearchCommandProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
			<h1 className="text-lg font-bold text-white drop-shadow-lg">
				Konsulent Shawarma
			</h1>
			<Link
				to="/jobs"
				className="text-sm font-medium text-white drop-shadow-lg hover:underline"
			>
				Ledige stillinger →
			</Link>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[280px] sm:w-[320px] justify-between bg-white/95 backdrop-blur-sm shadow-lg border-border/50 hover:bg-white"
					>
						<div className="flex items-center gap-2 truncate">
							<Search className="size-4 shrink-0 text-muted-foreground" />
							<span className={cn(!selectedFirm && "text-muted-foreground")}>
								{selectedFirm?.name ?? "Søk etter konsulentselskap..."}
							</span>
						</div>
						<ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[280px] sm:w-[320px] p-0" align="start">
					<Command>
						<CommandInput placeholder="Søk etter konsulentselskap..." />
						<CommandList>
							<CommandEmpty>Ingen treff.</CommandEmpty>
							<CommandGroup>
								{firms.map((firm) => (
									<CommandItem
										key={firm.id}
										value={firm.name}
										onSelect={() => {
											onSelect(selectedFirm?.id === firm.id ? null : firm);
											setOpen(false);
										}}
									>
										<Check
											className={cn(
												"mr-2 size-4",
												selectedFirm?.id === firm.id
													? "opacity-100"
													: "opacity-0",
											)}
										/>
										{firm.name}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
