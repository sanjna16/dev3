import React from "react";
import Image from "next/image";
const Info = ({ img, heading, content }: any) => {
	return (
		<div className="flex flex-start w-wid-343 items-center space-x-4">
			<Image
				src={img}
				alt="Image"
				className="relative rounded-sm ml-2 w-[42px] h-[42px]"
				width={42}
				height={42}
				priority
			/>
			<div className="flex flex-col relative overflow-hidden ">
				<div className="text-lg font-semibold">{heading}</div>
				<div className="text-sm font-normal">{content}</div>
			</div>
		</div>
	);
};

export default Info;
