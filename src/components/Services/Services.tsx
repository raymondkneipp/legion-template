import { NextPage } from 'next';
import {
  FaBullhorn,
  FaPencilAlt,
  FaGlobe,
  FaSearch,
  FaShoppingCart,
  FaVectorSquare,
} from 'react-icons/fa';
import { Button, Container, IconCard, Tall, Typography } from '..';

interface Props {
  simple?: boolean;
}

const Services: NextPage<Props> = ({ simple }) => {
  return (
    <section className="my-36">
      <Container>
        <Tall
          master={
            <>
              {simple ? (
                <Typography variant="h2">What We Offer</Typography>
              ) : (
                <Typography variant="h1">What We Offer</Typography>
              )}
              <Typography variant="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                minus quod magni hic repudiandae expedita pariatur, quae enim
                voluptates eum
              </Typography>
              {simple && (
                <Button to="/services" secondary>
                  All Services
                </Button>
              )}
            </>
          }
          slave={
            <>
              <IconCard
                title="Marketing"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
                icon={FaBullhorn}
              />
              <IconCard
                title="Copywriting"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
                icon={FaPencilAlt}
              />
              <IconCard
                title="Web Design"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
                icon={FaGlobe}
              />
              <IconCard
                title="SEO Optimization"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
                icon={FaSearch}
              />
              {!simple && (
                <>
                  <IconCard
                    title="eCommerce"
                    content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
                    icon={FaShoppingCart}
                  />
                  <IconCard
                    title="Logo Design"
                    content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
                    icon={FaVectorSquare}
                  />
                </>
              )}
            </>
          }
        />
      </Container>
    </section>
  );
};

export default Services;
