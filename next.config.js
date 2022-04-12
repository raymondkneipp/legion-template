/** @type {import('next').NextConfig} */
const fs = require("fs");

const nextConfig = {
	reactStrictMode: true,
	webpack: (cfg) => {
		cfg.module.rules.push({
			test: /\.md$/,
			loader: "frontmatter-markdown-loader",
			// options: { mode: ["react-component"] },
		});
		return cfg;
	},
};

module.exports = nextConfig;
