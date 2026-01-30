
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Memories = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.3,
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

  // Handle auto-hiding controls
  const resetControlsTimer = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (!isPaused) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (isIntersecting) {
      resetControlsTimer();
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPaused, isIntersecting]);

  const togglePlay = (e) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
    resetControlsTimer();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    resetControlsTimer();
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
    resetControlsTimer();
  };

  return (
    <section
      ref={containerRef}
      id="memories"
      className="relative min-h-screen py-10 w-full overflow-hidden flex items-center justify-center"
      onMouseMove={resetControlsTimer}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/wallpaperdark/artist.jpg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/60 to-black/80" />

      {/* MEMORIES Watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h1 className="text-[10rem] md:text-[18rem] font-bold font-outfit uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white/10 via-purple-400/10 to-transparent">
          MEMORIES
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-cinzel font-bold text-center mb-6">
          <span className="text-white drop-shadow-xl">Insane Duo</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient">
            MEMORIES
          </span>
        </h2>

        <p className="text-lg md:text-2xl text-gray-300 font-outfit mb-12 tracking-wide text-center max-w-2xl">
          Relive the moments that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
            defined our journey
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
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center pointer-events-none"
                >
                  <button
                    onClick={togglePlay}
                    className="p-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 scale-90 hover:scale-100 pointer-events-auto"
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

                  <div className="absolute bottom-6 right-6 flex items-center gap-4 pointer-events-auto">
                    {/* Fullscreen icon */}
                    <button
                      onClick={toggleFullscreen}
                      className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4M16 4h4v4M4 16v4h4M20 16v4h-4" />
                      </svg>
                    </button>

                    {/* Mute/Unmute Float */}
                    <button
                      onClick={toggleMute}
                      className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all duration-300"
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
