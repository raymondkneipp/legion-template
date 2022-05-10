import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { SEO } from "@utils";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@store";
import { Tenant } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Tenant>
				<Head>
					<link rel="shortcut icon" href="/favicon.svg" />
				</Head>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</Tenant>
		</Provider>
	);
}

export default MyApp;
