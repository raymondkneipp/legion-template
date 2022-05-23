import { store } from "@store";

const BASE_URL = "http://localhost:5000";

const patcher = async (url: string, body: object) => {
	const postId = store.getState().post.id;
	const res = await fetch(`${BASE_URL}/${url}?postId=${postId}`, {
		method: "PATCH",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const data = await res.json();

	return data;
};

export default patcher;
