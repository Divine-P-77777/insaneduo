"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const Memories = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredVideo = {
    url: "https://youtu.be/0Kaz9oUvFWs",
    caption: "Aerial Performance",
  };

  return (
    <section
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
          <div className="w-full h-full bg-black rounded-2xl overflow-hidden group">
            {isPlaying ? (
              <iframe
                src="https://drive.google.com/file/d/1s-gVPgjwc0C-8LCmEEfcgihkKpxuMhSB/preview"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className="relative w-full h-full bg-black/50 cursor-pointer flex items-center justify-center group"
                onClick={() => setIsPlaying(true)}
                style={{ backgroundImage: "url('/wallpaperdark/artist.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="relative z-10 flex items-center justify-center bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/40 hover:scale-110 transition-all duration-300 group-hover:bg-white/30">
                  <svg
                    className="w-12 h-12 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
