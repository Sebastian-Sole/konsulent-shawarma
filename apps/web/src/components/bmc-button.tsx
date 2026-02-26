import { useEffect } from "react";
import { cn } from "@/lib/utils";

type BmcButtonProps = {
	panelOpen?: boolean;
	className?: string;
};

export function BmcButton({ panelOpen, className }: BmcButtonProps) {
	useEffect(() => {
		if (document.querySelector('link[href*="family=Cookie"]')) return;
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "https://fonts.googleapis.com/css2?family=Cookie&display=swap";
		document.head.appendChild(link);
	}, []);

	return (
		<a
			href="https://buymeacoffee.com/sebastiansole"
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"absolute top-4 right-4 z-10 hidden xs:flex items-center gap-2 rounded-lg bg-[#BD5FFF] p-2.5 sm:px-4 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110",
				panelOpen && "md:right-[376px]",
				className,
			)}
			style={{ fontFamily: "Cookie, cursive" }}
		>
			<img
				src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
				alt="Buy me a coffee"
				className="h-5 w-5"
			/>
			<span className="hidden xs:inline text-base">Buy me a coffee</span>
		</a>
	);
}
