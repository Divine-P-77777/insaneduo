"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiePage() {
    return (
        <div className="bg-black min-h-screen text-white font-outfit">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 min-h-screen">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
                <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                            Cookie Policy
                        </h1>
                        <p className="text-gray-400 text-lg">
                            How we use tracking technologies to improve your experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 shadow-2xl"
                    >
                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-cyan-300">1. What Are Cookies?</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and understand how you interact with our portfolio and performance videos.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-cyan-300">2. Types of Cookies We Use</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                    <h3 className="text-white font-bold mb-2">Essential Cookies</h3>
                                    <p className="text-sm text-gray-400">Necessary for the website to function, such as navigating between our Tour and Gallery pages.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                                    <h3 className="text-white font-bold mb-2">Performance & Analytics</h3>
                                    <p className="text-sm text-gray-400">Help us see which performances are most popular by tracking views and interactions anonymously.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-cyan-300">3. Managing Cookies</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You can control and/or delete cookies as you wish through your browser settings. However, disabling cookies may limit your ability to use certain features of our interactive experience.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                            Last Updated: January 2026
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
