import React from 'react';
import card3 from '../assets/card1.png';
import card2 from '../assets/card2.png'; 
import card1 from '../assets/card3.png'; 

const cardData = [
  {
    id: 1,
    image: card1,
    text: 'Explore large, destructible environments where no two games are ever the same.',
  },
  {
    id: 2,
    image: card2,
    text: 'Team up with friends by sprinting, climbing and smashing your way to earn your victory royale.',
  },
  {
    id: 3,
    image: card3,
    text: 'Discover even more ways to play across thousands of creator-made game genres.',
  },
];

const Cards = () => {
  return (
    <div className='bg-black w-full h-auto flex justify-center items-center py-12'>
      <div className='wrapper flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center gap-6 md:gap-10 p-6 md:p-8 lg:p-28'>
        {cardData.map((card) => (
          <div key={card.id} className='flex flex-col items-center w-[250px] sm:w-[270px] md:w-[300px] h-auto'>
            <img src={card.image} alt='' className='w-full'/>
            <div className='pt-4 md:pt-6 lg:pt-8'>
              <p className='text-white tracking-[0.02em] font-roboto text-center font-normal text-sm md:text-base leading-[20px] md:leading-[22.27px]'>
                {card.text.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
