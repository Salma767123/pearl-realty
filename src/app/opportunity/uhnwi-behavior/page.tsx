"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { ArrowLeft, Users, Briefcase, Gem, GraduationCap } from "lucide-react";
import Counter from "@/components/Counter";
import DubaiDoodle from "@/components/opportunity/DubaiDoodle";
import SplitCTA from "@/components/opportunity/SplitCTA";

const UHNWIBehavior = () => {
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
            animate={{ opacity: [0.3, 0.65, 0.3], y: [0, -15, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-1/3 w-[550px] h-[380px] bg-[radial-gradient(ellipse,rgba(199,165,106,0.09)_0%,transparent_70%)]"
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
              d="M0 70 Q480 30 960 70 Q1200 90 1440 60 L1440 120 L0 120 Z"
              fill="#C7A56A"
              animate={{ d: [
                "M0 70 Q480 30 960 70 Q1200 90 1440 60 L1440 120 L0 120 Z",
                "M0 70 Q480 100 960 70 Q1200 40 1440 80 L1440 120 L0 120 Z",
                "M0 70 Q480 30 960 70 Q1200 90 1440 60 L1440 120 L0 120 Z",
              ]}}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
                  Institutional <br />
                  <span className="text-gradient-gold">Acquisition</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <p className="font-body text-base md:text-lg text-charcoal/55 leading-relaxed font-light mb-10 max-w-lg">
                  A profound shift in buyer sentiment among global UHNWIs, as Dubai transitions into a primary node
                  for institutional-grade residential portfolios and generational family seats.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl md:text-8xl font-display text-gold">
                    <Counter value={68} suffix="%" />
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-semibold pb-3">Active Buyer Intent</span>
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
                  The New <br /><span className="text-gold">Buyer Profile</span>
                </h2>
                <div className="space-y-8">
                  {[
                    { label: "Tech Founders & Billionaires", value: "45%", pct: "45%", primary: true },
                    { label: "Family Office Principals", value: "35%", pct: "35%", primary: false },
                    { label: "Global HNWIs", value: "20%", pct: "20%", primary: false },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-xs uppercase tracking-widest text-charcoal/60 font-bold">{item.label}</span>
                        <span className={`font-display text-xl ${item.primary ? "text-charcoal" : "text-charcoal/40"}`}>{item.value}</span>
                      </div>
                      <div className="h-2 bg-charcoal/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.pct }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full ${item.primary ? "bg-gold" : "bg-charcoal/25"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-8 rounded-[2rem] bg-[#F8F7F4] border border-charcoal/5">
                  <h4 className="font-display text-sm uppercase tracking-widest text-gold mb-5 font-bold">Primary Acquisition Drivers</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <span className="block text-2xl font-display text-charcoal mb-1">0% vs 45%+</span>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Tax Optimization Delta</span>
                    </div>
                    <div>
                      <span className="block text-2xl font-display text-charcoal mb-1">10 Years</span>
                      <span className="text-[10px] uppercase tracking-widest text-charcoal/40 font-bold">Golden Visa Stability</span>
                    </div>
                  </div>
                </div>
                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-charcoal/40 font-bold">Source: Knight Frank Prime Survey 2024</p>
              </ScrollReveal>
            </div>

            <div className="relative">
              <ScrollReveal delay={300}>
                <div className="aspect-square rounded-[3rem] bg-charcoal text-white p-12 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(199,165,106,0.15)_0%,transparent_70%)]" />
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 text-gold text-[10px] font-bold uppercase tracking-widest mb-8">Segment Insight</span>
                    <h3 className="font-display text-3xl mb-6 leading-tight text-gold">Generational <span className="text-white">Legacy</span></h3>
                    <p className="text-white/60 text-base leading-relaxed font-light mb-10">
                      Modern UHNWIs are no longer viewing Dubai through a transient lens. The current mandate is succession-proof ownership and long-term residency.
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Family Office Registration (+22% YoY)",
                        "Succession-Proof Structure Preference",
                        "Institutional Yield Alignment",
                      ].map((text, i) => (
                        <li key={i} className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
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
            <h2 className="font-display text-4xl md:text-5xl font-light mb-16 text-center">Behavioral <span className="text-gold">Mandates</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Users className="w-6 h-6 text-gold" />, title: "Physical Relocation", desc: "Tech founders and billionaires are re-domiciling their operations to capitalize on structural tax advantages." },
              { icon: <Briefcase className="w-6 h-6 text-gold" />, title: "Family Governance", desc: "UHNWIs are increasingly professionalizing their real estate portfolios through dedicated family office structures." },
              { icon: <Gem className="w-6 h-6 text-gold" />, title: "Landmark Bias", desc: "A concentrated focus on unique, high-barrier-to-entry assets that serve as reliable stores of generational value." },
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
                The New <br /><span className="text-gold">Global Standard</span>
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed font-light">
                Why is Dubai the #1 choice for international UHNWIs? Because it solves for the three pillars of billionaire migration: tax optimization, global mobility, and physical security.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="p-10 rounded-2xl bg-[#F8F7F4] border border-charcoal/5">
                <div className="flex gap-5 mb-5">
                  <GraduationCap className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <h4 className="font-display text-lg font-bold">Strategic Value</h4>
                </div>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light">
                  Pearl Realty interprets these behavioral shifts to position clients before the curve. We understand that an acquisition in this segment is a strategic move, not a simple transaction.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto">
        <SplitCTA
          label="Acquisition Mandate"
          headline={"Align Your\nAcquisition Strategy"}
          subtext="Position ahead of the next wave of institutional UHNWI demand."
        />
      </div>

      <FooterSection />
    </main>
  );
};

export default UHNWIBehavior;
