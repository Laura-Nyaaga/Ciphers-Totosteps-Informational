// 'use client'
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Nunito } from 'next/font/google';

// const nunito = Nunito({ subsets: ['latin'] });

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className={`flex justify-between items-center py-2 px-4 sm:px-6 bg-white ${nunito.className}`}>
//       <div className="flex items-center">
//         <Image src="/Images/Totosteps.png" alt="TotoSteps Logo" width={150} height={150} className="w-auto h-16 sm:h-20" />
//       </div>
//       <div className="hidden md:flex space-x-4 lg:space-x-6 ml-auto">
//         <Link href="#home" className="text-black hover:text-[#F58220] font-semibold text-sm lg:text-[20px]">Home</Link>
//         <Link href="#features" className="text-black hover:text-[#F58220] font-semibold text-sm lg:text-[20px]">Features</Link>
//         <Link href="#mission" className="text-black hover:text-[#F58220] font-semibold text-sm lg:text-[20px]">Mission</Link>
//       </div>
//       <div className="md:hidden">
//         <button
//           className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-10"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
//           <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
//           <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
//         </button>
//       </div>
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-[#F58220] bg-opacity-90 z-50 flex flex-col items-start justify-start pt-20 px-6 transition-all duration-300 ease-in-out md:hidden">
//           <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsMenuOpen(false)}>
//             &times;
//           </button>
//           <div className="text-white text-2xl space-y-6 w-full">
//             <Link href="#home" className="block" onClick={() => setIsMenuOpen(false)}>Home</Link>
//             <Link href="#features" className="block" onClick={() => setIsMenuOpen(false)}>Features</Link>
//             <Link href="#mission" className="block" onClick={() => setIsMenuOpen(false)}>Mission</Link>
//             <Link href="#team" className="block" onClick={() => setIsMenuOpen(false)}>Team</Link>
          
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`flex justify-between items-center  px-8 sm:px-12 bg-white ${nunito.className}`}>
      <div className="flex items-center">
        <Image src="/Images/Totosteps.png" alt="TotoSteps Logo" width={150} height={200} className="w-40  m:h-24" />
      </div>
      <div className="hidden md:flex space-x-12 lg:space-x-12 ml-auto">
        <Link href="#home" className="text-black hover:text-[#F58220] font-semibold text-sm lg:text-[20px]">Home</Link>
        <Link href="#features" className="text-black hover:text-[#F58220] font-semibold text-sm lg:text-[20px]">Features</Link>
        <Link href="#mission" className="text-black hover:text-[#F58220] font-semibold text-sm lg:text-[20px]">Mission</Link>
        <Link href="#team" className="text-black hover:text-[#F58220] font-semibold text-sm lg:text-[20px]">Team</Link>
      </div>
      <div className="md:hidden">
        <button
          className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F58220] bg-opacity-90 z-50 flex flex-col items-start justify-start pt-20 px-6 transition-all duration-300 ease-in-out md:hidden">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsMenuOpen(false)}>
            &times;
          </button>
          <div className="text-white text-2xl space-y-6 w-full">
            <Link href="#home" className="block" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#features" className="block" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#mission" className="block" onClick={() => setIsMenuOpen(false)}>Mission</Link>
            <Link href="#team" className="block" onClick={() => setIsMenuOpen(false)}>Team</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
