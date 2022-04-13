import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	Container,
	DescriptionList,
	DescriptionListItem,
	Layout,
	PageLink,
	Typography,
	Wide,
} from "../components";
import { attributes as affiliated } from "../../content/affiliated.md";

const AffiliatedPage: NextPage = () => {
	console.log(affiliated);
	return (
		<Layout>
			<NextSeo title="Affiliated Websites" description="CHANGE ME" />
			<section className="my-36">
				<Container>
					<Wide
						master={
							<>
								<Typography variant="h1">Affiliated Websites</Typography>
								<Typography variant="lead">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
									odio iure suscipit a eum fugit illum. Deserunt, voluptatum
									possimus aliquam laudantium ipsam praesentium reprehenderit,
									maxime numquam quibusdam iure facilis fugit.
								</Typography>
							</>
						}
						slave={
							<>
								{affiliated.lists.map((list: any, i: number) => (
									<DescriptionList header={list.title} key={i}>
										<DescriptionListItem>
											{list.links.map((item: any, j: number) => (
												<PageLink to={item.link} page={item.title} key={j} />
											))}
										</DescriptionListItem>
									</DescriptionList>
								))}
							</>
						}
					/>
				</Container>
			</section>
		</Layout>
	);
};

export default AffiliatedPage;
