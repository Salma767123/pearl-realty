"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

const SupplyDemandCrunch = () => {
  return (
    <main className="bg-[#020202] text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(193,155,108,0.15)_0%,transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link href="/#opportunity" className="group flex items-center gap-2 text-champagne/60 hover:text-champagne mb-12 text-xs tracking-widest uppercase transition-colors">
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Opportunity
            </Link>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={200}>
              <span className="font-body text-xs tracking-[0.6em] uppercase text-champagne mb-6 block">Market Timing 03</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-tight mb-8">
                The Ultra-Prime <br />
                <span className="text-gradient-gold italic">Crunch</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-muted-foreground/80 leading-relaxed font-light mb-12">
                Dubai's high-conviction growth phase (2023–2026) is marked by a structural scarcity of landmark residential assets. 
                Demand at the $10M+ entry point has surpassed supply by a critical margin.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Market Heat Map Statistics */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Ultra-Prime Growth", value: "+43%", description: "Year-on-year increase in $5M+ transactions." },
              { label: "Landmark Transactions", value: "1,247", description: "Number of $10M+ deals closed in 2023." },
              { label: "Buyer Intent", value: "68%", description: "UHNWIs planning more purchases within 2 years." }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col p-6 border-l border-white/5 bg-white/[0.01]">
                <span className="text-5xl md:text-7xl font-display text-gradient-gold mb-4">{metric.value}</span>
                <span className="text-[10px] tracking-widest uppercase text-champagne/70 mb-2">{metric.label}</span>
                <p className="text-sm text-muted-foreground/60 font-light">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
           <div className="max-w-3xl mb-24">
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-5xl font-light mb-10">Scarcity as a <span className="italic">Strategic Force</span></h2>
                <p className="font-body text-muted-foreground text-xl leading-relaxed font-light">
                   As Dubai secures its position as the #1 international acquisition destination, the market has matured beyond speculation. 
                   Today's acquisitions are driven by genuine utility and wealth repositioning, which is why supply in prime communities like Palm Jumeirah, 
                   Jumeirah Bay, and Emirates Hills has reached record low availability.
                </p>
              </ScrollReveal>
           </div>

           <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-charcoal p-12 rounded-3xl border border-white/5">
                 <h4 className="font-display text-xs uppercase tracking-widest text-champagne mb-8">Supply / Demand Delta</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-xs uppercase tracking-widest text-white/40">Investor Demand</span>
                       <span className="font-display text-xl text-champagne">+45%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                       <div className="h-full bg-champagne w-[90%]" />
                    </div>
                    
                    <div className="flex justify-between items-end mt-8 mb-2">
                       <span className="text-xs uppercase tracking-widest text-white/40">New Landmark Supply</span>
                       <span className="font-display text-xl text-red-400">-12%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                       <div className="h-full bg-red-400 w-[30%]" />
                    </div>
                 </div>
                 <p className="mt-12 text-xs text-muted-foreground leading-relaxed uppercase tracking-[0.2em] text-center">
                    STRUCTURAL SHORTFALL IN $10M+ READY INVENTORY
                 </p>
              </div>

              <div className="flex flex-col justify-center">
                 <h3 className="font-display text-2xl mb-6">Why It Matters</h3>
                 <p className="text-muted-foreground leading-relaxed mb-10">
                    Entering the market now is about positioning before the full effects of this supply crunch are reflected in secondary market premiums. 
                    PEARL REALTY provides the bridge to off-market inventory that never reaches public portals.
                 </p>
                 <MagneticButton primary onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                    Request Inventory Access
                 </MagneticButton>
              </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center">
           <span className="text-champagne/40 text-[10px] tracking-[0.8em] uppercase mb-8 block">Positioning Report</span>
           <h2 className="font-display text-4xl md:text-5xl font-light mb-12">Secure the Limited Window</h2>
           <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/#contact">
                <MagneticButton primary>Position Portfolio</MagneticButton>
              </Link>
              <Link href="/#contact">
                <MagneticButton>Asset Analysis</MagneticButton>
              </Link>
           </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default SupplyDemandCrunch;
