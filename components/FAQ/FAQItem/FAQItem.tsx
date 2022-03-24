import { NextPage } from 'next';

interface Props {
  title: string;
  content: string;
}

const FAQItem: NextPage<Props> = ({ title, content }) => {
  return (
    <article className="space-y-2">
      <header>
        <h3 className="text-lg">{title}</h3>
      </header>
      <p className="text-gray-500">{content}</p>
    </article>
  );
};

export default FAQItem;
