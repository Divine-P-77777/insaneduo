"use client";
import { motion } from "framer-motion";

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="relative min-h-screen py-24 px-6 flex items-center justify-center bg-background overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/wallpaperdark/artist.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-cinzel font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-16"
        >
          Achievements
          <div className="h-1 w-24 bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "India's Got Talent Season 11",
              desc: "Top 6 Finalist | Reached the Grand Finale, captivating the nation with aerial excellence.",
              icon: "🏆"
            },
            {
              title: "International Recognition",
              desc: "Represented India on global platforms, featuring in international reality talent shows like Indonesia’s Got Talent and O'zbekiston's Got Talent.",
              icon: "🌟"
            },
            {
              title: "Founded Insane DanZe Company",
              desc: "Established Northeast India’s first aerial and dance academy, inspiring and training the next generation of performers.",
              icon: "🏆"
            },

            {
              title: "Personal Records",
              desc: "Teeth Hang: 1 min 12s by Dhanraj Shah. | Hair Hang: Suspended 60 kg by Gayatri Prajapati, showcasing extreme strength.",
              icon: "💪"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500 transition-colors shadow-[0_4px_20px_-12px_rgba(168,85,247,0.5)] flex flex-col items-start gap-4"
            >
              <div className="text-4xl p-3 bg-white/5 rounded-2xl border border-white/10">{item.icon}</div>
              <div>
                <h3 className="text-xl font-cinzel font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-outfit leading-relaxed text-sm md:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Goals Section - Transferred from Profile Page */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-gradient-to-r from-purple-900/20 to-black backdrop-blur-md p-8 rounded-2xl border border-purple-500/30"
        >
          <h3 className="text-2xl font-cinzel font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">🎯</span> Goals
          </h3>
          <ul className="space-y-4 text-gray-300 font-outfit leading-relaxed">
            <li className="flex gap-3">
              <span className="text-purple-500 mt-1">✦</span>
              To compete in America's Got Talent to enhance their international visibility and reach a broader audience.
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 mt-1">✦</span>
              To expand Insane DanZe Company, opening new branches across India and offering aspiring artists world-class training in aerial acrobatics and performance arts.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
