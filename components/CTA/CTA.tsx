import { NextPage } from 'next';
import Image from 'next/image';
import { Button } from '..';

const CTA: NextPage = () => {
  return (
    <div className="relative pb-16">
      <div className="absolute bottom-0 left-0 w-full overflow-hidden text-sky-700 rotate-180 pointer-events-none z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <section className="bg-sky-700 relative">
        <div className="flex flex-col space-y-6 items-center justify-center py-20">
          <h2 className="font-bold text-5xl text-white text-center">
            Claim Your Free Estimate Today!
          </h2>
          <p className="text-white max-w-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            deserunt earum magnam voluptatem assumenda deleniti.
          </p>
          <div className="gap-6 flex items-center">
            <Button to="/contact" light>
              Free Estimate
            </Button>
          </div>
        </div>
        {/* https://www.shapedivider.app/ */}
        {/* Copy and replace path element only */}
        <div className="absolute top-0 left-0 w-full overflow-hidden text-white rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default CTA;
