'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { coursesData } from '@/lib/data';

export default function Courses() {
    return (
        <section id="courses" className="w-full bg-white py-24 md:py-32">
            <div className="max-w-[1280px] mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-[36px] md:text-[44px] font-bold text-[#0F172A] leading-tight mb-6"
                    >
                        Premium Courses
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="text-[16px] md:text-[18px] text-[#8e95a5] leading-relaxed font-normal"
                    >
                        Structured learning paths designed for every stage of your trading journey. From absolute basics to advanced institutional strategies.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                            className="flex flex-col bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
                        >
                            {/* Card Image */}
                            <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                {/* Badge */}
                                <div className="mb-6">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${course.levelColor}`}>
                                        {course.level}
                                    </span>
                                </div>

                                <h3 className="text-[20px] font-bold text-[#0F172A] mb-4 leading-tight">
                                    {course.title}
                                </h3>

                                <p className="text-[14px] text-[#8e95a5] leading-relaxed mb-8 flex-grow">
                                    {course.description}
                                </p>

                                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                                    <span className="text-[24px] font-bold text-[#0F172A] tracking-tight">
                                        {course.price}
                                    </span>
                                    <Link href={`/courses/${course.id}`} className="flex items-center gap-2 text-[14px] font-semibold text-[#0F172A] hover:text-gray-600 transition-colors group">
                                        Enroll Now
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
