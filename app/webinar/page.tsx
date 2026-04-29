import { Montserrat } from "next/font/google";
import WebinarForm from "./WebinarForm";
import Hero from "./Hero";
import Testimonials from "@/components/sections/Testimonials";
import RegisterBTn from "@/components/ui/Register_btn";
import Link from "next/link";
import About from "@/components/sections/About";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative min-h-screen w-full overflow-x-hidden flex flex-col items-center pt-8 lg:pt-12 pb-8 bg-white ${montserrat.className} text-black`}
    >


      <div className="relative z-20 w-full -mt-6 lg:-mt-10">
        <WebinarForm />
      </div>

      <Hero />

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
