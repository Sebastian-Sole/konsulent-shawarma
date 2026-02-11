import { defineField, defineType } from "sanity";

export const jobListing = defineType({
	name: "jobListing",
	title: "Job Listing",
	type: "document",
	fields: [
		defineField({
			name: "companyName",
			title: "Company Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "jobTitle",
			title: "Job Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "listingUrl",
			title: "Listing URL",
			type: "url",
		}),
		defineField({
			name: "companyLogo",
			title: "Company Logo",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "postedDate",
			title: "Posted Date",
			type: "date",
			initialValue: () => new Date().toISOString().split("T")[0],
		}),
		defineField({
			name: "isActive",
			title: "Active",
			type: "boolean",
			initialValue: true,
		}),
	],
	preview: {
		select: {
			title: "jobTitle",
			subtitle: "companyName",
			media: "companyLogo",
		},
	},
});
