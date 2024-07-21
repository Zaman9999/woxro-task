import React from 'react';
import card3 from '../assets/card1.png';
import card2 from '../assets/card2.png'; 
import card1 from '../assets/card3.png'; 

const Cards = () => {
  return (
    <div className='bg-black w-full h-auto flex justify-center items-center py-12'>
      <div className='wrapper flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center gap-6 md:gap-10 p-6 md:p-8 lg:p-28'>
        <div className='flex flex-col items-center w-[250px] sm:w-[270px] md:w-[300px] h-auto'>
          <img src={card1} alt='' className='w-full'/>
          <div className='pt-4 md:pt-6 lg:pt-8'>
            <p className='text-white tracking-[0.02em] font-roboto text-center font-normal text-sm md:text-base leading-[20px] md:leading-[22.27px]'>
              Explore large, destructible <br /> environments where no two games are ever the same.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center w-[250px] sm:w-[270px] md:w-[300px] h-auto'>
          <img src={card2} alt='' className='w-full'/>
          <div className='pt-4 md:pt-6 lg:pt-8'>
            <p className='text-white tracking-[0.02em] font-roboto text-center font-normal text-sm md:text-base leading-[20px] md:leading-[22.27px]'>
              Team up with friends by sprinting, <br /> climbing and smashing your way to <br></br>earn your victory royale.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center w-[250px] sm:w-[270px] md:w-[300px] h-auto'>
          <img src={card3} alt='' className='w-full'/>
          <div className='pt-4 md:pt-6 lg:pt-8'>
            <p className='text-white font-roboto tracking-[0.02em] text-center font-normal text-sm md:text-base leading-[20px] md:leading-[22.27px]'>
              Discover even more ways to play <br /> across thousands of creator-made<br></br> game genres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
