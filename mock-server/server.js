const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let alposts = [
	{
		postId: "111",
		theme: {
			color: "sky",
			radius: "rounded-lg",
		},
		general: {
			name: "Adam Sandler",
		},
		banner: {
			show: true,
			text: "Hello from the server",
		},
	},
	{
		postId: "222",
		theme: {
			color: "violet",
			radius: "rounded-none",
		},
		general: {
			name: "Mark Spain",
		},
		banner: {
			show: true,
			text: "This is a hoedown",
		},
	},
];

app.use((req, res, next) => {
	const { postId } = req.query;

	if (!postId) {
		return res.sendStatus(404);
	}

	const postData = alposts.find((post) => post.postId === postId);

	if (!postData) {
		return res.sendStatus(404);
	}

	req.postData = postData;

	next();
});

app.get("/theme", (req, res) => {
	return res.json(req.postData.theme);
});

app.get("/", (req, res) => {
	return res.json(req.postData.general);
});

app.get("/banner", (req, res) => {
	return res.json(req.postData.banner);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
