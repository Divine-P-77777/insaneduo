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
        className="relative z-10 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-cinzel font-bold text-center text-white mb-8">
          Work Experience
          <div className="h-1 w-24 bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <motion.p variants={itemVariants} className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg font-outfit font-light leading-relaxed">
          <span className="text-purple-400 font-semibold">Insane Duo</span> is a professional aerial and circus performance duo known for combining high-risk aerial acts with illusion, magic, and quick-change artistry. With years of stage experience, we have performed across national and international platforms, delivering visually powerful and emotionally engaging performances.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: The Act */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-cinzel text-purple-300 mb-4">Professional Mastery</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-outfit">
              Recognized for originality and precision, we adapt our high-impact performances for large-scale productions, television shows, festivals, and corporate events worldwide.
            </p>
          </motion.div>

          {/* Card 2: Expertise List */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors lg:col-span-2"
          >
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-cinzel text-purple-300 mb-6">Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3 text-gray-300 font-outfit text-sm">
                <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">•</span> Aerial Hair Hanging</li>
                <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">•</span> Teeth Hanging</li>
                <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">•</span> Aerial Duo Straps</li>
                <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">•</span> Aerial Duo on Props</li>
              </ul>
              <ul className="space-y-3 text-gray-300 font-outfit text-sm">
                <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">•</span> Quick Change & Illusion Acts</li>
                <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">•</span> Acrobatics</li>
                <li className="flex items-center gap-3"><span className="text-purple-500 text-xl">•</span> Circus & Theatrical Performances</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3 - Full Width: Global Recognition */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 group relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors mt-4"
          >
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="text-2xl font-cinzel text-purple-300 mb-6 text-center">Global Recognition</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "India’s Got Talent", "Dance India Dance", "Super Dancer Chapter 3",
                "Dance Deewane", "O’zbekiston’s Got Talent", "Indonesia's Got Talent", "Kidilam"
              ].map((show, i) => (
                <span key={i} className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-gray-300 text-sm font-outfit hover:border-purple-500/50 transition-colors cursor-default">
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
