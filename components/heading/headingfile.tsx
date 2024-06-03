import React from "react";
const Heading = ({ heading, content }: any) => {
	return (
		<div>
			<b className="relative w-wid-343 inline-block text-4xl">{heading}</b>
			<div className="relative w-wid-343 inline-block mt-4 text-lg font-light">
				{content}
			</div>
		</div>
	);
};

export default Heading;
