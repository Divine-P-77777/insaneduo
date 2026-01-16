"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const locations = [
    { name: "India", x: "70%", y: "45%" },
    { name: "Indonesia", x: "80%", y: "60%" },
    { name: "Brazil", x: "32%", y: "65%" },
    { name: "Afghanistan", x: "65%", y: "38%" },
    // Adding more for visual density
    { name: "Dubai", x: "60%", y: "42%" },
    { name: "France", x: "48%", y: "30%" },
];

const connections = [
    { from: 0, to: 1 }, // India -> Indonesia
    { from: 0, to: 3 }, // India -> Afghanistan
    { from: 0, to: 4 }, // India -> Dubai
    { from: 4, to: 2 }, // Dubai -> Brazil
    { from: 4, to: 5 }, // Dubai -> France
];

const TourPage = () => {
    return (
        <div className="bg-black min-h-screen text-white overflow-x-hidden font-outfit">
            <Navbar />

            {/* --- HERO: WORLD MAP VISUALIZATION --- */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0" />

                {/* Simplified World Map (CSS/SVG) */}
                <div className="absolute inset-0 w-full h-full opacity-30 select-none pointer-events-none">
                    {/* A stylized dot grid or abstract map could go here. For now, using a placeholder text or simple SVG dots for "World" */}
                    <div className="absolute inset-0 flex items-center justify-center text-[10vw] font-bold text-white/5 tracking-widest uppercase">
                        World Tour
                    </div>
                </div>

                {/* CONNECTION NETWORK (The "Canvas" equivalent using SVG) */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                    {connections.map((conn, i) => {
                        const start = locations[conn.from];
                        const end = locations[conn.to];
                        return (
                            <motion.line
                                key={i}
                                x1={start.x}
                                y1={start.y}
                                x2={end.x}
                                y2={end.y}
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.5 }}
                                transition={{ duration: 2, delay: i * 0.5, ease: "easeInOut" }}
                            />
                        );
                    })}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* LOCATION PINS */}
                <div className="absolute inset-0 w-full h-full z-20">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4"
                            style={{ left: loc.x, top: loc.y }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1 + i * 0.2, type: "spring" }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-2 bg-purple-500/50 rounded-full blur-md animate-pulse" />
                                <div className="w-3 h-3 bg-white rounded-full border-2 border-purple-500 shadow-[0_0_10px_#a855f7]" />
                                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-purple-200 tracking-wider font-bold">
                                    {loc.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="absolute bottom-1 left-0 right-0 z-30 text-center px-6">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-8xl font-cinzel font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    >
                        GLOBAL CONNECTIONS
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg md:text-2xl text-purple-200/80 font-light tracking-widest uppercase"
                    >
                        Uniting Cultures Through Aerial Art
                    </motion.p>
                </div>
            </section>

            {/* --- CONTENT CARDS (Parallax/Innovative) --- */}
            <section className="relative py-32 px-6 overflow-hidden">
                {/* Decorative Bg */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />

                <div className="max-w-6xl mx-auto space-y-32">
                    {[
                        {
                            country: "INDONESIA",
                            title: "Got Talent Finalists",
                            desc: "Bringing the heat to Jakarta! Our aerial straps performance left the judges stunned and the audience roaring. A defining moment in our international journey.",
                            gradient: "from-purple-500 to-indigo-500",
                            align: "left"
                        },
                        {
                            country: "BRAZIL",
                            title: "Samba & Sky",
                            desc: "Merging the rhythm of Brazil with the grace of aerial acrobatics. A cultural fusion that pushed our physical limits and artistic expression.",
                            gradient: "from-green-400 to-teal-500", // Brazilian vibe
                            align: "right"
                        },
                        {
                            country: "INDIA",
                            title: "Home Ground Heroes",
                            desc: "Top 6 Finalists on India's Got Talent Season 11. Performing for our nation was an honor, showcasing Northeast India's talent on the grandest stage.",
                            gradient: "from-orange-500 to-yellow-500", // Indian vibe (saffron/gold)
                            align: "left"
                        },
                        {
                            country: "AFGHANISTAN",
                            title: "Cultural Bridges",
                            desc: "A special showcase demonstrating resilience and beauty through movement. Connecting hearts beyond borders.",
                            gradient: "from-red-500 to-black",
                            align: "right"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className={`flex flex-col md:flex-row items-center gap-12 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Card (Placeholder for now, or stylized block) */}
                            <div className="flex-1 w-full relative group perspective-1000">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="relative h-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105 shadow-2xl">
                                    <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-white/5 select-none font-cinzel">
                                        {item.country.substring(0, 3)}
                                    </div>
                                    {/* If we had images for each country, they'd go here. Using gradient overlay for now */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 mix-blend-overlay`} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <h2 className="text-6xl md:text-8xl font-black text-white/5 font-outfit uppercase absolute -translate-y-12 select-none pointer-events-none">
                                    {item.country}
                                </h2>
                                <div className="relative">
                                    <h3 className={`text-4xl md:text-5xl font-cinzel font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mt-6 font-light">
                                        {item.desc}
                                    </p>
                                    <button className="mt-8 px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-outfit uppercase tracking-wider text-sm">
                                        View Details
                                    </button>
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

export default TourPage;
