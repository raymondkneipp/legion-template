import { NextPage } from 'next';

interface Props {
  master: React.ReactNode;
  slave: React.ReactNode;
}

const Wide: NextPage<Props> = ({ master, slave }) => {
  return (
    <div className="space-y-12">
      <div className="space-y-6 max-w-2xl">{master}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{slave}</div>
    </div>
  );
};

export default Wide;
