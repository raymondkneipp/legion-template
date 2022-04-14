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
} from "components/index";
import { attributes as affiliated } from "content/affiliated.md";

const AffiliatedPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="Affiliated Websites" description="CHANGE ME" />
			<section className="my-36">
				<Container>
					<Wide
						master={
							<>
								<Typography variant="h1">Affiliated Websites</Typography>
								<Typography variant="lead">{affiliated.description}</Typography>
							</>
						}
						slave={
							<>
								{affiliated &&
									affiliated.lists &&
									affiliated.lists.map((list: any, i: number) => (
										<DescriptionList header={list.title} key={i}>
											{list.links.map((item: any, j: number) => (
												<DescriptionListItem key={j + i}>
													<PageLink to={item.link} page={item.text} />
												</DescriptionListItem>
											))}
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
