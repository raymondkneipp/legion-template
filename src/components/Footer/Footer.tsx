import { NextPage } from "next";
import {
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsPinterest,
	BsTwitter,
	BsYoutube,
} from "react-icons/bs";
import {
	Container,
	DescriptionList,
	DescriptionListItem,
	Tall,
	Typography,
	PageLink,
	Logo,
} from "@components";
import { useAppSelector } from "@store";

const Footer: NextPage = () => {
	const { id, name } = useAppSelector((state) => state.post);
	const { address } = useAppSelector((state) => state.contact);

	return (
		<footer className="py-10 bg-gray-100">
			<Container>
				<Tall
					master={
						<>
							<Logo />
							<Typography variant="p">
								{name} American Legion Post {id} located on {address.street}{" "}
								{address.city}, {address.state} {address.zip}
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
									<PageLink to="/events" page="Events" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/contact" page="Contact" />
								</DescriptionListItem>
							</DescriptionList>
							<DescriptionList header="OTHER">
								<DescriptionListItem>
									<PageLink to="/affiliated" page="Affiliated Websites" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/login" page="Login" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/apply" page="Apply" />
								</DescriptionListItem>
							</DescriptionList>
							<DescriptionList header="SOCIAL">
								<DescriptionListItem icon={BsFacebook}>
									<PageLink to="https://www.facebook.com" page="Facebook" />
								</DescriptionListItem>
								<DescriptionListItem icon={BsTwitter}>
									<PageLink to="https://www.twitter.com" page="Twitter" />
								</DescriptionListItem>
								<DescriptionListItem icon={BsInstagram}>
									<PageLink to="https://www.instagram.com" page="Instagram" />
								</DescriptionListItem>
								<DescriptionListItem icon={BsYoutube}>
									<PageLink to="https://www.youtube.com" page="YouTube" />
								</DescriptionListItem>
								<DescriptionListItem icon={BsPinterest}>
									<PageLink to="https://www.pinterest.com" page="Pinterest" />
								</DescriptionListItem>
								<DescriptionListItem icon={BsLinkedin}>
									<PageLink to="https://www.linkedin.com" page="LinkedIn" />
								</DescriptionListItem>
							</DescriptionList>
						</div>
					}
				/>
				<div className="flex items-center justify-center text-center space-x-1 text-gray-600 pt-10">
					<Typography variant="p">
						© {new Date().getFullYear()} {name} American Legion Post {id}
					</Typography>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
