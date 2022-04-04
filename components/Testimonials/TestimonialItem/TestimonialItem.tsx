import { NextPage } from 'next';
import { FaStar } from 'react-icons/fa';
import { Typography } from '../..';
import styles from './TestimonialItem.module.css';

interface Props {
  quote: string;
  name: string;
  image: string;
  stars: number;
}

const TestimonialItem: NextPage<Props> = ({ quote, name, image, stars }) => {
  return (
    <figure className={styles.testimonialItem__grid}>
      <div className={styles.testimonialItem__image}>
        <h6>iamge</h6>
      </div>
      <div className={styles.testimonialItem__header}>
        <Typography variant="p" element="figcaption">
          {name}
        </Typography>
        <div className="flex space-x-2 text-gray-600">
          {[...Array(stars)].map((e, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
      <div className={styles.testimonialItem__quote}>
        <Typography variant="p" element="blockquote">
          &quot;{quote}&quot;
        </Typography>
      </div>
    </figure>
  );
};

export default TestimonialItem;
