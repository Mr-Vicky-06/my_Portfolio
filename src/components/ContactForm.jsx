"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Github, Linkedin, CheckCircle2, UserPlus, Radio, Terminal } from "lucide-react";

export default function ContactForm() {
  const [focus, setFocus] = useState(null);
  const [status, setStatus] = useState("idle");
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
    <section className="space-y-12 pb-12 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-3 px-4 py-1 bg-soundwave-navy/20 border border-soundwave-gold/30 text-soundwave-gold rounded-full text-xs font-mono tracking-widest uppercase">
          <Radio size={14} className="animate-pulse" /> Channel_Status: Encrypted
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">Sync External Node</h2>
        <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto">Establish a direct protocol link or high-bandwidth interface with my intelligence systems.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative group"
        >
          <div className="absolute -inset-0.5 bg-soundwave-gold/20 rounded-xl blur group-hover:bg-soundwave-gold/40 transition-all duration-500" />
          <form onSubmit={handleSubmit} className="relative space-y-6 bg-mechanical-dark/80 p-8 rounded-xl border border-soundwave-navy/30">
            {['name', 'email', 'message'].map((field) => (
              <div key={field} className="relative">
                <label className="absolute -top-2.5 left-4 px-2 bg-mechanical-dark text-[10px] font-mono text-soundwave-gold tracking-widest uppercase z-10">
                  {field}_data
                </label>
                {field === 'message' ? (
                  <textarea
                    name={field}
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-soundwave-navy/40 text-white placeholder-gray-600 p-4 outline-none focus:border-soundwave-gold transition-all min-h-[150px] resize-none font-mono text-sm"
                    placeholder={`Waiting for ${field} input...`}
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
                    className="w-full bg-transparent border border-soundwave-navy/40 text-white placeholder-gray-600 p-4 outline-none focus:border-soundwave-gold transition-all font-mono text-sm"
                    placeholder={`Enter ${field} identifiers...`}
                    onFocus={() => setFocus(field)}
                    onBlur={() => setFocus(null)}
                  />
                )}
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "submitting"}
              className="w-full py-5 bg-soundwave-gold text-soundwave-navy rounded font-black tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span className="animate-pulse">TRANSCEIVING_DATA...</span>
              ) : status === "success" ? (
                <>UPLINK_SUCCESS <CheckCircle2 size={18} /></>
              ) : (
                <>INITIATE_UPLINK <Send size={18} /></>
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <a
            href="https://www.linkedin.com/in/m-vignesh-677915295"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center justify-center gap-4 p-10 border border-soundwave-navy/30 bg-soundwave-navy/10 rounded-xl hover:border-soundwave-gold hover:bg-soundwave-gold/5 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 border-b border-l border-soundwave-navy/20">
              <Terminal size={12} className="text-soundwave-gold" />
            </div>
            <Linkedin size={48} className="text-soundwave-gold group-hover:scale-110 transition-transform transformer-glow" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-white tracking-widest uppercase group-hover:text-soundwave-gold transition-colors">Establish Professional Link</h3>
              <p className="text-sm text-gray-500 font-mono mt-2 uppercase tracking-tighter">Redirect to LinkedIn for secure sync</p>
            </div>
            <div className="mt-4 px-8 py-3 bg-white/5 border border-soundwave-gold/20 text-soundwave-gold rounded-full flex items-center gap-3 group-hover:bg-soundwave-gold group-hover:text-soundwave-navy transition-all font-bold">
               CONNECT_NODES <UserPlus size={18} />
            </div>
          </a>

          <div className="grid grid-cols-1 gap-4">
            <a href="mailto:mageshvignesh2006@gmail.com" className="flex items-center gap-4 p-4 mechanical-panel border-soundwave-navy/20 hover:border-soundwave-gold group transition-all">
              <div className="p-3 bg-soundwave-navy/20 text-soundwave-gold rounded group-hover:bg-soundwave-gold group-hover:text-soundwave-navy transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-600 uppercase">Direct_Email</p>
                <p className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">mageshvignesh2006@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/Mr-Vicky-06/" className="flex items-center gap-4 p-4 mechanical-panel border-soundwave-navy/20 hover:border-soundwave-gold group transition-all">
              <div className="p-3 bg-soundwave-navy/20 text-soundwave-gold rounded group-hover:bg-soundwave-gold group-hover:text-soundwave-navy transition-all">
                <Github size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-600 uppercase">Git_Repository</p>
                <p className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">github.com/Mr-Vicky-06</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

