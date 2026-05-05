"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TaxResidencyAdvantage = () => {
  return (
    <main className="bg-[#F8F7F4] text-[#1D1D1D] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Premium Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(199,165,106,0.05)_0%,transparent_70%)]" />
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
              <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-8 block font-semibold">Market Timing 02</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-[1.1] mb-10 text-charcoal">
                Strategic <br />
                <span className="text-gradient-gold">Advantage</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-charcoal/60 leading-relaxed font-light mb-12 max-w-3xl">
                The Dubai Golden Visa and a 0% personal income tax regime represent more than just a fiscal benefit—they are a structural tool for global wealth preservation and unprecedented mobility.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-charcoal/5 bg-charcoal/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {[
              { label: "Personal Income Tax", value: "0%", description: "Total exemption across all personal earnings." },
              { label: "Golden Visa Minimum", value: "AED 2M", description: "Seamless residency through property investment." },
              { label: "Global Prime Destination", value: "#1", description: "Ranked top choice for HNWI relocation (2024)." }
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <div className="flex flex-col p-8 rounded-2xl bg-white border border-charcoal/5 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-500 h-full">
                  <span className="text-5xl md:text-6xl font-display text-gradient-gold mb-6 tabular-nums">{metric.value}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/80 mb-4 font-bold">{metric.label}</span>
                  <p className="text-sm text-charcoal/50 font-light leading-relaxed">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Comparison */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
             <ScrollReveal>
               <div className="bg-white rounded-3xl p-10 md:p-12 space-y-8 border border-charcoal/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
                  <h3 className="font-display text-2xl mb-6 text-charcoal font-light">The Escape from Fiscal Drag</h3>
                  <p className="font-body text-charcoal/60 leading-relaxed text-lg font-light">
                     Global tech founders and billionaires originating from the UK, India, and Europe are facing increasing tax burdens, often exceeding 45% on realized gains and income.
                  </p>
                  <div className="h-px bg-gradient-to-r from-gold/30 to-transparent w-full" />
                  <p className="font-body text-charcoal/60 leading-relaxed text-lg font-light">
                     By re-domiciling to Dubai, these individuals not only protect their current liquidity but also solve for generational governance in a region specifically designed for global billionaire migration.
                  </p>
               </div>
             </ScrollReveal>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal delay={200}>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-10 leading-tight text-charcoal">Mobility & <br /><span className="text-gold">Efficiency</span></h2>
              <p className="font-body text-charcoal/60 text-xl leading-relaxed mb-12 font-light">
                 The 10-year Golden Visa provides immediate security. Individuals net worth $10M-$500M+ are utilizing this as a pivot point for physical relocation and portfolio diversification into tangible landmark assets.
              </p>
              <ul className="space-y-6">
                 {["Zero inheritance tax", "100% Repatriation of Capital", "Global Connectivity Nodes", "Security & Discretion"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gold/90 font-semibold group transition-all">
                       <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(193,155,108,0.3)] group-hover:scale-125 transition-transform" />
                       {item}
                    </li>
                 ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-gold/20 p-12 md:p-24 text-center shadow-xl flex flex-col items-center gap-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,155,108,0.03)_0%,transparent_70%)]" />

            <div className="relative z-10 max-w-3xl">
              <span className="font-body text-[10px] tracking-[0.6em] uppercase text-gold mb-8 block font-bold">Structural Setup</span>
              <h2 className="font-display text-4xl md:text-6xl font-light mb-10 leading-tight text-gradient-gold text-charcoal">Your Legacy, Optimized</h2>
              <p className="max-w-2xl mx-auto font-body text-charcoal/60 text-lg md:text-xl mb-12 font-light leading-relaxed">
                 Connect with our principals to discuss the strategic implications of relocation and private asset positioning before the current cycle peaks.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <MagneticButton 
                  primary 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Establish Residency
                </MagneticButton>
                <MagneticButton 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Private Inquiry
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

export default TaxResidencyAdvantage;
