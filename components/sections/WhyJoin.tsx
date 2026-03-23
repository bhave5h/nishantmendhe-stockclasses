"use client";

export default function WhyJoin() {
    return (
        <section className="w-full bg-white py-10 md:py-16 relative z-10">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 text-neutral-900 leading-[1.1]">
                        Why you should join?
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-[#8e95a5] leading-relaxed font-normal">
                        Know from our speaker himself
                    </p>
                </div>
                
                <div className="w-full max-w-[320px] md:max-w-[380px] aspect-[9/16] bg-black rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] mx-auto relative">
                    <video 
                        className="absolute top-0 left-0 w-full h-full object-cover" 
                        controls
                        preload="metadata"
                    >
                        <source src="/Images/Webinar/w.mp4" type="video/mp4" />
                        <source src="/Video/w.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    );
}
