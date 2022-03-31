import { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Input, Submit, Textarea, Typography } from '..';
import ContactItem from './ContactItem/ContactItem';

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
    <section className="container mx-auto px-2 my-36 grid grid-cols-2 gap-12">
      <div className="space-y-6">
        <Typography variant="h1">Contact Us</Typography>
        <Typography variant="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          ducimus magnam aliquam quae facere minus totam earum. Deleniti
        </Typography>
        <ContactItem icon={FaPhone}>+1 (987) 654-3210</ContactItem>
        <ContactItem icon={FaEnvelope}>support@example.com</ContactItem>
        <ContactItem icon={FaMapMarkerAlt}>1234 Main St. CA 94015</ContactItem>
      </div>
      <form
        className="flex flex-col space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input register={register} label="Full Name" />
        <Input register={register} label="Email" type="email" />
        <Textarea register={register} label="Message" />
        <Submit>Send</Submit>
      </form>
    </section>
  );
};

export default ContactForm;
