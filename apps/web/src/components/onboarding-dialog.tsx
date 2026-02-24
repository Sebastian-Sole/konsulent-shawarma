import { MapPin, Search, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

const steps = [
	{
		icon: Search,
		title: "Finn et konsulentselskap",
		description: "Søk eller klikk på en blå markør på kartet",
	},
	{
		icon: MapPin,
		title: "Utforsk restauranter",
		description: "Se nærmeste restauranter og filtrer på avstand, rating og mer",
	},
	{
		icon: UtensilsCrossed,
		title: "Velg din favoritt",
		description: "Klikk på en restaurant for detaljer og veibeskrivelse",
	},
];

export function OnboardingDialog({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	function handleDismiss() {
		onOpenChange(false);
	}

	return (
		<Dialog open={open} onOpenChange={handleDismiss}>
			<DialogContent showCloseButton={false}>
				<DialogHeader>
					<DialogTitle className="text-center text-xl">
						Velkommen til Konsulent-Shawarma!
					</DialogTitle>
					<DialogDescription className="text-center">
						Finn de beste restaurantene nær kontoret ditt i 3 enkle steg
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4 py-2">
					{steps.map((step, i) => (
						<div key={step.title} className="flex items-start gap-3">
							<div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
								<step.icon className="size-4" />
							</div>
							<div>
								<p className="font-medium leading-none">
									<span className="text-muted-foreground mr-1.5 text-sm">
										{i + 1}.
									</span>
									{step.title}
								</p>
								<p className="text-muted-foreground mt-1 text-sm">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<DialogFooter>
					<Button className="w-full sm:w-auto" onClick={handleDismiss}>
						Forstått!
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
