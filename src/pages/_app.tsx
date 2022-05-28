import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useAppDispatch, useAppSelector, wrapper } from "@store";
import { setId } from "@store/post/post.slice";
import { getPostData } from "@store/post/post.actions";
import { getTheme } from "@store/theme/theme.actions";
import { getBanner } from "@store/banner/banner.actions";
import { getHero } from "@store/hero/hero.actions";
import { getNews } from "@store/news/news.actions";
import { getContact } from "@store/contact/contact.actions";
import { SEO } from "@components";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@utils";
import { clear, setUser } from "@store/auth/auth.slice";

interface CustomAppProps extends AppProps {
	found?: boolean;
}

function MyApp({ Component, pageProps, found = true }: CustomAppProps) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser(user.email));
			} else {
				dispatch(clear());
			}
		});

		return unsubscribe;
	}, []);

	return (
		<>
			<SEO />
			{found ? (
				<Component {...pageProps} />
			) : (
				<>
					<h1>Not Found</h1>
				</>
			)}
		</>
	);
}

MyApp.getInitialProps = wrapper.getInitialPageProps(
	(store) => async (context: any) => {
		const { req, res } = context.ctx;
		if (res) {
			// Get subdomain
			const id = req.headers.host.split(".")[0];
			const isDev =
				!process.env.NODE_ENV || process.env.NODE_ENV === "development";

			store.dispatch(setId(id));

			if (isDev) {
				if (id === "localhost:3000") {
					// No subdomain given
					return { found: false };
				}
			} else {
				// In production
				if (id === "alpost") {
					// No subdomain given
					return { found: false };
				}
			}

			await store.dispatch(getPostData());

			// Check if subdomain is in database
			if (!store.getState().post.name) {
				return { found: false };
			}

			await store.dispatch(getTheme());
			await store.dispatch(getBanner());
			await store.dispatch(getHero());
			await store.dispatch(getNews());
			await store.dispatch(getContact());
		}
	}
);

export default wrapper.withRedux(MyApp);
