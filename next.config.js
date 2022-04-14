/** @type {import('next').NextConfig} */
const fs = require("fs");
const path = require("path");

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
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
};

module.exports = nextConfig;
