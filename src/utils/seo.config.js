import { attributes } from "./../../content/about.md";

export default {
	titleTemplate: `%s | ${attributes.title} American Legion Post ${attributes.post}`,
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
