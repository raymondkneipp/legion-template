import { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}

const MenuButton: NextPage<Props> = ({ show, setShow }) => (
	<button
		type="button"
		onClick={() => setShow(!show)}
		className="p-3 rounded hover:bg-gray-200 transition-colors block md:hidden"
	>
		{show ? <FaTimes size={20} /> : <FaBars size={20} />}
	</button>
);

export default MenuButton;
