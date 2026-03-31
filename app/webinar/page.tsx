"use client";

import { Calendar, Clock, MapPin, PlayCircle, IndianRupee, Megaphone } from "lucide-react";
import { Montserrat } from "next/font/google";
import WebinarForm from "./WebinarForm";
import heroImg from "@/public/Images/Webinar/webinar.webp";
import { FadeInOnLoad, Counter, SlideUpBg } from "@/components/ui/motion";
import Image from "next/image";
import bgImg2 from "@/public/Images/BG/web_bg.webp";
import Testimonials from "@/components/sections/Testimonials";
import RegisterBTn from "@/components/ui/Register_btn";
import Link from "next/link";
import About from "@/components/sections/About";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`relative min-h-screen w-full overflow-x-hidden flex flex-col items-center pt-8 lg:pt-12 pb-8 bg-white ${montserrat.className} text-black`}>

    <SlideUpBg className="absolute top-0 left-0 w-full h-[100vh] z-[0] pointer-events-none">
      <Image
        src={bgImg2}
        alt="Hero Background"
        fill
        className="object-cover object-top pointer-events-none  "
        priority
        />
    </SlideUpBg>
  
      
      <div className="flex flex-col lg:grid lg:grid-cols-12 w-full max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Mobile-only H1 (Order First on Mobile, Hidden on Desktop) */}
        <div className="order-first md:hidden w-full pt-8 pb-2 z-10 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Join Nisshant Menddhe for Free Stock Trading Webinar
          </h1>
        </div>
        
        {/* Image Content (Order 1 on Mobile, Right Column on Desktop) */}
        <div className="order-1 lg:order-none lg:col-span-5 lg:col-start-8 lg:row-start-1 flex justify-center lg:justify-end items-end min-h-[300px] md:min-h-[400px] lg:min-h-[500px] z-10">
          <div className="relative w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] flex justify-center lg:justify-end items-end">
            <img
              src={heroImg.src}
              alt="Nishant Mendhe Sir"
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl pt-10"
            />
          </div>
        </div>

        {/* Info Bar (Order 2 on Mobile, Bottom Full Width on Desktop) */}
        <div className="order-2 lg:order-none lg:col-span-12 lg:row-start-2 w-full mt-[-2px] lg:mt-[-5px] z-20 mb-10">
          <div className="w-full bg-[#1c1c1c] text-white rounded-[20px] md:rounded-[24px] px-5 md:px-8 py-6 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex xl:flex-row xl:justify-between gap-6 md:gap-8">
              
              {/* Date */}
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 md:w-10 md:h-10 text-[#5EBA3F] shrink-0" strokeWidth={1.5} />
                <span className="font-bold text-base md:text-lg leading-tight">23 August 2025</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-[#5EBA3F] shrink-0" strokeWidth={1.5} />
                <span className="font-bold text-base md:text-lg leading-tight">10:00pm to 12:00am</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-[#5EBA3F] shrink-0" strokeWidth={1.5} />
                <span className="font-bold text-base md:text-lg leading-tight">Online</span>
              </div>

              {/* Platform */}
              <div className="flex items-center gap-3">
                <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-[#5EBA3F] shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-sm md:text-base text-gray-400 leading-tight">Live On</span>
                  <span className="font-bold text-base md:text-lg leading-tight">Google Meet</span>
                </div>
              </div>

              {/* Fees */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#5EBA3F] flex items-center justify-center text-[#5EBA3F] shrink-0">
                  <IndianRupee className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base text-gray-400 leading-tight">Registration Fees:</span>
                  <span className="font-bold text-base md:text-lg leading-tight">Free</span>
                </div>
              </div>

              {/* Updates */}
              <div className="flex items-center gap-3">
                <Megaphone className="w-8 h-8 md:w-10 md:h-10 text-[#5EBA3F] shrink-0" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-sm md:text-base text-gray-400 leading-tight">For Updates:</span>
                  <span className="font-bold text-base md:text-lg leading-tight">Instagram, Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content (Order 3 on Mobile, Left Column on Desktop) */}
        <div className="order-3 lg:order-none lg:col-span-7 lg:col-start-1 lg:row-start-1 pt-2 lg:pt-6 pb-4 lg:pb-8 flex flex-col justify-center text-left p-2 md:text-center lg:text-left z-10">
          
          <h1 className="hidden md:block text-3xl md:text-3xl lg:text-[40px] font-extrabold tracking-tight opacity-85 mb-2">
            Join Nisshant Menddhe for Free Stock Trading Webinar
          </h1>

          <div className="mb-6 flex flex-col items-start md:items-center lg:items-start">
            <p className="text-[20px] md:text-xl lg:text-3xl font-bold mb-2 text-black opacity-80">At this program, you will learn to:</p>
            <ul className="text-base md:text-lg lg:text-xl space-y-1 font-bold text-black opacity-60 text-left inline-block">
              <li>1. How to find multibagger stock</li>
              <li>2. How to use RSI Indicator</li>
              <li>3. How to buy at bottom</li>
              <li>4. Rsi overbought does not mean sell</li>
              <li>5. RSI oversold is trap</li>
              <li>6. Free RSI multibagger scanner</li>
   
            </ul>
          </div>

          <p className="text-base md:text-lg lg:text-xl mb-6 font-medium text-black opacity-70">
            Whether you are a student, working professional, business owner, or a complete beginner, this program helps you gain clear understanding of stock trading from the ground up.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl font-extrabold text-black opacity-80">
            Seats are filling rapidly, 74% already booked. Secure your spot now before it’s gone!
          </p>
        </div>
      </div>

      <div>
        <WebinarForm />
      </div>

      <Testimonials />

      <About />

      <div className="flex flex-wrap items-center gap-6 mt-10">
        <Link href="#registerform">
          <RegisterBTn />
        </Link>
      </div>
    
    </main>
  );
}
