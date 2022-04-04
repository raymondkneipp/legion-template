import { NextPage } from 'next';
import { Container, Typography, Wide } from '..';
import TestimonialItem from './TestimonialItem/TestimonialItem';
import { attributes } from '../../content/about.md';

interface Props {
  simple?: boolean;
}

const Testimonaials: NextPage<Props> = ({ simple }) => {
  let { officers } = attributes;
  let length = simple ? 3 : officers.length;

  return (
    <section className="my-36">
      <Container>
        <Wide
          master={
            <Typography variant="h2" className="text-center sm:text-left">
              Post Officers
            </Typography>
          }
          slave={
            <>
              {officers.slice(0, length).map((officer) => (
                <TestimonialItem
                  name={officer.name}
                  quote={officer.description}
                  image="6.jpg"
                  title={officer.title}
                  phone={officer.phone}
                  email={officer.email}
                />
              ))}
            </>
          }
        />
      </Container>
    </section>
  );
};

export default Testimonaials;
