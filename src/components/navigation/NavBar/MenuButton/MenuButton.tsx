import { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { BsX, BsList } from "react-icons/bs";

import { useAppSelector } from "@store";

interface Props {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}

const MenuButton: NextPage<Props> = ({ show, setShow }) => {
	const { radius } = useAppSelector((state) => state.theme);

	return (
		<button
			type="button"
			onClick={() => setShow(!show)}
			className={`p-3 hover:bg-gray-200 transition-colors block md:hidden ${radius}`}
			aria-label="menu"
		>
			{show ? <BsX size={20} /> : <BsList size={20} />}
		</button>
	);
};

export default MenuButton;
