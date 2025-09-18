"use client";

import { useState } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		question:
			"What makes this platform different from other payment processors?",
		answer:
			"Unlike single processors, our system integrates multiple providers with auto-switching during downtime, ensuring you never miss a payment.",
	},
	{
		question:
			"Can I accept payments from both local and international customers?",
		answer:
			"Yes. You can accept payments via cards, bank transfers, and crypto (BTC, ETH, USDT) with instant conversion to Naira for your account.",
	},
	{
		question: "Do you provide APIs for developers?",
		answer:
			"Absolutely. We provide robust APIs with webhooks, retry mechanisms, payouts, and analytics endpoints so developers can easily build on our infrastructure.",
	},
	{
		question: "How do bulk payouts work?",
		answer:
			"Merchants can schedule single or recurring payouts to multiple recipients at once, with receipts sent via email (free) or SMS/WhatsApp (premium).",
	},
	{
		question: "What types of payment links can I generate?",
		answer:
			"You can create one-time or recurring links, with static or dynamic amounts. Each link can have usage limits, expiry dates, and multiple payment options.",
	},
	{
		question: "What happens if one payment provider is down?",
		answer:
			"Our platform automatically switches to another integrated provider, so your transactions continue without interruption.",
	},
	{
		question: "How do I track transactions?",
		answer:
			"All transactions are visible in your merchant dashboard with real-time analytics, downloadable reports, and reconciliation tools.",
	},
	// {
	// 	question: "Can I automate payouts to employees or contractors?",
	// 	answer:
	// 		"Yes. You can set payouts to run daily, weekly, monthly, quarterly, or yearly—making salary and vendor management seamless.",
	// },
	{
		question: "Is customer support available?",
		answer:
			"Yes. We provide 24/7 support via email, chat, and phone to ensure smooth payment operations for your business.",
	},
	// {
	// 	question: "How secure is the platform?",
	// 	answer:
	// 		"We use bank-grade encryption, PCI-DSS compliance, fraud monitoring, and two-factor authentication to keep your payments safe.",
	// },
];

function ChevronDownIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m6 9 6 6 6-6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default function FAQSection() {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	return (
		<div className="w-full flex justify-center items-start">
			<div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
				{/* Left Column - Header */}
				<div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
					<div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
						Frequently Asked Questions
					</div>
					<div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
						Got questions?
						<br className="hidden md:block" />
						We’ve answered the most important ones below.
					</div>
				</div>

				{/* Right Column - FAQ Items */}
				<div className="w-full lg:flex-1 flex flex-col justify-center items-center">
					<div className="w-full flex flex-col">
						{faqData.map((item, index) => {
							const isOpen = openItems.includes(index);

							return (
								<div
									key={index}
									className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden"
								>
									<button
										onClick={() => toggleItem(index)}
										className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
										aria-expanded={isOpen}
									>
										<div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
											{item.question}
										</div>
										<div className="flex justify-center items-center">
											<ChevronDownIcon
												className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
													isOpen ? "rotate-180" : "rotate-0"
												}`}
											/>
										</div>
									</button>

									<div
										className={`overflow-hidden transition-all duration-300 ease-in-out ${
											isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
										}`}
									>
										<div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
											{item.answer}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
