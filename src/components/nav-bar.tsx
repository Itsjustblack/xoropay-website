import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
	return (
		<nav className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
			<div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[#37322f1f] shadow-[0px_1px_0px_white]"></div>

			<div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_1px_white] border border-[#37322f1f] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
				<div className="flex justify-center items-center">
					<div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-instrument-serif tracking-wider">
						XoroPay
					</div>
				</div>
				<div className="justify-center items-center hidden sm:flex flex-row gap-4">
					<Link
						href="#"
						className="flex flex-col justify-center text-[#312d2bcc] text-xs md:text-sm font-medium hover:text-black"
					>
						Features
					</Link>

					<Link
						href="#"
						className="flex flex-col justify-center text-[#312d2bcc] text-xs md:text-sm font-medium hover:text-black"
					>
						Pricing
					</Link>

					<Link
						href="#"
						className="flex flex-col justify-center text-[#312d2bcc] text-xs md:text-sm font-medium hover:text-black"
					>
						Docs
					</Link>
				</div>
				<Button
					variant="outline"
					className="rounded-full border-0 text-[#37322F] text-xs md:text-[13px] font-medium px-5 h-auto"
				>
					Log in
				</Button>
			</div>
		</nav>
	);
}
