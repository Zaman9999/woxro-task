import React from 'react';

const Contribution = () => {
  return (
    <div className='bg-black w-full h-auto py-3 md:py-12'>
      <div className='wrapper'>
        <div className='flex flex-col gap-5 text-center'>
          <h1 className='text-white font-roboto font-extralight text-3xl md:text-[42px] leading-[36px] md:leading-[48px]'>
            Our Contribution
          </h1>
          <div className='px-4 md:px-10'>
            <p className='font-poppins font-normal leading-6 md:leading-[27px] text-opacity-80 text-white'>
              Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-center gap-6 md:gap-28 mt-12 md:mt-32'>
          <div className='text-center flex flex-col gap-8 md:gap-16 w-full sm:w-1/2 md:w-auto'>
            <h2 className='text-white font-roboto font-extralight text-4xl sm:text-5xl md:text-7xl leading-[36px] sm:leading-[42px] md:leading-[17.57px]'>
              5M
            </h2>
            <p className='text-white font-roboto font-light text-lg sm:text-xl md:text-[19px] leading-[24px] sm:leading-[27px] md:leading-[29.3px]'>
              Daily User<br />Engagements
            </p>
          </div>
          <div className='text-center flex flex-col gap-8 md:gap-16 w-full sm:w-1/2 md:w-auto'>
            <h2 className='text-white font-roboto font-extralight text-4xl sm:text-5xl md:text-7xl leading-[36px] sm:leading-[42px] md:leading-[17.57px]'>
              $500K
            </h2>
            <p className='text-white font-roboto font-light text-lg sm:text-xl md:text-[19px] leading-[24px] sm:leading-[27px] md:leading-[29.3px]'>
              Revenue Surge for an<br />Platform
            </p>
          </div>
          <div className='text-center flex flex-col gap-8 md:gap-16 w-full sm:w-1/2 md:w-auto'>
            <h2 className='text-white font-roboto font-extralight text-4xl sm:text-5xl md:text-7xl leading-[36px] sm:leading-[42px] md:leading-[17.57px]'>
              10X
            </h2>
            <p className='text-white font-roboto tracking-wide font-light text-lg sm:text-xl md:text-[19px] leading-[24px] sm:leading-[27px] md:leading-[29.3px]'>
              ROAS on all our<br />marketing campaigns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribution;
