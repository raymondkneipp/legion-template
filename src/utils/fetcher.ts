import { store } from "@store";

const BASE_URL = "http://localhost:5000";

const fetcher = async (url: string) => {
	const postId = store.getState().post.id;
	const res = await fetch(`${BASE_URL}/${url}?postId=${postId}`);
	const data = await res.json();

	return data;
};

export default fetcher;
