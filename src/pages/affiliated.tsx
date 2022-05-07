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
} from "@components";

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
								<Typography variant="lead">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Laudantium rerum tempora veniam necessitatibus. Laborum quod
									nam incidunt. Repellendus laboriosam quia nam aliquam rerum,
									eligendi ducimus rem provident, libero odit illo?
								</Typography>
							</>
						}
						slave={
							<>
								<DescriptionList header="Some Links">
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
								</DescriptionList>

								<DescriptionList header="Some Links">
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
								</DescriptionList>

								<DescriptionList header="Some Links">
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
									<DescriptionListItem>
										<PageLink to="https://google.com" page="Google" />
									</DescriptionListItem>
								</DescriptionList>
							</>
						}
					/>
				</Container>
			</section>
		</Layout>
	);
};

export default AffiliatedPage;
