"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const FamilyOfficeHub = () => {
  return (
    <main className="bg-[#F8F7F4] text-[#1D1D1D] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Premium Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-30">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(199,165,106,0.05)_0%,transparent_60%)]" />
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
              <span className="font-body text-xs tracking-[0.6em] uppercase text-gold mb-8 block font-semibold">Market Timing 04</span>
              <h1 className="font-display text-5xl md:text-8xl font-light leading-[1.1] mb-10 text-charcoal">
                Family Office <br />
                <span className="text-gradient-gold italic">Governance</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="font-body text-lg md:text-2xl text-charcoal/60 leading-relaxed font-light mb-12 max-w-3xl">
                Dubai has emerged as the premier global node for multi-generational wealth preservation. 
                750+ Family Offices have registered in the DIFC alone, signaling a permanent shift in institutional private capital.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-24 border-y border-charcoal/5 bg-charcoal/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            {[
              { label: "DIFC Registrations", value: "750+", description: "Total Family Offices now managing assets locally." },
              { label: "Momentum Growth", value: "22%", description: "Year-on-year increase in new entity registrations." },
              { label: "Market Volume", value: "AED 528B", description: "Total Dubai RE transactions in a single year (2023)." }
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <div className="flex flex-col p-8 rounded-2xl bg-white border border-charcoal/5 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-500 h-full">
                  <span className="text-5xl md:text-7xl font-display text-gradient-gold mb-6 tabular-nums">{metric.value}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold/80 mb-4 font-bold">{metric.label}</span>
                  <p className="text-sm text-charcoal/50 font-light leading-relaxed">{metric.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form Deep Dive */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
           <div>
              <ScrollReveal>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-10 leading-tight text-charcoal">The Architecture of <br /><span className="text-gradient-gold">Generational Legacy</span></h2>
                <div className="space-y-8 font-body text-charcoal/60 text-lg leading-relaxed font-light">
                   <p>
                      Family Office Principals & Heirs are no longer just looking for property; they are looking for **Institutional Real Estate Governance**. Dubai's regulatory framework, specifically within the DIFC, allows for succession-proof ownership structures that align with global wealth preservation standards.
                   </p>
                   <p>
                      PEARL REALTY serves as the strategic advisor for these entities, aligning real estate acquisition with broader family office objectives: yield generation, portfolio insulation, and heir-friendly asset selection.
                   </p>
                </div>
              </ScrollReveal>
           </div>

           <div className="grid grid-cols-2 gap-6 pt-10">
              {[
                { title: "Succession", detail: "Multi-generational trust structures & DIFC Wills integration." },
                { title: "Privacy", detail: "Ensuring zero public exposure for landmark UHNWI assets." },
                { title: "Yield", detail: "Optimizing for rental returns in high-demand prime corridors." },
                { title: "Capital", detail: "100% Tax-efficient repatriation of investment gains." }
              ].map((box, i) => (
                <ScrollReveal key={i} delay={300 + i * 100}>
                  <div className="p-10 rounded-3xl bg-white border border-charcoal/5 shadow-md hover:border-gold/30 transition-all duration-500 group relative overflow-hidden h-full">
                     <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                     <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60 group-hover:text-gold transition-colors block mb-6 font-bold">{box.title}</span>
                     <p className="text-xs text-charcoal/40 group-hover:text-charcoal/60 transition-colors leading-relaxed font-light">{box.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* Dynamic CTA Footer Section */}
      <section className="py-40 container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-gold/20 p-12 md:p-24 text-center shadow-xl flex flex-col items-center gap-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,155,108,0.03)_0%,transparent_70%)]" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="font-display text-4xl md:text-6xl font-light mb-10 leading-tight text-charcoal">Establish <br /><span className="italic text-gradient-gold">Your Node</span></h2>
              <p className="font-body text-charcoal/60 text-lg md:text-xl mb-12 font-light leading-relaxed">
                 Join the world's most sophisticated families in securing a permanent foothold in the world's new center of momentum.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                <MagneticButton 
                  primary 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Book Family Office Consultation
                </MagneticButton>
                <MagneticButton 
                  className="rounded-full px-12 py-5"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Request Whitepaper
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

export default FamilyOfficeHub;
