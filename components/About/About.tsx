import { NextPage } from 'next';
import { FaBullseye, FaEye } from 'react-icons/fa';
import { Container, IconCard, Tall, Typography } from '..';
import { attributes as legion } from '../../content/legion.md';
import { attributes as about } from '../../content/about.md';

const About: NextPage = () => {
  let { post, tagline } = legion;
  let { mission, vision } = about;

  return (
    <section className="my-36">
      <Container>
        <Tall
          master={
            <>
              <Typography variant="h1">
                We Are <span className="text-sky-700">Post {post}</span>
              </Typography>
              <Typography variant="lead">{tagline}</Typography>
            </>
          }
          slave={
            <>
              <IconCard title="Our Vision" content={vision} icon={FaEye} />
              <IconCard
                title="Our Mission"
                content={mission}
                icon={FaBullseye}
              />
            </>
          }
        />
      </Container>
    </section>
  );
};

export default About;
