"use client";

import React, { useState } from "react";
import Image from "next/image";
const Faq = ({ title, content }: any) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col justify-start items-start gap-4 text-left text-base pl-2 text-primary-60 border border-solid border-primary-60 rounded-md mt-4">
			<button
				className="flex items-start justify-start flex-row gap-12 w-wid-343"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="flex w-wid-343 items-start justify-between gap-2 self-stretch relative outline-none mt-2 mb-2 mr-1">
					<span className="font-semibold ">{title}</span>
					<span>
						{isOpen ? (
							<Image
								src="/min.svg"
								alt="image"
								width={26}
								height={26}
								priority
							/>
						) : (
							<Image
								src="/plus.svg"
								alt="image"
								width={24}
								height={24}
								priority
							/>
						)}
					</span>
				</div>
			</button>
			{isOpen && (
				<div className="self-stretch w-wid-343 relative text-sm font-medium text-grey-10">
					{content}
				</div>
			)}
		</div>
	);
};

export default Faq;
