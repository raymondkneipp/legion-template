import { NextPage } from "next";

interface Props {
	prose?: boolean;
}

const Container: NextPage<Props> = ({ children, prose }) => {
	let styles = "container mx-auto px-2";

	switch (true) {
		case prose:
			styles += " max-w-prose";
			break;
	}

	return <div className={styles}>{children}</div>;
};

export default Container;
