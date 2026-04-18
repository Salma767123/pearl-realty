"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

const opportunities = [
  {
    id: "global-wealth-migration",
    label: "Market Force 01",
    title: "Global Wealth Migration",
    stat: "$4.2T",
    statLabel: "Capital Repositioning",
    description: "Ultra-High-Net-Worth individuals are re-domiciling capital toward stable, tax-optimized jurisdictions at an unprecedented scale.",
    link: "/opportunity/global-wealth-migration",
    color: "from-blue-500/10"
  },
  {
    id: "tax-residency",
    label: "Market Force 02",
    title: "Strategic Residency",
    stat: "0%",
    statLabel: "Structural Tax Advantage",
    description: "The convergence of the UAE Golden Visa and a zero-percent personal income tax regime has created a structural magnet for global tech founders.",
    link: "/opportunity/tax-residency",
    color: "from-champagne/10"
  },
  {
    id: "supply-demand",
    label: "Market Force 03",
    title: "The Ultra-Prime Crunch",
    stat: "+43%",
    statLabel: "Annual Asset Growth",
    description: "Demand for landmark residential assets has outstripped supply, creating a high-conviction window for $10M+ transaction positioning.",
    link: "/opportunity/supply-demand",
    color: "from-gold/10"
  },
  {
    id: "capital-inflow",
    label: "Market Force 04",
    title: "Family Office Hub",
    stat: "750+",
    statLabel: "Registered Entities (DIFC)",
    description: "Dubai has emerged as the premier global node for multi-generational wealth preservation and independent family office governance.",
    link: "/opportunity/capital-inflow",
    color: "from-emerald-500/10"
  }
];

const OpportunitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-75%",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const index = Math.min(Math.floor(progress * opportunities.length), opportunities.length - 1);
              setActiveIndex(index);
            }
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-charcoal-deep text-white dark">
      <div
        ref={sectionRef}
        className="relative h-screen flex flex-row items-center w-[400%]"
      >
        {/* Cinematic Background (Shared across all panels) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#C19B6C 1px, transparent 1px), linear-gradient(90deg, #C19B6C 1px, transparent 1px)', backgroundSize: '60px 60px' }}
          />

          {/* Glowing Accents */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-champagne/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        </div>

        {opportunities.map((opt, i) => (
          <section
            key={opt.id}
            className="relative w-full h-screen flex flex-col justify-end md:justify-center pb-[120px] md:pb-0 px-6 md:px-20 lg:px-32"
          >
            {/* Panel specific background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${opt.color} to-transparent opacity-30 pointer-events-none`} />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6 md:gap-16 items-center relative z-10">

              {/* Left Content */}
              <div className="flex flex-col items-start text-left">
                <span className="font-body text-[8px] md:text-[10px] tracking-[0.5em] uppercase text-champagne mb-3 md:mb-6 block">
                  {opt.label}
                </span>

                <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 md:mb-8">
                  {opt.title}
                </h2>

                <p className="font-body text-sm md:text-xl text-white/70 max-w-xl mb-6 md:mb-12 leading-relaxed">
                  {opt.description}
                </p>

                <Link href={opt.link}>
                  <MagneticButton className="px-10 py-5">
                    Explore Analysis &rarr;
                  </MagneticButton>
                </Link>
              </div>

              {/* Right Visualization */}
              <div className="relative flex flex-col justify-center items-center md:items-end dark">
                {/* Large Ambient Number */}
                <span className="absolute -top-20 -right-10 md:-right-20 font-display text-[15vw] md:text-[10vw] text-white/[0.03] select-none pointer-events-none">
                  0{i + 1}
                </span>

                <div className="text-center md:text-right mt-2 md:mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-gradient-gold mb-2 md:mb-4"
                  >
                    {opt.stat}
                  </motion.div>
                  <p className="font-body text-[10px] md:text-sm tracking-[0.3em] uppercase text-champagne/60">
                    {opt.statLabel}
                  </p>

                  {/* Aesthetic Graph line/Doodle Arrow placeholder */}
                  <svg className="w-[80%] md:w-full max-w-[300px] mt-6 md:mt-12 opacity-30 h-8 md:h-12 mx-auto md:ml-auto md:mr-0" viewBox="0 0 300 50">
                    <motion.path
                      d="M0 45 L50 35 L100 40 L150 20 L200 25 L250 5 L300 0"
                      fill="none"
                      stroke="#C19B6C"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>
                </div>
              </div>

            </div>

            {/* Bottom Section Label (Shared Header style) */}
            {/* {i === 0 && (
              <div className="absolute top-10 left-10 md:left-20">
                <span className="font-body text-[10px] tracking-[0.6em] uppercase text-white/30">Intelligence Portal</span>
              </div>
            )} */}
          </section>
        ))}

        {/* Dubai Skyline Sketch Background (Parallaxed horizontally) */}
        <div className="absolute bottom-10 left-0 w-[100%] h-64 opacity-10 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
            {/* Abstract continuous skyline */}
            <path d="M0 200 L100 200 L100 150 L150 150 L150 100 L200 100 L200 200 L500 200 L500 50 L550 0 L600 50 L600 200 L1000 200 L1000 80 L1100 80 L1100 200 L2000 200 L2000 120 L2100 20 L2200 120 L2200 200 L3000 200 L3500 50 L3600 200 L4000 200" className="fill-none stroke-champagne/50 stroke-[0.5]" />
          </svg>
        </div>
      </div>

      {/* Intro Label (Centered first) */}
      <div className="absolute top-[8%] md:top-[10%] left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none w-full px-6">
        <ScrollReveal>
          <h3 className="font-display text-[10px] md:text-sm tracking-[0.8em] uppercase text-champagne mb-2 md:mb-4">Market Timing</h3>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-light text-white select-none leading-snug">
            Dubai. Now. <br className="md:hidden" /><span className="text-gradient-gold">The Only Window</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Dots Navigator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {opportunities.map((_, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              width: activeIndex === i ? 32 : 8,
              backgroundColor: activeIndex === i ? "#C19B6C" : "rgba(193, 155, 108, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-1.5 rounded-full"
          />
        ))}
      </div>

    </div>
  );
};

export default OpportunitySection;
