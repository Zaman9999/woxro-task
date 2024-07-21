import React from 'react';

const Contact = () => {
  return (
    <div className='bg-black w-full h-auto md:pt-36 pt-12 pb-12 md:pb-44'>
      <div className='wrapper'>
        <div className='flex flex-col gap-5 text-center'>
          <h1 className='px-6 sm:px-12 md:px-20 text-white font-roboto font-light text-3xl sm:text-4xl md:text-[45px] tracking-[0.5px] sm:tracking-[0.7px] md:tracking-[0.96px] leading-[36px] sm:leading-[40px] md:leading-[48px]'>
            Interested in delving deeper into the project?
          </h1>
          <div className='px-4 sm:px-8 md:px-32 mt-4 sm:mt-6'>
            <p className='font-roboto font-light leading-6 sm:leading-7 md:leading-[32.81px] text-white text-center text-base sm:text-lg md:text-[25px]'>
              If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span className='font-medium'>hello@abc.com</span> or give us a call at <span className='font-normal'>+91 480 20802730.</span>
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-8 sm:mt-14 justify-center'>
          <button className='px-8 py-2 sm:px-12 sm:py-2 border font-poppins font-medium text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[27px] tracking-[0.5px] sm:tracking-[0.7px] md:tracking-[0.96px] border-white text-white text-center'>
            Ring us on Skype
          </button>
          <button className='px-8 py-2 sm:px-12 sm:py-2 font-poppins font-medium text-base sm:text-lg md:text-[18px] leading-6 sm:leading-7 md:leading-[27px] tracking-[0.5px] sm:tracking-[0.7px] md:tracking-[0.96px] border bg-white text-black text-center'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
