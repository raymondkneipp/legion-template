import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  to: string;
  page: string;
}

const PageLink: NextPage<Props> = ({ to, page }) => {
  return (
    <Link href={to}>
      <a className="rounded-full py-1 px-2 hover:underline">{page}</a>
    </Link>
  );
};

export default PageLink;
