import { useEffect } from "react";
import { NextPage } from "next";
import { useAppDispatch } from "@store";
import { getPostData } from "@store/post/post.actions";
import { setId } from "@store/post/post.slice";
import { getTheme } from "@store/theme/theme.actions";
import { getBanner } from "@store/banner/banner.actions";
import { getHero } from "@store/hero/hero.actions";
import { getNews } from "@store/news/news.actions";

const Tenant: NextPage = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const host = window.location.host;
		const arr = host.split(".");

		if (arr.length >= 3) {
			console.log("too many subdomains");
		} else {
			dispatch(setId(arr[0]));
			dispatch(getPostData());
			dispatch(getTheme());
			dispatch(getBanner());
			dispatch(getHero());
			dispatch(getNews());
		}
	}, []);

	return children;
};

export default Tenant;
