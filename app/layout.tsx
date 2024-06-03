import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "/Components/Header/header";
import Footer from "/Components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sarat Chandra",
	description: "IAS Academy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex justify-center items-center  flex-col">
					<div className=" w-wid-343 flex flex-col items-start content-start gap-6">
						<Header />
					</div>
				</div>
				{children}
				<div className="flex justify-center items-center  flex-col">
					<Footer />
				</div>
			</body>
		</html>
	);
}
