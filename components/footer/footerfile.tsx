import React from "react";
import Image from "next/image";
import Linkitems from "./linkitems/linkitemsfile";
import Inputbox from "./inputbox/inputboxfile";
const Footer = () => {
	return (
		<>
			<div className="flex flex-col items-start justify-start mr-36">
				<Image
					src="/logobnw.png"
					alt="Image"
					className=" relative object-cover mt-8"
					width={215}
					height={53.8}
					priority
				/>
			</div>
			<div className="w-wid-343 relative h-[666px] flex flex-col mt-4 items-start justify-start gap-4">
				<b className="w-[286px] relative text-lg inline-block">
					Stay up to date with our latest features and releases by joining our
					newsletter
				</b>
				<Inputbox label="Email" placeholder="xyz@gmail.com" />

				<b className="w-wid-343 relative flex text-grey-40 items-center">
					By subscribing, you agree to our Privacy Policy and consent to receive
					updates from our company
				</b>
				<div className="w-wid-343 flex items-start flex-row flex-wrap justify-start gap-x-[28px] gap-y-[91px] text-lg text-neutral-800">
					<div className="w-[81px] relative h-[222px]">
						<div className="flex space-x-20">
							<div className="inline-block w-[79.8px] font-bold">Company</div>
							<div className="inline-block w-[79.8px] font-bold">Follow</div>
						</div>

						<Linkitems link="About Us" icon="/fbook.svg" />
						<Linkitems link="Contact" icon="/insta.svg" />
						<Linkitems link="Courses" icon="/ytube.svg" />
						<div className="w-[300px] text-base text-primary-60 flex space-x-40 mt-4">
							<div className="flex flex-row  pt-1">Admissions</div>
						</div>
						<div className="w-[300px] text-base text-primary-60 flex space-x-40 mt-4">
							<div className="flex flex-row  mb-8 pt-1">More</div>
						</div>
					</div>
				</div>
				<div className="w-wid-343 flex items-start flex-col jestify-center gap-[24px] text-base mt-8 text-neutral-500">
					<div className="self-stretch flex flex-row items-start justify-start space-x-4 font-barlow">
						<b className="">Privacy Policy</b>
						<b className="">Terms of Service</b>
					</div>
				</div>
				<div className="w-wid-343 flex items-start flex-col jestify-center gap-[20px] text-base  text-neutral-500">
					<b className="">Cookie Settings</b>
				</div>
				<div className="w-wid-343 flex items-start flex-col jestify-center gap-[20px] mt-4 text-base  text-neutral-500">
					<b className="">
						© 2024 Sarath Chandra Academy. All rights reserved.
					</b>
				</div>
			</div>
		</>
	);
};

export default Footer;
