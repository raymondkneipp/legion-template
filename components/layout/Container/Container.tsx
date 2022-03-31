import { NextPage } from 'next';

const Container: NextPage = ({ children }) => (
  <div className="container mx-auto px-2">{children}</div>
);

export default Container;
