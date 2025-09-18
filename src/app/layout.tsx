import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	preload: true,
});

const manrope = Inter({
	subsets: ["latin"],
	variable: "--font-manrope",
	display: "swap",
	preload: true,
});

const jetbrains = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
	display: "swap",
	preload: true,
});

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	variable: "--font-instrument-serif",
	weight: ["400"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "XoroPay",
	description: "Seamless Payments, Zero Downtime.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${instrumentSerif.variable} ${manrope.variable} ${jetbrains.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
