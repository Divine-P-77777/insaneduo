"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
    const [shuffledImages, setShuffledImages] = useState([]);

    const images = [
        { src: "/memories/m5.jpg", caption: "Artistic Expression" },
        { src: "/memories/m7.jpg", caption: "Radha & Krishna Act" },
        { src: "/memories/m11.jpg", caption: "India's Got Talent" },

        { src: "/memories/m2.jpg", caption: "Grace in Motion" },
        { src: "/memories/m3.jpg", caption: "Aerial Duo Straps" },
        { src: "/memories/m6.jpg", caption: "Indonesia's Got Talent" },
        { src: "/memories/m1.jpg", caption: "Glob Act" },

        { src: "/memories/m4.jpg", caption: "Performance Moment" },
        { src: "/memories/m15.jpg", caption: "India's Got Talent" },
        { src: "/memories/m12.jpg", caption: "India's Got Talent" },
        { src: "/memories/m13.jpg", caption: "India's Got Talent S 11" },


    ];

    useEffect(() => {

        setShuffledImages(images);
    }, []);

    return (
        <section id="gallery" className="relative py-24 px-4 bg-background overflow-hidden">

            <div className="text-center mb-16 relative">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[10rem] font-bold text-white/5 select-none pointer-events-none font-outfit uppercase z-0 tracking-widest">
                    Gallery
                </div>

                <div className="relative z-10">
                    <h4 className="text-gray-400 font-outfit font-medium text-lg uppercase tracking-[0.2em] mb-2">
                        Gallery
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-white">
                        Some Photos Of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">EVENTS</span>
                    </h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {shuffledImages.map((img, index) => {
                    const randomDelay = Math.random() * 1.5;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: randomDelay, ease: "easeOut" }}
                            className="relative group overflow-hidden rounded-xl border border-white/10 break-inside-avoid"
                        >
                            <Image
                                src={img.src}
                                alt={img.caption}
                                width={500}
                                height={700}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-cinzel text-sm md:text-base tracking-wide">
                                    {img.caption}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
};

export default Gallery;
