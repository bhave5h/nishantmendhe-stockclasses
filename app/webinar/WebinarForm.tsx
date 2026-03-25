"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { section } from "framer-motion/client";

export default function WebinarForm() {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current.play().catch((err) => {
                // If autoplay with audio is blocked by the browser, fallback to muted
                setIsMuted(true);
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  videoRef.current.play().catch(console.error);
                }
              });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  const handleVideoClick = () => {
    setIsMuted((prev) => !prev);
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    profession: ""
  });

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData();

    // Replace these entry IDs with your Google Form entry IDs
    formData.append("entry.1862617466", form.name);
    formData.append("entry.1913439724", form.phone);
    formData.append("entry.2052950666", form.email);
    formData.append("entry.1098219313", form.profession);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScCsQGdvOcUNdw6IazOnVmht34J0fWN8fkI950TH_LK3vMx3A/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData
      }
    );

    alert("Registration Successful!");

    setForm({
      name: "",
      phone: "",
      email: "",
      profession: ""
    });
  };

  return (
    <section id="registerform">
      <div className="text-center max-w-3xl mx-auto mb-2 md:mb-10">
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold opacity-90 tracking-tight mb-3 text-neutral-900 leading-[1.1]">
          Register for Webinar
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#8e95a5] leading-relaxed font-normal">
          Join our live session and learn about our trading strategies
        </p>
      </div>

      <div className="w-full bg-white text-black rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-3xl mx-auto border border-neutral-100">
        {/* Left Column - Video & Branding */}
        <div className="relative w-full md:w-1/2 min-h-[600px] md:min-h-auto flex flex-col justify-between p-8 overflow-hidden">
          {/* Video Background */}
          <video
            ref={videoRef}
            loop
            muted={isMuted}
            playsInline
            onClick={handleVideoClick}
            className="absolute inset-0 w-full h-full object-cover z-0 cursor-pointer"
          >
            <source src="/Images/Webinar/w.webm" type="video/webm" />
          </video>

          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/40 via-black/20 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>

          {/* Logo (Top Left) */}
          <div className="relative z-20 flex items-center gap-3">
            <div className="mt-[-50px]">
              <Image
                src="/Images/Logos/F_logo.png"
                alt="Nishant Mendhe"
                width={150}
                height={150}
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-10 flex flex-col justify-center bg-white">
          <h2 className="text-2xl md:text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
            Register for Webinar
          </h2>
          <p className="text-sm text-neutral-500 mb-3 font-medium">
            Access our live session, insights, and trading strategies
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-neutral-700 font-bold">
                Your name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="e.g. John Doe"
                required
                className="bg-white text-black placeholder-neutral-400 rounded-lg px-4 py-2 text-sm outline-none border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-neutral-700 font-bold">
                Your phone
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+91 9876543210"
                required
                className="bg-white text-black placeholder-neutral-400 rounded-lg px-4 py-2 text-sm outline-none border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-neutral-700 font-bold">
                Your email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="e.g. john@example.com"
                required
                className="bg-white text-black placeholder-neutral-400 rounded-lg px-4 py-2 text-sm outline-none border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] text-neutral-700 font-bold">
                Profession
              </label>
              <input
                name="profession"
                value={form.profession}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Student, Trader, IT Professional"
                required
                className="bg-white text-black placeholder-neutral-400 rounded-lg px-4 py-2 text-sm outline-none border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-shadow"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-[#0a0a0a] hover:bg-green-500 duration-300 text-white font-bold text-sm py-4 px-6 rounded-lg shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] transition-all active:scale-[0.98]"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}