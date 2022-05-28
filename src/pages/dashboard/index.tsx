import type { NextPage } from "next";
import { Input, DashboardLayout } from "@components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@store";
import { updatePostData } from "@store/post/post.actions";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface IGeneralValues {
	Name: string;
}

const Dashboard: NextPage = () => {
	const router = useRouter();
	const { name } = useAppSelector((state) => state.post);
	const { authenticated, loading } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const { register, handleSubmit } = useForm<IGeneralValues>({
		defaultValues: { Name: name },
	});

	const onSubmit: SubmitHandler<IGeneralValues> = (data) => {
		dispatch(updatePostData(data.Name));
	};

	useEffect(() => {
		if (!authenticated && !loading) {
			router.push("/login");
		}
	}, [authenticated, loading]);

	if (authenticated) {
		return (
			<DashboardLayout onSubmit={handleSubmit(onSubmit)}>
				<Input label="Name" register={register} />
			</DashboardLayout>
		);
	}

	return null;
};

export default Dashboard;
