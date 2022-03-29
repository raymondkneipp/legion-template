import { NextPage } from 'next';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactItem from './ContactItem/ContactItem';

const ContactForm: NextPage = () => {
  return (
    <section className="container mx-auto px-2 my-36 grid grid-cols-2 gap-12">
      <div className="space-y-6">
        <h1 className="font-bold text-5xl">Contact Us</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
          explicabo eveniet rerum quis. Voluptate in ex et rerum totam fugiat,
          similique officia dicta magni distinctio aliquid minima nam maxime.
        </p>
        <ContactItem icon={FaPhone}>+1 (987) 654-3210</ContactItem>
        <ContactItem icon={FaEnvelope}>support@example.com</ContactItem>
        <ContactItem icon={FaMapMarkerAlt}>1234 Main St. CA 94015</ContactItem>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <p>TODO: Add form</p>
      </div>
    </section>
  );
};

export default ContactForm;
