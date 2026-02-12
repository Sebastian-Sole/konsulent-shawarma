import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import type { JobListing } from "@/data/job-listing";
import { getSanityClient } from "@/lib/sanity";

const CONTACT_EMAIL = "sebastian@soleinnovations.com";

const jobListingsQuery = `*[_type == "jobListing" && isActive == true] | order(postedDate desc) {
  _id,
  companyName,
  jobTitle,
  description,
  listingUrl,
  companyLogo { asset-> { url } },
  postedDate,
  isActive
}`;

export const Route = createFileRoute("/jobs")({
	loader: () => getSanityClient().fetch<JobListing[]>(jobListingsQuery),
	component: JobsPage,
	ssr: false,
});

function JobsPage() {
	const jobs = Route.useLoaderData();

	return (
		<div className="min-h-dvh bg-background text-foreground">
			<header className="border-b border-border/50 bg-card/95 backdrop-blur-sm">
				<div className="flex items-center px-4 py-4">
					<h1 className="text-xl font-bold">Ledige stillinger</h1>
				</div>
			</header>

			<main className="mx-auto max-w-3xl px-4 py-6">
				<Link
					to="/"
					className="mb-4 inline-block text-sm text-muted-foreground hover:text-foreground"
				>
					← Tilbake til kartet
				</Link>
				{jobs.length === 0 ? (
					<PostJobCard />
				) : (
					<>
						<div className="mb-6 flex items-center justify-between">
							<p className="text-sm text-muted-foreground">
								{jobs.length} {jobs.length === 1 ? "stilling" : "stillinger"}
							</p>
							<CopyEmailButton />
						</div>
						<div className="flex flex-col gap-4">
							{jobs.map((job) => (
								<article
									key={job._id}
									className="rounded-lg border border-border bg-card p-6 shadow-sm"
								>
									<div className="flex items-start gap-4">
										{job.companyLogo?.asset?.url && (
											<img
												src={job.companyLogo.asset.url}
												alt={`${job.companyName} logo`}
												className="size-12 rounded-md object-contain"
											/>
										)}
										<div className="flex-1">
											<h2 className="text-lg font-semibold">
												{job.jobTitle}
											</h2>
											<p className="text-sm text-muted-foreground">
												{job.companyName}
											</p>
											{job.postedDate && (
												<p className="mt-1 text-xs text-muted-foreground">
													{new Date(job.postedDate).toLocaleDateString(
														"nb-NO",
													)}
												</p>
											)}
										</div>
									</div>
									{job.description && (
										<JobDescription text={job.description} />
									)}
									{job.listingUrl && (
										<a
											href={job.listingUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
										>
											Se fullstendig utlysning →
										</a>

									)}
								</article>
							))}
						</div>
					</>
				)}
			</main>
		</div>
	);
}

function CopyEmailButton() {
	const [copied, setCopied] = useState(false);

	const handleCopy = useCallback(() => {
		navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}, []);

	return (
		<button
			type="button"
			onClick={handleCopy}
			className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
		>
			{copied ? "Epost Kopiert!" : "Ta kontakt"}
		</button>
	);
}
function PostJobCard() {
	return (
		<div className="rounded-lg border border-border bg-card p-8 text-center shadow-sm">
			<h2 className="text-lg font-semibold">Ingen stillinger ennå</h2>
			<p className="mt-2 text-sm text-muted-foreground">
				Vil du nå tusenvis av <i><b>sultne</b></i> konsulenter? Legg ut en stilling her.
			</p>
			<p className="mt-1 text-xs text-muted-foreground">
				Ta kontakt på{" "}
				<span className="font-medium text-foreground">{CONTACT_EMAIL}</span>
			</p>
			<div className="mt-4">
				<CopyEmailButton />
			</div>
		</div>
	);
}

function JobDescription({ text }: { text: string }) {
	const [expanded, setExpanded] = useState(false);
	const isLong = text.length > 200;

	return (
		<div className="mt-3">
			<p
				className={`text-sm text-foreground/80 ${!expanded && isLong ? "line-clamp-5" : ""}`}
			>
				{text}
			</p>
			{isLong && (
				<button
					type="button"
					onClick={() => setExpanded(!expanded)}
					className="mt-1 text-sm font-medium text-primary hover:underline"
				>
					{expanded ? "Vis mindre" : "Vis mer"}
				</button>
			)}
		</div>
	);
}
