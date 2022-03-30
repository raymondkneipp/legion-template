import { NextPage } from 'next';
import { Typography } from '../..';

interface Props {
  title: string;
  content: string;
}

const TrustedItem: NextPage<Props> = ({ title, content }) => {
  return (
    <article className="flex items-center flex-col">
      <Typography variant="h1" element="h3" color="primary">
        {title}
      </Typography>
      <Typography variant="p">{content}</Typography>
    </article>
  );
};

export default TrustedItem;
