import { NextPage } from "next";
import { Container, Typography, Wide } from "../../components/index";
import FAQItem from "./FAQItem/FAQItem";

interface IFAQ {
	question: string;
	answer: string;
}

const qa: IFAQ[] = [
	{
		question:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus fugit totam eaque ratione earum quisquam aperiam, id obcaecati error porro vero sit iste reiciendis enim qui quis! Nam, dolorem?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore autem error culpa sed perspiciatis, cum laboriosam quas saepe exercitationem repellat. Dolorum autem eveniet blanditiis labore voluptas error corrupti quae?",
	},
	{
		question:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus fugit totam eaque ratione earum quisquam aperiam, id obcaecati error porro vero sit iste reiciendis enim qui quis! Nam, dolorem?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore autem error culpa sed perspiciatis, cum laboriosam quas saepe exercitationem repellat. Dolorum autem eveniet blanditiis labore voluptas error corrupti quae?",
	},
	{
		question:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus fugit totam eaque ratione earum quisquam aperiam, id obcaecati error porro vero sit iste reiciendis enim qui quis! Nam, dolorem?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore autem error culpa sed perspiciatis, cum laboriosam quas saepe exercitationem repellat. Dolorum autem eveniet blanditiis labore voluptas error corrupti quae?",
	},
	{
		question:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus fugit totam eaque ratione earum quisquam aperiam, id obcaecati error porro vero sit iste reiciendis enim qui quis! Nam, dolorem?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore autem error culpa sed perspiciatis, cum laboriosam quas saepe exercitationem repellat. Dolorum autem eveniet blanditiis labore voluptas error corrupti quae?",
	},
	{
		question:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus fugit totam eaque ratione earum quisquam aperiam, id obcaecati error porro vero sit iste reiciendis enim qui quis! Nam, dolorem?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore autem error culpa sed perspiciatis, cum laboriosam quas saepe exercitationem repellat. Dolorum autem eveniet blanditiis labore voluptas error corrupti quae?",
	},
	{
		question:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus fugit totam eaque ratione earum quisquam aperiam, id obcaecati error porro vero sit iste reiciendis enim qui quis! Nam, dolorem?",
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore autem error culpa sed perspiciatis, cum laboriosam quas saepe exercitationem repellat. Dolorum autem eveniet blanditiis labore voluptas error corrupti quae?",
	},
];

const FAQ: NextPage = () => {
	return (
		<section className="my-36">
			<Container>
				<Wide
					master={
						<>
							<Typography variant="h2">Frequently Asked Questions</Typography>
							<Typography variant="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Excepturi eligendi necessitatibus dicta corrupti ex sint atque
								mollitia aliquam quisquam dolorum ullam hic accusamus
								blanditiis, rerum fuga reprehenderit modi. Exercitationem,
								magnam?
							</Typography>
						</>
					}
					slave={
						<>
							{qa.map((item: IFAQ, i: number) => (
								<FAQItem key={i} title={item.question} content={item.answer} />
							))}
						</>
					}
				/>
			</Container>
		</section>
	);
};

export default FAQ;
