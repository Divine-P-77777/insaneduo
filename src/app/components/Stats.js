"use client";

import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

const AnimatedCounter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 50, damping: 20 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return (
        <span className="flex items-baseline">
            <motion.span ref={ref}>{display}</motion.span>
            {suffix}
        </span>
    );
};

const Stats = () => {
    const stats = [
        {
            value: 500,
            suffix: "+",
            label: "Events",
            description: "Mesmerizing audiences worldwide",
        },
        {
            value: 2014,
            suffix: "",
            label: "Since",
            description: "Years of excellence & creativity",
        },
        {
            value: 8,
            suffix: "+",
            label: "International Performances",
            description: "Representing India globally",
        },
    ];

    return (
        <section className="relative py-20 px-6 bg-black/40 backdrop-blur-md border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-6xl md:text-8xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-outfit font-semibold text-purple-400 uppercase tracking-widest mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-gray-400 font-outfit text-sm md:text-base max-w-[200px]">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
