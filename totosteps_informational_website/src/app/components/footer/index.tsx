

import Image from 'next/image';
import Link from 'next/link';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className={`${nunito.className} bg-[#2F0020] text-white py-8`}>
      <div className="container mx-4 px-4 md:px-4 lg:px-11 [@media(width=280px)]:mx-1 [@media(width=280px)]:px-1">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 [@media(width=280px)]:gap-4">
          
          <div className="
            pl-4 
            [@media(width=280px)]:pl-6
            sm:pl-8 
            surface-duo:pl-4 
            ipad-air:pr-8
            sm:360:pl-6
          ">
            <Image
              src="/images/TotoSteps_logo.png"
              alt="TotoSteps Logo"
              width={120}
              height={70}
              className="max-w-[100px] sm:max-w-[120px] [@media(width=280px)]:max-w-[80px]"
            />
          </div>

          <div className="
            pl-4
            [@media(width=280px)]:pl-6
            sm:pl-0 
            surface-duo:pl-0
            ipad-air:pl-6
            sm:360:pl-6
          ">
            <h3 className="font-semibold text-lg mb-4 [@media(width=280px)]:text-base [@media(width=280px)]:mb-2 ">Quick Links</h3>
            <ul className="space-y-2 text-sm [@media(width=280px)]:space-y-1">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#mission">Mission</Link></li>
              <li><Link href="#team">Team</Link></li>
            </ul>
          </div>

          <div className="
            pl-4 
            [@media(width=280px)]:pl-6
            sm:pl-0 
            surface-duo:pl-0
            ipad-air:pr-8
            sm:360:pl-6
          ">
            <h3 className="font-semibold text-lg mb-4 [@media(width=280px)]:text-base [@media(width=280px)]:mb-2">Connect With Us</h3>
            <ul className="space-y-2 text-sm [@media(width=280px)]:space-y-1">
              <li><span className="font-bold">Email:</span> cipherstotosteps@gmail.com</li>
              <li><span className="font-bold">Phone:</span> +254796063321</li>
              <li><span className="font-bold">Address:</span> Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center border-t border-[#FFFFFF] mt-12 pt-4 text-xs [@media(width=280px)]:mt-6 [@media(width=280px)]:pt-2">
          <p>&copy; 2024 TotoSteps. With You All The Way</p>
        </div>
      </div>
    </footer>
  );
}