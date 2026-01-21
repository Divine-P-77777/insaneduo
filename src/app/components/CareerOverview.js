"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CareerOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section id="career" className="relative py-24 px-6 md:px-16 overflow-hidden bg-background">
      {/* Watermark Text */}
      <div className="absolute top-10 left-0 md:left-20 text-[10rem] md:text-[15rem] font-bold text-white/5 select-none pointer-events-none font-outfit leading-none z-0">
        About
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <motion.h4 variants={itemVariants} className="text-purple-400 font-outfit uppercase tracking-widest text-sm md:text-base font-semibold">
            Events And Performances Around The World
          </motion.h4>

          <div>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-cinzel text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Vertical Theater
              </span>
            </motion.h2>
            <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-cinzel text-gray-300 mt-2">
              Aerial Dance Ad Hoc Performances
            </motion.h3>
          </div>

          <motion.div variants={itemVariants} className="text-gray-400 font-outfit text-lg leading-relaxed space-y-4">
            <p>
              <strong className="text-white">Dhanraj Shah</strong> and <strong className="text-white">Gayatri Prajapati</strong>, known as the <strong className="text-purple-400">Insane Duo</strong>, combine aerial acrobatics, dance, and gymnastics to create gravity-defying spectacles.
            </p>
            <p>
              From hair hangs to aerial duo straps, they leave audiences spellbound with their high-risk performances. Founders of the <strong className="text-purple-400">Insane DanZe Company</strong>, they inspire the next generation of artists.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/achievements" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-none uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              See All Performances &rarr;
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Image Collage */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-0 md:right-10 w-[65%] h-[75%] md:w-[60%] md:h-[80%] overflow-hidden rounded-lg border border-white/10 shadow-2xl z-10"
          >
            <Image
              src="/memories/m14.jpg"
              alt="Aerial Performance"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </motion.div>

          {/* Secondary Stacked Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-20 left-0 w-[40%] h-[35%] md:w-[45%] md:h-[40%] overflow-hidden rounded-lg border border-white/10 shadow-2xl z-20"
          >
            <Image
              src="/bg1.jpg"
              alt="Duo Act"
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>

          {/* Secondary Stacked Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-4 md:left-20 w-[50%] h-[40%] md:w-[50%] md:h-[45%] overflow-hidden rounded-lg border border-white/10 shadow-2xl z-0"
          >
            <Image
              src="/memories/m10.jpg"
              alt="Acrobatics"
              fill
              className="scale-x-[-1] object-cover hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
