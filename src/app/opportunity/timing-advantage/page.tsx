"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowLeft, Clock, Search, Layers, Compass } from "lucide-react";
import Counter from "@/components/Counter";
import DubaiDoodle from "@/components/opportunity/DubaiDoodle";
import SplitCTA from "@/components/opportunity/SplitCTA";

const TimingAdvantage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const doodleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const doodleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="bg-[#F8F7F4] text-[#1D1D1D] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ——— HERO SECTION ——— */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden border-b border-charcoal/5">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.35, 0.7, 0.35], x: [-10, 10, -10] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[radial-gradient(ellipse,rgba(199,165,106,0.08)_0%,transparent_70%)]"
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
              d="M0 50 Q360 90 720 50 Q1080 10 1440 50 L1440 120 L0 120 Z"
              fill="#C7A56A"
              animate={{ d: [
                "M0 50 Q360 90 720 50 Q1080 10 1440 50 L1440 120 L0 120 Z",
                "M0 50 Q360 10 720 50 Q1080 90 1440 50 L1440 120 L0 120 Z",
                "M0 50 Q360 90 720 50 Q1080 10 1440 50 L1440 120 L0 120 Z",
              ]}}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            <div>
              <ScrollReveal delay={100}>
                <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-5 block font-semibold">Intelligence Report 04</span>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-charcoal">
                  The Scarcity <br />
                  <span className="text-gradient-gold">Window</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <p className="font-body text-base md:text-lg text-charcoal/55 leading-relaxed font-light mb-10 max-w-lg">
                  Historical transaction volumes meeting a structural crunch in ultra-prime supply creates
                  a high-conviction entry point for landmark residential assets.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl md:text-8xl font-display text-gold">
                    <Counter value={144} prefix="$" suffix="B" />
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-semibold pb-3">Total Market Volume</span>
                </div>
              </ScrollReveal>
            </div>

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
                  Addressable <br /><span className="text-gold">Market Sizing</span>
                </h2>
                <div className="space-y-10">
                  {[
                    { label: "Total Addressable Market (TAM)", value: "$14B–$18B", pct: "100%", indent: 0, primary: false },
                    { label: "Serviceable Market (SAM)", value: "$3B–$5B", pct: "28%", indent: 1, primary: true },
                    { label: "Obtainable Market (SOM)", value: "$840M–$1.1B", pct: "8%", indent: 2, primary: true },
                  ].map((item, i) => (
                    <div key={i} style={{ paddingLeft: `${item.indent * 20}px` }}>
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">{item.label}</span>
                        <span className={`font-display text-lg ${item.primary ? "text-gold" : "text-charcoal"}`}>{item.value}</span>
                      </div>
                      <div className={`h-2 bg-charcoal/5 rounded-full overflow-hidden ${item.indent > 0 ? "border-l-2 border-gold/20 pl-0" : ""}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.pct }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full ${item.primary ? "bg-gold" : "bg-charcoal/20"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-bold">Source: Pearl Realty Strategic Analysis 2024</p>
              </ScrollReveal>
            </div>

            <div className="relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[4/3] rounded-[3rem] bg-[#F8F7F4] border border-charcoal/5 p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(199,165,106,0.08)_0%,transparent_50%)]" />
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-8">Supply Crunch</span>
                    <h3 className="font-display text-3xl mb-6 leading-tight">Ready Inventory <br /><span className="text-gold">Shortfall</span></h3>
                    <p className="text-charcoal/60 text-base leading-relaxed font-light mb-10">
                      There is a structural shortfall in $10M+ ready inventory, creating a competitive environment for off-market landmark assets.
                    </p>
                    <div className="flex gap-10">
                      <div>
                        <span className="block text-2xl font-display text-charcoal">High</span>
                        <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Demand Velocity</span>
                      </div>
                      <div className="w-px h-10 bg-charcoal/10" />
                      <div>
                        <span className="block text-2xl font-display text-gold">Critical</span>
                        <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Supply Shortage</span>
                      </div>
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
            <h2 className="font-display text-4xl md:text-5xl font-light mb-16 text-center">Timing <span className="text-gold">Advantage</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Clock className="w-6 h-6 text-gold" />, title: "Cycle Maturity", desc: "The market has transitioned from speculation to a high-conviction phase driven by physical utility and legacy building." },
              { icon: <Search className="w-6 h-6 text-gold" />, title: "Off-Market Alpha", desc: "As public inventory thins, the value of private, unlisted opportunities becomes the primary driver of portfolio alpha." },
              { icon: <Layers className="w-6 h-6 text-gold" />, title: "Asset Scarcity", desc: "Landmark plots and ready-to-move-in mansions in prime communities are becoming effectively finite resources." },
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
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8 leading-tight">
                Navigating the <br /><span className="text-gold">Convergence</span>
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed font-light">
                Pearl Realty operates where data meets intuition. We recognize that the &quot;perfect time&quot; is not a point in a graph, but a convergence of supply scarcity and institutional demand.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="p-10 rounded-2xl bg-[#F8F7F4] border border-charcoal/5">
                <div className="flex gap-5 mb-5">
                  <Compass className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <h4 className="font-display text-lg font-bold">Strategic Insight</h4>
                </div>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light">
                  Our realistic SOM of ~$1.1B is not just a target — it&apos;s a commitment to capturing the most strategic segment of the off-market universe. We bridge the gap between high-conviction timing and landmark acquisition.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto">
        <SplitCTA
          label="Timing Advantage"
          headline={"Acquire with\nConviction"}
          subtext="The window for landmark asset acquisition in prime corridors is narrowing. Act with precision."
        />
      </div>

      <FooterSection />
    </main>
  );
};

export default TimingAdvantage;
