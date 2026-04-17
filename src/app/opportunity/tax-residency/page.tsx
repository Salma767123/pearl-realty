"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

const TaxResidencyAdvantage = () => {
  return (
    <main className="bg-[#020202] text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(193,155,108,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link href="/#opportunity" className="group flex items-center gap-2 text-champagne/60 hover:text-champagne mb-12 text-xs tracking-widest uppercase transition-colors">
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Opportunity
            </Link>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={200}>
              <span className="font-body text-xs tracking-[0.6em] uppercase text-champagne mb-6 block">Market Timing 02</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-tight mb-8">
                Strategic <br />
                <span className="text-gradient-gold italic">Advantage</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-muted-foreground/80 leading-relaxed font-light mb-12">
                The Dubai Golden Visa and a 0% personal income tax regime represent more than just a fiscal benefit—they are a structural tool for global wealth preservation and unprecedented mobility.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              { label: "Personal Income Tax", value: "0%", description: "Total exemption across all personal earnings." },
              { label: "Golden Visa Minimum", value: "AED 2M", description: "Seamless residency through property investment." },
              { label: "Global Prime Destination", value: "#1", description: "Ranked top choice for HNWI relocation (2024)." }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-5xl md:text-6xl font-display text-gradient-gold mb-4">{metric.value}</span>
                <span className="text-[10px] tracking-widest uppercase text-champagne/70 mb-2">{metric.label}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Comparison */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="glass-panel rounded-2xl p-10 space-y-6">
                <h3 className="font-display text-xl mb-4">The Escape from Fiscal Drag</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                   Global tech founders and billionaires originating from the UK, India, and Europe are facing increasing tax burdens, often exceeding 45% on realized gains and income.
                </p>
                <div className="h-px bg-white/10 w-full" />
                <p className="font-body text-muted-foreground leading-relaxed">
                   By re-domiciling to Dubai, these individuals not only protect their current liquidity but also solve for generational governance in a region specifically designed for global billionaire migration.
                </p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-light mb-8">Mobility & Efficiency</h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                 The 10-year Golden Visa provides immediate security. Individuals net worth $10M-$500M+ are utilizing this as a pivot point for physical relocation and portfolio diversification into tangible landmark assets.
              </p>
              <ul className="space-y-4">
                 {["Zero inheritance tax", "100% Repatriation of Capital", "Global Connectivity Nodes", "Security & Discretion"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-champagne/80">
                       <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                       {item}
                    </li>
                 ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-gradient-to-tr from-black to-charcoal border border-white/5 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-body text-xs tracking-widest uppercase text-champagne/60 mb-6 block">Structural Setup</span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 italic">Your Legacy, Optimized</h2>
            <p className="max-w-2xl mx-auto font-body text-muted-foreground text-lg mb-12">
               Connect with our principals to discuss the strategic implications of relocation and private asset positioning before the current cycle peaks.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/#contact">
                <MagneticButton primary>Establish Residency</MagneticButton>
              </Link>
              <Link href="/#contact">
                <MagneticButton>Private Inquiry</MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default TaxResidencyAdvantage;
