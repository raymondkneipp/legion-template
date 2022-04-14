const getNews = async () => {
	const markdownFiles = require
		.context("../../content/news", false, /\.md$/)
		.keys()
		.map((relativePath) => relativePath.substring(2));

	return Promise.all(
		markdownFiles.map(async (path) => {
			const markdown = await import(`../../content/news/${path}`);

			const { html, attributes } = markdown;

			return {
				attributes,
				html,
				slug: path.substring(0, path.length - 3),
			};
		})
	);
};

export default getNews;
