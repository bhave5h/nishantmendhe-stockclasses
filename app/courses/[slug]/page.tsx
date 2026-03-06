import { notFound } from 'next/navigation';
import content from '@/data/content.json';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';

export async function generateStaticParams() {
    return content.courses.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = content.courses.find((c) => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-20 min-h-[80vh] bg-white text-[#111111]">
            <FadeUp delay={0.1}>
                <Link href="/#courses" className="inline-flex items-center text-sm text-neutral-500 hover:text-black mb-8 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
                </Link>
            </FadeUp>

            <div className="mb-16">
                <FadeUp delay={0.2}>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#111111]">{course.title}</h1>
                </FadeUp>
                {course.price && (
                    <FadeUp delay={0.3}>
                        <div className="inline-block bg-[#f5f5f7] border border-neutral-200 text-neutral-700 px-4 py-2 rounded-full font-semibold mb-8 shadow-sm">
                            {course.price}
                        </div>
                    </FadeUp>
                )}
                <FadeUp delay={0.4} className="prose prose-neutral max-w-none">
                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-balance">
                        {course.description}
                    </p>
                </FadeUp>
            </div>

            {course.curriculum && (
                <FadeUp delay={0.5} className="mt-16 bg-[#f5f5f7] border border-neutral-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-[#111111]">Course Curriculum</h2>
                    <StaggerContainer delayOrder={0.1} className="space-y-6">
                        {course.curriculum.map((module, idx) => (
                            <StaggerItem key={idx}>
                                <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-semibold mb-4 flex items-center text-[#111111]">
                                        <CheckCircle2 className="w-6 h-6 mr-4 text-blue-500 shrink-0" />
                                        {module.title}
                                    </h3>
                                    <p className="text-neutral-600 whitespace-pre-line text-sm leading-relaxed pl-10">
                                        {module.content}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </FadeUp>
            )}

            <FadeUp delay={0.6} className="mt-16 text-center">
                <a href={`mailto:${content.contact.email}`} className="bg-black text-white px-8 py-4 rounded-full font-medium inline-block hover:bg-neutral-800 hover:scale-[1.02] shadow-xl shadow-black/10 transition-all duration-300">
                    Enroll Now
                </a>
            </FadeUp>
        </div>
    );
}
