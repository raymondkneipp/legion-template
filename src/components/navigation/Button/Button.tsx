import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  to: string;
  secondary?: boolean;
  lg?: boolean;
  sm?: boolean;
}

const Button: NextPage<Props> = ({ to, secondary, lg, sm, children }) => {
  const base = 'inline-block text-center rounded-xl transition-colors';
  const theme = !secondary
    ? 'bg-sky-800 text-white hover:bg-sky-600'
    : 'bg-gray-200 text-sky-800 hover:bg-white';
  let size;

  switch (true) {
    case lg:
      size = 'py-3 px-6 md:py-4 md:px-8 md:text-lg font-bold';
      break;
    case sm:
      size = 'py-1 px-2 font-base';
      break;
    default:
      size = 'py-2 px-4 font-bold';
  }

  const styles = base + ' ' + theme + ' ' + size;

  return (
    <Link href={to}>
      <a className={styles}>{children}</a>
    </Link>
  );
};

export default Button;
