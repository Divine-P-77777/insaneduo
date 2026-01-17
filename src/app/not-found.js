"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center text-center px-4 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('/wallpaperdark/insanebg1.JPG')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

            {/* Floating Elements (Simulating Aerial Arts) */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-purple-500/30 blur-sm pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-pink-500/20 blur-md pointer-events-none"
            />

            <div className="relative z-10 space-y-8 max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-8xl md:text-[10rem] font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                >
                    404
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-5xl font-cinzel text-white">
                        Lost in the Air?
                    </h2>
                    <p className="text-gray-400 text-lg font-outfit">
                        It seems you've drifted too high. The page you are looking for has flown away or doesn't exist.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] uppercase tracking-widest font-outfit"
                    >
                        Return to Safety
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
