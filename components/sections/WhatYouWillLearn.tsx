"use client";

import Image from "next/image";
import content from "@/data/content.json";

export default function WhatYouWillLearn() {
    const lessons = content.webinar.whatYouWillLearnCards;

    return (
        <section className="w-full bg-white py-10 md:py-16 relative z-10">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-10">

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-neutral-900 leading-[1.1]">
                        What will you learn in this webinar?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {lessons.map((lesson) => (
                    <div 
                        key={lesson.id}
                        className="group bg-[#222222] rounded-[24px] overflow-hidden flex items-center justify-between p-4 md:p-8 shadow-xl border border-neutral-800"
                    >
                        <div className="w-[60%] pr-4 z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                {lesson.title}
                            </h3>
                        </div>
                        <div className="w-[40%] flex justify-end items-center relative h-30 md:h-40">
                            <Image 
                                src={lesson.image} 
                                alt={lesson.title}
                                fill
                                className="object-contain object-right transition-transform duration-500 ease-out group-hover:scale-[1.4]"
                            />
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}
