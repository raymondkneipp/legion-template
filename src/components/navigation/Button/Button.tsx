import { NextPage } from "next";
import Link from "next/link";
import { useAppSelector } from "@store";

interface Props {
	to: string;
	secondary?: boolean;
	lg?: boolean;
	sm?: boolean;
	onClick?: (e: any) => void;
}

const Button: NextPage<Props> = ({
	to,
	secondary,
	lg,
	sm,
	onClick,
	children,
}) => {
	const { color, radius } = useAppSelector((state) => state.theme);

	const base = `inline-block text-center transition-colors inline-flex items-center space-x-2 justify-center ${radius}`;
	const theme = !secondary
		? `bg-${color}-800 text-white hover:bg-${color}-600`
		: `bg-gray-200 text-${color}-800 hover:bg-white`;
	let size;

	switch (true) {
		case lg:
			size = "py-3 px-6 md:py-4 md:px-8 md:text-lg font-bold";
			break;
		case sm:
			size = "py-1 px-2 font-base";
			break;
		default:
			size = "py-2 px-4 font-bold";
	}

	const styles = base + " " + theme + " " + size;

	return (
		<Link href={to}>
			<a className={styles} onClick={onClick}>
				{children}
			</a>
		</Link>
	);
};

export default Button;
