import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container, DashboardNav, Submit, Button } from "@components";
import { useAppDispatch } from "@store";
import { logout } from "@store/auth/auth.actions";

interface Props {
	onSubmit: any;
}

const DashboardLayout: NextPage<Props> = ({ children, onSubmit }) => {
	const dispatch = useAppDispatch();

	return (
		<>
			<NextSeo title="Dashboard" />
			<Container>
				<div className="flex">
					<DashboardNav />
					<form
						className="space-y-6 flex-1 flex flex-col p-6"
						onSubmit={onSubmit}
					>
						<div className="flex items-center justify-between">
							<Button onClick={() => dispatch(logout())} to="/" secondary>
								Logout
							</Button>
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
