import { NextPage } from "next";
import Link from "next/link";
import { Typography, Logo } from "@components";
import ActiveLink from "./ActiveLink/ActiveLink";
import { useAppSelector } from "@store";

const DashboardNav: NextPage = () => {
	const { radius } = useAppSelector((state) => state.theme);
	const { id } = useAppSelector((state) => state.post);

	return (
		<nav className="flex flex-col space-y-2 bg-gray-100 max-w-xs w-full p-6 h-screen overflow-y-auto">
			<div className="flex items-center space-x-2">
				<Logo />
				<Typography variant="h5" element="h1">
					Post {id}
				</Typography>
			</div>
			<ActiveLink to="/dashboard">General</ActiveLink>
			<ActiveLink to="/dashboard/theme">Theme</ActiveLink>
			<ActiveLink to="/dashboard/banner">Banner</ActiveLink>
			<ActiveLink to="/dashboard/Hero">Hero</ActiveLink>
			<ActiveLink to="/dashboard/News">News</ActiveLink>
			<ActiveLink to="/dashboard/contact">Contact</ActiveLink>
			<ActiveLink to="/dashboard/about">About</ActiveLink>
			<ActiveLink to="/dashboard/events">Events</ActiveLink>
			<ActiveLink to="/dashboard/upcoming">Upcoming Meeting</ActiveLink>
			<ActiveLink to="/dashboard/stats">Statistics</ActiveLink>
			<ActiveLink to="/dashboard/rental">Hall Rental</ActiveLink>
			<ActiveLink to="/dashboard/misc">Miscellaneous</ActiveLink>
			<ActiveLink to="/dashboard/social">Social Media</ActiveLink>
		</nav>
	);
};

export default DashboardNav;
