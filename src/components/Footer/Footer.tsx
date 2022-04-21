import { NextPage } from "next";
import {
	Container,
	DescriptionList,
	DescriptionListItem,
	Tall,
	Typography,
	PageLink,
	Logo,
} from "../../components/index";
import { attributes as post } from "../../../content/post.md";
import { attributes as address } from "../../../content/address.md";
import { attributes as contact } from "../../../content/contact.md";

interface ISocial {
	account: string;
	link: string;
}

const Footer: NextPage = () => {
	return (
		<footer className="py-10 bg-gray-100">
			<Container>
				<Tall
					master={
						<>
							<Logo />
							<Typography variant="p">
								{post.name} American Legion Post {post.number} located on{" "}
								{address.street} {address.city}, {address.state} {address.zip}
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
									<PageLink to="/admin" page="Login" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="/apply" page="Apply" />
								</DescriptionListItem>
							</DescriptionList>
							<DescriptionList header="SOCIAL">
								{contact.socials.map((social: ISocial, i: number) => (
									<DescriptionListItem key={i}>
										<PageLink to={social.link} page={social.account} />
									</DescriptionListItem>
								))}
							</DescriptionList>
						</div>
					}
				/>
				<div className="flex items-center justify-center text-center space-x-1 text-gray-600 pt-10">
					<Typography variant="p">
						© {new Date().getFullYear()} {post.name} American Legion Post{" "}
						{post.number}
					</Typography>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
