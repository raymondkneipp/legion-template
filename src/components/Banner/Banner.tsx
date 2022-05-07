import { NextPage } from "next";
import React from "react";
import { Container, Typography } from "@components";
import { useAppSelector } from "@store";

const Banner: NextPage = () => {
	const { show, text } = useAppSelector((state) => state.banner);
	const { color } = useAppSelector((state) => state.theme);

	if (show) {
		return (
			<aside className={`bg-${color}-800 text-center py-3`}>
				<Container>
					<div className="flex items-center justify-center space-x-4">
						<Typography variant="p" color="light">
							{text}
						</Typography>
					</div>
				</Container>
			</aside>
		);
	} else {
		return null;
	}
};

export default Banner;
