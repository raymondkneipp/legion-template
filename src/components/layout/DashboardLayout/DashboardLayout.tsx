import type { NextPage } from "next";
import { Container, DashboardNav, ColoredLink, Submit } from "@components";

interface Props {
	onSubmit: any;
}

const DashboardLayout: NextPage<Props> = ({ children, onSubmit }) => {
	return (
		<>
			<Container>
				<div className="flex">
					<DashboardNav />
					<form
						className="space-y-6 flex-1 flex flex-col p-6"
						onSubmit={onSubmit}
					>
						<div className="flex items-center justify-between">
							<ColoredLink to="/" page="Cancel" />
							<Submit>Save</Submit>
						</div>
						{children}
					</form>
				</div>
			</Container>
		</>
	);
};

export default DashboardLayout;
