import type { NextPage } from "next";
import { Banner, Footer, NavBar, Typography } from "../../../components/index";

const Layout: NextPage = ({ children }) => {
	return (
		<>
			{true && (
				<Banner>
					<Typography variant="p" color="light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dicta
						consequuntur iste possimus praesentium magnam reiciendis, nulla
						impedit eaque quo, pariatur molestias saepe ducimus nam tempore
						voluptatibus eum, quae hic?
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
