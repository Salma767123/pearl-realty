"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

const GlobalWealthMigration = () => {
  return (
    <main className="bg-[#020202] text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             {/* World map dots visualization */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,155,108,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link href="/#opportunity" className="group flex items-center gap-2 text-champagne/60 hover:text-champagne mb-12 text-xs tracking-widest uppercase transition-colors">
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Opportunity
            </Link>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={200}>
              <span className="font-body text-xs tracking-[0.6em] uppercase text-champagne mb-6 block">Market Timing 01</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-tight mb-8">
                Global Wealth <br />
                <span className="text-gradient-gold italic">Migration</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-muted-foreground/80 leading-relaxed font-light mb-12">
                We are witnessing a historical repositioning of private capital. As global volatility increases, 
                $4.2 trillion in private wealth is seeking new, high-security nodes for preservation and growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "Capital Repositioning", value: "$4.2T", source: "BCG Wealth Report 2025" },
              { label: "UHNWIs Globally", value: "395,000", source: "Knight Frank" },
              { label: "Wealth Growth Projected", value: "+28%", source: "Next 5 Years" }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-5xl md:text-6xl font-display text-gradient-gold mb-4">{metric.value}</span>
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">{metric.label}</span>
                <span className="text-[8px] tracking-widest uppercase text-white/20">{metric.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-light mb-8">The Structural Transformation</h2>
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg">
                <p>
                  Dubai's real estate market has undergone a fundamental shift that distinguishes it from prior speculative cycles. 
                  The current growth phase is powered by genuine wealth migration—individuals moving their entire operational lives, 
                  family offices, and investment mandates to a region that offers unparalleled stability.
                </p>
                <p>
                  68% of global UHNWIs now intend to make significant additional property acquisitions within the next 24 months, 
                  with Dubai ranked as the #1 international destination for these landmark acquisitions.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="aspect-square glass-panel rounded-2xl p-12 flex flex-col justify-center">
              <h3 className="font-display text-sm tracking-widest text-champagne mb-8 uppercase">HNWI Migration Net Inflow</h3>
              <div className="flex-grow flex items-end gap-4">
                 <div className="w-1/4 h-[30%] bg-white/5 rounded-t-lg transition-all" />
                 <div className="w-1/4 h-[45%] bg-white/5 rounded-t-lg transition-all" />
                 <div className="w-1/4 h-[60%] bg-white/10 rounded-t-lg transition-all" />
                 <div className="w-1/4 h-[100%] bg-gradient-to-t from-champagne to-gold rounded-t-lg relative">
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl font-display text-white">+4,500</span>
                 </div>
              </div>
              <p className="mt-8 text-xs text-muted-foreground uppercase tracking-widest text-center">UAE HNWIs Movement (2023)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-gradient-to-br from-charcoal to-black border border-white/5 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,155,108,0.1)_0%,transparent_70%)]" />
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8">Strategic Positioning</h2>
            <p className="max-w-2xl mx-auto font-body text-muted-foreground text-lg mb-12">
              Understand how the current global wealth shift directly impacts your portfolio strategy. Access off-market landmark opportunities.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/#contact">
                <MagneticButton primary>Book Private Consultation</MagneticButton>
              </Link>
              <Link href="/#contact">
                <MagneticButton>Access Analysis</MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default GlobalWealthMigration;
