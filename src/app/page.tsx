"use client";

import type React from "react";

import DocumentationSection from "@/components/documentation-section";
import NavBar from "@/components/nav-bar";
import PricingSection from "@/components/pricing-section";
import { Button } from "@/components/ui/button";
import CTASection from "../components/cta-section";
import EffortlessIntegration from "../components/effortless-integration-updated";
import FAQSection from "../components/faq-section";
import FooterSection from "../components/footer-section";
import NumbersThatSpeak from "../components/numbers-that-speak";
import SmartSimpleBrilliant from "../components/smart-simple-brilliant";
import YourWorkInSync from "../components/your-work-in-sync";

// Reusable Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
	return (
		<div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
			<div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
				{icon}
			</div>
			<div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
				{text}
			</div>
		</div>
	);
}

export default function LandingPage() {
	// const getDashboardContent = () => {
	// 	switch (activeCard) {
	// 		case 0:
	// 			return (
	// 				<div className="text-[#828387] text-sm">
	// 					Customer Subscription Status and Details
	// 				</div>
	// 			);
	// 		case 1:
	// 			return (
	// 				<div className="text-[#828387] text-sm">
	// 					Analytics Dashboard - Real-time Insights
	// 				</div>
	// 			);
	// 		case 2:
	// 			return (
	// 				<div className="text-[#828387] text-sm">
	// 					Data Visualization - Charts and Metrics
	// 				</div>
	// 			);
	// 		default:
	// 			return (
	// 				<div className="text-[#828387] text-sm">
	// 					Customer Subscription Status and Details
	// 				</div>
	// 			);
	// 	}
	// };

	return (
		<div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
			<div className="relative flex flex-col justify-start items-center w-full">
				{/* Main container with proper margins */}
				<div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
					{/* Left vertical line */}
					<div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

					{/* Right vertical line */}
					<div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

					<div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
						{/* Navigation */}
						<NavBar />

						{/* Hero Section */}
						<div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[230px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
							<div className="w-full flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
								<div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5">
									<div className="w-full text-center text-[#37322F] text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-serif">
										Africa&apos;s Payment OS
									</div>
									<p className="w-full text-center text-[#37322fcc] text-xs sm:text-lg md:text-xl lg:leading-7 font-sans font-medium">
										Smart payments without downtime. <br /> One platform, All
										providers, Zero missed revenue
									</p>
								</div>
							</div>

							<Button
								variant="outline"
								className="rounded-full text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans text-white h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] mt-6 sm:mt-8 md:mt-10 lg:mt-12 hover:bg-[#37322F] hover:text-white hover:scale-105 duration-300 transition-all ease-out"
							>
								Start for free
							</Button>

							{/* <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
								<div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
									<div className="self-stretch flex-1 flex justify-start items-start">
										<div className="w-full h-full flex items-center justify-center">
											<div className="relative w-full h-full overflow-hidden">
												<div
													className={`absolute inset-0 transition-all duration-500 ease-in-out ${
														activeCard === 0
															? "opacity-100 scale-100 blur-0"
															: "opacity-0 scale-95 blur-sm"
													}`}
												>
													<Image
														src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsadsadsa.jpg-xTHS4hGwCWp2H5bTj8np6DXZUyrxX7.jpeg"
														alt="Schedules Dashboard - Customer Subscription Management"
														className="w-full h-full object-cover"
														fill
													/>
												</div>

												<div
													className={`absolute inset-0 transition-all duration-500 ease-in-out ${
														activeCard === 1
															? "opacity-100 scale-100 blur-0"
															: "opacity-0 scale-95 blur-sm"
													}`}
												>
													<Image
														src="/analytics-dashboard-with-charts-graphs-and-data-vi.jpg"
														alt="Analytics Dashboard"
														className="w-full h-full object-cover"
														fill
													/>
												</div>

												<div
													className={`absolute inset-0 transition-all duration-500 ease-in-out ${
														activeCard === 2
															? "opacity-100 scale-100 blur-0"
															: "opacity-0 scale-95 blur-sm"
													}`}
												>
													<Image
														src="/data-visualization-dashboard-with-interactive-char.jpg"
														alt="Data Visualization Dashboard"
														className="w-full h-full object-contain"
														fill
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="self-stretch border-t border-[#E0DEDB] border-b flex justify-center items-start">
								<div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
									<div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
										{Array.from({ length: 50 }).map((_, i) => (
											<div
												key={i}
												className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
											></div>
										))}
									</div>
								</div>

								<div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
									<FeatureCard
										title="Plan your schedules"
										description="Streamline customer subscriptions and billing with automated scheduling tools."
										isActive={activeCard === 0}
										progress={activeCard === 0 ? progress : 0}
										onClick={() => handleCardClick(0)}
									/>
									<FeatureCard
										title="Analytics & insights"
										description="Transform your business data into actionable insights with real-time analytics."
										isActive={activeCard === 1}
										progress={activeCard === 1 ? progress : 0}
										onClick={() => handleCardClick(1)}
									/>
									<FeatureCard
										title="Collaborate seamlessly"
										description="Keep your team aligned with shared dashboards and collaborative workflows."
										isActive={activeCard === 2}
										progress={activeCard === 2 ? progress : 0}
										onClick={() => handleCardClick(2)}
									/>
								</div>

								<div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
									<div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
										{Array.from({ length: 50 }).map((_, i) => (
											<div
												key={i}
												className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
											></div>
										))}
									</div>
								</div>
							</div> */}

							{/* Social Proof Section */}
							{/* <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
								<div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
									<div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
										<Badge
											icon={
												<svg
													width="12"
													height="10"
													viewBox="0 0 12 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="3"
														width="4"
														height="6"
														stroke="#37322F"
														strokeWidth="1"
														fill="none"
													/>
													<rect
														x="7"
														y="1"
														width="4"
														height="8"
														stroke="#37322F"
														strokeWidth="1"
														fill="none"
													/>
													<rect
														x="2"
														y="4"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="3.5"
														y="4"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="2"
														y="5.5"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="3.5"
														y="5.5"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="8"
														y="2"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="9.5"
														y="2"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="8"
														y="3.5"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="9.5"
														y="3.5"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="8"
														y="5"
														width="1"
														height="1"
														fill="#37322F"
													/>
													<rect
														x="9.5"
														y="5"
														width="1"
														height="1"
														fill="#37322F"
													/>
												</svg>
											}
											text="Social Proof"
										/>
										<div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
											Confidence backed by results
										</div>
										<div className="self-stretch text-center text-[#605A57] text-sm sm:text-base leading-6 sm:leading-7 font-sans">
											Our customers achieve more each day
											<br className="hidden sm:block" />
											because their tools are simple, powerful, and clear.
										</div>
									</div>
								</div>
								<div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
									<div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
										<div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
											{Array.from({ length: 50 }).map((_, i) => (
												<div
													key={i}
													className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
												/>
											))}
										</div>
									</div>

									<div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
										{Array.from({ length: 8 }).map((_, index) => {
											const isMobileFirstColumn = index % 2 === 0;
											// const isMobileLastColumn = index % 2 === 1;
											const isDesktopFirstColumn = index % 4 === 0;
											const isDesktopLastColumn = index % 4 === 3;
											// const isMobileBottomRow = index >= 6;
											const isDesktopTopRow = index < 4;
											const isDesktopBottomRow = index >= 4;

											return (
												<div
													key={index}
													className={`
                            h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex justify-center items-center gap-1 xs:gap-2 sm:gap-3
                            border-b border-[rgba(227,226,225,0.5)]
                            ${index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= 6 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
                            sm:border-r-[0.5px] sm:border-l-0
                            ${
															isDesktopFirstColumn
																? "md:border-l"
																: "md:border-l-[0.5px]"
														}
                            ${
															isDesktopLastColumn
																? "md:border-r"
																: "md:border-r-[0.5px]"
														}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            ${
															isDesktopBottomRow
																? "md:border-t-[0.5px] md:border-b"
																: ""
														}
                            border-[#E3E2E1]
                          `}
												>
													<div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 relative shadow-[0px_-4px_8px_rgba(255,255,255,0.64)_inset] overflow-hidden rounded-full">
														<Image
															src="/horizon-icon.svg"
															alt="Horizon"
															className="w-full h-full object-contain"
															fill
														/>
													</div>
													<div className="text-center flex justify-center flex-col text-[#37322F] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight md:leading-9 font-sans">
														Acute
													</div>
												</div>
											);
										})}
									</div>

									<div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
										<div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
											{Array.from({ length: 50 }).map((_, i) => (
												<div
													key={i}
													className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
												/>
											))}
										</div>
									</div>
								</div>
							</div> */}

							{/* Bento Grid Section */}
							<div className="w-full border-b border-t border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center mt-28">
								{/* Header Section */}
								<div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
									<div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
										<Badge
											icon={
												<svg
													width="12"
													height="12"
													viewBox="0 0 12 12"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<rect
														x="1"
														y="1"
														width="4"
														height="4"
														stroke="#37322F"
														strokeWidth="1"
														fill="none"
													/>
													<rect
														x="7"
														y="1"
														width="4"
														height="4"
														stroke="#37322F"
														strokeWidth="1"
														fill="none"
													/>
													<rect
														x="1"
														y="7"
														width="4"
														height="4"
														stroke="#37322F"
														strokeWidth="1"
														fill="none"
													/>
													<rect
														x="7"
														y="7"
														width="4"
														height="4"
														stroke="#37322F"
														strokeWidth="1"
														fill="none"
													/>
												</svg>
											}
											text="Bento grid"
										/>
										<div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
											Why businesses choose XoroPay
										</div>
										<div className="self-stretch text-center text-[#605A57] text-sm sm:text-base leading-6 sm:leading-7 font-sans">
											Built for reliability, designed for developers, trusted by
											thousands of African businesses
										</div>
									</div>
								</div>

								<div className="self-stretch flex justify-center items-start">
									<div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
										<div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
											{Array.from({ length: 200 }).map((_, i) => (
												<div
													key={i}
													className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
												/>
											))}
										</div>
									</div>

									<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
										<div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
											<div className="flex flex-col gap-2">
												<h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
													Downtime-Proof Auto-Switching
												</h3>
												<p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">
													Clean, intuitive APIs with full webhook support and
													rich docs. Integrate in hours, not weeks.
												</p>
											</div>
											<div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
												<SmartSimpleBrilliant
													width="100%"
													height="100%"
													theme="light"
													className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
												/>
											</div>
										</div>

										{/* Top Right - Your work, in sync */}
										<div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
											<div className="flex flex-col gap-2">
												<h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
													Developer-First API Experience
												</h3>
												<p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">
													Developer-friendly APIs, detailed docs, and debugging
													tools. Build fast, scale faster.
												</p>
											</div>
											<div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
												<YourWorkInSync
													width="400"
													height="250"
													theme="light"
													className="scale-60 sm:scale-75 md:scale-90"
												/>
											</div>
										</div>

										{/* Bottom Left - Effortless integration */}
										<div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
											<div className="flex flex-col gap-2">
												<h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
													All-in-One Payment Platform
												</h3>
												<p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">
													Accept payments, send payouts, and manage links or
													subscriptions—all from one unified dashboard and API.
												</p>
											</div>
											<div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
												<div className="w-full h-full flex items-center justify-center bg-transparent">
													<EffortlessIntegration
														width={400}
														height={250}
														className="max-w-full max-h-full"
													/>
												</div>
												<div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
											</div>
										</div>

										{/* Bottom Right - Numbers that speak */}
										<div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
											<div className="flex flex-col gap-2">
												<h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
													Analytics That Actually Matter
												</h3>
												<p className="text-[#605A57] text-sm md:text-base leading-relaxed font-sans">
													Track cohorts, revenue, and cashflow with intelligent
													insights. Make smarter, data-driven decisions.
												</p>
											</div>
											<div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
												<div className="absolute inset-0 flex items-center justify-center">
													<NumbersThatSpeak
														width="100%"
														height="100%"
														theme="light"
														className="w-full h-full object-contain"
													/>
												</div>
												<div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
												<div className="absolute inset-0 flex items-center justify-center opacity-20">
													<div className="flex flex-col items-center gap-2 p-4">
														<div className="w-3/4 h-full bg-green-500 rounded-full"></div>
													</div>
													<div className="text-sm text-green-600">
														Growth Rate
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
										<div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
											{Array.from({ length: 200 }).map((_, i) => (
												<div
													key={i}
													className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
												/>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* Documentation Section */}
							<DocumentationSection />

							{/* Testimonials Section */}
							{/* <TestimonialsSection /> */}

							{/* Pricing Section */}
							{/* <PricingSection /> */}

							{/* FAQ Section */}
							<FAQSection />

							{/* CTA Section */}
							<CTASection />

							{/* Footer Section */}
							<FooterSection />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// FeatureCard component definition inline to fix import error
// function FeatureCard({
// 	title,
// 	description,
// 	isActive,
// 	progress,
// 	onClick,
// }: {
// 	title: string;
// 	description: string;
// 	isActive: boolean;
// 	progress: number;
// 	onClick: () => void;
// }) {
// 	return (
// 		<div
// 			className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
// 				isActive
// 					? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
// 					: "border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
// 			}`}
// 			onClick={onClick}
// 		>
// 			{isActive && (
// 				<div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
// 					<div
// 						className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
// 						style={{ width: `${progress}%` }}
// 					/>
// 				</div>
// 			)}

// 			<div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
// 				{title}
// 			</div>
// 			<div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] leading-[22px] md:leading-[22px] font-sans">
// 				{description}
// 			</div>
// 		</div>
// 	);
// }
