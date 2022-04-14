import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "utils/seo.config";
import { useState } from "react";
import { ThemeContext } from "store/ThemeContext";
import { attributes as theme } from "content/theme.md";

function MyApp({ Component, pageProps }: AppProps) {
	const [color] = useState(theme.color);
	const [radius] = useState(theme.radius);

	return (
		<>
			<ThemeContext.Provider value={{ color, radius }}>
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</ThemeContext.Provider>
		</>
	);
}

export default MyApp;
