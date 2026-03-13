"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, CheckCircle2, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Resend } from 'resend';

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTerminalOutput(["> Initiating secure connection...", "> Handshake successful..."]);

    // 1. Visual effects
    setTimeout(() => setTerminalOutput((prev) => [...prev, "> Encrypting payload..."]), 800);
    setTimeout(() => setTerminalOutput((prev) => [...prev, "> Transmitting message data..."]), 1600);

    try {
      // 2.Network Request
      console.log("hello i am here");
      console.log(formData);
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log("hello i am here2");

      if (!response.ok) throw new Error("Transmission failed");

      // 3. Success state
      setTimeout(() => {
        setTerminalOutput((prev) => [...prev, "> Message sent successfully.", "> SYSTEM_STATUS: OK"]);
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      }, 2500);

    } catch (error) {
      setTerminalOutput((prev) => [...prev, "> FATAL ERROR: Packet loss detected.", "> REASON: Connection refused."]);
      setFormState("error");
    }
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
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-neon-green outline-none py-2 text-white font-sans transition-colors"
                        placeholder='"Enter your name"'
                      />
                    </div>
                    <div>
                      <label className="block text-cyber-blue mb-2">var user_email =</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-cyber-blue outline-none py-2 text-white font-sans transition-colors"
                        placeholder='"Enter your email"'
                      />
                    </div>
                    <div>
                      <label className="block text-electric-purple mb-2">const payload =</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

                {(formState === "submitting" || formState === "success" || formState === "error") && (
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
                          className={line.includes("SYSTEM_STATUS: OK") ? "text-neon-green font-bold text-glow mt-4" : line.includes("FATAL ERROR") ? "text-red-500 font-bold mt-4" : "text-gray-400"}
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

                    {(formState === "success" || formState === "error") && (
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
                          className={`flex items-center gap-2 transition-colors ${formState === "success" ? "text-cyber-blue hover:text-white" : "text-red-500 hover:text-white"}`}
                        >
                          {formState === "success" ? <CheckCircle2 size={16} /> : <Terminal size={16} />}
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
            <a href="https://www.linkedin.com/in/abdelmoumane-arrous-48358a267?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-blue transition-colors hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/s.holmes_110918?igsh=MW13NWw1OWh2anN1Mg==" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-electric-purple transition-colors hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="mailto:arrousmouman468@gmail.com" className="text-gray-500 hover:text-neon-green transition-colors hover:scale-110">
              <Mail size={20} />
            </a>
            <a href="tel:+213792744430" className="text-gray-500 hover:text-white transition-colors hover:scale-110">
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
