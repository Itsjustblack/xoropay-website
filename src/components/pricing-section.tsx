"use client";


export default function PricingSection() {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-2">
			{/* Header Section */}
			<div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
				<div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
					{/* Pricing Badge */}
					<div className="px-[14px] py-[6px] bg-white overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
						<div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
									stroke="#37322F"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
							Plans & Pricing
						</div>
					</div>

					{/* Title */}
					<div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
						Simple & Transparent Pricing
					</div>

					{/* Description */}
					<div className="self-stretch text-center text-[#605A57] text-base sm:text-lg font-normal leading-7 font-sans">
						No hidden fees, no setup costs, no monthly charges
					</div>
				</div>
			</div>

			{/* Pricing Cards Section */}
			<div className="self-stretch border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center pt-16">
				<div className="flex justify-center items-start w-full">
					{/* Left Decorative Pattern */}
					<div className="w-12 self-stretch relative overflow-hidden hidden md:block">
						<div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
							{Array.from({ length: 200 }).map((_, i) => (
								<div
									key={i}
									className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
								></div>
							))}
						</div>
					</div>

					{/* Pricing Cards Container */}
					<div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-6 py-12 md:py-0">
						{/* Starter Plan */}
						<div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-5 bg-[rgba(255,255,255,0)]">
							{/* Plan Header */}
							<div className="self-stretch flex flex-col justify-start items-center gap-7 text-[#37322F]">
								<div className="self-stretch flex flex-col justify-start items-start gap-2">
									<div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">
										Starter
									</div>
									<div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
										Perfect for small businesses and startups
									</div>
								</div>

								<div className="self-stretch flex flex-col justify-start items-start gap-2">
									<div className="flex flex-col justify-start items-start gap-1">
										<div className="relative h-[60px] flex items-center text-[#37322F] text-5xl font-medium leading-[60px] font-serif">
											<span className="invisible">2.5%</span>
											<span className="absolute inset-0 flex items-center transition-all duration-500">
												2.5%
											</span>
											<span className="absolute inset-0 flex items-center transition-all duration-500">
												2.5%
											</span>
										</div>
										<div className="text-[#847971] text-sm font-medium font-sans">
											per successful transaction
										</div>
									</div>
								</div>
							</div>

							<div className="self-stretch flex flex-col justify-start items-start gap-2">
								{[
									"Accept all payment methods",
									"Basic payment links",
									"Standard payouts",
									"Email receipts (free)",
									"Basic analytics",
									"Community support",
									"99.5% uptime SLA",
								].map((feature, index) => (
									<div
										key={index}
										className="self-stretch flex justify-start items-center gap-[13px]"
									>
										<div className="w-4 h-4 relative flex items-center justify-center">
											<svg
												width="12"
												height="12"
												viewBox="0 0 12 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10 3L4.5 8.5L2 6"
													stroke="#9CA3AF"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">
											{feature}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Professional Plan (Featured) */}
						<div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-[#37322F] border border-[rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-5">
							{/* Plan Header */}
							<div className="self-stretch flex flex-col justify-start items-center gap-7">
								<div className="self-stretch flex flex-col justify-start items-start gap-2">
									<div className="text-[#FBFAF9] text-lg font-medium leading-7 font-sans">
										Business
									</div>
									<div className="w-full max-w-[242px] text-[#B2AEA9] text-sm font-normal leading-5 font-sans">
										For growing businesses with higher volumes
									</div>
								</div>

								<div className="self-stretch flex flex-col justify-start items-start gap-2">
									<div className="flex flex-col justify-start items-start gap-1">
										<div className="relative h-[60px] flex items-center text-[#F0EFEE] text-5xl font-medium leading-[60px] font-serif">
											<span className="invisible">2.0%</span>
											<span className="absolute inset-0 flex items-center transition-all duration-500">
												2.0%
											</span>
											<span className="absolute inset-0 flex items-center transition-all duration-500">
												2.0%
											</span>
										</div>
										<div className="text-[#D2C6BF] text-sm font-medium font-sans">
											per successful transaction
										</div>
									</div>
								</div>
							</div>

							<div className="self-stretch flex flex-col justify-start items-start gap-2">
								{[
									"Unlimited projects",
									"Advanced documentation tools",
									"Priority support",
									"Custom templates",
									"Advanced analytics",
									"Team collaboration",
									"API access",
								].map((feature, index) => (
									<div
										key={index}
										className="self-stretch flex justify-start items-center gap-[13px]"
									>
										<div className="w-4 h-4 relative flex items-center justify-center">
											<svg
												width="12"
												height="12"
												viewBox="0 0 12 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M10 3L4.5 8.5L2 6"
													stroke="#FF8000"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div className="flex-1 text-[#F0EFEE] text-[12.5px] font-normal leading-5 font-sans">
											{feature}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Enterprise Plan */}
						<div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-white border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-5">
							{/* Plan Header */}
							<div className="self-stretch flex flex-col justify-start items-center gap-7">
								<div className="self-stretch flex flex-col justify-start items-start gap-2">
									<div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">
										Enterprise
									</div>
									<div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
										For large organizations with custom needs
									</div>
								</div>

								<div className="self-stretch flex flex-col justify-start items-start gap-2">
									<div className="flex flex-col justify-start items-start gap-1">
										<div className="relative h-[60px] flex items-center text-[#37322F] text-5xl font-medium leading-[60px] font-serif">
											<span className="invisible">25%</span>
											<span className="absolute inset-0 flex items-center transition-all duration-500">
												Custom
											</span>
											<span className="absolute inset-0 flex items-center transition-all duration-500">
												Custom
											</span>
										</div>
										<div className="text-[#847971] text-sm font-medium font-sans">
											Volume-based pricing
										</div>
									</div>
								</div>

								<div className="self-stretch flex flex-col justify-start items-start gap-2">
									{[
										"Accept all payment methods",
										"Basic payment links",
										"Standard payouts",
										"Email receipts (free)",
										"Basic analytics",
										"Community support",
										"99.5% uptime SLA",
									].map((feature, index) => (
										<div
											key={index}
											className="self-stretch flex justify-start items-center gap-[13px]"
										>
											<div className="w-4 h-4 relative flex items-center justify-center">
												<svg
													width="12"
													height="12"
													viewBox="0 0 12 12"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M10 3L4.5 8.5L2 6"
														stroke="#9CA3AF"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
											<div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">
												{feature}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right Decorative Pattern */}
					<div className="w-12 self-stretch relative overflow-hidden hidden md:block">
						<div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
							{Array.from({ length: 200 }).map((_, i) => (
								<div
									key={i}
									className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
								></div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
