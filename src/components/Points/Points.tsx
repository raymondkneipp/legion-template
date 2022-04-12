import { NextPage } from 'next';
import { FaMedal } from 'react-icons/fa';
import { Container, IconCard, Tile } from '..';

const Points: NextPage = () => {
  return (
    <section className="my-10 py-20 bg-sky-800">
      <Container>
        <Tile>
          <IconCard
            icon={FaMedal}
            title="Lorem, ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
            light
            stack
            center
          />
          <IconCard
            icon={FaMedal}
            title="Lorem, ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
            light
            stack
            center
          />
          <IconCard
            icon={FaMedal}
            title="Lorem, ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
            light
            stack
            center
          />
          <IconCard
            icon={FaMedal}
            title="Lorem, ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
            light
            stack
            center
          />
          <IconCard
            icon={FaMedal}
            title="Lorem, ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
            light
            stack
            center
          />
          <IconCard
            icon={FaMedal}
            title="Lorem, ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus quaerat voluptatum atque repellat at a pariatur assumenda"
            light
            stack
            center
          />
        </Tile>
      </Container>
    </section>
  );
};

export default Points;
