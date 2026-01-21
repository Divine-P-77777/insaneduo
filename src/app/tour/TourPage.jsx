"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const locations = [
    { name: "Guwahati", x: "85%", y: "45%", color: "#ec4899" }, // Shifted Right
    { name: "Kolkata", x: "78%", y: "55%", color: "#a855f7" }, // Shifted Right/Down
    { name: "Raipur", x: "68%", y: "58%", color: "#a855f7" }, // Shifted Right
    { name: "Gaziabad", x: "65%", y: "30%", color: "#a855f7" }, // Shifted Up/Right
    { name: "Delhi", x: "58%", y: "38%", color: "#a855f7" }, // Centered anchor
    { name: "Rajasthan", x: "48%", y: "40%", color: "#a855f7" }, // Shifted Left/Up
    { name: "Gujarat", x: "46%", y: "52%", color: "#a855f7" },
    { name: "Mumbai", x: "50%", y: "62%", color: "#a855f7" },
    { name: "Goa", x: "52%", y: "70%", color: "#a855f7" },
    { name: "Bangalore", x: "58%", y: "76%", color: "#a855f7" },
    { name: "Kerala", x: "56%", y: "82%", color: "#a855f7" },

    { name: "Dubai", x: "30%", y: "48%", color: "#fbbf24" },
    { name: "Uzbekistan", x: "35%", y: "20%", color: "#fbbf24" },
    { name: "Poland", x: "12%", y: "18%", color: "#fbbf24" },
    { name: "Indonesia", x: "92%", y: "75%", color: "#fbbf24" },
    { name: "Sri Lanka", x: "62%", y: "88%", color: "#fbbf24" },
    { name: "Singapore", x: "85%", y: "68%", color: "#fbbf24" },
    { name: "Patna", x: "73%", y: "45%", color: "#a855f7" }, // Shifted Right
    { name: "Punjab", x: "52%", y: "28%", color: "#a855f7" }, // Shifted Left/Up significantly
    { name: "Lucknow", x: "68%", y: "40%", color: "#a855f7" }, // Shifted Right
];

const connections = [
    // The Journey: Assam -> India
    { from: 0, to: 1 }, // Guwahati -> Kolkata
    { from: 1, to: 2 }, // Kolkata -> Raipur
    { from: 2, to: 4 }, // Raipur -> Delhi
    { from: 4, to: 3 }, // Delhi -> Gaziabad (Close)
    { from: 4, to: 5 }, // Delhi -> Rajasthan
    { from: 5, to: 6 }, // Rajasthan -> Gujarat 
    { from: 6, to: 7 }, // Gujarat -> Mumbai
    { from: 7, to: 8 }, // Mumbai -> Goa
    { from: 8, to: 9 }, // Goa -> Bangalore
    { from: 9, to: 10 }, // Bangalore -> Kerala

    // International Connections
    { from: 7, to: 11 }, // Mumbai -> Dubai (Gateway)
    { from: 4, to: 11 }, // Delhi -> Dubai (Alt Gateway)
    { from: 11, to: 12 }, // Dubai -> Uzbekistan
    { from: 12, to: 13 }, // Uzbekistan -> Poland
    { from: 1, to: 14 }, // Kolkata -> Indonesia (Eastward - old path)

    // New Connections
    { from: 10, to: 15 }, // Kerala -> Sri Lanka
    { from: 1, to: 16 }, // Kolkata -> Singapore
    { from: 16, to: 14 }, // Singapore -> Indonesia
    { from: 1, to: 17 }, // Kolkata -> Patna
    { from: 17, to: 19 }, // Patna -> Lucknow
    { from: 19, to: 4 }, // Lucknow -> Delhi
    { from: 4, to: 18 }, // Delhi -> Punjab
];

const domesticCities = [
    "Mumbai", "Delhi", "Rajasthan", "Kolkata", "Guwahati", "Kerala", "Bangalore",
    "Raipur", "Gaziabad", "Goa", "Gujarat", "Patna", "Punjab", "Lucknow"
];

const internationalNations = [
    "Indonesia", "Uzbekistan", "Dubai", "Poland", "Sri Lanka", "Singapore"
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
                    <div className="absolute inset-0 flex items-center justify-center text-[10vw] font-bold text-white/5 tracking-widest uppercase">
                        World Tour
                    </div>
                </div>

                {/* CONNECTION NETWORK */}
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
                                animate={{ pathLength: 1, opacity: 0.15 }}
                                transition={{ duration: 2.5, delay: i * 0.15, ease: "easeInOut" }}
                            />
                        );
                    })}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#fbbf24" />
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
                            transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        >
                            <div className="relative group cursor-pointer">
                                {/* Pulse Effect */}
                                <div className={`absolute -inset-2 rounded-full blur-md animate-pulse opacity-40`} style={{ backgroundColor: loc.color }} />
                                {/* Pin Head */}
                                <div className={`w-3 h-3 bg-white rounded-full border-2 shadow-[0_0_10px_currentColor]`} style={{ borderColor: loc.color, color: loc.color }} />
                                {/* Label */}
                                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] md:text-xs tracking-wider font-bold opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30" style={{ color: loc.color }}>
                                    {loc.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- MARQUEE: Cities List --- */}
            <section className="bg-purple-950/20 py-4 overflow-hidden border-y border-white/5 relative z-40 backdrop-blur-sm">
                <div className="flex whitespace-nowrap">
                    <motion.div
                        className="flex gap-12 items-center"
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Repeat specific list to ensure smooth loop */}
                        {[...domesticCities, ...internationalNations, ...domesticCities, ...internationalNations].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 text-white/40 text-lg uppercase tracking-widest font-outfit">
                                <span className={internationalNations.includes(item) ? "text-yellow-400/80 font-bold" : ""}>{item}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                            </div>
                        ))}
                    </motion.div>
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
                            country: "UZBEKISTAN",
                            title: "Central Asian Rhythm",
                            desc: "Exploring the historic crossroads of culture. Our performance blended traditional storytelling with modern aerial artistry in the heart of the Silk Road.",
                            gradient: "from-blue-400 to-cyan-500",
                            align: "right"
                        },
                        {
                            country: "DUBAI",
                            title: "Desert Sky High",
                            desc: "Performing amidst the skyscrapers and sand dunes. A spectacle of elegance and strength in one of the world's most dynamic cities.",
                            gradient: "from-amber-400 to-yellow-600",
                            align: "left"
                        },
                        {
                            country: "POLAND",
                            title: "European Debut",
                            desc: "Taking our art to Europe. A mesmerizing showcase that bridged continents and captured hearts in Poland.",
                            gradient: "from-rose-500 to-red-600",
                            align: "right"
                        },
                        {
                            country: "INDIA",
                            title: "Home Ground Heroes",
                            desc: "Top 6 Finalists on India's Got Talent Season 11. Performing for our nation was an honor, showcasing Northeast India's talent on the grandest stage.",
                            gradient: "from-orange-500 to-yellow-500",
                            align: "left"
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className={`flex flex-col md:flex-row items-center gap-12 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Card */}
                            <div className="flex-1 w-full relative group perspective-1000">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                                <div className="relative h-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:scale-105 shadow-2xl">
                                    <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-white/5 select-none font-cinzel">
                                        {item.country.substring(0, 3)}
                                    </div>
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

