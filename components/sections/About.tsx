import content from "@/data/content.json";
import { FadeUp } from "@/components/ui/motion";
import Image from "next/image";
import aboutImg from "@/public/Images/Hero/I.webp"; // Or whichever represents the institute best

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-5 md:py-20 px-6 bg-white relative"
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16 p-10">
        {/* Left Side: Text */}
        <div className="flex-1 flex flex-col items-start w-full">
          <FadeUp>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 text-neutral-900 opacity-90 leading-[1.1]">
              {content.about.heading}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="text-neutral-500 text-lg md:text-xl leading-relaxed lg:pr-10">
              {content.about.description.split("__").map((paragraph, idx) => (
                <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full flex items-center justify-center relative">
          <FadeUp
            delay={0.5}
            className="relative w-full md:w-full max-w-sm aspect-[4/5] rounded-[20px] md:rounded-[15px] overflow-hidden shadow-xl"
          >
            <Image
              src={aboutImg}
              alt="About the institute"
              fill
              className="rounded-lg object-cover"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
