import { NextPage } from "next";
import Link from "next/link";
import { useTheme } from "store/ThemeContext";

interface Props {
	to: string;
	page: string;
}

const PageLink: NextPage<Props> = ({ to, page }) => {
	const { radius } = useTheme();

	return (
		<Link href={to}>
			<a className={`hover:underline text-gray-600 ${radius}`}>{page}</a>
		</Link>
	);
};

export default PageLink;
