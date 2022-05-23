import { NextPage } from "next";
import Link from "next/link";
import { useAppSelector } from "@store";

interface Props {
	to: string;
	page: string;
}

const ColoredLink: NextPage<Props> = ({ to, page }) => {
	const { radius, color } = useAppSelector((state) => state.theme);

	return (
		<Link href={to}>
			<a className={`hover:underline text-${color}-800 ${radius}`}>{page}</a>
		</Link>
	);
};

export default ColoredLink;
