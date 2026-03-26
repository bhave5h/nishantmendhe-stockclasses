"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function WhatYouWillLearn() {
  const lessons = content.webinar.whatYouWillLearnCards;

  return (
    <section className="w-full bg-white py-10 md:py-16 relative z-10">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-12">
    
            {/* Header */}
 {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-9 text-neutral-800 leading-[1.1]"
            >
              What You Will Learn in This Webinar ?
            </motion.h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div className="w-[40%] flex justify-end items-center relative h-40 md:h-40">
                <Image
                  src={lesson.image}
                  alt={lesson.title}
                  fill
                  className="object-contain object-right transition-transform duration-500 ease-out group-hover:scale-[1.2]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
