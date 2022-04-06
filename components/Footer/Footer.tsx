import { NextPage } from "next";
import Image from "next/image";
import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaTiktok,
	FaRegCopyright,
} from "react-icons/fa";
import {
	Container,
	DescriptionList,
	DescriptionListItem,
	Tall,
	Typography,
} from "..";
import PageLink from "./PageLink/PageLink";
import { attributes } from "../../content/about.md";

const Footer: NextPage = () => {
	let { tagline, title, post } = attributes;
	return (
		<footer className="py-10">
			<Container>
				<Tall
					master={
						<>
							<Image
								src="/American-Legion-Emblem.png"
								alt="Logo"
								width={80}
								height={80}
								layout="fixed"
							/>
							<Typography variant="p">{tagline}</Typography>
						</>
					}
					slave={
						<div className="flex flex-wrap justify-around gap-6 col-span-2">
							<DescriptionList header="PAGES">
								<DescriptionListItem>
									<PageLink to="/" page="Home" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/about" page="About" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/news" page="News" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/contact" page="Contact" />
								</DescriptionListItem>
							</DescriptionList>
							<DescriptionList header="OTHER">
								<DescriptionListItem>
									<PageLink to="/links" page="Affiliated Websites" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/admin" page="Login" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/not-found" page="404" />
								</DescriptionListItem>
							</DescriptionList>
							<DescriptionList header="SOCIAL">
								<DescriptionListItem icon={FaFacebook}>
									<PageLink to="https://www.facebook.com/" page="Facebook" />
								</DescriptionListItem>
								<DescriptionListItem icon={FaInstagram}>
									<PageLink
										to="https://www.instagram.com/?hl=en"
										page="Instagram"
									/>
								</DescriptionListItem>
								<DescriptionListItem icon={FaTwitter}>
									<PageLink to="https://twitter.com/?lang=en" page="Twitter" />
								</DescriptionListItem>
								<DescriptionListItem icon={FaLinkedin}>
									<PageLink to="https://www.linkedin.com/" page="LinkedIn" />
								</DescriptionListItem>
								<DescriptionListItem icon={FaTiktok}>
									<PageLink to="https://www.tiktok.com/en/" page="TikTok" />
								</DescriptionListItem>
							</DescriptionList>
						</div>
					}
				/>

				<div className="space-x-1 flex items-center justify-center text-gray-600 pt-10">
					<FaRegCopyright />
					<Typography variant="p">
						{new Date().getFullYear()} {title} American Legion Post {post}
					</Typography>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
