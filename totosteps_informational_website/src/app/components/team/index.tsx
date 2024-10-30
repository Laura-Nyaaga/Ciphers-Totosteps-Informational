


import Image from 'next/image'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

const teamMembers = [
  { name: "Wanja Kayago", image: "/Image/WanjaKayago.jpg" , title: "Software Developer"},
  { name: "Nancy Shimwe", image: "/Image/Nancy Shimwe.jpg", title: "Software Developer"}, 
  { name: "Eyvone Oyella", image: "/Image/Eyvonne.jpg",title: "Software Developer"}, 
  { name: "Laura Nyaaga", image: "/Image/Laura Nyaaga.jpg" ,title: "Software Developer"},
  { name: "Faith Yiamat", image: "/Image/Yiamat Faith.jpg",title: "Software Developer" },
]

export default function Team() {
  return (
    <section id="team" className={`py-12 px-6 bg-gray-100 ${nunito.className}`}>
      <div className="container mx-auto">
       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-orange-600">
  Meet Our Team
</h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 justify-items-center">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={200} 
                  height={200} 
                  className="rounded-full mx-auto mb-4" 
                />
              </div>
              <h3 className="font-bold text-black">{member.name}</h3>
              <h3 className="font-bold text-orange-600">{member.title}</h3>
            </div>
          ))}

          <div className="text-center md:col-start-3">
            <div className="mb-8">
              <Image 
                src={teamMembers[4].image} 
                alt={teamMembers[4].name} 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4" 
              />
            </div>
            <h3 className="font-bold text-black">{teamMembers[4].name}</h3>
            <h3 className="font-bold text-orange-600">{teamMembers[4].title}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
