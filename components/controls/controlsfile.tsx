type ControlsProps = {
	menuStatus: boolean;
	handleMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Controls = ({ menuStatus, handleMenu }: ControlsProps) => {
	return (
		<ul className="navControls">
			<li className="navControl">
				<button
					data-open={`${menuStatus}`}
					onClick={handleMenu}
					className="menuToggle"
				></button>
			</li>
		</ul>
	);
};

export default Controls;
