import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedMedia from "@/components/sections/FeaturedMedia";
import Courses from "@/components/sections/Courses";
import FAQs from "@/components/sections/FAQs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden bg-white text-[#111111]">
      <Hero />
      <About />
      <FeaturedMedia />
      <Courses />
      <FAQs />
    </div>
  );
}
