import { NextPage } from "next";
import { Container, Typography, Wide } from "..";
import FAQItem from "./FAQItem/FAQItem";
import { attributes as about } from "../../../content/about.md";

interface IFAQ {
	question: string;
	answer: string;
}

const FAQ: NextPage = () => {
	return (
		<section className="my-36">
			<Container>
				<Wide
					master={
						<>
							<Typography variant="h2">Frequently Asked Questions</Typography>
							<Typography variant="lead">{about.faqDescription}</Typography>
						</>
					}
					slave={
						<>
							{about.faq.map((item: IFAQ, i: number) => (
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
