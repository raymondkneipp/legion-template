import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import {
	Container,
	DescriptionList,
	DescriptionListItem,
	Input,
	Submit,
	Tall,
	Textarea,
	Typography,
} from "..";
import { attributes as contact } from "../../../content/contact.md";
import { attributes as address } from "../../../content/address.md";

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

	return (
		<section className="my-36">
			<Container>
				<Tall
					master={
						<>
							<Typography variant="h1">Contact Us</Typography>
							<Typography variant="lead">{contact.description}</Typography>

							<DescriptionList header="OTHER WAYS TO REACH US">
								<DescriptionListItem icon={FaPhone}>
									{contact.phone}
								</DescriptionListItem>

								<DescriptionListItem icon={FaEnvelope}>
									{contact.email}
								</DescriptionListItem>
								<DescriptionListItem icon={FaMapMarkerAlt}>
									{address.street} {address.city} {address.state} {address.zip}
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
