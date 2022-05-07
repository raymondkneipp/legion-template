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

const Footer: NextPage = () => {
	return (
		<footer className="py-10 bg-gray-100">
			<Container>
				<Tall
					master={
						<>
							<Logo />
							<Typography variant="p">
								John Doe American Legion Post XXX located on 2442 Otter Ave
								Providence, Rhode Island 45938
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
						© {new Date().getFullYear()} John Doe American Legion Post XXX
					</Typography>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
