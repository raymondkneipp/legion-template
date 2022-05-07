import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../utils/seo.config";
import { useState } from "react";
import { Color, Radius, ThemeContext } from "../store/ThemeContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	const [color] = useState(Color.Sky);
	const [radius] = useState(Radius.Small);

	return (
		<>
			<ThemeContext.Provider value={{ color, radius }}>
				<Head>
					<link rel="shortcut icon" href="/favicon.svg" />
				</Head>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</ThemeContext.Provider>
		</>
	);
}

export default MyApp;
