import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js",
	],
	theme: {
		extend: {
			width: {
				"wid-343": "343px",
				"wid-152": "152px",
				"wid-157": "157px",
				"wid-165": "165px",
				"wid-253": "253px",
				"wid-332": "332px",
				"wid-375": "375px",
				"wid-200": "200px",
				"wid-185": "185px",
				"wid-315": "315px",
				"wid-305": "305px",
				"wid-274": "274px",
				"wid-238": "238px",
				"wid-112": "112px",
			},
			height: {
				"hig-38": "38px",
				"hig-265": "265px",
				"hig-29": "29px",
				"hig-670": "670px",
				"hig-200": "200px",
				"hig-185": "185px",
			},
			colors: {
				"grey-ff": "#fff",
				"primary-60": "#3535fd",
				"primary-40": "#0000cc",
				"primary-90": "#cbcbfe",
				"grey-90": "#e0e4eb",
				"grey-10": "#1a1a1a",
				"gray-100": "#191919",
				"color-black": "#000",
				"blue-100": " #eef1fc",
				"red-100": "#ec343f",
				"error-10": "#2e0509",
				"grey-80": "#c4ccd4",
				"grey-30": "#444755",
				"grey-40": "#61646b",
				"grey-bg": "rgba(224, 228, 235, 0.4)",
				"success-90": "#e8fccf",
				"info-90": "#CCFBFE",
				"success-40": "#3FAC21",
			},
			opacity: {
				o: "0.4",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				barlow: ["Barlow", "sans-serif"],
				"be-vietnam": ["Be Vietnam", "sans-serif"],
			},
		},
	},
	plugins: [nextui()],
};
export default config;
