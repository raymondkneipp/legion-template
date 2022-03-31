import { NextPage } from 'next';
import { Card, Container, Typography, Wide } from '..';

const News: NextPage = () => {
  return (
    <section className="my-36">
      <Container>
        <Wide
          master={
            <>
              <Typography variant="h2">Read The Latest News</Typography>
              <div className="max-w-2xl">
                <Typography variant="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore sit debitis facilis, corrupti eius hic quo tempora
                  repellat rem quibusdam velit non quod dicta
                </Typography>
              </div>
            </>
          }
          slave={
            <>
              <Card
                image="/extras/1.jpg"
                date="6 May 22"
                title="Lorem, ipsum dolor sit amet"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at nobis distinctio inventore qui consectetur veniam enim. Odio in eveniet voluptatibus iusto odit vel, asperiores voluptatem magni excepturi nam ipsam?"
              />
              <Card
                image="/extras/2.jpg"
                date="6 May 22"
                title="Lorem, ipsum dolor sit amet"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at nobis distinctio inventore qui consectetur veniam enim. Odio in eveniet voluptatibus iusto odit vel, asperiores voluptatem magni excepturi nam ipsam?"
              />
              <Card
                image="/extras/3.jpg"
                date="6 May 22"
                title="Lorem, ipsum dolor sit amet"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at nobis distinctio inventore qui consectetur veniam enim. Odio in eveniet voluptatibus iusto odit vel, asperiores voluptatem magni excepturi nam ipsam?"
              />
            </>
          }
        />
      </Container>
    </section>
  );
};

export default News;
