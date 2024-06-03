import React from "react";
import Image from "next/image";
const Linkitems = ({ link, icon }: any) => {
	return (
		<div className="w-[300px] text-base text-primary-60 flex space-x-40 mt-4">
			<div className="flex flex-row  pt-1">{link}</div>
			<Image
				src={icon}
				alt="image"
				className=" absolute "
				width={32}
				height={32}
				priority
			/>
		</div>
	);
};

export default Linkitems;
