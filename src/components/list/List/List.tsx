import { NextPage } from 'next';
import { IconType } from 'react-icons';
import { Typography } from '../..';

const List: NextPage = ({ children }) => (
  <ul className="space-y-4">{children}</ul>
);

export default List;
