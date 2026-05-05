"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

// --- Data Models ---

const tiers = [
  {
    id: "01",
    name: "Pearl Access",
    subtitle: "Discrete acquisition for single ultra-prime assets.",
    features: [
      "Off-market sourcing",
      "Asset presentation",
      "Negotiation support",
      "Transaction management",
      "VR property viewing",
      "Legal handoff",
      "Golden Visa assistance",
    ],
    pricing: "1.75% – 2.0%",
    dealSize: "$10M – $25M",
    relationship: "90-day post completion concierge",
    featured: false,
  },
  {
    id: "02",
    name: "Pearl Advisory",
    subtitle: "For repeat investors and family offices.",
    features: [
      "Everything in Pearl Access",
      "Quarterly reviews",
      "Market intelligence briefings",
      "Priority deal pipeline",
      "Succession introductions",
      "Hospitality yield optimization",
    ],
    pricing: "1.75% + $50K annual retainer",
    minTerm: "12 months",
    relationship: "Long-term advisory",
    featured: true,
  },
  {
    id: "03",
    name: "Pearl Legacy",
    subtitle: "For dynastic wealth holders and legacy families.",
    features: [
      "Everything in Pearl Advisory",
      "Estate structuring",
      "Multi-generational planning",
      "Family council advisory",
      "Heir advisory strategy",
      "Annual legacy review",
    ],
    pricing: "1.5% + $150K annual retainer",
    target: "Family offices / Royal families / Founders post-exit",
    featured: false,
  },
];



export default function OffMarketSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="off-market"
      className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden dark"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C7A56A] blur-[150px] rounded-full opacity-10 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white blur-[120px] rounded-full opacity-5 mix-blend-screen" />
        {/* Abstract Blueprint Lines */}
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <ScrollReveal>
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#C7A56A] font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-[#C7A56A]/50"></span>
              Exclusive Access
              <span className="w-12 h-px bg-[#C7A56A]/50"></span>
            </span>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="mt-8 font-display text-5xl md:text-7xl font-light leading-tight">
              Off Market.<br />
              <span className="text-[#C7A56A]">By Invitation Only.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-8 font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              The most valuable opportunities are rarely advertised. They are privately introduced.
            </p>
          </ScrollReveal>
        </div>

        {/* Private Service Architecture Tiers */}
        <div className="space-y-8 mb-32">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.id} delay={200 + index * 100}>
              <div
                className={`group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-700 ${tier.featured ? "bg-gradient-to-r from-[#C7A56A]/40 via-[#C7A56A]/10 to-[#C7A56A]/40" : "bg-white/5 hover:bg-white/10"
                  }`}
              >
                <div className={`relative bg-[#0a0a0a] rounded-2xl p-8 md:p-12 h-full ${tier.featured ? "bg-gradient-to-r from-[#111] to-[#1a1a1a]" : ""}`}>

                  {/* {tier.featured && (
                    <div className="absolute top-0 right-8 transform -translate-y-1/2">
                      <span className="bg-[#C7A56A] text-[#0a0a0a] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
                        Featured Engagement
                      </span>
                    </div>
                  )} */}

                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Left: Identity */}
                    <div className="md:col-span-3">
                      <span className="text-[#C7A56A]/50 text-sm font-mono">{tier.id}</span>
                      <h3 className="font-display text-2xl md:text-3xl text-white mt-2 mb-2">{tier.name}</h3>
                      <p className="text-white/50 text-sm leading-relaxed pr-4">{tier.subtitle}</p>
                    </div>

                    {/* Center: Features */}
                    <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 border-y md:border-y-0 md:border-l border-white/10 py-6 md:py-0 md:pl-8">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C7A56A] mt-1 shrink-0" />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Right: Metrics */}
                    <div className="md:col-span-3 md:border-l border-white/10 md:pl-8 space-y-4">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Fee Structure</span>
                        <span className="font-display text-lg text-white">{tier.pricing}</span>
                      </div>
                      {tier.dealSize && (
                        <div>
                          <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Typical Deal</span>
                          <span className="text-sm text-white/80">{tier.dealSize}</span>
                        </div>
                      )}
                      {tier.minTerm && (
                        <div>
                          <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Minimum Term</span>
                          <span className="text-sm text-white/80">{tier.minTerm}</span>
                        </div>
                      )}
                      {tier.target && (
                        <div>
                          <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Target Profile</span>
                          <span className="text-sm text-white/80">{tier.target}</span>
                        </div>
                      )}
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-white/40 mb-1">Relationship</span>
                        <span className="text-sm text-[#C7A56A]">{tier.relationship}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>



        {/* CTA Strip */}
        <ScrollReveal>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton 
              primary 
              className="rounded-full px-12"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Consultation
            </MagneticButton>
          </div>
        </ScrollReveal>

      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
}
