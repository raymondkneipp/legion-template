import { NextPage } from 'next';
import { Container, Divider, Typography } from '..';
import StatsItem from './StatsItem/StatsItem';

const Stats: NextPage = () => {
  return (
    <div className="relative">
      <div className="bg-gray-100 my-36 relative">
        <Divider color="white" />
        <Container>
          <section className="space-y-6 py-36">
            <div className="space-y-2 flex items-center flex-col text-center">
              <Typography variant="h2">
                Trusted by 120+ small business owners
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              </Typography>
            </div>
            <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 items-center justify-around w-full">
              <StatsItem title="100%" content="Satisfaction" />
              <StatsItem title="746+" content="Happy Customers" />
              <StatsItem title="24/7" content="Customer Support" />
            </div>
          </section>
        </Container>
      </div>
      <Divider color="white" bottom flip />
    </div>
  );
};

export default Stats;
