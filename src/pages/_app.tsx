import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../utils/seo.config";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
