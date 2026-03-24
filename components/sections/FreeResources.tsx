"use client";

import Image from "next/image";
import ytMockup from "@/public/Images/Webinar/yt.png";
import content from "@/data/content.json";
import { Youtube, Facebook, Linkedin } from "lucide-react";

export default function FreeResources() {
    return (
        <section className="w-full bg-white py-10 md:py-16 relative z-10">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center">
            
                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-5 md:mb-10">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold opacity-90 tracking-tight text-neutral-900 leading-[1.1]">
                        Explore our free resources
                    </h2>
                </div>

                {/* Laptop Mockup */}
                <a href={content.webinar.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-4xl flex justify-center mb-5 md:mb-24 relative hover:scale-[1.01] transition-transform duration-500 block">
                    <Image 
                        src={ytMockup}
                        alt="YouTube Channel on Laptop"
                        className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                        priority
                    />
                </a>

                {/* Social Header */}
                <div className="text-center max-w-3xl mx-auto mb-2 md:mb-10">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold opacity-90 tracking-tight mb-3 text-neutral-900 leading-[1.1]">
                        {content.webinar.socialHeading}
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#8e95a5] leading-relaxed font-normal">
                        {content.webinar.socialSubheading}
                    </p>
                </div>

                {/* Desktop / Tablet View: 3 Smartphone Mockup images with Buttons */}
                <div className="hidden md:flex w-full justify-center gap-6 lg:gap-10">
                    {content.webinar.freeResources.map((resource) => (
                        <div key={resource.id} className="w-1/3 flex flex-col items-center">
                            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 transition-transform duration-500 mb-6 block w-full group">
                                <Image 
                                    src={resource.image}
                                    alt={resource.name}
                                    width={400}
                                    height={800}
                                    className="w-full h-auto object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-shadow duration-500 group-hover:drop-shadow-[0_15px_35px_rgba(0,0,0,0.18)]"
                                />
                            </a>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#1c1c1c] text-white px-6 py-3 rounded-full font-bold hover:bg-[#5EBA3F] hover:text-white transition-color duration-300 shadow-lg active:scale-95 w-full max-w-[200px]">
                                Visit {resource.name}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Mobile View: Stacked Social Cards */}
                <div className="md:hidden w-full flex flex-col gap-4 mt-8">
                    {content.webinar.freeResources.map((resource) => (
                        <a key={resource.id} href={resource.link} target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c] text-white p-6 rounded-[24px] flex items-center justify-start gap-6 shadow-xl active:scale-95 transition-transform border border-neutral-800">
                            <div className="bg-white/10 p-2 rounded-xl flex items-center justify-center relative w-14 h-14 shrink-0 overflow-hidden">
                                <Image src={resource.image} alt={resource.name} fill className="object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl leading-tight">{resource.name}</span>
                                <span className="text-sm text-neutral-400">{resource.description}</span>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
