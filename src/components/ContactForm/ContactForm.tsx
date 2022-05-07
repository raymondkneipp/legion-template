import { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
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
							<Typography variant="lead">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
								velit cumque tenetur harum. Mollitia dolores, modi voluptatem
								hic magnam quae necessitatibus vel dolorem dolorum. Ut optio
								eveniet sequi neque veritatis.
							</Typography>

							<DescriptionList header="OTHER WAYS TO REACH US">
								<DescriptionListItem icon={FiPhone}>
									(777) 777-7777
								</DescriptionListItem>

								<DescriptionListItem icon={FiMail}>
									example@example.com
								</DescriptionListItem>
								<DescriptionListItem icon={FiMapPin}>
									2442 Otter Ave Providence Rhode Island 03451
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
