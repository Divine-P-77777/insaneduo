"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative h-auto py-24 px-6 flex items-center justify-center bg-background overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/wallpaperdark/artist.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-cinzel font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-16"
        >
          Profiles
          <div className="h-1 w-24 bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Cards */}
          {[

            {
              name: "Dhanraj Shah",
              image: "/dhanraj.jpeg",
              details: [
                "Date of Birth: July 28, 1996",
                "Height: 5'8\"",
                "Contact: +91 8486667652",
                "Email: insaneduoindia@gmail.com",
                "Address: India"
              ],
              socials: [
                { icon: Instagram, link: "https://www.instagram.com/insaneduo_?igsh=MWdjcTQybHVqZ2NuMg%3D%3D&utm_source=qr" },
                { icon: Facebook, link: "https://www.facebook.com/dhanrajshah28?mibextid=wwXIfr&mibextid=wwXIfr" }
              ]
            },
            {
              name: "Gayatri Prajapati",
              image: "/gayatri.jpeg",
              details: [
                "Date of Birth: November 15, 1998",
                "Height: 5'0\"",
                "Contact: +91 9859334179",
                "Email: prajapatigayatri46@gmail.com",
                "Address: Birubari, Guwahati, Assam"
              ],
              socials: [
                { icon: Instagram, link: "https://www.instagram.com/insaneduo_gayatri?igsh=MWV6aHNzYjRuY2tjNA==" },
                { icon: Facebook, link: "https://www.facebook.com/share/1D5JzWgdjx/?mibextid=wwXIfr" }
              ]
            }
          ].map((person, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500 transition-colors flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              {/* Profile Pic Placeholder */}
              <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] relative">
                <Image src={person.image} alt={person.name} fill className="object-cover" sizes="(max-width: 640px) 128px, 128px" />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-cinzel font-bold text-purple-300 mb-2">{person.name}</h3>
                <ul className="space-y-1 text-gray-300 font-outfit text-sm md:text-base mb-4">
                  {person.details.map((line, i) => {
                    if (line.trim().startsWith("Contact:")) {
                      const phoneNumber = line.split(":")[1].trim();
                      return (
                        <li key={i}>
                          Contact: <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-purple-400 hover:text-purple-300 transition-colors">{phoneNumber}</a>
                        </li>
                      );
                    }
                    return <li key={i}>{line}</li>;
                  })}
                </ul>

                {/* Social Icons */}
                {person.socials && person.socials.length > 0 && (
                  <div className="flex gap-4 justify-center sm:justify-start">
                    {person.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
