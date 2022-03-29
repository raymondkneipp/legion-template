import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { ContactForm, Layout } from '../components';

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Contact Us" description="CHANGE ME" />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
