import type { NextPage } from "next";
import { Banner, Footer, NavBar } from "@components";

const Layout: NextPage = ({ children }) => {
	return (
		<>
			<Banner />
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
