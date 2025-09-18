import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
				port: "",
				pathname: "/**", // allow all files from Vercel Blob Storage
			},
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
				port: "",
				pathname: "/**", // allow all files from jsDelivr CDN
			},
		],
	},
};

export default nextConfig;
