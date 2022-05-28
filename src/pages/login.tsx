import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	Alert,
	ColoredLink,
	Container,
	Input,
	Logo,
	Submit,
	Typography,
} from "@components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "@store";
import { login, signup } from "@store/auth/auth.actions";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface ILoginValues {
	Email: string;
	Password: string;
}

const Login: NextPage = () => {
	const { id } = useAppSelector((state) => state.post);
	const { authenticated, loading, error } = useAppSelector(
		(state) => state.auth
	);
	const { register, handleSubmit } = useForm<ILoginValues>();
	const router = useRouter();

	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<ILoginValues> = (data) => {
		dispatch(login({ email: data.Email, password: data.Password }));
	};

	useEffect(() => {
		if (authenticated && !loading) {
			router.push("/dashboard");
		}
	}, [authenticated, loading]);

	return (
		<>
			<NextSeo title="Login" />
			<Container>
				<div className="py-10 max-w-sm space-y-6 flex items-center flex-col justify-center min-h-screen m-auto">
					<Logo />
					<Typography variant="h3" element="h1">
						Post {id}
					</Typography>
					<form
						className="space-y-6 self-stretch flex flex-col"
						onSubmit={handleSubmit(onSubmit)}
					>
						{error && <Alert text={error} variant="danger" />}
						<Input label="Email" type="email" register={register} />
						<Input label="Password" type="password" register={register} />
						<div className="flex items-center justify-between">
							<ColoredLink to="/" page="Back to Site" />
							<Submit>Log In</Submit>
						</div>
					</form>
				</div>
			</Container>
		</>
	);
};

export default Login;
