import React from "react";
import Link from "next/link";

const Button = ({ href, text }: any) => {
	return <Link href={href}>{text}</Link>;
};

export default Button;
