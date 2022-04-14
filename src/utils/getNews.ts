const getNews = async () => {
	// 	const markdownFiles = require
	// 		.context("@content/news", false, /\.md$/)
	// 		.keys()
	// 		.map((relativePath) => relativePath.substring(2));
	// 	return Promise.all(
	// 		markdownFiles.map(async (path) => {
	// 			const markdown = await import(`@content/news/${path}`);
	// 			const { html, attributes } = markdown;
	// 			return {
	// 				attributes,
	// 				html,
	// 				slug: path.substring(0, path.length - 3),
	// 			};
	// 		})
	// 	);
	return [
		{
			html: "<p>hello</p>",
			attributes: { title: "hi", date: "2019-09-26T07:58:30.996+0200" },
			slug: "1",
		},
	];
};

export default getNews;
