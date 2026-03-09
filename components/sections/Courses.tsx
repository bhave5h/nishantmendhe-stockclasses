import content from "@/data/content.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export default function Courses() {
    return (
        <section id="courses" className="w-full bg-[#f5f5f7] py-32 border-y border-neutral-200">
            <div className="max-w-7xl mx-auto px-6">
                <FadeUp className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">Our Core Programs</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto text-lg">Enhance your trading skills with our expertly designed courses.</p>
                </FadeUp>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.courses.map(course => (
                        <StaggerItem key={course.slug}>
                            <Link href={`/courses/${course.slug}`} className="group h-full flex flex-col justify-between bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 border border-neutral-100 transition-all duration-300 transform hover:scale-[1.03]">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-[#111111] group-hover:text-accent transition-colors">{course.title}</h3>
                                    <p className="text-neutral-500 line-clamp-4 leading-relaxed mb-6">{course.description}</p>
                                </div>
                                <div className="flex items-center justify-between border-t border-neutral-100 pt-6">
                                    <span className="text-lg font-bold text-[#111111]">{course.price}</span>
                                    <span className="flex items-center text-sm font-semibold text-accent">
                                        View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
