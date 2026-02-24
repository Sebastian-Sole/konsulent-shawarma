import { MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

const updates = [
	{
		icon: MapPin,
		title: "Hele Norge er dekket",
		description:
			"Vi har utvidet fra utvalgte byer til hele landet - finn restauranter uansett hvor kontoret ditt ligger",
	},
	{
		icon: Sparkles,
		title: "Flere restauranter enn noensinne",
		description:
			"Hundrevis av nye restauranter er lagt til med oppdatert informasjon - og vi ruller ut med reviews og åpningstider fortløpende",
	},
];

export function UpdateDialog({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	return (
		<Dialog open={open} onOpenChange={() => onOpenChange(false)}>
			<DialogContent showCloseButton={false}>
				<DialogHeader>
					<DialogTitle className="text-center text-xl">
					🎉 Nyhet! Hele Norge er her! 🎉
					</DialogTitle>
					<DialogDescription className="text-center">
						Konsulent Shawarma dekker nå hele landet
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4 py-2">
					{updates.map((item) => (
						<div key={item.title} className="flex items-start gap-3">
							<div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
								<item.icon className="size-4" />
							</div>
							<div>
								<p className="font-medium leading-none">{item.title}</p>
								<p className="text-muted-foreground mt-1 text-sm">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<DialogFooter>
					<Button
						className="w-full sm:w-auto"
						onClick={() => onOpenChange(false)}
					>
						Flott!
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
