import { NextPage } from "next";
import React from "react";
import { Container } from "../../components/index";
import { useTheme } from "../../store/ThemeContext";

const Banner: NextPage = ({ children }) => {
	const { color } = useTheme();

	return (
		<aside className={`bg-${color}-800 text-center py-3`}>
			<Container>
				<div className="flex items-center justify-center space-x-4">
					{children}
				</div>
			</Container>
		</aside>
	);
};

export default Banner;
