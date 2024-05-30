import React from "react";
import Image from "next/image";
const Institution = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center text-center text-[31px]">
			<div className="w-wid-343 relative font-semibold inline-block flex-shrink-0">
				Trusted by the top educational institutions worldwide
			</div>
			<Image
				src="/institutions.png"
				alt="image"
				className=" relative mt-4"
				width={343}
				height={50}
				priority
			/>
		</div>
	);
};

export default Institution;
