import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import appCss from "../styles.css?url";

const siteUrl = "https://konsulentshawarma.no";
const siteTitle = "Konsulent Shawarma";
const siteDescription =
	"Finn den beste shawarmaen eller spisestedet nær kontoret ditt. Konsulent Shawarma hjelper konsulenter i Oslo med å finne nærmeste spisestedet på kartet, og ledige stillinger.";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: siteTitle },
			{ name: "description", content: siteDescription },
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: siteUrl },
			{ property: "og:title", content: siteTitle },
			{ property: "og:description", content: siteDescription },
			{ property: "og:site_name", content: "Konsulent Shawarma" },
			{ property: "og:locale", content: "nb_NO" },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:title", content: siteTitle },
			{ name: "twitter:description", content: siteDescription },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cookie&display=swap",
			},
			{ rel: "canonical", href: siteUrl },
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebApplication",
					name: "Konsulent Shawarma",
					url: siteUrl,
					description: siteDescription,
					applicationCategory: "FoodService",
					operatingSystem: "All",
					inLanguage: "nb-NO",
					creator: {
						"@type": "Organization",
						name: "Sole Innovations",
						url: "https://github.com/Sebastian-Sole",
					},
				}),
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="no" className="dark">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Analytics />
				<Scripts />
			</body>
		</html>
	);
}
