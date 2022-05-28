import type { NextPage } from "next";
import { DashboardLayout, Select } from "@components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@store";
import { updatePostData } from "@store/post/post.actions";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Color, Radius } from "@store/theme/theme.slice";
import { updateTheme } from "@store/theme/theme.actions";

interface IThemeValues {
	Color: Color;
	Radius: Radius;
}

const ThemePage: NextPage = () => {
	const router = useRouter();
	const { color, radius } = useAppSelector((state) => state.theme);
	const { authenticated, loading } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const { register, handleSubmit } = useForm<IThemeValues>({
		defaultValues: { Color: color, Radius: radius },
	});

	const onSubmit: SubmitHandler<IThemeValues> = (data) => {
		dispatch(updateTheme({ color: data.Color, radius: data.Radius }));
	};

	useEffect(() => {
		if (!authenticated && !loading) {
			router.push("/login");
		}
	}, [authenticated, loading]);

	if (authenticated) {
		return (
			<DashboardLayout onSubmit={handleSubmit(onSubmit)}>
				<Select label="Color" list={Color} register={register} />
				<Select label="Radius" list={Radius} register={register} />
			</DashboardLayout>
		);
	}

	return null;
};

export default ThemePage;
