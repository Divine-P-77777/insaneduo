"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroVideo = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section ref={containerRef} className="relative w-full py-20 bg-background flex justify-center overflow-hidden">
            <motion.div
                style={{ scale, opacity }}
                className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)] border border-white/10"
            >
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/intro-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-10 left-6 text-white text-left z-10">
                    <h3 className="text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                        Art in Motion
                    </h3>
                    <p className="text-sm font-outfit text-gray-300 mt-2 opacity-90 max-w-[80%]">
                        A glimpse into our world of rhythm and expression.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default IntroVideo;
