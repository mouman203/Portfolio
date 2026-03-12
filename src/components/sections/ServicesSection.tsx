"use client";

import { motion } from "framer-motion";
import { Smartphone, MonitorPlay, Palette } from "lucide-react";

const SERVICES = [
  {
    title: "Mobile App Development",
    icon: <Smartphone size={40} className="mb-6 text-neon-green" />,
    description: "Building scalable, high-performance Flutter applications for iOS and Android.",
    features: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Frontend Development",
    icon: <MonitorPlay size={40} className="mb-6 text-cyber-blue" />,
    description: "Creating modern, premium web interfaces using modern frameworks.",
    features: ["React & Next.js", "Tailwind CSS",],
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={40} className="mb-6 text-electric-purple" />,
    description: "Crafting intuitive and visually stunning user experiences.",
    features: ["Figma"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="min-h-screen py-24 relative px-6 md:px-12 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-4">
            <span className="text-neon-green">03.</span> Services
            <div className="hidden md:block h-px bg-gradient-to-r from-neon-green/50 to-transparent flex-grow ml-4"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl font-sans mt-6">
            Leveraging a diverse skillset to bring robust architectures and immersive visual designs to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-xl border border-white/10 hover:border-glow transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {service.icon}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 font-sans leading-relaxed">{service.description}</p>

              <ul className="space-y-3 font-mono text-sm text-gray-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-neon-green">▹</span> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
