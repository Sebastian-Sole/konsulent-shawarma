export type JobListing = {
	_id: string;
	companyName: string;
	jobTitle: string;
	description?: string;
	listingUrl?: string;
	companyLogo?: {
		asset: {
			url: string;
		};
	};
	postedDate?: string;
	isActive: boolean;
};
