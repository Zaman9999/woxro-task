import React from 'react';
import Spotbg from '../assets/Spotbg.png'

const Spotlight = () => {
  return (
   <div className='bg-black w-full h-auto'>
   <div className='wrapper'>
     <div className="flex flex-col items-center">
       <div>
         <h1 className='text-white font-roboto text-2xl md:text-3xl xl:text-4xl text-center leading-[32px] md:leading-[40px] xl:leading-[48px] font-extralight tracking-[0.5px] md:tracking-[0.7px] xl:tracking-[0.9px]'>
           Epic Games: An American video gamee and software developer
           <br className="hidden md:block" />
           and publisher based in Cary, North Carolina.
         </h1>
       </div>
       <div className='pt-4 md:pt-6 xl:pt-8'>
         <img src={Spotbg} alt='' className='w-full' />
       </div>
       <div className='pt-4 md:pt-6 xl:pt-8'>
       <p className='font-poppins font-normal text-white text-center leading-7 text-opacity-80'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or <br></br>live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has <br className='hidden md:block'></br>an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
       </div>
       <div className='pt-4 md:pt-6 xl:pt-8'>
         <button className="bg-white text-black border border-black py-2 md:py-3 px-24 md:px-32 xl:px-36 shadow font-poppins font-normal tracking-[0.7px] md:tracking-[0.8px] xl:tracking-[0.9px]">
           Visit Website
         </button>
       </div>
     </div>
   </div>
 </div>
   
  );
}

export default Spotlight;
