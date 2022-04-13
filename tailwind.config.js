module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		"text-gray-100",
		{
			pattern:
				/(bg|text)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple)-(600|700|800)/,
			variants: ["hover"],
		},
		"rounded",
		{
			pattern: /rounded-(none|sm|md|lg|xl|2xl|3xl)/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
