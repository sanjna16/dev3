"use client";
import React, { useState } from "react";
import NavMenu from "../navmenu/navmenufile";
import Controls from "../controls/controlsfile";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
	const [menuActive, setMenuActive] = useState(false);

	const toggleMenu = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setMenuActive(!menuActive);
	};

	const resetMenu = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		setMenuActive(false);
	};

	return (
		<div>
			<nav className="headerWrapper">
				<header className="header">
					<div className="headerInner">
						<Image
							src="/logo.png"
							alt="Logo"
							className=" relative object-cover mt-2"
							width={152}
							height={38}
							priority
						/>
						<Controls handleMenu={toggleMenu} menuStatus={menuActive} />
					</div>
				</header>
				<NavMenu active={menuActive} resetMenu={resetMenu} />
			</nav>
			<hr className="border-t-1 mt-2 border-primary-40 w-wid-343 h-0.5 "></hr>
		</div>
	);
};

export default Header;
