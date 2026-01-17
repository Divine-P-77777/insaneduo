"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Parallax } from "react-parallax";

const slides = [
  {
    image: "/wallpaperdark/insanebg1.JPG",
    title: "FINALIST",
    subtitle: "Insane Duo",
    slogan: " INDIA'S GOT TALENT SEASON 11",
  },
  {
    image: "/bg1.jpg",
    title: "Dhanraj & Gayatri",
    subtitle: "Insane Duo",
    slogan: "When fear lets go, we fly.",
  },

  {
    image: "/wallpaperdark/artist2.jpg",
    title: "World  1st Aerial Quick-Change",
    subtitle: "Grace & Power",
    slogan: "Art Beyond Words",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-background">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Parallax
            blur={0}
            bgImage={slides[index].image}
            bgImageAlt="Hero Background"
            strength={200}
            className="w-full h-full"
            contentClassName="w-full h-full flex items-center justify-center"
            bgImageStyle={{ objectFit: "cover", width: "100%", height: "100vh" }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </Parallax>
        </motion.div>
      </AnimatePresence>

      {/* Content Layer (Absolute to sit on top of Parallax) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center pointer-events-auto"
          >
            <h1 className="text-5xl md:text-8xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
              {slides[index].title}
            </h1>
            <h2 className="text-2xl md:text-5xl font-outfit font-light text-purple-300 mt-4 tracking-widest uppercase">
              {slides[index].subtitle}
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent my-8" />
            <p className="text-xl md:text-2xl font-handwriting italic text-gray-300">
              "{slides[index].slogan}"
            </p>

            <div className="mt-12">
              <Link href="/resume.pdf" legacyBehavior>
                <a
                  className="px-8 py-4 rounded-full font-semibold text-white border border-purple-500/50 bg-black/30 backdrop-blur-md hover:bg-purple-900/30 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  download
                  onClick={(e) => e.stopPropagation()}
                >
                  Download Resume
                </a>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
