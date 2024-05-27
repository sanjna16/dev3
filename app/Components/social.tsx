import React from "react";
import Image from "next/image";
const Social = ({ img, imgAlt }: any) => {
	return (
		<Image
			src={img}
			alt={imgAlt}
			className=" relative pl-2"
			width={36}
			height={36}
			priority
		/>
	);
};

export default Social;
