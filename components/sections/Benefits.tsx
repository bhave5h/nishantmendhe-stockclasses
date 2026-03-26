import content from "@/data/content.json";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ShieldCheck, Target, Activity, Award, TrendingUp } from "lucide-react";

// Assign different icons to items based on keywords, or just default ones.
const getIcon = (item: string) => {
    const lItem = item.toLowerCase();
    if (lItem.includes("risk")) return ShieldCheck;
    if (lItem.includes("entry")) return Target;
    if (lItem.includes("emotional")) return Activity;
    if (lItem.includes("expert")) return Award;
    if (lItem.includes("management")) return ShieldCheck;
    return TrendingUp;
};

export default function Benefits() {
    return (
        <section id="benefits" className="w-full py-15 md:py-15 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-top p-10">
                    <FadeUp className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-2 text-neutral-900 opacity-90 leading-[1.1]">
                            {content.benefits.heading}
                        </h2>
                        <p className="text-neutral-500 text-lg md:text-xl leading-relaxed lg:pr-10">
                            {content.benefits.description}
                        </p>
                    </FadeUp>

                    <div className="w-full lg:w-1/2 relative">
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            {content.benefits.items.map((item, index) => {
                                const Icon = getIcon(item);
                                return (
                                    <StaggerItem key={item} className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-accent/50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-black" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-black opacity-80">{item}</h4>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}
