import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const insights = [
  { value: "0%", label: "PERSONAL INCOME TAX", detail: "One of the world’s most efficient tax environments for global wealth preservation." },
  { value: "10-Year", label: "GOLDEN VISA RESIDENCY", detail: "Legal residency available to qualifying property investors above AED 2 million." },
  { value: "AED 3.67", label: "USD PEGGED STABILITY", detail: "The UAE Dirham has remained pegged to the USD since 1997." },
  { value: "$5M–$50M", label: "ULTRA-PRIME MARKET SEGMENT", detail: "A structurally important segment underserved by advisory depth and discretion." },
  { value: "3–5%", label: "DUBAI TRANSACTION VOLUME", detail: "Ultra-prime transactions by count within Dubai’s overall real estate market." },
  { value: "25–35%", label: "MARKET VALUE SHARE", detail: "Ultra-prime assets represent a significant share of total transaction value." },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="relative py-20 overflow-hidden bg-beige dark:bg-background scroll-mt-32">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="none">
          <path d="M0 200 L1000 200 M0 500 L1000 500 M0 800 L1000 800" stroke="#C19B6C" strokeWidth="0.5" />
          <path d="M200 0 L200 1000 M500 0 L500 1000 M800 0 L800 1000" stroke="#C19B6C" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="300" stroke="#C19B6C" strokeWidth="0.5" strokeDasharray="10 10" />
          <path d="M100 100 L200 200 M300 100 L200 200 M100 300 L200 200" stroke="#C19B6C" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="font-body text-[10px] tracking-[0.6em] uppercase text-gold mb-4 block font-semibold">
                Market Intelligence
              </span>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-foreground">
                Perspectives on <br />
                <span className="text-gradient-gold">Dubai</span>
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {insights.map((item, i) => (
            <ScrollReveal key={i} delay={400 + i * 100}>
              <div className="relative group p-8 rounded-2xl bg-white/70 dark:bg-card/40 backdrop-blur-sm border border-black/[0.08] dark:border-white/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] border-l-4 border-l-champagne/60 hover:border-l-champagne hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-700 h-full">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold mb-4">
                  {item.value}
                </div>

                <p className="font-body text-xs text-charcoal dark:text-foreground font-semibold tracking-[0.2em] uppercase">
                  {item.label}
                </p>
                <p className="mt-4 font-body text-[11px] md:text-xs text-charcoal/65 dark:text-foreground/50 tracking-wider leading-relaxed">
                  {item.detail}
                </p>

                {/* Technical Micro-line */}
                <div className="mt-8 w-12 h-px bg-gradient-to-r from-champagne/75 to-transparent group-hover:w-full transition-all duration-1000" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={1200}>
          <div className="mt-32 p-12 bg-white/60 dark:bg-card/40 backdrop-blur-sm rounded-2xl border border-black/[0.06] dark:border-white/5 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-champagne to-champagne/20 rounded-sm" />
            <p className="font-body text-sm md:text-base text-charcoal/75 dark:text-foreground/75 leading-relaxed max-w-4xl italic">
              "The ultra-prime real estate market has undergone a fundamental structural shift since 2020. Dubai has emerged as the world’s leading destination for UHNWI capital migration, driven by tax efficiency, residency infrastructure, currency stability, and geopolitical neutrality."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InsightsSection;
