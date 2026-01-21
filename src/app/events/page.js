"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const events = [
    {
        id: 1,
        title: "Aerial Arts Workshop",
        location: "Guwahati, Assam",
        date: "March 15, 2025",
        description: "An intensive 3-day workshop teaching the fundamentals of silks and hoop to aspiring aerialists in the heart of Assam.",
        image: "/logotheme.png",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 2,
        title: "Corporate Gala Performance",
        location: "Mumbai, Maharashtra",
        date: "April 22, 2025",
        description: "A high-flying opening act for the annual Tech Summit, featuring synchronized duo acrobatics and custom choreography.",
        image: "/logotheme.png",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "Beachside Acrobatics Festival",
        location: "Goa",
        date: "May 10, 2025",
        description: "Organizing a sunset showcase of aerial talents against the backdrop of the Arabian Sea. A celebration of movement and nature.",
        image: "/logotheme.png",
        gradient: "from-amber-400 to-orange-500"
    },
    {
        id: 4,
        title: "National Dance Championship",
        location: "New Delhi",
        date: "June 05, 2025",
        description: "Judge and guest performers at the nation's premier dance competition, inspiring the next generation of performers.",
        image: "/logotheme.png",
        gradient: "from-emerald-400 to-teal-500"
    }
];

export default function EventsPage() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className="bg-black min-h-screen text-white font-outfit overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black/80 to-black z-10" />
                <motion.div style={{ y }} className="absolute -top-[20%] inset-x-0 h-[140%] z-0">
                    <Image
                        src="/wallpaperdark/insanebg1.JPG"
                        alt="Events Background"
                        fill
                        priority
                        className="object-cover opacity-30 blur-sm"
                        sizes="100vw"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-4"
                    >
                        Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Tours</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl text-gray-300 font-light max-w-2xl mx-auto"
                    >
                        Creating magic across the country. Join us at our next destination.
                    </motion.p>
                </div>
            </section>

            {/* Events Timeline/List */}
            <section className="relative py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-20">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image Card */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                                <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/50 z-10" />
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-contain p-12 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                                    />
                                </div>
                                {/* Box Date Badge */}
                                <div className="absolute -bottom-6 -right-6 md:-right-10 bg-black/80 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center shadow-xl z-20">
                                    <span className="block text-3xl font-bold font-cinzel text-white">{event.date.split(',')[0].split(' ')[1]}</span>
                                    <span className="block text-xs uppercase tracking-widest text-purple-400">{event.date.split(',')[0].split(' ')[0]}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                                <div>
                                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${event.gradient} text-white/90 mb-4`}>
                                        {event.location}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white leading-tight">
                                        {event.title}
                                    </h2>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {event.description}
                                </p>
                                <button className="px-8 py-3 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
