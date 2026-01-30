
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Memories = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isIntersecting && !isPaused) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isIntersecting, isPaused]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <section
      ref={containerRef}
      id="memories"
      className="relative min-h-screen py-10 w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/wallpaperdark/artist.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/60 to-black/80" />

      {/* LIVE Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h1 className="text-[10rem] md:text-[18rem] font-bold font-outfit uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white/10 via-purple-400/10 to-transparent">
          LIVE
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-cinzel font-bold text-center mb-6">
          <span className="text-white drop-shadow-xl">Insane Duo</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient">
            LIVE
          </span>
        </h2>

        <p className="text-lg md:text-2xl text-gray-300 font-outfit mb-12 tracking-wide text-center max-w-2xl">
          Immerse yourself in our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
            aerial & performing arts
          </span>
        </p>

        {/* Video Frame */}
        <div className="relative w-full aspect-video md:w-[80%] lg:w-[70%] rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-[0_0_60px_rgba(236,72,153,0.35)]">
          <div
            className="relative w-full h-full bg-black rounded-2xl overflow-hidden group cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              playsInline
              poster="/wallpaperdark/artist.jpg"
            >
              <source src="https://res.cloudinary.com/dny3aguke/video/upload/v1769765600/IMG_7487_qbnrvx.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Controls Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                onClick={togglePlay}
                className="p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 scale-90 group-hover:scale-100"
              >
                {isPaused ? (
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mute/Unmute Float */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-30 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              {isMuted ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>

            {/* LIVE Badge */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-white text-[10px] font-outfit uppercase tracking-widest font-bold">LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
