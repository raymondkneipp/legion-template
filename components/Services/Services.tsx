import { NextPage } from 'next';
import {
  FaBullhorn,
  FaPencilAlt,
  FaGlobe,
  FaSearch,
  FaShoppingCart,
  FaVectorSquare,
} from 'react-icons/fa';
import { Button, Typography } from '..';
import ServiceItem from './ServiceItem/ServiceItem';

interface Props {
  simple?: boolean;
}

const Services: NextPage<Props> = ({ simple }) => {
  return (
    <section className="container mx-auto px-2 my-36 grid grid-cols-3 gap-12">
      <div className="space-y-6">
        {simple ? (
          <Typography variant="h2">What We Offer</Typography>
        ) : (
          <Typography variant="h1">What We Offer</Typography>
        )}
        <Typography variant="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus
          quod magni hic repudiandae expedita pariatur, quae enim voluptates eum
        </Typography>
        {simple && (
          <Button to="/services" secondary>
            All Services
          </Button>
        )}
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-6">
        <ServiceItem
          title="Marketing"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaBullhorn}
        />
        <ServiceItem
          title="Copywriting"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaPencilAlt}
        />
        <ServiceItem
          title="Web Design"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaGlobe}
        />
        <ServiceItem
          title="SEO Optimization"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
          icon={FaSearch}
        />
        {!simple && (
          <>
            <ServiceItem
              title="eCommerce"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
              icon={FaShoppingCart}
            />
            <ServiceItem
              title="Logo Design"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quae, id quo nostrum necessitatibus"
              icon={FaVectorSquare}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
