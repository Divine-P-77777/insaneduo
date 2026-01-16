"use client";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="relative min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/10 rounded-full blur-[100px]" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-cinzel font-bold text-center text-white mb-16">
          Work Experience
          <div className="h-1 w-24 bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="text-2xl font-cinzel text-purple-300 mb-2">Co-Founders & Lead Performers</h3>
            <p className="text-lg font-outfit text-white mb-4">Insane DanZe Company (Present)</p>

            <ul className="space-y-3 text-gray-400 font-outfit text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="text-purple-500">✦</span> Launched and currently operate the Insane DanZe Company in Guwahati.
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">✦</span> Training over 350 students in aerial acrobatics, dance, and fitness.
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">✦</span> Mentored students for Dance India Dance, Super Dancer, and more.
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">✦</span> Organize the annual "Insane Lumina" showcase.
              </li>
            </ul>
          </motion.div>



          {/* Card 3 - Full Width */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="text-2xl font-cinzel text-purple-300 mb-4 text-center">Talent Show Competitions</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "India’s Got Talent", "Dance India Dance", "Super Dancer Chapter 3",
                "Dance Deewane", "O’zbekiston’s Got Talent", "Indonesia's Got Talent", "Kidilam"
              ].map((show, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-gray-300 text-sm font-outfit">
                  {show}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
