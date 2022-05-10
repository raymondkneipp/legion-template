import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Container, Input, Layout, Submit, Typography } from "@components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "@store";
import { setText } from "@store/banner/banner.slice";
import { getBanner } from "@store/banner/banner.actions";
import { getTheme } from "@store/theme/theme.actions";

interface IFormValues {
	Banner: string;
}

const ContactPage: NextPage = () => {
	const { register, handleSubmit } = useForm<IFormValues>();
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		dispatch(setText(data.Banner));
	};

	return (
		<Layout>
			<NextSeo title="Dashboard" description="CHANGE ME" />
			<Container>
				<section className="my-36">
					<Typography variant="h1">Dashboard</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input label="Banner" register={register} />
						<Submit>Save</Submit>
					</form>
				</section>
			</Container>
		</Layout>
	);
};

export default ContactPage;
