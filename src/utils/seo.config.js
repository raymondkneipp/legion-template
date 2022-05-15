import { store } from "@store";

const { id, name } = store.getState().post;

export default {
	titleTemplate: `%s | ${name} American Legion Post ${id}`,
	twitter: {
		handle: "@handle",
		site: "@site",
		cardType: "summary_large_image",
	},
	openGraph: {
		images: [
			{
				url: "http://localhost:3000/hero.jpg",
				alt: "Hero image alt",
			},
		],
	},
};
