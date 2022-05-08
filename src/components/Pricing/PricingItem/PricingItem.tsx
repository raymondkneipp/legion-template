import { NextPage } from "next";
import { BsCheck2 } from "react-icons/bs";
import {
	Button,
	Typography,
	DescriptionList,
	DescriptionListItem,
} from "@components";
import { useAppSelector } from "@store";

interface Props {
	name: string;
	description: string;
	price: number;
	perks: string[];
}

const PricingItem: NextPage<Props> = ({ name, description, price, perks }) => {
	const { radius } = useAppSelector((state) => state.theme);

	return (
		<div
			className={`flex flex-col items-stretch space-y-6 bg-gray-100 p-6 ${radius}`}
		>
			<div className="space-y-2">
				<Typography variant="h3">{name}</Typography>
				<Typography variant="p">{description}</Typography>
			</div>
			<div className="flex items-baseline space-x-2">
				<Typography variant="h1" element="h4">
					${price}
				</Typography>
				<Typography variant="p" element="span">
					/ hr
				</Typography>
			</div>
			<Button to="/">Rent {name}</Button>

			<DescriptionList header="WHAT'S INCLUDED">
				{perks.map((perk, i) => (
					<DescriptionListItem key={perk + i} icon={BsCheck2}>
						{perk}
					</DescriptionListItem>
				))}
			</DescriptionList>
		</div>
	);
};

export default PricingItem;
