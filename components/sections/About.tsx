import content from "@/data/content.json";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import Image from "next/image";
import aboutImg from "@/public/Images/I.png"; // Or whichever represents the institute best

export default function About() {
    return (
        <section id="about" className="w-full py-24 md:py-32 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Left Side: Text and Stats */}
                <div className="flex-1 flex flex-col items-start w-full">
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-neutral-900 leading-[1.1]">
                            {content.about.heading}
                        </h2>
                    </FadeUp>
                    <FadeUp delay={0.1} className="w-full">
                        <div className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-12">
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
                    <FadeUp delay={0.2} className="relative w-full max-w-lg aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src={aboutImg}
                            alt="About the institute"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </FadeUp>
                    {/* Decorative blobs behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-[-1]"></div>
                </div>

            </div>
        </section>
    );
}
