"use client";

import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";
import { Calendar, Clock, MapPin, Play, IndianRupee } from "lucide-react";

const { webinar } = content;

function getIcon(iconName: string) {
    const cls = "w-7 h-7 text-white flex-shrink-0";
    switch (iconName) {
        case "calendar":
            return <Calendar className={cls} />;
        case "clock":
            return <Clock className={cls} />;
        case "location":
            return <MapPin className={cls} />;
        case "live":
            return (
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
                    <Play className="w-4 h-4 text-white fill-white" />
                </div>
            );
        case "fee":
            return <IndianRupee className={cls} />;
        default:
            return null;
    }
}

export default function WebinarSection() {
    return (
        <section className="w-full max-w-5xl mx-auto">
            {/* Main card */}
            <div
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                style={{
                    backgroundImage: `url('${webinar.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Subtle paper overlay for correct tint */}
                <div className="absolute inset-0 bg-[#f5f0e8]/60" />

                {/* Card body */}
                <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[380px]">
                    {/* ─────────── Left: Text Content ─────────── */}
                    <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
                        {/* Heading */}
                        <h1 className="text-[1.45rem] md:text-[1.75rem] font-extrabold text-gray-900 leading-tight mb-3">
                            {webinar.heading}
                        </h1>

                        {/* Intro */}
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            {webinar.description}
                        </p>

                        {/* Learning points */}
                        <div className="mb-4">
                            <p className="font-bold text-gray-900 text-sm md:text-base mb-1">
                                {webinar.learningTitle}
                            </p>
                            <ul className="space-y-0.5">
                                {webinar.learningPoints.map((point, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-700 text-sm md:text-base flex items-start gap-1"
                                    >
                                        <span className="mt-0.5">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Audience */}
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                            {webinar.audienceText}
                        </p>

                        {/* Social proof */}
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            {webinar.socialProof}
                        </p>

                        {/* Urgency */}
                        <p className="font-bold text-gray-900 text-sm md:text-base">
                            {webinar.urgency}
                        </p>
                    </div>

                    {/* ─────────── Right: Speaker Image + Tagline ─────────── */}
                    <div className="relative md:w-[340px] lg:w-[380px] flex-shrink-0 flex items-end justify-center overflow-hidden">
                        {/* Speaker photo — flush bottom, cropped top */}
                        <Image
                            src={webinar.speakerImage}
                            alt="Nishant Mendhe"
                            width={760}
                            height={540}
                            className="relative z-10 w-full h-full object-cover object-top"
                            priority
                        />

                        {/* Tagline overlay at bottom-right of image */}
                        <div className="absolute bottom-4 right-3 z-20 text-right leading-none select-none">
                            <span
                                className="block text-white text-xl"
                                style={{
                                    fontFamily: "'Dancing Script', cursive",
                                    textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
                                }}
                            >
                                {webinar.tagline.handwritten}
                            </span>
                            <span
                                className="block font-black uppercase text-[#7cfc00] drop-shadow-lg"
                                style={{
                                    fontSize: "clamp(1.1rem, 2.8vw, 1.65rem)",
                                    letterSpacing: "0.04em",
                                    textShadow:
                                        "2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000",
                                }}
                            >
                                {webinar.tagline.bold}
                            </span>
                        </div>
                    </div>
                </div>

                {/* ─────────── Bottom: Event Details Bar ─────────── */}
                <div className="relative z-10 bg-[#1a1a1a] px-4 md:px-8 py-4">
                    <div className="flex flex-wrap justify-around items-center gap-y-4 gap-x-2">
                        {webinar.eventDetails.map((detail, i) => (
                            <div key={i} className="flex items-center gap-2.5 min-w-[120px]">
                                {getIcon(detail.icon)}
                                <div className="flex flex-col">
                                    {detail.value.split("\n").map((line, j) => (
                                        <span
                                            key={j}
                                            className="text-white font-semibold text-sm md:text-base leading-snug"
                                        >
                                            {j === 0 && ["Live", "Registration Fees"].includes(detail.label) ? (
                                                <span className="text-gray-400 font-normal text-xs block">
                                                    {detail.label}:
                                                </span>
                                            ) : null}
                                            {line}
                                        </span>
                                    ))}
                                    {!["Live", "Registration Fees"].includes(detail.label) && (
                                        <span className="text-gray-400 text-xs hidden" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─────────── CTA Button below card ─────────── */}
            <div className="flex justify-center mt-6">
                <Link
                    href={webinar.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a1a1a] text-white font-bold text-base md:text-lg px-10 py-3 rounded-full shadow-xl hover:bg-neutral-700 transition-colors duration-200 tracking-wide"
                >
                    {webinar.ctaText}
                </Link>
            </div>

        </section>
    );
}
