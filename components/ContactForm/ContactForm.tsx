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

interface IFormValues {
  'Full Name': string;
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi ducimus magnam aliquam quae facere minus totam earum.
                Deleniti
              </Typography>

              <DescriptionList header="OTHER WAYS TO REACH US">
                <DescriptionListItem icon={FaPhone}>
                  +1 (987) 654-3210
                </DescriptionListItem>
                <DescriptionListItem icon={FaEnvelope}>
                  support@example.com
                </DescriptionListItem>
                <DescriptionListItem icon={FaMapMarkerAlt}>
                  1234 Main DescriptionSt. CA 94015
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
