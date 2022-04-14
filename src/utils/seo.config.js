import { attributes as post } from "../../content/post.md";

export default {
	titleTemplate: `%s | ${post.name} American Legion Post ${post.number}`,
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
