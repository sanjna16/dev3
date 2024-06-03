"use client";

import React, { useRef } from "react";

const Inputbox = ({ label, placeholder }: any) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = () => {
		if (inputRef.current) {
			console.log(inputRef.current.value);
		}
	};

	return (
		<div className="w-[255px] flex flex-col align-start justify-start gap-1 text-grey-30 font-barlow">
			<label>{label}</label>
			<input
				ref={inputRef}
				type="text"
				placeholder={placeholder}
				className="self-stretch rounded-md bg-grey-ff border border-solid border-grey-40 flex flex-row items-center justify-start pl-2 pr-3 gap-1 h-8 text-sm"
			/>
			<button
				onClick={handleSubmit}
				className="flex flex-row items-center justify-center rounded-[4px] bg-grey-ff border border-solid border-primary-60 
        box-border h-10 pt-2 pr-5 pl-5 pb-2 mt-2 text-primary-60 font-barlow font-bold text-base text-center w-[112px]"
			>
				Subscribe
			</button>
		</div>
	);
};

export default Inputbox;
