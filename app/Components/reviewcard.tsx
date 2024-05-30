import React from "react";
import Image from "next/image";
const ReviewCard = ({ img, text, name }: any) => {
	return (
		<div className="w-wid-343 flex flex-col justify-start items-start pt-0 pr-4 box-border gap-3 text-base text-grey-10">
			<div className="w-wid-305 relative font-medium inline-block">{text}</div>
			<div className="w-wid-274 relative border-t border-solid border-grey-80 box-border h-1"></div>
			<div className="flex flex-row items-center justify-start gap-3 text-base">
				<Image
					src={img}
					alt="Image"
					className=" relative rounded-full object-cover "
					width={50}
					height={50}
					priority
				/>
				<div className="relative font-medium">{name}</div>
			</div>
			<div className="flex space-x-1">
				<Image
					src="/stars.svg"
					alt="Image"
					className=" relative "
					width={16}
					height={16}
					priority
				/>
				<Image
					src="/stars.svg"
					alt="Image"
					className="  relative "
					width={16}
					height={16}
					priority
				/>
				<Image
					src="/stars.svg"
					alt="Image"
					className="  relative"
					width={16}
					height={16}
					priority
				/>
				<Image
					src="/stars.svg"
					alt="Image"
					className="  relative "
					width={16}
					height={16}
					priority
				/>
				<Image
					src="/stars.svg"
					alt="Image"
					className="  relative "
					width={16}
					height={16}
					priority
				/>
			</div>
		</div>
	);
};

export default ReviewCard;
