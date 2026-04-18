"use client";

import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Private Advisory",
    subtitle: "The Fiduciary Mandate",
    description:
      "Fiduciary-equivalent advocacy. No developer inventory targets. No revenue quotas. We earn only when you transact — and only when the asset represents genuine value.",
    offset: "md:mt-0",
    theme: "from-champagne/20",
  },
  {
    number: "02",
    title: "Structural Advantage",
    subtitle: "Jurisdictional Engineering",
    description:
      "Strategic residency and tax optimization. 0% personal income tax, politically stable nodes, and Golden Visa processing through exclusive legal partners.",
    offset: "md:mt-24",
    theme: "from-blue-500/10",
  },
  {
    number: "03",
    title: "Asset Curation",
    subtitle: "Ultra-Prime Selection",
    description:
      "$10M–$100M+ assets: waterfront landmarks, branded residences, and hospitality-hybrid units generating yield through institutional-grade management.",
    offset: "md:mt-12",
    theme: "from-gold/20",
  },
  {
    number: "04",
    title: "Intelligence Core",
    subtitle: "Institutional-Grade AI",
    description:
      "AI infrastructure for deep-portfolio analysis. We utilize proprietary data nodes to predict cycle shifts before they hit the public consciousness.",
    offset: "md:-mt-12",
    theme: "from-emerald-500/10",
  },
  {
    number: "05",
    title: "Executive Hub",
    subtitle: "Legal & Visa Orchestration",
    description:
      "Seamless processing through top-tier DIFC law firms and certified family-office liaisons. A single-point mandate for all relocation logistics.",
    offset: "md:mt-12",
    theme: "from-purple-500/10",
  },
  {
    number: "06",
    title: "Legacy Planning",
    subtitle: "Generational Transition",
    description:
      "Written Legacy Analysis for every asset: ownership structure options, succession pathways, and 10-year appreciation and exit scenarios.",
    offset: "md:mt-0",
    theme: "from-rose-500/10",
  },
];

const ServiceCard = ({ pillar, index }: { pillar: typeof pillars[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group ${pillar.offset}`}
    >
      <div className="relative h-full bg-white/80 dark:bg-card/40 backdrop-blur-sm p-8 rounded-2xl border border-black/[0.10] dark:border-white/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.14)] hover:border-champagne/50 transition-all duration-700 overflow-hidden group">
        {/* Background Ambient Pattern */}
        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.theme} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl`} />

        {/* Watermark Number */}
        <span className="absolute -top-2 -right-1 font-display text-6xl text-black/[0.08] font-semibold dark:font-normal dark:text-foreground/[0.04] select-none pointer-events-none group-hover:text-champagne/[0.12] transition-colors duration-700">
          {pillar.number}
        </span>

        {/* Content */}
        <div className="relative z-10">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[#222222] font-semibold dark:font-normal dark:text-champagne/90 block mb-4">
            {pillar.subtitle}
          </span>
          <h3 className="font-display text-2xl mb-6 text-gold dark:text-foreground group-hover:text-gradient-gold transition-all duration-500">
            {pillar.title}
          </h3>
          <p className="font-body text-sm text-[#444444] font-medium group-hover:text-black dark:text-foreground/60 dark:font-normal leading-relaxed dark:group-hover:text-charcoal/90 transition-colors duration-500">
            {pillar.description}
          </p>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-champagne to-transparent group-hover:w-full transition-all duration-1000 rounded-full" />
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-pearl">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-beige/80 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <ScrollReveal>
            <span className="font-body text-[10px] tracking-[0.6em] uppercase text-[#222222] font-semibold dark:text-champagne/90 dark:font-normal mb-4 block">
              Value Pillars
            </span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-charcoal">
              The Architecture of <br />
              <span className="text-gradient-gold">Fiduciary Excellence</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="mt-8 font-body text-lg text-[#444444] font-medium dark:text-charcoal/70 dark:font-light leading-relaxed">
              We operate exclusively as a private office mandate. Our services are tailored
              for multi-generational capital and ultra-prime asset positioning in the
              world's emerging center of momentum.
            </p>
          </ScrollReveal>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-0 items-start">
          {pillars.map((pillar, i) => (
            <ServiceCard key={i} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Footer CTA */}
        {/* <ScrollReveal delay={1000}>
          <div className="mt-32 text-center border-t border-charcoal/20 dark:border-charcoal/15 pt-16">
            <button
              onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
              className="font-body text-xs tracking-[0.3em] uppercase text-[#111111] font-semibold hover:text-[#444444] dark:text-champagne/85 dark:font-normal dark:hover:text-champagne transition-all duration-500 flex items-center gap-4 mx-auto group"
            >
              <span className="w-12 h-px bg-[#111111] dark:bg-champagne/65 group-hover:w-20 transition-all duration-700" />
              Explore Global Clientele
            </button>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default ServicesSection;
