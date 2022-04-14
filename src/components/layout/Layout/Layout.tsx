import type { NextPage } from "next";
import { Banner, Footer, NavBar, Typography } from "../../../components/index";
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
