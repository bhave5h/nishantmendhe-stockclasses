'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { coursesData } from '@/lib/data';

export default function Courses() {
    return (
        <section id="courses" className="w-full bg-white py-10 md:py-15">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">

 {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3 text-neutral-800 leading-[1.1]"
            >
              Premium Courses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-md md:text-[18px] text-neutral-500 font-bold tracking-wide"
            >
              Structured learning paths designed for every stage of your trading journey. From absolute basics to advanced institutional strategies.
            </motion.p> 
          </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto pl-10 pr-10">
                    {coursesData.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                            className="flex flex-col bg-white rounded-[24px] overflow-hidden border border-gray-300 shadow-[0px_4px_47px_22px_rgba(0,_0,_0,_0.1)] hover:shadow-[0px_4px_47px_-17px_rgba(0,_0,_0,_0.1)] transition-shadow duration-300"
                        >
                            {/* Card Image */}
                            <div className="relative w-1xl aspect-[4/3] overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                {/* Badge */}
                                <div className="mb-6">
                                    <span className={`inline-flex items-center px-3 py-2 rounded-lg text-[11px] font-semibold tracking-wide ${course.levelColor}`}>
                                        {course.level}
                                    </span>
                                </div>

                                <h3 className="text-[20px] font-bold text-[#0F172A] mb-4 leading-tight">
                                    {course.title}
                                </h3>

                                <p className="text-lg text-neutral-400 font-semibold leading-relaxed mb-1 flex-grow">
                                    {course.description}
                                </p>
                                <p className="text-lg text-green-600 font-bold leading-relaxed mb-1 flex-grow">
                                    {course.discount}
                                </p>

                                <div className="pt-4 pb-4 border-t border-gray-100 flex items-end justify-between mt-auto">
                                    <span className="text-[20px] font-bold text-green-600 tracking-tight line-through">
                                        {course.orgprice}
                                    </span>
                                    <span className="text-[24px] font-bold text-[#0F172A] tracking-tight">
                                        {course.price} 
                                    </span>
                                </div>

                                <Link href={`/courses/${course.id}`} className="w-fit p-4 bg-black h-[54px] flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-[1.02] hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] text-lg font-semibold tracking-wide">
                                    Enroll Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
