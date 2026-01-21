"use client";
import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative w-full border-t border-white/10 overflow-hidden bg-black text-gray-300 font-outfit">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
                style={{ backgroundImage: "url('/bg1.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand & Socials */}
                    <div className="space-y-8">
                        <div className="flex flex-col items-start gap-6">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] bg-black">
                                <Image src="/logo.png" fill className="object-cover" alt="Insane Duo Logo" sizes="96px" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-cinzel text-2xl font-bold text-white">Insane Duo</h3>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                                    Pushing the boundaries of aerial arts and performance.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: "instagram", link: "https://www.instagram.com" },
                                { icon: "youtube", link: "https://www.youtube.com" },
                                { icon: "facebook", link: "https://www.facebook.com" },
                                { icon: "mail", link: "mailto:insaneduoindia@gmail.com" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    {social.icon === 'instagram' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                                    {social.icon === 'youtube' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>}
                                    {social.icon === 'facebook' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>}
                                    {social.icon === 'mail' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Address */}
                    <div className="space-y-6">
                        <h4 className="font-cinzel text-xl font-bold text-white">Insane DanZe Company</h4>

                        <div className="space-y-4 text-sm text-gray-400">
                            <div>
                                <strong className="text-white block mb-1 uppercase tracking-wider text-xs">Registered Office:</strong>
                                <p>Birubari, Guwahati</p>
                                <p>Assam, India - 781016</p>
                            </div>

                            <div>
                                <strong className="text-white block mb-1 uppercase tracking-wider text-xs">Operational HQ:</strong>
                                <p>Mumbai, Maharashtra</p>
                                <p>India</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 pt-4">
                            <Link href="/privacy" className="text-purple-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                            <Link href="/cookies" className="text-purple-400 hover:text-white transition-colors text-sm">Cookie Policy</Link>
                        </div>
                    </div>

                    {/* Column 3: Contact/References */}
                    <div className="space-y-6">
                        <h4 className="font-cinzel text-xl font-bold text-white">References</h4>

                        <div className="space-y-6">
                            <div className="group">
                                <p className="text-white font-medium flex items-center gap-2">
                                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    (+91) 8486667652
                                </p>
                                <p className="text-sm text-gray-500 pl-6 group-hover:text-purple-400 transition-colors">Dhanraj Shah</p>
                            </div>

                            <div className="group">
                                <p className="text-white font-medium flex items-center gap-2">
                                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    (+91) 9859334179
                                </p>
                                <p className="text-sm text-gray-500 pl-6 group-hover:text-purple-400 transition-colors">Gayatri Prajapati</p>
                            </div>

                            <div>
                                <strong className="text-white block mb-1 uppercase tracking-wider text-xs">E-Mail:</strong>
                                <a href="mailto:insaneduoindia@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors break-words">
                                    insaneduoindia@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-cinzel text-xl font-bold text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Who We Are", href: "/#about" },
                                { name: "Vertilab", href: "/#experience" },
                                { name: "Performances", href: "/performance" },
                                { name: "Tour", href: "/tour" },
                                { name: "Events", href: "/events" },
                                { name: "Archive", href: "/#gallery" },
                                { name: "Contact", href: "/#contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-purple-400 hover:pl-2 transition-all flex items-center gap-2 group"
                                    >
                                        <span className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>
                        <a href="https://www.insaneduo.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            www.insaneduo.in
                        </a>
                    </p>
                    <div className="flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos text since we don't have the specific EU logo assets */}
                        <span className="font-bold border border-current px-2 py-1 rounded">INSANE DUO</span>
                        <span className="font-bold border border-current px-2 py-1 rounded">MINISTERO CULTURA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
