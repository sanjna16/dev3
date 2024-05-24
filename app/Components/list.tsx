import React from "react";
import Image from "next/image";
const List = ({ content }: any) => {
	return (
		<div className="flex justify-start w-wid-343 flex-row items-center pt-0 pr-3 pb-0 pl-0 box-border gap-3">
			<Image
				src="/tick.svg"
				alt="tick"
				className="relative "
				width={24}
				height={24}
				priority
			/>
			<div className="relative text-sm">{content}</div>
		</div>
	);
};

export default List;
