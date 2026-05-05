"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const GlobalWealthMigration = () => {
  return (
    <main className="bg-[#F8F7F4] text-[#1D1D1D] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Premium Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(199,165,106,0.1)_0%,transparent_70%)]" />
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
              <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-8 block font-semibold">Market Timing 01</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-[1.1] mb-10 text-charcoal">
                Global Wealth <br />
                <span className="text-gradient-gold">Migration</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-charcoal/60 leading-relaxed font-light mb-12 max-w-3xl">
                We are witnessing a historical repositioning of private capital. As global volatility increases, 
                $4.2 trillion in private wealth is seeking new, high-security nodes for preservation and growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-24 border-y border-charcoal/5 bg-charcoal/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {[
              { label: "Capital Repositioning", value: "$4.2T", source: "BCG Wealth Report 2025" },
              { label: "UHNWIs Globally", value: "395,000", source: "Knight Frank" },
              { label: "Wealth Growth Projected", value: "+28%", source: "Next 5 Years" }
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <div className="flex flex-col p-8 rounded-2xl bg-white border border-charcoal/5 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-500">
                  <span className="text-5xl md:text-6xl font-display text-gradient-gold mb-6">{metric.value}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2 font-bold">{metric.label}</span>
                  <span className="text-[9px] tracking-widest uppercase text-charcoal/20 font-medium">{metric.source}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <ScrollReveal>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-10 leading-tight text-charcoal">The Structural <br /><span className="text-gold">Transformation</span></h2>
              <div className="space-y-8 font-body text-charcoal/60 leading-relaxed text-lg font-light">
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
            <ScrollReveal delay={300}>
              <div className="aspect-square bg-white rounded-3xl p-12 flex flex-col justify-center border border-charcoal/5 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
                <h3 className="font-display text-sm tracking-[0.3em] text-gold mb-12 uppercase font-bold text-center">HNWI Migration Net Inflow</h3>
                <div className="flex-grow flex items-end gap-6 h-64">
                   <div className="w-1/4 h-[30%] bg-charcoal/5 rounded-t-xl transition-all duration-700 hover:bg-charcoal/10" />
                   <div className="w-1/4 h-[45%] bg-charcoal/5 rounded-t-xl transition-all duration-700 hover:bg-charcoal/10" />
                   <div className="w-1/4 h-[60%] bg-charcoal/10 rounded-t-xl transition-all duration-700 hover:bg-charcoal/20" />
                   <div className="w-1/4 h-[100%] bg-gradient-to-t from-gold to-gold-muted rounded-t-xl relative group">
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
                      <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-3xl font-display text-charcoal font-light">+4,500</span>
                   </div>
                </div>
                <p className="mt-12 text-[10px] text-charcoal/40 uppercase tracking-[0.3em] text-center font-semibold">UAE HNWIs Movement (2023)</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-gold/20 p-12 md:p-24 flex flex-col items-center text-center gap-12 shadow-xl">
            {/* Background shimmer effect removed for cleaner light theme */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,155,108,0.03)_0%,transparent_70%)]" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="font-body text-[10px] tracking-[0.6em] uppercase text-gold mb-8 block font-bold">Strategic Positioning</span>
              <h2 className="font-display text-4xl md:text-6xl font-light mb-10 leading-tight text-charcoal">Your Next Move, <br /><span className="text-gradient-gold">Handled Privately</span></h2>
              <p className="font-body text-charcoal/60 text-lg md:text-xl mb-12 font-light leading-relaxed">
                Understand how the current global wealth shift directly impacts your portfolio strategy. Access off-market landmark opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <MagneticButton 
                  primary 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Book Private Consultation
                </MagneticButton>
                <MagneticButton 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Access Analysis
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

export default GlobalWealthMigration;
