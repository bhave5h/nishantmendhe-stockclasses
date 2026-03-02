import { notFound } from 'next/navigation';
import content from '@/data/content.json';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto px-6 py-20 min-h-[80vh]">
            <Link href="/#courses" className="inline-flex items-center text-sm text-neutral-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
            </Link>

            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">{course.title}</h1>
                {course.price && (
                    <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium mb-8">
                        {course.price}
                    </div>
                )}
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed text-balance">
                        {course.description}
                    </p>
                </div>
            </div>

            {course.curriculum && (
                <div className="mt-16 bg-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Course Curriculum</h2>
                    <div className="space-y-6">
                        {course.curriculum.map((module, idx) => (
                            <div key={idx} className="bg-black border border-neutral-800 p-6 rounded-2xl hover:border-neutral-700 transition-colors">
                                <h3 className="text-xl font-medium mb-4 flex items-center">
                                    <CheckCircle2 className="w-6 h-6 mr-3 text-blue-500 shrink-0" />
                                    {module.title}
                                </h3>
                                <p className="text-neutral-400 whitespace-pre-line text-sm leading-relaxed pl-9">
                                    {module.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-16 text-center">
                <a href={`mailto:${content.contact.email}`} className="bg-white text-black px-8 py-4 rounded-full font-medium inline-block hover:bg-neutral-200 transition-colors">
                    Enroll Now
                </a>
            </div>
        </div>
    );
}
