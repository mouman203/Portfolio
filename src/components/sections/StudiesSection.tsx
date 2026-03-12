"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Terminal, Code2 } from "lucide-react";

interface StudyItemProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string[];
  delay: number;
  href?: string;
}

const StudyItem = ({ degree, institution, duration, location, description, delay ,href }: StudyItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8 pb-12 last:pb-0 group"
  >
    {/* Timeline Line */}
    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-green/50 to-transparent group-last:from-neon-green/50 group-last:to-neon-green/50"></div>

    {/* Timeline Dot */}
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-neon-green shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>

    <div className="glass p-6 rounded-xl border border-white/5 hover:border-neon-green/30 transition-all duration-300 group-hover:translate-x-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <span className="text-neon-green group-hover:animate-pulse">_</span>
            {degree}
          </h3>
          {
          href ? (
            <a href={href} className="text-cyber-blue font-semibold mt-1 hover:text-red-500 transition-colors" >{institution}</a>
          ):
          <p className="text-cyber-blue font-semibold mt-1" >{institution}</p>
          }
        </div>
        <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-neon-green" />
            {duration}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-neon-green" />
            {location}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {description.map((item, index) => (
          <div key={index} className="flex items-start gap-3 group/item">
            <Code2 size={14} className="mt-1 text-neon-green/40 group-hover/item:text-neon-green transition-colors" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function StudiesSection() {
  const studies = [
    {
      degree: "Bachelor's in Computer schince",
      institution: "Higher Institute Of Science (HIS)",
      duration: "2022 - 2025",
      location: "Algiers, Algeria",
      description: [
        "Specializing in Software Engineering and Distributed Systems.",
        "Deep dive into algorithms, data structures, and system architecture.",
        "Active member of tech communities and hackathon participant."
      ],
      href: "https://his.edu.dz/"
    },
    {
      degree: "Scientific Baccalaureate",
      institution: "Agoune Saleh Ben bougera",
      duration: "2019 - 2022",
      location: "Khenchela,Algeria",
      description: [
        "Graduated with honors, focusing on Mathematics, Physics.",
      ],
    }
  ];

  return (
    <section id="studies" className="py-24 relative px-6 md:px-12 bg-obsidian overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyber-blue/5 rounded-full blur-[100px] -z-10 opacity-30"></div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-neon-green/10 rounded-lg border border-neon-green/20">
              <GraduationCap className="text-neon-green" size={24} />
            </div>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-white">
              <span className="text-neon-green">01.</span> Education
            </h2>
          </div>
          <div className="flex items-center gap-2 text-gray-500 font-mono text-sm">
            <Terminal size={14} />
            <span>query_educational_history --format=json</span>
          </div>
        </motion.div>

        <div className="mt-12">
          {studies.map((study, index) => (
            <StudyItem
              key={index}
              {...study}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
