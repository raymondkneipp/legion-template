import { NextPage } from 'next';

interface Props {
  master: React.ReactNode;
  slave: React.ReactNode;
}

const Tall: NextPage<Props> = ({ master, slave }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-y-12">
      {master}
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">{slave}</div>
    </div>
  );
};

export default Tall;
