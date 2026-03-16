import content from "@/data/content.json";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/public/Images/Hero/hero.png";
import bgImg from "@/public/Images/BG/bg.webp";
import ExploreButton from "@/components/ui/ExploreButton";
import { FadeInOnLoad, Counter, SlideUpBg } from "@/components/ui/motion";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-white min-h-screen pt-14 flex flex-col">
            {/* Full Screen Background Layer */}
            <SlideUpBg className="absolute inset-0 w-full h-full z-[0]">
                <Image
                    src={bgImg}
                    alt="Hero Background"
                    fill
                    className="object-cover object-bottom pointer-events-none"
                    priority
                />
            </SlideUpBg>

            {/* Grid Lines Background */}
            <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-90 pointer-events-none"></div>

            <div className="flex-1 w-full max-w-7xl mx-auto px-6 relative z-10 flex items-start justify-start lg:justify-between pt-12 md:pt-16 lg:pt-24 pb-10">

                {/* Left Column Text content */}
                <div className="flex flex-col items-start justify-start text-left w-full lg:w-[50%] z-10 shrink-0">
                    <FadeInOnLoad delay={0.2} className="w-full">
                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-6 max-w-2xl text-[#111111] leading-[1.1]">
                            {content.hero.heading}
                        </h1>
                    </FadeInOnLoad>
                    <FadeInOnLoad delay={0.3} className="w-full">
                        <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl leading-relaxed">
                            {content.siteMeta.description}
                        </p>
                    </FadeInOnLoad>
                    <FadeInOnLoad delay={0.4} className="w-full">
                        <div className="flex flex-wrap items-center gap-6">
                            <Link href="/#courses">
                                <ExploreButton />
                            </Link>
                        </div>
                    </FadeInOnLoad>

                    {/* Stats Block */}
                    <FadeInOnLoad delay={0.5} className="w-full mt-2 md:mt-7">
                        <div className="flex flex-wrap items-center gap-6 md:gap-10">
                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-[#111111] mb-1">
                                    <Counter to={10} duration={2} />
                                </span>
                                <span className="text-xs md:text-sm font-medium text-neutral-500 w-32 whitespace-normal leading-tight">Years Stock Market Experience</span>
                            </div>
                            <div className="flex flex-col pl-6 md:pl-10 border-l border-neutral-300">
                                <span className="text-3xl md:text-4xl font-bold text-[#111111] mb-1">
                                    <Counter to={7} suffix="K+" duration={2} />
                                </span>
                                <span className="text-xs md:text-sm font-medium text-neutral-500 w-32 whitespace-normal leading-tight">Satisfied Customers</span>
                            </div>
                        </div>
                    </FadeInOnLoad>
                </div>

                {/* Right Column Image Content */}
                <div className="hidden lg:flex absolute bottom-0 right-6 w-[45%] h-full items-end justify-end pointer-events-none">
                    <FadeInOnLoad delay={0.4} className="relative flex items-end justify-end w-full h-full">
                        <Image
                            src={heroImg}
                            alt="Hero Character"
                            width={800}
                            height={800}
                            className="object-contain object-bottom max-h-[90vh] drop-shadow-2xl select-none"
                            priority
                        />
                    </FadeInOnLoad>
                </div>
            </div>
        </section>
    );
}
