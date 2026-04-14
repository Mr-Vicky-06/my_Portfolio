"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Github, Linkedin, CheckCircle2, UserPlus } from "lucide-react";

export default function ContactForm() {
  const [focus, setFocus] = useState(null);
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xnjlnagb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="space-y-12 pb-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white tracking-widest uppercase mb-4">Initialize Connection</h2>
        <p className="text-gray-400">Establish a direct protocol or interface with my systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'message'].map((field) => (
            <motion.div
              key={field}
              animate={{ 
                scale: focus === field ? 1.02 : 1,
                x: focus === field ? 10 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              {field === 'message' ? (
                <textarea
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-mechanical-panel border border-mechanical-border text-white placeholder-gray-500 rounded-lg p-4 outline-none focus:border-mechanical-accentCyan focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all min-h-[150px] resize-none"
                  placeholder={`Enter ${field}...`}
                  onFocus={() => setFocus(field)}
                  onBlur={() => setFocus(null)}
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full bg-mechanical-panel border border-mechanical-border text-white placeholder-gray-500 rounded-lg p-4 outline-none focus:border-mechanical-accent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                  placeholder={`Enter ${field}...`}
                  onFocus={() => setFocus(field)}
                  onBlur={() => setFocus(null)}
                />
              )}
            </motion.div>
          ))}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "submitting"}
            className="w-full py-4 bg-mechanical-accent text-white rounded-lg font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-50"
          >
            {status === "submitting" ? (
              <span className="animate-pulse">Transmitting...</span>
            ) : status === "success" ? (
              <>Data Sent <CheckCircle2 size={18} /></>
            ) : (
              <>Transmit Data <Send size={18} /></>
            )}
          </motion.button>
          
          {status === "error" && (
            <p className="text-red-400 text-sm font-mono text-center">Transmission failed. Please use direct email.</p>
          )}
        </form>

        <div className="flex flex-col gap-6 justify-center md:px-12 md:border-l border-t md:border-t-0 pt-8 md:pt-0 border-mechanical-border h-full">
          <a
            href="https://www.linkedin.com/in/m-vignesh-677915295"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-3 p-8 border border-mechanical-border bg-blue-900/10 rounded-xl hover:border-blue-500 hover:bg-blue-900/20 transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            <Linkedin size={40} className="text-blue-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white tracking-widest uppercase">Establish Link</h3>
            <p className="text-sm text-gray-400 text-center font-mono">Redirect to LinkedIn to connect professionally.</p>
            <div className="mt-4 px-6 py-2 bg-blue-600/20 border border-blue-500 text-blue-400 rounded-full flex items-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               Connect <UserPlus size={16} />
            </div>
          </a>

          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:mageshvignesh2006@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white group">
              <div className="p-3 rounded-full bg-mechanical-panel border border-mechanical-border group-hover:border-mechanical-accentCyan transition-colors">
                <Mail size={18} />
              </div>
              <span className="font-mono text-sm break-all">mageshvignesh2006@gmail.com</span>
            </a>
            <a href="https://github.com/Mr-Vicky-06/" className="flex items-center gap-4 text-gray-400 hover:text-white group">
              <div className="p-3 rounded-full bg-mechanical-panel border border-mechanical-border group-hover:border-white transition-colors">
                <Github size={18} />
              </div>
              <span className="font-mono text-sm">github.com/Mr-Vicky-06</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
