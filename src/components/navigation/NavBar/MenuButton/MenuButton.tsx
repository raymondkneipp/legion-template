import { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@store/ThemeContext";

interface Props {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}

const MenuButton: NextPage<Props> = ({ show, setShow }) => {
	const { radius } = useTheme();

	return (
		<button
			type="button"
			onClick={() => setShow(!show)}
			className={`p-3 hover:bg-gray-200 transition-colors block md:hidden ${radius}`}
			aria-label="menu"
		>
			{show ? <FiX size={20} /> : <FiMenu size={20} />}
		</button>
	);
};

export default MenuButton;
