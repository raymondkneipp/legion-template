module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		"text-gray-100",
		{
			pattern: /(bg|text)-(red|green|blue)-(800|600)/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
