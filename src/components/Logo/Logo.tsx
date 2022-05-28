import { NextPage } from "next";
import Image from "next/image";

const Logo: NextPage = () => (
	<Image
		src="/img/American-Legion-Emblem.png"
		alt="Logo"
		width="80"
		height="80"
		layout="fixed"
		objectFit="contain"
		priority={true}
	/>
);

export default Logo;
