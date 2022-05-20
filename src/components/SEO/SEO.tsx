import { NextPage } from "next";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useAppSelector } from "@store";

const SEO: NextPage = () => {
	const { id, name } = useAppSelector((state) => state.post);
	const meta = name ? (
		<DefaultSeo
			titleTemplate={`%s | ${name} American Legion Post ${id}`}
			twitter={{
				handle: "@handle",
				site: "@site",
				cardType: "summary_large_image",
			}}
			openGraph={{
				images: [
					{
						url: "https://alpost.org/img/hero.jpg",
						alt: "Hero image alt",
					},
				],
			}}
		/>
	) : (
		<DefaultSeo
			title="Not Found"
			description=""
			titleTemplate={`%s | Sorry`}
			twitter={{
				handle: "@handle",
				site: "@site",
				cardType: "summary_large_image",
			}}
			openGraph={{
				images: [
					{
						url: "https://alpost.org/img/hero.jpg",
						alt: "Hero image alt",
					},
				],
			}}
		/>
	);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
			{meta}
		</>
	);
};

export default SEO;
