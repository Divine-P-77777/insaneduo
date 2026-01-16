"use client";
import React from "react";
import ReactPlayer from "react-player";

const Memories = () => {
  const featuredVideo = {
    url: "https://youtu.be/0Kaz9oUvFWs",
    caption: "Aerial Performance",
  };

  return (
    <section id="memories" className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/wallpaperdark/artist.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* "LIVE" Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
        <h1 className="text-[12rem] md:text-[20rem] font-bold font-outfit text-transparent bg-clip-text bg-gradient-to-b from-white/5 to-transparent leading-none uppercase select-none">
          LIVE
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-cinzel font-bold text-white mb-4 text-center drop-shadow-lg">
          Insane Duo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">LIVE</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 font-outfit mb-12 tracking-wide">
          Immerse yourself in our performing arts
        </p>

        {/* Featured Video Player Frame */}
        <div className="relative w-full aspect-video md:w-[80%] lg:w-[70%] border-8 border-white bg-black shadow-2xl rounded-lg overflow-hidden group">
          <ReactPlayer
            url={featuredVideo.url}
            controls
            width="100%"
            height="100%"
            light={true}
            playIcon={
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/50 hover:scale-110 transition-transform cursor-pointer group-hover:bg-white/30">
                <svg
                  className="w-12 h-12 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Memories;