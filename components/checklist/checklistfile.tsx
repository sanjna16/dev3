import React from "react";
import Image from "next/image";
const Checklist = ({ content }: any) => {
	return (
		<div className="w-wid-343 flex flex-row items-center content-start pt-0 pr-3 pb-0 pl-10 box-border gap-3">
			<Image
				src="/tick.svg"
				alt="tick"
				className=" relative "
				width={24}
				height={24}
				priority
			/>
			<div className="relative">{content}</div>
		</div>
	);
};

export default Checklist;
