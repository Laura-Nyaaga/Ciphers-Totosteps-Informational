



'use client';

import Image from 'next/image';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const LandingPage = () => {
  return (
    <div className={`${nunito.className} home`} id="landingpage">
      <div className="bg-[#4C0033] xs:px-6 sm:px-12 md:px-12 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center border
        [@media(width=280px)]:px-3">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 mt-12
          [@media(width=280px)]:mt-6">
          

          <h1 className="text-3xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl ipad-air:text-4xl surface-pro-7:text-5xl text-white font-bold mb-4 sm:mb-6 2xl:mb-[50px]
            [@media(width=280px)]:text-2xl [@media(width=280px)]:mb-2">
            Nurturing Little Wonders,<br />
            One Step at a Time
</h1>
<p className="text-white mb-6 sm:mb-8 2xl:mt-[80px] 
            text-base xs:text-sm sm:text-2xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl
            [@media(width=280px)]:text-lg [@media(width=280px)]:mb-4">
            <span className='font-bold'>Toto</span>
            <span className='font-bold text-orange-600'>Steps</span>: 
            Your magical companion in your child&apos;s growth journey from 0-3 years.
</p>








          <button className="bg-[#F58220] hover:bg-orange-600 text-white mt-10 font-bold py-2 px-4 md:py-2.5 md:px-5 lg:py-3 lg:px-6 xl:py-3.5 xl:px-7 mb-5 rounded-full lg:text-lg xl:text-xl transition duration-300
            [@media(width=280px)]:mt-4 [@media(width=280px)]:px-3 [@media(width=280px)]:py-1.5 [@media(width=280px)]:text-sm">
            Start the journey
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-0
          [@media(width=280px)]:mt-4">
          <div className="relative w-full aspect-square xs:max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] ipad-air:max-w-[65%] surface-pro-7:max-w-[70%]
            [@media(width=280px)]:max-w-[95%]">
            <Image
              src="/Images/Mother.png"
              alt="Mother and child"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;