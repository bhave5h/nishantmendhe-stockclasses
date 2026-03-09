import Image from "next/image";
import { FadeUp } from "@/components/ui/motion";

export default function FeaturedMedia() {
    return (
        <section className="w-full bg-white py-24 px-6 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <FadeUp>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">Inside the Training</h2>
                    <p className="text-neutral-500 text-lg">See our high-performance trading setups.</p>
                </FadeUp>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeUp delay={0.1} className="w-full aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm group">
                    <Image
                        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
                        alt="Trading Platform Setup"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </FadeUp>
                <FadeUp delay={0.2} className="w-full aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm group">
                    <Image
                        src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop"
                        alt="Live Market Analysis"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </FadeUp>
            </div>
        </section>
    );
}
