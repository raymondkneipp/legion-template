import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { wrapper, useAppSelector } from "@store";
import { setId } from "@store/post/post.slice";
import { getPostData } from "@store/post/post.actions";
import { getTheme } from "@store/theme/theme.actions";
import { getBanner } from "@store/banner/banner.actions";
import { getHero } from "@store/hero/hero.actions";
import { getNews } from "@store/news/news.actions";
import { getContact } from "@store/contact/contact.actions";

function MyApp({ Component, pageProps }: AppProps) {
	const { id, name } = useAppSelector((state) => state.post);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
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
							url: "http://localhost:3000/hero.jpg",
							alt: "Hero image alt",
						},
					],
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

MyApp.getInitialProps = wrapper.getInitialPageProps(
	(store) => async (context: any) => {
		const { req, res } = context.ctx;
		if (res) {
			store.dispatch(setId(req.headers.host.split(".")[0]));

			await store.dispatch(getPostData());

			//if (!store.getState().post.name) {
			//res.writeHead(307, { Location: "https://alpost.org" });
			//res.end();
			//}

			await store.dispatch(getTheme());
			await store.dispatch(getBanner());
			await store.dispatch(getHero());
			await store.dispatch(getNews());
			await store.dispatch(getContact());
		}
	}
);

export default wrapper.withRedux(MyApp);
