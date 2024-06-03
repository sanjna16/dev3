import React from "react";
import Image from "next/image";
const Header = () => {
	return (
		<div>
			<Image
				src="/logo.png"
				alt="Logo"
				className=" relative object-cover mt-2"
				width={152}
				height={38}
				priority
			/>
			<hr className="border-t-1 mt-2 border-primary-40 w-wid-343 h-0.5 "></hr>
		</div>
	);
};

export default Header;
