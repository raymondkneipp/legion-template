import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { SEO } from "@utils";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@store";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<Head>
					<link rel="shortcut icon" href="/favicon.svg" />
				</Head>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</Provider>
		</>
	);
}

export default MyApp;
