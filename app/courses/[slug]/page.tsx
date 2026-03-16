'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coursesData } from '@/lib/data';


export default function CourseDetails() {
    const params = useParams();
    const slug = params?.slug as string;
    const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

    const course = coursesData.find(c => c.slug === slug || c.id === slug);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
            </div>
        );
    }

    const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const phone = formData.get('phone');

        // Construct WhatsApp message
        const message = `Hi, I am interested in enrolling for the course: *${course.title}*.\n\nMy Details:\nName: ${name}\nPhone: ${phone}`;

        // URL encode the message
        const encodedMessage = encodeURIComponent(message);

        // Replace with actual WhatsApp business number
        const whatsappNumber = "919876543210"; // Ensure standard international format without '+'

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">

            {/* Hero Section of Course */}
            <section className="relative w-full bg-white text-[#0F172A] pt-32 pb-20 md:pt-25 md:pb-32 border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide mb-6 ${course.level === 'Advanced' ? 'bg-[#0F172A] text-white' : 'bg-gray-100 text-[#0F172A]'}`}>
                            {course.level}
                        </span>
                        <h1 className="text-[40px] md:text-[56px] font-bold leading-tight mb-6">
                            {course.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
                            {course.description}
                        </p>


                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-sm">Duration</span>
                                <span className="font-bold text-xl">{course.duration || 'TBD'}</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-sm">Modules</span>
                                <span className="font-bold text-xl">{course.modules || course.curriculum?.length || 0} Modules</span>
                            </div>
                            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-sm">Support</span>
                                <span className="font-bold text-xl">{course.support || 'Lifetime'}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border border-gray-100"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Course Details & Enrollment Form */}
            <section className="py-20 md:py-24 bg-[#f6f7f9]">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-16">

                    {/* Detailed Info */}
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl font-bold mb-8">Course Overview</h2>
                        <div className="prose prose-lg text-gray-600 max-w-none">
                            {course.curriculum && (
                                <div className="mt-10">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Curriculum</h3>
                                    <div className="flex flex-col space-y-4">
                                        {course.curriculum.map((module: any, idx: number) => {
                                            const isOpen = openModuleIndex === idx;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                                    >
                                                        <span className="font-bold text-lg text-[#0F172A]">
                                                            {module.title}
                                                        </span>
                                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#0F172A]' : 'bg-gray-50 border border-gray-200 group-hover:bg-gray-100'}`}>
                                                            {isOpen ? (
                                                                <svg className="w-5 h-5 text-white transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-5 h-5 text-gray-500 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            >
                                                                <div className="px-6 pb-6 text-gray-600 whitespace-pre-line leading-relaxed">
                                                                    {module.content}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl">
                            {course.Note} <a href={course.Link} target="_blank" rel="noopener noreferrer" className="text-[#0F172A] font-bold underline">
                                Nishant Mendhe.graphy.com
                            </a>
                        </p>

                            <p className="mt-6 leading-relaxed text-lg md:text-xl text-gray-500">
                                Enrollment simply takes a few moments. Fill out the application form with your details, and you will be directed to our official WhatsApp channel to finalize your registration and payment manually with our team.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 sticky top-24">
                            <div className="mb-8 pb-8 border-b border-gray-100">
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Enrollment Fee</p>
                                <p className="text-4xl font-bold text-[#0F172A]">{course.price}</p>
                            </div>

                            <h3 className="text-xl font-bold mb-6">Complete your enrollment</h3>

                            <form onSubmit={handleWhatsAppRedirect} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                                </div>

                                <button type="submit" className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Enroll via WhatsApp
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
                                    By clicking this button, you will be redirected to WhatsApp to communicate directly with our team for secure payment options.
                                </p>
                            </form>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}
