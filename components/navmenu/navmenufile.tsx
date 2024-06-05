import Link from "next/link";

type NavMenuStatus = {
	active: boolean;
	resetMenu: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const NavMenu = ({ active, resetMenu }: NavMenuStatus) => {
	return (
		<nav data-active={active} className="navMenu">
			<div className="navMenuInner">
				<ul className="navMenuLinks">
					<li>
						<Link onClick={resetMenu} href="/">
							Home
						</Link>
					</li>
					<li>
						<Link onClick={resetMenu} href="/about">
							About
						</Link>
					</li>
					<li>
						<Link onClick={resetMenu} href="/course">
							Courses
						</Link>
					</li>
					<li>
						<Link onClick={resetMenu} href="/blog">
							Blog
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavMenu;
