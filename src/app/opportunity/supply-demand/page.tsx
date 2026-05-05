"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SupplyDemandCrunch = () => {
  return (
    <main className="bg-[#F8F7F4] text-[#1D1D1D] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Premium Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(193,155,108,0.05)_0%,transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link 
              href="/#opportunity" 
              className="group inline-flex items-center gap-2 text-charcoal/40 hover:text-gold mb-12 text-xs tracking-[0.3em] uppercase transition-all duration-300"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> 
              Back to Opportunity
            </Link>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={200}>
              <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-8 block font-semibold">Market Timing 03</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-[1.1] mb-10 text-charcoal">
                The Ultra-Prime <br />
                <span className="text-gradient-gold">Crunch</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-charcoal/60 leading-relaxed font-light mb-12 max-w-3xl">
                Dubai's high-conviction growth phase (2023–2026) is marked by a structural scarcity of landmark residential assets. 
                Demand at the $10M+ entry point has surpassed supply by a critical margin.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Market Heat Map Statistics */}
      <section className="py-24 border-y border-charcoal/5 bg-charcoal/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {[
              { label: "Ultra-Prime Growth", value: "+43%", description: "Year-on-year increase in $5M+ transactions." },
              { label: "Landmark Transactions", value: "1,247", description: "Number of $10M+ deals closed in 2023." },
              { label: "Buyer Intent", value: "68%", description: "UHNWIs planning more purchases within 2 years." }
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <div className="flex flex-col p-8 rounded-2xl bg-white border border-charcoal/5 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-500 h-full">
                  <span className="text-5xl md:text-7xl font-display text-gradient-gold mb-6 tabular-nums">{metric.value}</span>
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

      {/* Footer CTA */}
      <section className="py-40 container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-gold/20 p-12 md:p-24 text-center shadow-xl flex flex-col items-center gap-10">
            {/* Background shimmer effect removed for cleaner light theme or moved to CSS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,155,108,0.03)_0%,transparent_70%)]" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="font-body text-[10px] tracking-[0.6em] uppercase text-gold mb-8 block font-bold">Positioning Report</span>
              <h2 className="font-display text-4xl md:text-6xl font-light mb-10 leading-tight text-charcoal">Secure the <br /><span className="text-gradient-gold">Limited Window</span></h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                <MagneticButton 
                  primary 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Position Portfolio
                </MagneticButton>
                <MagneticButton 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Asset Analysis
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <FooterSection />
    </main>
  );
};

export default SupplyDemandCrunch;
