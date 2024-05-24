import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        'wid-343':'343px',
        'wid-152':'152px',
        'wid-165':'165px',
        'wid-253':'253px',
        'wid-332':'332px',
      },
      height:{
        'hig-38':'38px',
        'hig-265':'265px',
        'hig-29':'29px',
      },
      colors:{
        'grey-ff': '#fff',
        'primary-60': '#3535fd',
        'primary-40': '#0000cc',
        'grey-90': '#e0e4eb',
        'grey-10': '#1a1a1a',
        'gray-100': '#191919',
        'color-black': '#000',
        'blue-100':' #eef1fc',
        'red-100':'#ec343f',
        'error-10': '#2e0509',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'be-vietnam':['Be Vietnam', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
