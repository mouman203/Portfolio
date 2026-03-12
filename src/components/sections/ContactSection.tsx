"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, CheckCircle2, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTerminalOutput(["> Initiating secure connection...", "> Handshake successful..."]);
    
    // Simulate network request and terminal typing effect
    setTimeout(() => setTerminalOutput((prev) => [...prev, "> Encrypting payload..."]), 800);
    setTimeout(() => setTerminalOutput((prev) => [...prev, "> Transmitting message data..."]), 1600);
    setTimeout(() => {
      setTerminalOutput((prev) => [...prev, "> Message sent successfully.", "> SYSTEM_STATUS: OK"]);
      setFormState("success");
    }, 2500);
  };

  return (
    <section id="contact" className="py-24 relative px-6 md:px-12 bg-obsidian border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-4 flex items-center justify-center gap-4">
            <span className="text-neon-green">04.</span> Contact
          </h2>
          <p className="text-gray-400 font-sans mt-4 max-w-lg mx-auto">
            Ready to initiate a new protocol? Send a message to start our collaboration. 
          </p>
        </motion.div>

        <div className="glass p-1 rounded-xl">
          <div className="bg-black rounded-lg overflow-hidden border border-white/10 relative">
            
            {/* Terminal Header */}
            <div className="bg-zinc-900 border-b border-white/10 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
                <Terminal size={12} />
                message_terminal.exe
              </div>
            </div>

            <div className="p-6 md:p-10 font-mono text-sm relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {formState === "idle" && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-neon-green mb-2">var user_name =</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-white/20 focus:border-neon-green outline-none py-2 text-white font-sans transition-colors"
                        placeholder='"Enter your name"'
                      />
                    </div>
                    <div>
                      <label className="block text-cyber-blue mb-2">var user_email =</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-white/20 focus:border-cyber-blue outline-none py-2 text-white font-sans transition-colors"
                        placeholder='"Enter your email"'
                      />
                    </div>
                    <div>
                      <label className="block text-electric-purple mb-2">const payload =</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-transparent border-b border-white/20 focus:border-electric-purple outline-none py-2 text-white font-sans transition-colors resize-none"
                        placeholder='`Your message here...`'
                      ></textarea>
                    </div>
                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-neon-green/20 text-white hover:text-neon-green border border-white/10 hover:border-neon-green rounded transition-all group"
                      >
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        Execute
                      </button>
                    </div>
                  </motion.form>
                )}

                {(formState === "submitting" || formState === "success") && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col h-full font-mono"
                  >
                    <div className="flex-grow space-y-2">
                      {terminalOutput.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={line.includes("SYSTEM_STATUS: OK") ? "text-neon-green font-bold text-glow mt-4" : "text-gray-400"}
                        >
                          {line}
                        </motion.div>
                      ))}
                      {formState === "submitting" && (
                        <motion.div
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="w-3 h-5 bg-white inline-block mt-2"
                        ></motion.div>
                      )}
                    </div>

                    {formState === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 flex justify-center"
                      >
                        <button
                          onClick={() => {
                            setFormState("idle");
                            setTerminalOutput([]);
                          }}
                          className="flex items-center gap-2 text-cyber-blue hover:text-white transition-colors"
                        >
                          <CheckCircle2 size={16} />
                          Return to prompt
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalism Footer */}
      <footer className="mt-24 pt-8 border-t border-white/5 pb-8 relative z-10">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-xl font-bold tracking-tighter text-white">
            MOUMANE<span className="text-neon-green">.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-blue transition-colors hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-electric-purple transition-colors hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="mailto:email@example.com" className="text-gray-500 hover:text-neon-green transition-colors hover:scale-110">
              <Mail size={20} />
            </a>
            <a href="tel:+000000000" className="text-gray-500 hover:text-white transition-colors hover:scale-110">
              <Phone size={20} />
            </a>
          </div>

          <div className="text-gray-600 font-mono text-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-green box-glow"></div>
            System Status: Online
          </div>
        </div>
      </footer>
    </section>
  );
}
