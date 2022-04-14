import { NextPage } from "next";

interface Props {
	color: string;
	flip?: boolean;
	bottom?: boolean;
}

/* https://www.shapedivider.app/ */
/* Copy and replace path element only */

const Divider: NextPage<Props> = ({ color, flip = false, bottom = false }) => {
	return (
		<div
			className={`absolute left-0 w-full overflow-hidden text-${color} rotate-180 pointer-events-none z-10 ${
				flip ? "rotate-180" : "rotate-0"
			} ${bottom ? "bottom-0" : "top-0"}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				className="relative block w-full h-8 md:h-20 fill-current"
			>
				<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
			</svg>
		</div>
	);
};

export default Divider;
