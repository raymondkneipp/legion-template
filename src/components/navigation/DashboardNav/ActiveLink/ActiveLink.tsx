import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "@store";

interface Props {
	to: string;
}

const ActiveLink: NextPage<Props> = ({ to, children }) => {
	const router = useRouter();
	const { color, radius } = useAppSelector((state) => state.theme);

	const styles = `${
		router.pathname == to
			? "bg-gray-200"
			: `hover:bg-${color}-800 hover:text-white transition-colors`
	} ${radius} py-2 px-4`;

	return (
		<Link href={to}>
			<a className={styles}>{children}</a>
		</Link>
	);
};

export default ActiveLink;
