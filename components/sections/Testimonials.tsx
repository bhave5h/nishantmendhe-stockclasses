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
      className="flex justify-center"
    >
      <div
        className="relative group cursor-pointer flex-shrink-0"
        style={{ width: '220px', height: '391px' }}
        onClick={() => setPlaying(true)}
      >
        {!playing ? (
          <>
            <img
              src={thumbnail}
              alt={label}
              className="w-full h-full object-cover rounded-[20px] shadow-2xl"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 rounded-[20px] bg-black/35 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Shorts badge */}
            <div className="absolute top-3 left-3 bg-[#FF0000] text-white text-[10px] font-bold px-2 py-[2px] rounded-full tracking-wide shadow">
              ▶ Shorts
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-[#FF0000] fill-[#FF0000] ml-1" />
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 rounded-b-[20px] bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
              <p className="text-white text-xs font-semibold leading-snug">{label}</p>
              <p className="text-gray-300 text-[11px] mt-0.5">NMS Trading</p>
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
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#f8f9fc] py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-[#5EBA3F] font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What Our Students Say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-[36px] md:text-[44px] font-bold text-[#0F172A] leading-tight"
          >
            Real Results, Real Stories
          </motion.h2>
        </div>

        {/* 3 YouTube Shorts — responsive row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-14 place-items-center">
          {shorts.map((s, i) => (
            <ShortCard key={s.id} id={s.id} label={s.label} delay={i * 0.12} />
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
