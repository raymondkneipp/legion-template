import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { NextSeo } from "next-seo";
import {
	FiChevronRight,
	FiHome,
	FiBookOpen,
	FiPhone,
	FiBell,
	FiCalendar,
} from "react-icons/fi";
import { Centered, Container, Logo, Typography } from "@components";
import { useAppSelector } from "@store";

interface Props {
	to: string;
	icon: IconType;
	page: string;
	description: string;
}

const LinkItem: NextPage<Props> = ({ to, icon, page, description }) => {
	const { color, radius } = useAppSelector((state) => state.theme);

	return (
		<Link href={to}>
			<a
				className={`flex items-center justify-between space-x-6 hover:bg-gray-100 py-2 px-4 ${radius} transition-colors text-${color}-800`}
			>
				{React.createElement(icon, { size: 30 })}
				<div className="flex-1 text-left">
					<Typography variant="h6" element="h3">
						{page}
					</Typography>
					<Typography variant="p">{description}</Typography>
				</div>
				<FiChevronRight size={20} />
			</a>
		</Link>
	);
};

const Custom404: NextPage = () => {
	return (
		<Container>
			<NextSeo title="404 Page Not Found" description="CHANGE ME" />
			<Centered className="min-h-screen">
				<div className="flex flex-col space-y-2 items-center justify-center">
					<Logo />
					<Typography color="primary" variant="h6" element="h1">
						404 ERROR
					</Typography>
					<Typography variant="h1" element="h2">
						This page does not exist.
					</Typography>
					<Typography variant="p">
						The page you are looking for could not be found.
					</Typography>
				</div>
				<div className="flex flex-col items-stretch w-full space-y-2 pt-12">
					<LinkItem
						to="/"
						icon={FiHome}
						page="Home"
						description="Go back to start"
					/>
					<LinkItem
						to="/about"
						icon={FiBookOpen}
						page="About Us"
						description="Learn about our company"
					/>
					<LinkItem
						to="/news"
						icon={FiBell}
						page="News"
						description="Read the latest news about our post"
					/>
					<LinkItem
						to="/events"
						icon={FiCalendar}
						page="Events"
						description="View upcoming events"
					/>
					<LinkItem
						to="/contact"
						icon={FiPhone}
						page="Contact Us"
						description="Find a way to get ahold of us"
					/>
				</div>
			</Centered>
		</Container>
	);
};

export default Custom404;
