import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://xoropay.com/",
			lastModified: new Date("2025-05-18"), // replace with actual homepage update date
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://dashboard.xoropay.com/",
			lastModified: new Date("2025-08-18"), // replace with actual dashboard release/update date
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://docs.xoropay.com/",
			lastModified: new Date("2025-05-18"), // replace with docs last update date
			changeFrequency: "weekly",
			priority: 0.7,
		},
	];
}
