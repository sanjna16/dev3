import React from "react";
import Image from "next/image";
import Checklist from "./checklist";
import Button from "./button";
const Enrollbox = () => {
	return (
		<div
			className=" overflow-hidden flex flex-col items-center content-center gap-3  rounded-xl bg-blue-100
        pt-0 pr-0 pb-5  text-xs text-gray-100 font-poppins mt-8"
		>
			<Image
				src="/cimage.png"
				alt="image"
				className=" relative object-cover"
				width={343}
				height={265}
				priority
			/>
			<b className="w-wid-343 relative text-3xl flex font-barlow text-black text-center items-center content-center">
				UPSC Civil Services Coaching
			</b>

			<Checklist content="Weekly prelims and Mains Exams" />

			<Checklist content="Guest Lectures by IAS Officers" />

			<Checklist content="Comprehensive coverage of syllabus" />

			<b className="relative text-2xl font-barlow text-red-100 ">
				<span>₹ 59999</span>
				<span className="text-gray-100"> - ₹ 63000</span>
			</b>

			<div
				className="flex flex-row items-center content-center flex-1
                    rounded-md bg-primary-60 border border-solid border-primary-60
                    box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 w-wid-165 text-lg text-grey-90 font-be-vietnam"
			>
				<Button href="https://upsc.gov.in/apply-online" text=" Enroll Now" />
			</div>
		</div>
	);
};

export default Enrollbox;
