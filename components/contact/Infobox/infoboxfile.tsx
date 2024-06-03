import React from "react";
import Image from "next/image";

const Infobox = ({ imageSrc, imageAlt, heading, content }: any) => {
	return (
		<div
			className="pt-4 overflow-hidden items-startjustify-start
            gap-1 text-error-10"
		>
			<Image
				src={imageSrc}
				alt={imageAlt}
				className="relative rounded-md"
				width={42}
				height={42}
				priority
			/>
			<b className="w-wid-332 relative flex items-center h-hig-29 flex-shrink-0">
				{heading}
			</b>
			<div className="w-wid-343 relative text-sm font-medium text-grey-10 inline-block">
				{content}
			</div>
		</div>
	);
};

export default Infobox;
