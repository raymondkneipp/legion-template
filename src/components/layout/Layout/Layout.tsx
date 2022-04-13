import type { NextPage } from "next";
import { Banner, Button, Footer, NavBar, Typography } from "../..";

const Layout: NextPage = ({ children }) => {
	return (
		<>
			<Banner>
				<Typography variant="p" color="light">
					Important information goes here!
				</Typography>
			</Banner>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
