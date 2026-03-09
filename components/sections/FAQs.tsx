import content from "@/data/content.json";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export default function FAQs() {
    return (
        <section id="faqs" className="w-full max-w-3xl mx-auto py-32 px-6">
            <FadeUp className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">Frequently Asked Questions</h2>
                <p className="text-neutral-500 text-lg">Got questions? We've got answers.</p>
            </FadeUp>
            <StaggerContainer delayOrder={0.05} className="space-y-4">
                {content.faqs.map((faq, idx) => (
                    <StaggerItem key={idx}>
                        <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold mb-3 text-[#111111]">{faq.question}</h3>
                            <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
