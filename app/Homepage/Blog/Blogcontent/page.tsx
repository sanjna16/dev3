import React from "react";
import Card1 from "./Card1/page";
import Button from "../../../Components/Button/page";
const Blogcontent = ({ heading, content }: any) => {
	return (
		<div className=" border border-solid rounded-lg border-primary-60 self-stretch">
			<div className="flex flex-col items-center">
				<Card1 heading={heading} content={content} />
			</div>
			<div className="flex items-start justify-start  mt-4 mb-4 ml-4 text-base text-primary-60 font-be-vietnam">
				<Button href="https://upsc.gov.in/apply-online" text="Read More" />
			</div>
		</div>
	);
};

export default Blogcontent;
