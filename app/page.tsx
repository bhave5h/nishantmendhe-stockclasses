import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Courses from "@/components/sections/Courses";
import FAQs from "@/components/sections/FAQs";
import Testimonials from "@/components/sections/Testimonials";
import Webinar from "@/app/webinar/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-white text-[#111111]">
      <Hero />
      <About />
      <Benefits />
      <Courses />
      <Testimonials />
      <FAQs />
    </div>
  );
}
