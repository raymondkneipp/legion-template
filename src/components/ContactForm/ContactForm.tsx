import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs";
import {
	Container,
	DescriptionList,
	DescriptionListItem,
	Input,
	Submit,
	Tall,
	Textarea,
	Typography,
} from "@components";
import { useAppSelector } from "@store";

interface IFormValues {
	"Full Name": string;
	Email: string;
	Message: string;
}

const ContactForm: NextPage = () => {
	const { register, handleSubmit } = useForm<IFormValues>();

	const onSubmit: SubmitHandler<IFormValues> = (data) => {
		alert(JSON.stringify(data));
	};

	const { content, phone, email, address } = useAppSelector(
		(state) => state.contact
	);

	return (
		<section className="my-36">
			<Container>
				<Tall
					master={
						<>
							<Typography variant="h1">Contact Us</Typography>
							<Typography variant="lead">{content}</Typography>

							<DescriptionList header="OTHER WAYS TO REACH US">
								<DescriptionListItem icon={BsTelephoneFill}>
									{phone}
								</DescriptionListItem>

								<DescriptionListItem icon={BsEnvelopeFill}>
									{email}
								</DescriptionListItem>
								<DescriptionListItem icon={BsGeoAltFill}>
									{address.street} {address.city}, {address.state} {address.zip}
								</DescriptionListItem>
							</DescriptionList>
						</>
					}
					slave={
						<form
							className="flex flex-col space-y-6 col-span-2"
							onSubmit={handleSubmit(onSubmit)}
						>
							<Input register={register} label="Full Name" />
							<Input register={register} label="Email" type="email" />
							<Textarea register={register} label="Message" />
							<Submit>Send</Submit>
						</form>
					}
				/>
			</Container>
		</section>
	);
};

export default ContactForm;
