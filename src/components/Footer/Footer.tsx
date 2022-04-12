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
import { attributes as about } from "../../../content/about.md";
import { attributes as social } from "../../../content/social.md";
import { attributes as contact } from "../../../content/contact.md";

interface ISocial {
	account: string;
	link: string;
}

const Footer: NextPage = () => {
	let { title, post } = about;
	let { address, city, state, zip } = contact;
	let { socials } = social;
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
							<Typography variant="p">
								{title} American Legion Post {post} located on {address} {city},{" "}
								{state} {zip}
							</Typography>
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
								{socials.map((social: ISocial, i: number) => (
									<DescriptionListItem key={i}>
										<PageLink to={social.link} page={social.account} />
									</DescriptionListItem>
								))}
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
