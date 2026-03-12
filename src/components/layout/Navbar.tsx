"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", to: "home" },
  { name: "Studies", to: "studies" },
  { name: "Works", to: "works" },
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-mono font-bold text-neon-green tracking-tighter">
          MOUMANE<span className="text-white animate-pulse">_</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-neon-green border-b-2 border-neon-green"
              className="text-white/80 hover:text-neon-green cursor-pointer text-sm font-medium tracking-wide transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-neon-green transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/10 flex flex-col items-center py-6 space-y-6 md:hidden z-40"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-neon-green"
                className="text-white/90 text-lg hover:text-neon-green cursor-pointer font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
