import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  to: string;
  page: string;
}

const PageLink: NextPage<Props> = ({ to, page }) => {
  return (
    <Link href={to}>
      <a className="rounded-xl hover:underline text-gray-600">{page}</a>
    </Link>
  );
};

export default PageLink;
