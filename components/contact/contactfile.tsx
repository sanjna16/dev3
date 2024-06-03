import React from "react";
import Infobox from "./infobox/infoboxfile";
import Button from "../button/buttonfile";
const Contact = () => {
	return (
		<>
			<div className="relative mt-8 font-semibold flex flex-col items-center justify-start gap-5 text-3xl text-black">
				Get In Touch
			</div>
			<div className="relative w-wid-343 mt-4 text-base font-medium text-gray-100 text-center inline-block">
				We would love to hear from you. Contact us for any inquiries or
				assistance.
			</div>
			<div
				className="flex flex-row items-center content-center flex-1
                    rounded-md bg-primary-60 border border-solid border-primary-60
                    box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 mb-4 mt-8 w-wid-185 text-basic text-grey-90 font-be-vietnam"
			>
				<Button
					href="https://upsc.gov.in/apply-online"
					text=" Enrollment Form"
				/>
			</div>
			<Infobox
				imageSrc="/email.png"
				imageAlt="email"
				heading="Email"
				content="saratchandraiasacademy@gmail.com"
			/>
			<Infobox
				imageSrc="/call.png"
				imageAlt="call"
				heading="Phone"
				content="9494188688 - 9494688188"
			/>
			<Infobox
				imageSrc="/location.png"
				imageAlt="location"
				heading="Office"
				content="123 Main Street, Hyderabad, Telangana 500001"
			/>
		</>
	);
};

export default Contact;
