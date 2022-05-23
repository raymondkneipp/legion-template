import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	ColoredLink,
	Container,
	Input,
	Logo,
	Submit,
	Typography,
} from "@components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "@store";

interface ILoginValues {
	Email: string;
	Password: string;
}

const Login: NextPage = () => {
	const { id } = useAppSelector((state) => state.post);
	const { register, handleSubmit } = useForm<ILoginValues>();

	const onSubmit: SubmitHandler<ILoginValues> = (data) => {
		alert(JSON.stringify(data));
	};

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
						<Input label="Email" type="email" register={register} />
						<Input label="Password" type="password" register={register} />
						<div className="flex items-center justify-between">
							<ColoredLink to="/" page="Back" />
							<Submit>Log In</Submit>
						</div>
					</form>
				</div>
			</Container>
		</>
	);
};

export default Login;
