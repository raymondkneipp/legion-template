import type { NextPage } from "next";
import { Banner, Button, Footer, NavBar, Typography } from "../..";
import { attributes as banner } from "../../../../content/banner.md";

const Layout: NextPage = ({ children }) => {
	return (
		<>
			{banner.show && (
				<Banner>
					<Typography variant="p" color="light">
						{banner.text}
					</Typography>
				</Banner>
			)}
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
