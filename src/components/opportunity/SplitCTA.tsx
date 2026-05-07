"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface SplitCTAProps {
  label?: string;
  headline: string;
  subtext?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export default function SplitCTA({
  label = "Private Intelligence",
  headline,
  subtext = "Access off-market landmark opportunities reserved for qualified investors.",
  primaryLabel = "Access Private Opportunities",
  secondaryLabel = "Request Market Intelligence",
}: SplitCTAProps) {
  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-[#0A0A0A] shadow-2xl">
          {/* Gradient glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(199,165,106,0.1)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(199,165,106,0.05)_0%,transparent_50%)]" />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C7A56A]/40 to-transparent" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(199,165,106,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(199,165,106,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Corner bracket TL */}
          <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[#C7A56A]/25" />
          {/* Corner bracket BR */}
          <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[#C7A56A]/25" />

          {/* Split layout */}
          <div className="relative z-10 grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/6">
            {/* LEFT — Headline block */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-body text-[10px] tracking-[0.6em] uppercase text-gold mb-6 block font-bold"
              >
                {label}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white mb-6"
              >
                {headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-body text-white/50 text-sm md:text-base leading-relaxed font-light max-w-sm"
              >
                {subtext}
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-10 h-px w-24 bg-gradient-to-r from-gold to-transparent origin-left"
              />
            </div>

            {/* RIGHT — CTA block */}
            <div className="p-10 md:p-16 flex flex-col justify-center items-start md:items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full md:max-w-xs"
              >
                {/* Primary button */}
                <button
                  onClick={() => (window.location.href = "/#services")}
                  className="group relative w-full flex items-center justify-center gap-3 bg-gold text-[#0A0A0A] font-body text-xs tracking-[0.25em] uppercase font-bold px-8 py-5 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_rgba(199,165,106,0.5)] hover:scale-[1.02] mb-4"
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 group-hover:translate-x-[200%] transition-transform duration-700" />
                  <span className="relative">{primaryLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 relative group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Secondary button */}
                <button
                  onClick={() => (window.location.href = "/#contact")}
                  className="group w-full flex items-center justify-center gap-3 border border-white/15 text-white/70 hover:text-white hover:border-gold/50 font-body text-xs tracking-[0.25em] uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
                >
                  <span>{secondaryLabel}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </motion.div>

              {/* Trust signal */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[9px] uppercase tracking-[0.3em] text-white/25 font-bold text-center md:text-left"
              >
                Discreet · Confidential · By Invitation
              </motion.p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
