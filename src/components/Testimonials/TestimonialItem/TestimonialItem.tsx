import { NextPage } from "next";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Typography } from "../..";
import { useTheme } from "../../../store/ThemeContext";
import styles from "./TestimonialItem.module.css";

interface Props {
	quote: string;
	name: string;
	image: string;
	title: string;
}

const TestimonialItem: NextPage<Props> = ({ quote, name, image, title }) => {
	const { radius } = useTheme();

	return (
		<figure className={`${styles.testimonialItem__grid} ${radius}`}>
			<div className={`${styles.testimonialItem__image} ${radius}`}>
				<Image
					src={image}
					layout="fill"
					objectFit="cover"
					alt={`${name}'s testimonial`}
				/>
			</div>
			<div className={styles.testimonialItem__header}>
				<Typography variant="lead" element="figcaption" color="primary">
					{name}
				</Typography>
				<Typography variant="p">{title}</Typography>
			</div>
			<div className={styles.testimonialItem__quote}>
				<Typography variant="p" element="blockquote">
					{quote}
				</Typography>
			</div>
		</figure>
	);
};

export default TestimonialItem;
