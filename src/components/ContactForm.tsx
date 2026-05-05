"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Smile, Send, Mail, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full bg-transparent border-none outline-none py-3 font-body text-[#111111] placeholder:text-[#111111]/30 transition-all duration-300";

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 w-full max-w-[550px] mx-auto"
    >
      {/* Floating Icons Wrapper (Moved further into the corner to prevent overlap) */}
      <div className="absolute top-0 left-0 w-48 h-48 -translate-x-12 -translate-y-12 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[#C7A56A]/10 blur-3xl animate-pulse" />

        {/* Animated Icons - Themed in Gold/Black */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shadow-lg transform -rotate-12 border border-[#C7A56A]/20"
        >
          <Smile className="w-5 h-5 text-[#C7A56A]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-0 left-24 w-14 h-12 rounded-xl bg-[#C7A56A] flex items-center justify-center shadow-lg rotate-12"
        >
          <div className="relative">
            <Mail className="w-6 h-6 text-[#111111]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#111111] rounded-full border border-white/50 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#C7A56A] rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-20 left-4 w-9 h-9 rounded-full bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center shadow-md -rotate-12 border border-[#C7A56A]/30"
        >
          <Send className="w-4 h-4 text-[#C7A56A] transform -rotate-12" />
        </motion.div>
      </div>

      {/* The 'Bulged' Shape Container */}
      <div
        className="relative bg-white shadow-[0_45px_100px_rgba(0,0,0,0.08)] overflow-hidden"
      // style={{
      //   clipPath: "path('M 40,0 Q 275,-15 510,0 Q 545,350 510,700 Q 275,715 40,700 Q 5,350 40,0 Z')",
      //   borderRadius: "40px 40px 40px 40px / 10px 10px 10px 10px",
      // }}
      >
        {/* Form Content */}
        <div className="relative z-10 px-8 py-12 md:px-14 md:py-16 space-y-6">
          <div className="space-y-3">
            <h2 className="font-display text-4xl md:text-5xl text-[#C7A56A] leading-tight">
              Let's Talk!
            </h2>
            <p className="font-body text-[13px] text-[#111111]/50 leading-relaxed max-w-sm">
              Our specialists will contact you within 24 hours. Please check your inbox and secondary folders.
            </p>
          </div>

          <form className="space-y-5 pt-2">
            {[
              { id: "name", label: "Name *" },
              { id: "email", label: "Email *", type: "email" },
              { id: "subject", label: "Subject *" },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  type={field.type || "text"}
                  name={field.id}
                  autoComplete="off"
                  value={formState[field.id as keyof typeof formState]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                  className={inputClasses}
                  placeholder=" "
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-body text-xs ${focused === field.id || formState[field.id as keyof typeof formState] ? '-top-3 text-[#C7A56A]' : 'top-3 text-[#111111]/40'}`}>
                  {field.label}
                </label>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111111]/10">
                  <motion.div
                    animate={{ scaleX: focused === field.id ? 1 : 0 }}
                    className="h-full bg-[#C7A56A] origin-left shadow-[0_0_8px_rgba(199,165,106,0.3)]"
                  />
                </div>
              </div>
            ))}

            <div className="relative group pt-1">
              <textarea
                name="message"
                rows={2}
                value={formState.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={`${inputClasses} resize-none`}
                placeholder=" "
              />
              <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-body text-xs ${focused === 'message' || formState.message ? '-top-3 text-[#C7A56A]' : 'top-3 text-[#111111]/40'}`}>
                Message *
              </label>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111111]/10">
                <motion.div
                  animate={{ scaleX: focused === 'message' ? 1 : 0 }}
                  className="h-full bg-[#C7A56A] origin-left shadow-[0_0_8px_rgba(199,165,106,0.3)]"
                />
              </div>
            </div>

            <div className="pt-4 pb-4 flex justify-center md:justify-center">
              <MagneticButton className="relative group overflow-hidden bg-[#C7A56A] py-4 px-12 rounded-full border border-[#C7A56A]/20 transition-all duration-700">
                <span className="relative z-10 text-[10px] tracking-[0.3em] font-bold text-[#C7A56A]">
                  SEND REQUEST
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#C7A56A]/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                />
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
