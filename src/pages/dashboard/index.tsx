import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	Container,
	DashboardNav,
	Input,
	Submit,
	ColoredLink,
	DashboardLayout,
} from "@components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@store";
import { updatePostData } from "@store/post/post.actions";

interface IGeneralValues {
	Name: string;
}

const Dashboard: NextPage = () => {
	const { name } = useAppSelector((state) => state.post);
	const dispatch = useAppDispatch();
	const { register, handleSubmit } = useForm<IGeneralValues>({
		defaultValues: { Name: name },
	});

	const onSubmit: SubmitHandler<IGeneralValues> = (data) => {
		dispatch(updatePostData(data.Name));

		alert(JSON.stringify(data));
	};

	return (
		<>
			<NextSeo title="Dashboard" />
			<DashboardLayout onSubmit={handleSubmit(onSubmit)}>
				<Input label="Name" register={register} />
			</DashboardLayout>
		</>
	);
};

export default Dashboard;
