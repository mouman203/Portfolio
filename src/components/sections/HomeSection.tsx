"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Terminal } from "lucide-react";
import Image from "next/image";
import MoumanePhoto from "@/assets/Moumane.jpeg";

const FloatingBadge = ({
  title,
  className,
  yOffset = -10,
  delay = 0,
  duration = 4,
}: {
  title: string;
  className: string;
  yOffset?: number;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    animate={{ y: [0, yOffset, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute glass px-4 py-2 rounded-lg border text-xs font-mono shadow-[0_0_10px_rgba(0,255,65,0.1)] ${className}`}
  >
    {title}
  </motion.div>
);

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Matrix-like glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green w-fit text-sm font-mono flex items-center gap-2">
            <Terminal size={14} />
            System Status: Online
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-glow text-neon-green font-mono block mt-2">
              MOUMANE
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-sans">
            A specialized <span className="text-white">Full-Stack Developer</span> with a focus on Flutter and modern web ecosystems. Passionate about building scalable, "hacker-style" interfaces and robust backend architectures.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="works"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 bg-neon-green text-black font-semibold rounded hover:bg-neon-green/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,255,65,0.4)]"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded hover:border-neon-green hover:text-neon-green transition-all cursor-pointer backdrop-blur-sm"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Cyber-styled container for the photo */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-dashed border-neon-green/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-cyber-blue/30 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-neon-green bg-black shrink-0 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
              <Image
                src={MoumanePhoto}
                alt="MOUMANE"
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Floating badges */}
            {/* Left side */}
            <FloatingBadge
              title="Next.js"
              className="top-[12%] left-2 md:left-6 border-cyber-blue/20 text-cyber-blue shadow-[0_0_10px_rgba(0,209,255,0.1)] z-10"
              yOffset={-8}
            />
            <FloatingBadge
              title="React"
              className="top-[45%] -left-2 md:-left-6 border-cyber-blue/20 text-cyber-blue shadow-[0_0_10px_rgba(0,209,255,0.1)] z-10"
              yOffset={8}
              delay={1}
              duration={5}
            />
            <FloatingBadge
              title="Docker"
              className="bottom-[12%] left-2 md:left-6 border-cyber-blue/20 text-cyber-blue shadow-[0_0_10px_rgba(0,209,255,0.1)] z-10"
              yOffset={-6}
              delay={2}
            />

            {/* Right side */}
            <FloatingBadge
              title="Flutter"
              className="top-[12%] right-2 md:right-6 border-neon-green/20 text-neon-green z-10"
              yOffset={6}
              delay={0.5}
            />
            <FloatingBadge
              title="Java"
              className="-top-2 md:top-2 left-1/2 -translate-x-1/2 border-neon-green/20 text-brown-500 z-10"
              yOffset={6}
              delay={0.5}
            />
            <FloatingBadge
              title="Dart"
              className="top-[45%] -right-2 md:-right-6 border-neon-green/20 text-neon-green z-10"
              yOffset={-8}
              delay={1.5}
              duration={5}
            />
            <FloatingBadge
              title="FireBase"
              className="bottom-[12%] right-2 md:right-6 border-neon-green/20 text-orange-500 z-10"
              yOffset={8}
              delay={2.5}
            />
            <FloatingBadge
              title="GitHub"
              className="-bottom-2 md:bottom-2 left-1/2 -translate-x-1/2 border-neon-green/20 text-blue-500 z-10"
              yOffset={-6}
              delay={1.2}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
