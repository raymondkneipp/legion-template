import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  to: string;
  secondary?: boolean;
  light?: boolean;
}

const Button: NextPage<Props> = ({ to, secondary, light, children }) => {
  const base = 'font-bold inline-block';
  const conditional = secondary
    ? 'hover:underline rounded-md px-1'
    : 'border-2 rounded-full py-2 px-4';
  const color = light
    ? 'text-white border-white'
    : 'text-sky-700 border-sky-700';

  const styles = base + ' ' + conditional + ' ' + color;

  return (
    <Link href={to}>
      <a className={styles}>{children}</a>
    </Link>
  );
};

export default Button;
