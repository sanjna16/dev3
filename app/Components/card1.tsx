import React from "react";
import Image from "next/image";
const Card1 = ({ imgUrl = "/ketan.png", heading, content }: any) => {
	return (
		<>
			<Image
				src={imgUrl}
				alt="Image"
				className=" relative rounded-xl  object-cover mix-blend-multiply mt-8"
				width={305}
				height={265}
				priority
			/>

			<div className="w-wid-305 relative text-3xl mt-4 font-semibold inline-block">
				{heading}
			</div>
			<div className="w-wid-305 mt-4 relative inline-block font-medium text-[15px]">
				{content}
			</div>
		</>
	);
};

export default Card1;
