import React from "react";
import Image from "next/image";
import Social from "../Social/page";
import Button from "../Button/page";
const Team = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-start gap-4">
				<div className="w-wid-343 relative text-3xl inline-block text-center pt-12 font-barlow font-semibold">
					Join Our Team
				</div>
				<div className="w-wid-343 relative inline-block font-medium text-gray-100 text-sm text-center">
					Get to know our rockstar teachers and staff.
				</div>
				<Image
					src="/john.png"
					alt="john"
					className="relative rounded-full border-solid border-primary-60 border-2"
					width={180}
					height={180}
					priority
				/>
				<div className="w-wid-343 relative text-2xl inline-block text-center font-bold font-barlow">
					John Doe
				</div>
				<div className="pr-2 pl-2 relative inline-block  text-gray-100  text-center text-sm font-medium font-barlow">
					{" "}
					John is a passionate math teacher with over 10 years of experience.
				</div>
				<div className="flex flex-row items-center justify-center gap-3 pr-2">
					<Social img="/phone.svg" imgAlt="phone" />
					<Social img="/whatsapp.svg" imgAlt="whatsapp" />
					<Social img="/insta.svg" imgAlt="instagram" />
				</div>
				<div className="mt-8 mb-8 text-3xl inline-block w-wid-343 text-center font-extrabold">
					We Are Hiring
				</div>
				<div
					className="flex flex-row items-center justify-center flex-1 rounded-md bg-grey-ff border 
                        border-solid border-primary-60 box-border h-10 pt-2  pb-2 gap-2 w-wid-315 text-center 
                        text-lg text-primary-60 font-be-vietnam"
				>
					<Button
						href="https://upsc.gov.in/apply-online"
						text="Check Position"
					/>
				</div>
			</div>
		</>
	);
};

export default Team;
