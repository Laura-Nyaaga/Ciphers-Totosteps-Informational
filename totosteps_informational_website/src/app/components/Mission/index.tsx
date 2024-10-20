
// import { Nunito } from 'next/font/google';

// const nunito = Nunito({ subsets: ['latin'] });

// export default function Mission() {
//   return ( 
//     <section id="mission" className="py-20 px-6 bg-[#FFF5F7]  ">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8 text-black md:text-4xl lg:text-5xl">
//           Our Mission
//         </h2>
//         <p className="text-center mx-auto text-black text-lg md:text-xl lg:text-2xl">
//           At TotoSteps, we&apos;re on a magical quest to empower parents and nurture every child&apos;s unique potential.
//           We believe in creating a world where every little step is celebrated, and every milestone is a gateway to wonder.
//           Through cutting-edge technology and heartfelt support, we&apos;re here to guide you through the enchanting journey of your child&apos;s early years,
//           making every moment an opportunity for growth, learning, and boundless joy.
//         </p>
//       </div>
//     </section>
//   );
// }







import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function Mission() {
  return ( 
    <section id="mission" className={`${nunito.className} py-20 px-6 bg-[#FFF5F7]`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-black md:text-4xl lg:text-5xl">
          Our Mission
        </h2>
        <p className="text-center  text-black text-lg md:text-xl lg:text-2xl  px-6">
          At TotoSteps, we&apos;re on a magical quest to empower parents and nurture every child&apos;s unique potential.
          We believe in creating a world where every little step is celebrated, and every milestone is a gateway to wonder.
          Through cutting-edge technology and heartfelt support, we&apos;re here to guide you through the enchanting journey of your child&apos;s early years,
          making every moment an opportunity for growth, learning, and boundless joy.
        </p>
      </div>
    </section>
  );
}
