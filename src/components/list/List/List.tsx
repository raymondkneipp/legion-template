import { NextPage } from "next";

const List: NextPage = ({ children }) => (
	<ul className="space-y-4">{children}</ul>
);

export default List;
