import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  to: string;
}

const ActiveLink: NextPage<Props> = ({ to, children }) => {
  const router = useRouter();
  const styles = `${
    router.pathname == to
      ? 'bg-gray-200'
      : 'hover:bg-sky-800 hover:text-white transition-colors'
  } rounded-xl py-2 px-4`;

  return (
    <Link href={to}>
      <a className={styles}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
