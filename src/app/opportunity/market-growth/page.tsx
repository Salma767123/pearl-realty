"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowLeft, BarChart3, Target, Zap } from "lucide-react";
import Counter from "@/components/Counter";
import DubaiDoodle from "@/components/opportunity/DubaiDoodle";
import SplitCTA from "@/components/opportunity/SplitCTA";

const MarketGrowth = () => {
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
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(ellipse,rgba(199,165,106,0.08)_0%,transparent_70%)]"
          />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(29,29,29,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(29,29,29,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <svg className="absolute bottom-0 left-0 w-full opacity-[0.06]" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <motion.path
              d="M0 80 Q360 40 720 80 Q1080 120 1440 80 L1440 120 L0 120 Z"
              fill="#C7A56A"
              animate={{ d: [
                "M0 80 Q360 40 720 80 Q1080 120 1440 80 L1440 120 L0 120 Z",
                "M0 80 Q360 120 720 80 Q1080 40 1440 80 L1440 120 L0 120 Z",
                "M0 80 Q360 40 720 80 Q1080 120 1440 80 L1440 120 L0 120 Z",
              ]}}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link
              href="/#opportunity"
              className="group inline-flex items-center gap-2 text-charcoal/40 hover:text-gold mb-8 text-xs tracking-[0.3em] uppercase transition-all duration-300"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back to Intelligence
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[420px]">
            {/* LEFT — Text */}
            <div>
              <ScrollReveal delay={100}>
                <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-5 block font-semibold">
                  Intelligence Report 02
                </span>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-charcoal">
                  Ultra-Prime <br />
                  <span className="text-gradient-gold">Expansion</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <p className="font-body text-base md:text-lg text-charcoal/55 leading-relaxed font-light mb-10 max-w-lg">
                  The $5M+ residential segment continues to outperform global benchmarks, underpinned by genuine utility,
                  wealth migration, and a structural shift in the market&apos;s maturity.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl md:text-8xl font-display text-gold">
                    <Counter value={43} prefix="+" suffix="%" />
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-semibold pb-3">
                    YoY Segment Growth
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — Doodle */}
            <motion.div style={{ y: doodleY, opacity: doodleOpacity }} className="hidden lg:block relative h-[420px]">
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
                  Market Volume <br /><span className="text-gold">Benchmarks</span>
                </h2>
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-8 rounded-2xl bg-charcoal/[0.02] border border-charcoal/5">
                      <span className="block text-3xl font-display text-gold mb-2">AED 528B</span>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Total Transactions (2023)</span>
                    </div>
                    <div className="p-8 rounded-2xl bg-charcoal/[0.02] border border-charcoal/5">
                      <span className="block text-3xl font-display text-gold mb-2">1,247</span>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">$10M+ Transactions</span>
                    </div>
                  </div>
                  <div className="relative pt-10 pb-6 px-6 rounded-2xl bg-charcoal/[0.01] border border-charcoal/5 h-56 flex flex-col justify-end">
                    <div className="absolute top-5 left-6 text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Transaction Growth Trend</div>
                    <svg className="w-full h-28" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <motion.path d="M0 90 L100 80 L200 40 L300 30 L400 10" fill="none" stroke="#C7A56A" strokeWidth="3"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }} />
                      <motion.path d="M0 90 L100 80 L200 40 L300 30 L400 10 V100 H0 Z" fill="url(#mgGrad)"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }} />
                      <defs>
                        <linearGradient id="mgGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#C7A56A" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#C7A56A" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="flex justify-between mt-3 text-[9px] uppercase tracking-widest text-charcoal/20 font-bold">
                      <span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024P</span>
                    </div>
                  </div>
                </div>
                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-bold">Source: Dubai Land Department &amp; Knight Frank Prime Report 2024</p>
              </ScrollReveal>
            </div>

            <div className="relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[4/5] rounded-[3rem] bg-[#F8F7F4] border border-charcoal/5 p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 text-charcoal/5 font-display text-[16rem] leading-none select-none">#1</div>
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-8">Global Ranking</span>
                    <h3 className="font-display text-3xl mb-6 leading-tight">World&apos;s Premier Acquisition Destination</h3>
                    <p className="text-charcoal/60 text-base leading-relaxed font-light mb-10">
                      Dubai has officially surpassed all global prime residential markets to become the #1 destination for international property acquisitions.
                    </p>
                    <div className="space-y-5">
                      {[
                        { city: "Dubai", rank: "1", growth: "+43%", gold: true },
                        { city: "London", rank: "2", growth: "-2.1%", gold: false },
                        { city: "New York", rank: "3", growth: "+1.4%", gold: false },
                      ].map((item) => (
                        <div key={item.city} className="flex items-center justify-between pb-4 border-b border-charcoal/5">
                          <span className="font-display text-lg">{item.city}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-bold text-charcoal/40">Rank {item.rank}</span>
                            <span className={`text-xs font-bold ${item.gold ? "text-gold" : "text-charcoal/20"}`}>{item.growth}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-24 border-y border-charcoal/5 bg-charcoal/[0.01]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-16 text-center">Market <span className="text-gold">Fundamentals</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <BarChart3 className="w-6 h-6 text-gold" />, title: "Volume Maturity", desc: "AED 528B in annual transactions reflects a market depth that provides genuine exit liquidity for high-value assets." },
              { icon: <Zap className="w-6 h-6 text-gold" />, title: "Ultra-Prime Alpha", desc: "The $5M+ segment is decoupled from broader market trends, driven by fixed-supply landmark locations." },
              { icon: <Target className="w-6 h-6 text-gold" />, title: "Strategic Entry", desc: "Current price points remain structurally undervalued relative to global tier-1 cities like London and Hong Kong." },
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
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-10 leading-tight">
              A High-Conviction <br /><span className="text-gold">Entry Window</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-charcoal/60 text-lg leading-relaxed font-light">
                The growth we are seeing today is not speculative — it is a structural correction. As global capital flows into Dubai, the window for acquiring landmark assets in prime corridors is narrowing.
              </p>
              <p className="text-charcoal/60 text-lg leading-relaxed font-light">
                Pearl Realty specializes in identifying the alpha within the expansion. We provide the research, the access, and the execution for investors who recognize that institutional-grade market maturity is the ultimate signal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto">
        <SplitCTA
          label="Market Intelligence"
          headline={"Position Your\nPortfolio Now"}
          subtext="Institutional-grade market access for the $5M+ acquisition segment."
        />
      </div>

      <FooterSection />
    </main>
  );
};

export default MarketGrowth;
