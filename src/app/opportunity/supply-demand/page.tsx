"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Counter from "@/components/Counter";
import DubaiDoodle from "@/components/opportunity/DubaiDoodle";
import SplitCTA from "@/components/opportunity/SplitCTA";

const SupplyDemandCrunch = () => {
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
                <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-5 block font-semibold">Intelligence Report 03</span>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-6 text-charcoal">
                  The Ultra-Prime <br />
                  <span className="text-gradient-gold">Crunch</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <p className="font-body text-base md:text-lg text-charcoal/55 leading-relaxed font-light mb-10 max-w-lg">
                  Dubai's high-conviction growth phase (2023–2026) is marked by a structural scarcity of landmark residential assets. 
                  Demand at the $10M+ entry point has surpassed supply by a critical margin.
                </p>
              </ScrollReveal>
            </div>

            <motion.div style={{ y: doodleY, opacity: doodleOpacity }} className="hidden lg:block relative h-[420px]">
              <DubaiDoodle />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Heat Map Statistics */}
      <section className="py-24 border-y border-charcoal/5 bg-charcoal/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {[
              { label: "Ultra-Prime Growth", value: 43, prefix: "+", suffix: "%", description: "Year-on-year increase in $5M+ transactions." },
              { label: "Landmark Transactions", value: 1247, prefix: "", suffix: "", description: "Number of $10M+ deals closed in 2023." },
              { label: "Buyer Intent", value: 68, prefix: "", suffix: "%", description: "UHNWIs planning more purchases within 2 years." }
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <div className="flex flex-col p-8 rounded-2xl bg-white border border-charcoal/5 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-500 h-full">
                  <span className="text-5xl md:text-7xl font-display text-gradient-gold mb-6 tabular-nums">
                    <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold mb-4 font-bold">{metric.label}</span>
                  <p className="text-sm text-charcoal/50 font-light leading-relaxed">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
           <div className="max-w-3xl mb-24">
              <ScrollReveal>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-10 leading-tight text-charcoal">Scarcity as a <br /><span className="text-gold">Strategic Force</span></h2>
                <p className="font-body text-charcoal/60 text-xl leading-relaxed font-light">
                   As Dubai secures its position as the #1 international acquisition destination, the market has matured beyond speculation. 
                   Today's acquisitions are driven by genuine utility and wealth repositioning, which is why supply in prime communities like Palm Jumeirah, 
                   Jumeirah Bay, and Emirates Hills has reached record low availability.
                </p>
              </ScrollReveal>
           </div>

           <div className="grid lg:grid-cols-2 gap-24 items-start">
              <ScrollReveal>
                <div className="bg-white p-12 rounded-[2.5rem] border border-charcoal/5 shadow-xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
                   <h4 className="font-display text-xs uppercase tracking-[0.4em] text-gold mb-12 font-bold text-center">Supply / Demand Delta</h4>
                   <div className="space-y-10">
                      <div>
                        <div className="flex justify-between items-end mb-4">
                           <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 font-semibold">Investor Demand</span>
                           <span className="font-display text-2xl text-gold">+45%</span>
                        </div>
                        <div className="w-full bg-charcoal/5 h-1.5 rounded-full overflow-hidden">
                           <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-gold to-gold-muted" 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-end mb-4">
                           <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/40 font-semibold">New Landmark Supply</span>
                           <span className="font-display text-2xl text-red-500/80">-12%</span>
                        </div>
                        <div className="w-full bg-charcoal/5 h-1.5 rounded-full overflow-hidden">
                           <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "30%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-red-500/40" 
                          />
                        </div>
                      </div>
                   </div>
                   <p className="mt-16 text-[10px] text-charcoal/30 leading-relaxed uppercase tracking-[0.4em] text-center font-semibold">
                      STRUCTURAL SHORTFALL IN $10M+ READY INVENTORY
                   </p>
                </div>
              </ScrollReveal>

              <div className="flex flex-col justify-center h-full pt-10">
                 <ScrollReveal delay={200}>
                   <h3 className="font-display text-3xl mb-8 text-charcoal font-light">Why It Matters</h3>
                   <p className="text-charcoal/60 leading-relaxed text-lg font-light mb-12">
                      Entering the market now is about positioning before the full effects of this supply crunch are reflected in secondary market premiums. 
                      PEARL REALTY provides the bridge to off-market inventory that never reaches public portals.
                   </p>
                   <MagneticButton primary className="rounded-full px-12 py-5" onClick={() => window.location.href = "/#contact"}>
                      Request Inventory Access
                   </MagneticButton>
                 </ScrollReveal>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto">
        <SplitCTA
          label="Positioning Report"
          headline={"Secure the\nLimited Window"}
          subtext="The window for landmark asset acquisition in prime corridors is narrowing. Act with precision."
        />
      </div>

      <FooterSection />
    </main>
  );
};

export default SupplyDemandCrunch;
