import { NextPage } from "next";
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
								<DescriptionListItem>
									<PageLink to="https://www.facebook.com" page="Facebook" />
								</DescriptionListItem>
								<DescriptionListItem>
									<PageLink to="https://www.twitter.com" page="Twitter" />
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
