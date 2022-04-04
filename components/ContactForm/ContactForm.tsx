import { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import {
  Container,
  DescriptionList,
  DescriptionListItem,
  Input,
  Submit,
  Tall,
  Textarea,
  Typography,
} from '..';
import { attributes } from '../../content/contact.md';

interface IFormValues {
  'Full Name': string;
  Email: string;
  Message: string;
}

const ContactForm: NextPage = () => {
  let { info, email, phone, address, city, state, zip } = attributes;
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
              <Typography variant="lead">{info}</Typography>

              <DescriptionList header="OTHER WAYS TO REACH US">
                <DescriptionListItem icon={FaPhone}>
                  {phone}
                </DescriptionListItem>

                <DescriptionListItem icon={FaEnvelope}>
                  {email}
                </DescriptionListItem>
                <DescriptionListItem icon={FaMapMarkerAlt}>
                  {address} {city} {state} {zip}
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
