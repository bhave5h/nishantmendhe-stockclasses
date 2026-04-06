"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SmoothButton from "@/components/ui/smooth-button";

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
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch((err) => {
                  if (err.name === "NotAllowedError") {
                    // Autoplay with audio was blocked
                    setIsMuted(true);
                  } else if (err.name === "AbortError") {
                    // Play was interrupted, do nothing
                    console.debug("Video play was aborted");
                  } else {
                    console.error("Video play failed:", err);
                  }
                });
              }
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.3 },
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
    profession: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
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
        body: formData,
      },
    );

    setShowModal(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      profession: "",
    });
  };

  return (
    <section id="registerform">
      <div className="w-full mt-6 lg:mt-8 p-10 z-20 bg-white mb-2  h-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3 text-neutral-800 leading-[1.1]"
          >
            Register For Free Webinar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-l md:text-[18px] text-neutral-500 lg:leading-10 md:leading-8 sm:leading-5 font-semibold"
          >
            Master the RSI Decision-Making System and filter quality trades instantly
          </motion.p>
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
              preload="metadata"
              onClick={handleVideoClick}
              className="absolute inset-0 w-full h-full object-cover z-0 cursor-pointer"
            >
              <source src="/Images/Webinar/intro.webm" type="video/webm" />
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
              Register for Free Webinar
            </h2>
            <p className="text-sm text-neutral-500 mb-3 font-medium">
              Master the RSI decision-making system and filter quality trades instantly
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
                  className="bg-white text-black placeholder-neutral-400 rounded-lg px-4 py-2 text-sm outline-none border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black transition-shadow"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[#0a0a0a] hover:bg-green-500 duration-300 text-white font-bold text-sm py-4 px-6 rounded-lg shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] transition-all active:scale-[0.98]"
              >
                Register Now
              </button>

              <a
                href="https://chat.whatsapp.com/JaIK884vLL15V1wguyq61Y?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0 bg-[#25D366] hover:bg-[#20bd5a] duration-300 text-white font-bold text-sm py-4 px-6 rounded-lg shadow-[0_4px_14px_0_rgb(0,0,0,0.2)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Join WhatsApp Community
              </a>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative flex flex-col items-center text-center"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Registration Successful!</h3>
              <p className="text-neutral-600 mb-6">
                Thank you for registering. Join our WhatsApp community to get the webinar link and exclusive updates.
              </p>
              <a 
                href="https://chat.whatsapp.com/JaIK884vLL15V1wguyq61Y?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowModal(false)}
                className="w-full"
              >
                <SmoothButton variant="default" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-6 text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  Join WhatsApp Community
                </SmoothButton>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
