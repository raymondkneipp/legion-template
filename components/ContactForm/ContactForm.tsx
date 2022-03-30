import { NextPage } from 'next';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Typography } from '..';
import ContactItem from './ContactItem/ContactItem';

const ContactForm: NextPage = () => {
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
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-sky-200 h-full w-full"></div>
      </div>
    </section>
  );
};

export default ContactForm;
