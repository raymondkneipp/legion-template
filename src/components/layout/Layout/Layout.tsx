import type { NextPage } from "next";
import { Banner, Button, Footer, NavBar, Typography } from "../..";

const Layout: NextPage = ({ children }) => {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
