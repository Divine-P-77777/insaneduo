"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        () => {
          setIsMessageSent(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 flex items-center justify-center bg-background border-t border-white/10">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <h2 className="text-3xl font-cinzel font-bold text-white mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-outfit">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-outfit">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-outfit">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-purple-900/50"
            >
              Send Message
            </button>
            {isMessageSent && (
              <p className="text-center text-teal-400 font-semibold mt-4">Message sent successfully!</p>
            )}
          </form>
        </motion.div>

        {/* Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 text-white"
        >
          <div>
            <h3 className="text-2xl font-cinzel font-bold mb-6 text-purple-300">Contact Information</h3>

            {/* Event Manager Details */}
            <div className="flex items-center gap-4 mb-8 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/20 relative">
                <Image src="/manager.jpeg" alt="Govinda Goswami" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-cinzel font-bold text-lg"> Govinda Goswami</p>
                <p className="text-gray-400 text-sm font-outfit uppercase tracking-wider mb-1">Event Manager</p>
                <a href="tel:+919619859858" className="text-purple-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Phone className="w-3 h-3" /> +91 96198 59858
                </a>
              </div>
            </div>

            <div className="space-y-4 font-outfit text-lg">
              <p className="flex items-center gap-3">
                <Mail className="text-purple-500 w-5 h-5" />
                <a href="mailto:insaneduoindia@gmail.com" className="hover:text-purple-400">insaneduoindia@gmail.com</a>
              </p>
              <p className="flex items-center gap-3">
                <Instagram className="text-purple-500 w-5 h-5" />
                <a href="https://www.instagram.com/insaneduoindia" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">@insaneduo</a>
              </p>
              <p className="flex items-center gap-3">
                <Facebook className="text-purple-500 w-5 h-5" />
                <a href="https://www.facebook.com/share/1CuREmwxpT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Insane Duo</a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-purple-500 w-5 h-5" />
                <span className="text-gray-300"> India.</span>
              </p>
            </div>
          </div>

          <div className="h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114370.31551668844!2d91.70211500941048!3d26.199739824112013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3741a3b7e8d7f5d3%3A0x6b313b935ce7028a!2s%2C%20India!5e0!3m2!1sen!2sus!4v1645649737553!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
