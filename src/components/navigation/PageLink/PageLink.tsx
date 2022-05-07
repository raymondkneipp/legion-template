import { NextPage } from "next";
import Link from "next/link";
import { useAppSelector } from "@store";

interface Props {
	to: string;
	page: string;
}

const PageLink: NextPage<Props> = ({ to, page }) => {
	const { radius } = useAppSelector((state) => state.theme);

	return (
		<Link href={to}>
			<a className={`hover:underline text-gray-600 ${radius}`}>{page}</a>
		</Link>
	);
};

export default PageLink;
