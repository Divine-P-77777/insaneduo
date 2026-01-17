"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";

const performances = [
    {
        url: "https://youtu.be/zsWSe_Wbumo?si=ygFZuUx7Ni_0YF0z",
        title: "Mesmerizing Heights",
        caption: "Aerial Performance",
        desc: "A breathtaking display of strength and grace, suspended in the air. Witness the artistry that defines Insane Duo.",
        gradient: "from-purple-500 to-indigo-500",
        align: "left"
    },
    {
        url: "https://fb.watch/nPsDRuy1mq/?mibextid=RUbZ1f",
        title: "Gravity Defied",
        caption: "Aerial Performance",
        desc: "Pushing the boundaries of what is possible. This performance combines technical precision with emotional storytelling.",
        gradient: "from-blue-400 to-cyan-500",
        align: "right"
    },
    {
        url: "",
        title: "Elegance in Motion",
        caption: "Aerial Performance",
        desc: "A symphony of movement and music. Every pose and transition is crafted to captivate and inspire.",
        gradient: "from-amber-400 to-yellow-600",
        align: "left"
    },
];

const PerformancePage = () => {
    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden font-outfit">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/60 to-black z-0" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl sm:text-6xl md:text-9xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mb-6 animate-gradient">
                        Performances
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
                        Witness the art of aerial dance and acrobatics
                    </p>
                </div>
            </section>

            {/* --- VIDEO GALLERY (Parallax/Innovative) --- */}
            <section className="relative py-20 px-6 overflow-hidden">
                {/* Decorative Bg */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto space-y-32">
                    {performances.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className={`flex flex-col md:flex-row items-center gap-12 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Video Card */}
                            <div className="flex-1 w-full relative group perspective-1000">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="relative aspect-video bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                                    <ReactPlayer
                                        url={item.url}
                                        width="100%"
                                        height="100%"
                                        controls
                                        light={true}
                                        playIcon={
                                            <div className="flex items-center justify-center bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/40 hover:scale-110 transition-all duration-300 group-hover:bg-white/30 cursor-pointer">
                                                <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <h2 className="text-6xl md:text-8xl font-black text-white/5 font-outfit uppercase absolute -translate-y-12 select-none pointer-events-none">
                                    0{index + 1}
                                </h2>
                                <div className="relative">
                                    <h3 className={`text-4xl md:text-5xl font-cinzel font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                                        {item.title}
                                    </h3>
                                    <h4 className="text-xl text-white/80 font-outfit uppercase tracking-widest mt-2">{item.caption}</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed mt-6 font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PerformancePage;
