import { NextPage } from 'next';

interface Props {
  title: string;
  content: string;
}

const TrustedItem: NextPage<Props> = ({ title, content }) => {
  return (
    <article className="flex items-center flex-col">
      <h3 className="text-5xl text-sky-700 font-bold text-center">{title}</h3>
      <p className="text-xl text-gray-500 text-center">{content}</p>
    </article>
  );
};

export default TrustedItem;
