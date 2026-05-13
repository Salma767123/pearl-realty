"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowLeft, Shield, Globe, Landmark } from "lucide-react";
import Counter from "@/components/Counter";
import DubaiDoodle from "@/components/opportunity/DubaiDoodle";
import SplitCTA from "@/components/opportunity/SplitCTA";
import { useRef } from "react";

const GlobalWealthMigration = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const doodleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const doodleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Ensure page starts at top on mount with high priority
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Double-reset to handle potential Next.js scroll restoration races
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="bg-[#F8F7F4] text-[#1D1D1D] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ——— SECTION 01: HERO SECTION ——— */}
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden border-b border-charcoal/5">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(199,165,106,0.08)_0%,transparent_70%)]"
          />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "linear-gradient(rgba(29,29,29,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(29,29,29,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link
              href="/#opportunity"
              className="group inline-flex items-center gap-2 text-charcoal/40 hover:text-gold mb-12 text-xs tracking-[0.3em] uppercase transition-all duration-300"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Intelligence
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal delay={100}>
                <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-6 block font-semibold">
                  Intelligence Report
                </span>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.95] mb-8 text-charcoal">
                  Capital <br />
                  <span className="text-gradient-gold">Re-domiciliation</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <p className="font-body text-lg md:text-xl text-charcoal/60 leading-relaxed font-light mb-12 max-w-xl">
                  The global ultra-prime real estate market has undergone a fundamental structural shift since 2020.
                  Dubai has emerged as the world&apos;s leading destination for UHNWI capital migration,
                  driven by a convergence of factors that no other city currently replicates.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
                  <div>
                    <span className="text-6xl md:text-8xl font-display text-gold block leading-none mb-2">10-Year</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-bold block">
                      GOLDEN VISA RESIDENCY
                    </span>
                  </div>
                  {/* <p className="font-body text-xs text-charcoal/40 leading-relaxed max-w-[200px] pb-1">
                    Legal residency infrastructure designed for property investors above AED 2 million.
                  </p> */}
                </div>
              </ScrollReveal>
            </div>

            <motion.div
              style={{ y: doodleY, opacity: doodleOpacity }}
              className="hidden lg:block relative h-[500px]"
            >
              <DubaiDoodle />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— SECTION 02: STRATEGIC MARKET DRIVERS ——— */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-16 text-charcoal">
              Strategic <span className="text-gold">Catalysts</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Tax Environment",
                content: "0% personal income tax, 0% capital gains tax, and 0% inheritance tax create one of the world’s most efficient tax bases for global wealth."
              },
              {
                title: "Residency Infrastructure",
                content: "10-year Golden Visa residency is available to property investors above AED 2 million, providing legal residency without full relocation."
              },
              {
                title: "Currency Stability",
                content: "The UAE Dirham has remained pegged to the USD at AED 3.67 since 1997, reducing currency risk for dollar-denominated wealth."
              },
              {
                title: "Geopolitical Neutrality",
                content: "The UAE maintains strategic relationships with both Western and Eastern power blocs, creating portfolio diversification against geopolitical concentration."
              },
              {
                title: "Asset Quality",
                content: "Dubai’s branded ultra-prime residential assets are comparable to London, Monaco, and New York at significantly lower capital entry."
              }
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="h-full p-8 rounded-2xl bg-[#F8F7F4] border border-charcoal/5 group hover:border-gold/20 transition-all duration-500">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-widest mb-6 block">0{i + 1}</span>
                  <h3 className="font-display text-xl mb-4 text-charcoal">{card.title}</h3>
                  <p className="font-body text-xs text-charcoal/50 leading-relaxed font-light">{card.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— SECTION 03: THE OPPORTUNITY ——— */}
      <section className="py-20 border-t border-charcoal/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-6xl font-light mb-8 text-charcoal">
                The <span className="text-gold">Opportunity</span>
              </h2>
              <div className="space-y-8">
                <p className="font-body text-xl text-charcoal/80 leading-relaxed font-light">
                  Dubai recorded the highest concentration of $10M+ property transactions globally.
                  Yet the ultra-prime market ($5M–$50M) remains chronically under-served,
                  dominated by transactional brokers with no advisory depth, succession thinking,
                  or cross-border tax understanding.
                </p>
                <p className="font-body text-lg text-charcoal/60 leading-relaxed font-light">
                  Pearl Realty fills this gap with a model built for UHNWI psychology:
                  low volume, high margin, and extreme precision.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-12 lg:pt-20">
              {[
                {
                  title: "Market Shift",
                  content: "The Dubai market has transitioned from speculative growth toward utility-driven wealth migration and long-term wealth protection."
                },
                {
                  title: "Strategic Positioning",
                  content: "The ultra-prime segment represents a structurally important market where discretion, advisory depth, and institutional-grade guidance are increasingly valuable."
                }
              ].map((block, i) => (
                <ScrollReveal key={i} delay={200 + i * 200}>
                  <div className="pl-10 border-l border-gold/30">
                    <h4 className="font-display text-lg mb-4 text-charcoal">{block.title}</h4>
                    <p className="font-body text-sm text-charcoal/50 leading-relaxed font-light">{block.content}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— SECTION 04: MARKET GAP ——— */}
      <section className="py-20 bg-[#0A0A0A] text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <span className="font-body text-xs tracking-[0.5em] uppercase text-gold mb-6 block font-bold">
              Private Intelligence
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-12 leading-tight">
              An Under-Served <span className="text-gradient-gold">Market</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-10">
              <p className="font-body text-lg md:text-2xl text-white/70 leading-relaxed font-light">
                The ultra-prime segment represents only 3–5% of Dubai’s total transaction volume by count, yet 25–35% by value.
                Most major brokers operate mass-market models incompatible with UHNWI discretion requirements.
              </p>
              <div className="pt-10 flex flex-col items-center">
                <div className="w-px h-24 bg-gradient-to-b from-gold to-transparent mb-10" />
                <p className="font-display text-xl md:text-2xl text-gold">
                  Pearl Realty operates exclusively within this gap.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ——— CTA SECTION ——— */}
      <div className="container mx-auto py-12">
        <SplitCTA
          theme="light"
          label="Private Intelligence"
          headline={"Secure Your\nCapital Node"}
          subtext="Access off-market landmark opportunities reserved for qualified investors."
        />
      </div>

      <FooterSection />
    </main>
  );
};

export default GlobalWealthMigration;
