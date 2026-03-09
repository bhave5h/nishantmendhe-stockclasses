import content from "@/data/content.json";
import { CheckCircle2 } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";

export default function About() {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto py-32 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeUp className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">About the Institute</h2>
                    <p className="text-neutral-500 text-lg leading-relaxed mb-10">
                        {content.about.description}
                    </p>
                    <div className="flex gap-12">
                        {content.about.stats.map(stat => (
                            <div key={stat.label}>
                                <p className="text-4xl md:text-5xl font-semibold text-[#111111]">{stat.value}</p>
                                <p className="text-sm font-medium text-neutral-400 mt-2 tracking-wide uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </FadeUp>
                <FadeUp delay={0.2} className="w-full">
                    <div className="bg-[#f5f5f7] rounded[2rem] md:rounded-[2.5rem] p-10 md:p-14 border border-neutral-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>
                        <h3 className="text-2xl font-semibold mb-6 text-[#111111] relative z-10">{content.benefits.heading}</h3>
                        <p className="text-neutral-600 mb-8 leading-relaxed relative z-10">{content.benefits.description}</p>
                        <ul className="space-y-4 relative z-10">
                            {content.benefits.items.map(item => (
                                <li key={item} className="flex items-center text-neutral-700 font-medium">
                                    <CheckCircle2 className="w-5 h-5 mr-4 text-accent shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
