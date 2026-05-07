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

  return (
    <main className="bg-[#F8F7F4] text-[#1D1D1D] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ——— HERO SECTION ——— */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden border-b border-charcoal/5">

        {/* Animated Background Layers */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {/* Moving gradient glow */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(199,165,106,0.08)_0%,transparent_70%)]"
          />
          {/* Financial grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(29,29,29,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(29,29,29,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Abstract wave / capital flow */}
          <svg className="absolute bottom-0 left-0 w-full opacity-[0.06]" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <motion.path
              d="M0 60 Q360 20 720 60 Q1080 100 1440 60 L1440 120 L0 120 Z"
              fill="#C7A56A"
              animate={{ d: [
                "M0 60 Q360 20 720 60 Q1080 100 1440 60 L1440 120 L0 120 Z",
                "M0 60 Q360 100 720 60 Q1080 20 1440 60 L1440 120 L0 120 Z",
                "M0 60 Q360 20 720 60 Q1080 100 1440 60 L1440 120 L0 120 Z",
              ]}}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/#opportunity"
              className="group inline-flex items-center gap-2 text-charcoal/40 hover:text-gold mb-8 text-xs tracking-[0.3em] uppercase transition-all duration-300"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Intelligence
            </Link>
          </ScrollReveal>

          {/* Two-column hero */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[420px]">
            {/* LEFT — Text content */}
            <div>
              <ScrollReveal delay={100}>
                <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-5 block font-semibold">
                  Intelligence Report 01
                </span>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-charcoal">
                  Capital <br />
                  <span className="text-gradient-gold">Re-domiciliation</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <p className="font-body text-base md:text-lg text-charcoal/55 leading-relaxed font-light mb-10 max-w-lg">
                  The world&apos;s largest migration of private wealth, driven by a global shift toward stability,
                  security, and tax optimization.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl md:text-8xl font-display text-gold">
                    <Counter value={4500} prefix="+" />
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-semibold pb-3">
                    Net HNWI Inflow (2023)
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — Dubai doodle */}
            <motion.div
              style={{ y: doodleY, opacity: doodleOpacity }}
              className="hidden lg:block relative h-[420px]"
            >
              <DubaiDoodle />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Data Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-12 leading-tight">
                  Global Inflow <br /><span className="text-gold">Benchmarks</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { label: "UAE Net Inflow", value: "+4,500", pct: "100%", gold: true, delay: 0 },
                    { label: "Australia", value: "+3,800", pct: "84%", gold: false, delay: 0.2 },
                    { label: "Singapore", value: "+3,200", pct: "71%", gold: false, delay: 0.4 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">{item.label}</span>
                        <span className={`font-display text-2xl ${item.gold ? "text-gold" : "text-charcoal/40"}`}>{item.value}</span>
                      </div>
                      <div className="h-3 bg-charcoal/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.pct }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full ${item.gold ? "bg-gradient-to-r from-gold to-[#D8B97F]" : "bg-charcoal/20"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-bold">
                  Source: Henley &amp; Partners Private Wealth Migration Report 2024
                </p>
              </ScrollReveal>
            </div>

            <div className="relative">
              <ScrollReveal delay={300}>
                <div className="aspect-square rounded-[3rem] bg-[#F8F7F4] border border-charcoal/5 p-12 flex flex-col justify-center items-center text-center">
                  <div className="relative w-56 h-56 mb-10">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="112" cy="112" r="88" stroke="currentColor" strokeWidth="20" fill="transparent" className="text-charcoal/5" />
                      <motion.circle
                        cx="112" cy="112" r="88"
                        stroke="currentColor" strokeWidth="20" fill="transparent"
                        strokeDasharray="552.9"
                        initial={{ strokeDashoffset: 552.9 }}
                        whileInView={{ strokeDashoffset: 552.9 * 0.72 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "circOut" }}
                        className="text-gold"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <span className="text-3xl font-display text-charcoal">28%</span>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Projected Growth</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl mb-3">UHNWI Global Growth</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs">
                    The projected 5-year growth of UHNWIs globally ($30M+), with a significant concentration shifting toward the Middle East.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-24 border-y border-charcoal/5 bg-charcoal/[0.01]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-16 text-center">Strategic <span className="text-gold">Catalysts</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Shield className="w-6 h-6 text-gold" />, title: "Safety & Security", desc: "Ranked as one of the safest cities globally, providing a robust environment for family and capital preservation." },
              { icon: <Landmark className="w-6 h-6 text-gold" />, title: "Fiscal Optimization", desc: "0% personal income tax and a business-friendly regulatory framework designed for wealth creation." },
              { icon: <Globe className="w-6 h-6 text-gold" />, title: "Global Connectivity", desc: "A strategic node connecting East and West, with world-class infrastructure and lifestyle amenities." },
            ].map((insight, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="p-10 rounded-3xl bg-white border border-charcoal/5 hover:border-gold/20 transition-all duration-500 hover:shadow-xl group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-gold/5 flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                    {insight.icon}
                  </div>
                  <h3 className="font-display text-2xl mb-4">{insight.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed font-light text-sm">{insight.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Interpretation */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8 leading-tight">
                The Pearl <br /><span className="text-gold">Advantage</span>
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed font-light mb-6">
                In a market driven by unprecedented wealth migration, the challenge for investors is no longer finding opportunities, but accessing the right ones.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed font-light">
                Pearl Realty creates advantage by positioning our clients at the intersection of private inventory and institutional-grade intelligence. We don&apos;t just track the migration; we facilitate the transition into landmark assets that secure generational legacy.
              </p>
            </ScrollReveal>
            <div className="space-y-10 pt-4">
              {[
                {
                  title: "Why Now",
                  body: "The structural transformation of the Dubai market from speculative to utility-driven wealth migration is reaching maturity. Current entries secure a foothold in the world's new capital of private wealth.",
                  delay: 200,
                },
                {
                  title: "Strategic Value",
                  body: "Direct access to the +4,500 HNWIs entering the market requires more than a broker — it requires a strategist who understands the fiscal and personal mandates of the global elite.",
                  delay: 400,
                },
              ].map((item) => (
                <ScrollReveal key={item.title} delay={item.delay}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-px h-20 bg-gold/30 mt-1" />
                    <div>
                      <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-3 font-bold">{item.title}</h4>
                      <p className="text-charcoal/60 text-sm leading-relaxed font-light">{item.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto">
        <SplitCTA
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
