"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

const FamilyOfficeHub = () => {
  return (
    <main className="bg-[#020202] text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(193,155,108,0.1)_0%,transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link href="/#opportunity" className="group flex items-center gap-2 text-champagne/60 hover:text-champagne mb-12 text-xs tracking-widest uppercase transition-colors">
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Opportunity
            </Link>
          </ScrollReveal>

          <div className="max-w-4xl">
            <ScrollReveal delay={200}>
              <span className="font-body text-xs tracking-[0.6em] uppercase text-champagne mb-6 block">Market Timing 04</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-tight mb-8">
                Family Office <br />
                <span className="text-gradient-gold italic">Governance</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-muted-foreground/80 leading-relaxed font-light mb-12">
                Dubai has emerged as the premier global node for multi-generational wealth preservation. 
                750+ Family Offices have registered in the DIFC alone, signaling a permanent shift in institutional private capital.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-20 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: "DIFC Registrations", value: "750+", description: "Total Family Offices now managing assets locally." },
              { label: "Momentum Growth", value: "22%", description: "Year-on-year increase in new entity registrations." },
              { label: "Market Volume", value: "AED 528B", description: "Total Dubai RE transactions in a single year (2023)." }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col border-r border-white/5 last:border-0 pr-12">
                <span className="text-5xl md:text-7xl font-display text-gradient-gold mb-4 tabular-nums">{metric.value}</span>
                <span className="text-[10px] tracking-widest uppercase text-champagne/80 mb-2">{metric.label}</span>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form Deep Dive */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
           <div>
              <ScrollReveal>
                <h2 className="font-display text-3xl md:text-4xl font-light mb-10 leading-snug">The Architecture of <br /><span className="text-gradient-gold">Generational Legacy</span></h2>
                <div className="space-y-8 font-body text-muted-foreground text-lg leading-relaxed font-light">
                   <p>
                      Family Office Principals & Heirs are no longer just looking for property; they are looking for **Institutional Real Estate Governance**. Dubai's regulatory framework, specifically within the DIFC, allows for succession-proof ownership structures that align with global wealth preservation standards.
                   </p>
                   <p>
                      PEARL REALTY serves as the strategic advisor for these entities, aligning real estate acquisition with broader family office objectives: yield generation, portfolio insulation, and heir-friendly asset selection.
                   </p>
                </div>
              </ScrollReveal>
           </div>

           <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Succession", detail: "Multi-generational trust structures & DIFC Wills integration." },
                { title: "Privacy", detail: "Ensuring zero public exposure for landmark UHNWI assets." },
                { title: "Yield", detail: "Optimizing for rental returns in high-demand prime corridors." },
                { title: "Capital", detail: "100% Tax-efficient repatriation of investment gains." }
              ].map((box, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-champagne/20 transition-all group">
                   <span className="text-[10px] tracking-widest uppercase text-champagne/60 group-hover:text-champagne transition-colors block mb-4">{box.title}</span>
                   <p className="text-xs text-muted-foreground leading-relaxed font-light">{box.detail}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Dynamic CTA Footer Section */}
      <section className="py-32 bg-gradient-to-t from-champagne/[0.03] to-transparent">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-2xl mx-auto">
             <h2 className="font-display text-4xl md:text-6xl font-light mb-8">Establish Your Node</h2>
             <p className="font-body text-muted-foreground text-lg mb-12">
                Join the world's most sophisticated families in securing a permanent foothold in the world's new center of momentum.
             </p>
             <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Link href="/#contact">
                  <MagneticButton primary>Book Family Office Consultation</MagneticButton>
                </Link>
                <Link href="/#contact">
                  <MagneticButton>Request Whitepaper</MagneticButton>
                </Link>
             </div>
           </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default FamilyOfficeHub;
