'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Quote } from 'lucide-react';

const shorts = [
  { id: 'FvmSCoTIr1k', label: 'Student Story #1' },
  { id: 'E8Cbxg3Laj8', label: 'Student Story #2' },
  { id: 'lh3ep4uGYAI', label: 'Student Story #3' },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Beginner Trader',
    rating: 5,
    text: "Nishant sir's teaching style is incredible. Within weeks of his course, I understood RSI like never before. My trading confidence has gone up massively!",
  },
  {
    name: 'Priya Desai',
    role: 'Working Professional',
    rating: 5,
    text: "I was completely new to stock markets. The webinar was a game-changer! Very practical, no fluff — just exactly what you need to start trading smartly.",
  },
  {
    name: 'Kiran Patil',
    role: 'Business Owner',
    rating: 5,
    text: "The best investment I ever made was enrolling in NMS course. Simple concepts, great examples, and an amazing community. 100% recommended!",
  },
];

function ShortCard({ id, label, delay }: { id: string; label: string; delay: number }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className="w-full"
    >
      {/* 9:16 aspect-ratio wrapper */}
      <div
        className="relative group cursor-pointer w-full"
        style={{ paddingBottom: '177.78%' }}
        onClick={() => !playing && setPlaying(true)}
      >
        <div className="absolute inset-0">
          {!playing ? (
            <>
              <img
                src={thumbnail}
                alt={label}
                className="w-full h-full object-cover rounded-[20px] shadow-2xl"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 rounded-[20px] bg-black/35 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-black/90 group-hover:bg-black rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-black fill-white transition-all duration-300 group-hover:fill-green-500 ml-1" />
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-[20px] bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
                <p className="text-white text-sm font-semibold leading-snug">{label}</p>
                <p className="text-gray-300 text-xs mt-0.5">NMS Trading</p>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full rounded-[20px] shadow-2xl"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#f8f9fc] py-24 md:py-15">
      <div className="max-w-[1000px] mx-auto px-4 md:px-10">

        {/* Header */}
         <div className="text-center max-w-3xl mx-auto mb-16 md:mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 text-neutral-900 leading-[1.1]"
                    >
                       What Our Students Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        className="text-[16px] md:text-[18px] text-[#8e95a5] leading-relaxed font-normal"
                    >
                        Thousands of learners have taken their first confident step into stock trading with our guidance. Here’s what they have to say about their journey.
                    </motion.p>
                </div>

        {/* 3 YouTube Shorts — responsive row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {shorts.map((s, i) => (
            <div key={s.id} className="w-full max-w-xs mx-auto sm:max-w-none">
              <ShortCard id={s.id} label={s.label} delay={i * 0.12} />
            </div>
          ))}
        </div>

        {/* Testimonial Cards — responsive grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <Quote className="w-6 h-6 text-[#5EBA3F] mb-3 opacity-70" />

              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-[15px] text-[#374151] leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#5EBA3F]/15 flex items-center justify-center text-[#5EBA3F] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
