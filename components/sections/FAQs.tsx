'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import content from '@/data/content.json'; // Importing dynamic data

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full bg-white py-10 md:py-15">
            <div className="max-w-[1000px] mx-auto px-4 md:px-10">

                {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3 text-neutral-800 leading-[1.1]"
            >
              Frequently Asked Questions
            </motion.h2>

          </div>
               

                {/* FAQ List */}
                <div className="flex flex-col p-10">
                    {content.faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                className="border-b border-gray-100 last:border-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                                >
                                    <span className="text-[17px] md:text-[18px] font-medium text-[#0F172A] pr-8">
                                        {faq.question}
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
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-[15px] text-[#8e95a5] leading-relaxed pr-8">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
