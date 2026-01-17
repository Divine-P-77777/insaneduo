"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
    return (
        <div className="bg-black min-h-screen text-white font-outfit">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 min-h-screen">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
                <div className="absolute top-40 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Transparency for our Fans, Partners, and Students.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 shadow-2xl"
                    >
                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-purple-300">1. Who We Are</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We are <strong>Insane Duo</strong> (Dhanraj Shah and Gayatri Prajapati), aerial artists and performers known for our appearances on reality shows like <em>India's Got Talent</em> (Finalists) and <em>America's Got Talent</em>. We also operate the <strong>Insane DanZe Company</strong>, organizing events and workshops globally.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-purple-300">2. Information We Collect</h2>
                            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 marker:text-purple-500">
                                <li><strong>Inquiries:</strong> When you contact us for event bookings, workshops, or collaborations, we collect your name, email, phone number, and event details.</li>
                                <li><strong>Students:</strong> For workshop registrations, we may collect health/fitness information relevant to aerial safety.</li>
                                <li><strong>Website Usage:</strong> We use cookies to understand how fans interact with our site (see Cookie Policy).</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-purple-300">3. How We Use Your Information</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We use your data solely to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 marker:text-purple-500">
                                <li>Coordinate performances and event logistics.</li>
                                <li>Communicate regarding classes and workshop schedules.</li>
                                <li>Improve our website experience and showcase our portfolio.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-purple-300">4. Media & Content</h2>
                            <p className="text-gray-300 leading-relaxed">
                                As public performers, our website features media from our reality show appearances and live events. If you are a client or student and appear in our gallery, you may request removal by contacting us directly.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-cinzel font-bold text-purple-300">5. Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                For any privacy-concerns, please reach out to us at <a href="mailto:insaneduoindia@gmail.com" className="text-purple-400 hover:text-white transition-colors">insaneduoindia@gmail.com</a>.
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
