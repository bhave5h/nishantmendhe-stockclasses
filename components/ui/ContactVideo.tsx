"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactVideo() {
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

  return (
    <>
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onClick={handleVideoClick}
        className="absolute inset-0 w-full h-full object-cover z-0 cursor-pointer"
      >
        <source src="/Images/Webinar/w.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center transition-opacity duration-300">
          {/* Subtle volume hint if muted */}
          {isMuted && (
             <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm shadow-xl animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
             </div>
          )}
      </div>
    </>
  );
}
