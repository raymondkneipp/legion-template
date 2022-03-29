import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  to: string;
  secondary?: boolean;
  lg?: boolean;
}

const Button: NextPage<Props> = ({ to, secondary, lg, children }) => {
  // const base = 'font-bold inline-block text-center';
  // const conditional = secondary
  //   ? 'hover:underline rounded-full px-1'
  //   : 'border-2 rounded-full py-2 px-4 hover:bg-white hover:text-sky-700 transition-colors';
  // const color = light
  //   ? 'text-white border-white'
  //   : 'text-sky-700 border-sky-700';

  // const size = lg ? 'py-4 px-8 text-lg' : '';

  // const styles = base + ' ' + conditional + ' ' + color + ' ' + size;

  const base =
    'font-bold inline-block text-center rounded-full transition-colors';
  const theme = !secondary
    ? 'bg-sky-700 text-white hover:bg-sky-500'
    : 'bg-gray-200 text-sky-700 hover:bg-white';
  const size = lg ? 'py-4 px-8 text-lg' : 'py-2 px-4';

  const styles = base + ' ' + theme + ' ' + size;

  return (
    <Link href={to}>
      <a className={styles}>{children}</a>
    </Link>
  );
};

export default Button;
