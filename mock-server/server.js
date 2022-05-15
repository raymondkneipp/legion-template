const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let alposts = [
	{
		postId: "anais",
		theme: {
			color: "violet",
			radius: "rounded-lg",
		},
		general: {
			name: "Anais",
		},
		banner: {
			show: true,
			text: "Anais is the GOAT!",
		},
		hero: {
			text: "I will see you soon then",
			image: "hero.jpg",
		},
		news: [],
	},
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
		hero: {
			text: "Hello hero from the server",
			image: "hero.jpg",
		},
		news: [
			{
				slug: "lorem-ipsum-dolor-sit-amet",
				thumbnail: "img/hero.jpg",
				date: "2019-05-12T19:11:44.396Z",
				title: "Lorem ipsum dolor sit amet",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est.",
			},
			{
				slug: "amet-consectetur-adipisicing-elit",
				thumbnail: "img/hero.jpg",
				date: "2019-05-12T19:11:44.396Z",
				title: "Amet consectetur adipisicing elit",
				content:
					"Emque reiciendis molestiae laudantium, aliquid deserunt iure temporibus?",
			},
			{
				slug: "earum-nobis-illum-doloremque-reiciendis-molestiae-laudantium",
				thumbnail: "img/hero.jpg",
				date: "2019-05-12T19:11:44.396Z",
				title: "Earum nobis illum doloremque reiciendis molestiae laudantium",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est.",
			},
		],
	},
	{
		postId: "222",
		theme: {
			color: "amber",
			radius: "rounded-none",
		},
		general: {
			name: "Mark Spain",
		},
		banner: {
			show: true,
			text: "This is a hoedown",
		},
		hero: {
			text: "Hello hero from the server",
			image: "1.jpg",
		},
		news: [
			{
				slug: "lorem-ipsum-dolor-sit-amet",
				thumbnail: "img/hero.jpg",
				date: "2019-05-12T19:11:44.396Z",
				title: "Lorem ipsum dolor sit amet",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est.",
			},
			{
				slug: "amet-consectetur-adipisicing-elit",
				thumbnail: "img/hero.jpg",
				date: "2019-05-12T19:11:44.396Z",
				title: "Amet consectetur adipisicing elit",
				content:
					"Emque reiciendis molestiae laudantium, aliquid deserunt iure temporibus?",
			},
			{
				slug: "earum-nobis-illum-doloremque-reiciendis-molestiae-laudantium",
				thumbnail: "img/hero.jpg",
				date: "2019-05-12T19:11:44.396Z",
				title: "Earum nobis illum doloremque reiciendis molestiae laudantium",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nobis illum doloremque reiciendis molestiae laudantium, aliquid deserunt iure temporibus? Voluptatibus placeat deleniti reiciendis facere odit, velit magni temporibus perspiciatis est.",
			},
		],
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

app.get("/hero", (req, res) => {
	return res.json(req.postData.hero);
});

app.get("/news", (req, res) => {
	return res.json(req.postData.news);
});

app.get("/news/:slug", (req, res) => {
	const { slug } = req.params;
	return res.json(req.postData.news.find((item) => item.slug === slug));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
