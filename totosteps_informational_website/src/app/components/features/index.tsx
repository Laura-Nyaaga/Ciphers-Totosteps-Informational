

import Image from 'next/image';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const features = [
  {
    title: "Milestone Tracking",
    description: "Log and celebrate your child's developmental achievements with our intuitive interface.",
    icon: "/Image/milestones2.png"
  },
  {
    title: "AI-Powered Insights",
    description: "Learn about Autism. Test for autism. Stay informed about your child's health",
    icon: "/Image/autismchecktoto.png"
  },
  {
    title: "Early Detection Alerts",
    description: "Stay informed about potential delays with our advanced monitoring system.",
    icon: "/Image/initialquestionsToto.png"
  },
  {
    title: "Resource Library",
    description: "Access a wealth of expert-curated content to support your parenting journey.",
    icon: "/Image/resourcesTotosteps.png"
  }
];

export default function Features() {
  return (
    <section id="features" className={`py-16 sm:py-24 px-6 sm:px-6 -mb-10  bg-white text-black ${nunito.className}`}>
      <div className="max-w-7xl mx-auto">
                <h2 
  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-orange-600"
>
  Empowering Features for Caring Parents
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-x sm:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center"> {/* Centering the text */}
              <div className="mb-6">
                <Image src={feature.icon} alt={feature.title} width={120} height={120} className="w-48 h-auto"/>
              </div>
                           <h3 className="text-[1.5rem] font-bold mb-3" style={{ lineHeight: '2.25rem' }}>
  {feature.title}
</h3>

              <p className="text-lg max-w-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
