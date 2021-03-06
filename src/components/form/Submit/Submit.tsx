import { NextPage } from "next";
import { useAppSelector } from "@store";

const Submit: NextPage = ({ children }) => {
	const { color, radius } = useAppSelector((state) => state.theme);

	const base = `font-bold inline-block text-center transition-colors ${radius}`;
	const theme = `bg-${color}-800 text-white hover:bg-${color}-600`;
	const size = "py-2 px-4";

	const styles = base + " " + theme + " " + size;

	return (
		<button type="submit" className={styles}>
			{children}
		</button>
	);
};

export default Submit;
