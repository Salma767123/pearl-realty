import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const insights = [
  { value: 395000, suffix: "+", label: "UHNWI INDIVIDUALS GLOBALLY ($30M+)", prefix: "", detail: "Global liquidity baseline" },
  { value: 68, suffix: "%", label: "PLANNING DUBAI PURCHASE (2024-25)", prefix: "", detail: "Institutional conviction" },
  { value: 28, suffix: "%", label: "5-YEAR UHNWI GROWTH PROJECTED", prefix: "", detail: "Structural velocity" },
  { value: 0, suffix: "%", label: "UAE PERSONAL INCOME TAX", prefix: "", detail: "Sovereign advantage" },
  { value: 528, suffix: "B", label: "TOTAL RE TRANSACTIONS (AED, 2023)", prefix: "", detail: "Transaction depth" },
  { value: 22, suffix: "%", label: "YOY FAMILY OFFICE GROWTH (DIFC)", prefix: "", detail: "Governance magnet" },
];

const AnimatedNumber = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
            start = Math.round(value * eased);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-gold">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

const InsightsSection = () => {
  return (
    <section id="insights" className="relative py-20 overflow-hidden bg-beige dark:bg-background">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="none">
          <path d="M0 200 L1000 200 M0 500 L1000 500 M0 800 L1000 800" stroke="#C19B6C" strokeWidth="0.5" />
          <path d="M200 0 L200 1000 M500 0 L500 1000 M800 0 L800 1000" stroke="#C19B6C" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="300" stroke="#C19B6C" strokeWidth="0.5" strokeDasharray="10 10" />
          <path d="M100 100 L200 200 M300 100 L200 200 M100 300 L200 200" stroke="#C19B6C" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="font-body text-[10px] tracking-[0.6em] uppercase text-champagne mb-4 block font-semibold">
                Market Intelligence
              </span>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="font-display text-4xl md:text-6xl font-light leading-tight text-foreground">
                The Intelligence <br />
                <span className="text-gradient-gold">Ledger</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={400}>
            <div className="flex items-center gap-4 text-muted-foreground/40 font-body text-[10px] tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne"></span>
              </span>
              Data Freshness: 24H Synchronized
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {insights.map((item, i) => (
            <ScrollReveal key={i} delay={400 + i * 100}>
              <div className="relative group p-8 rounded-2xl bg-white/70 dark:bg-card/40 backdrop-blur-sm border border-black/[0.06] dark:border-white/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] border-l-4 border-l-champagne/40 hover:border-l-champagne hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)] transition-all duration-700">
                <div className="absolute top-4 right-4 text-[10px] font-display text-champagne/30">NODE_{i + 1}</div>

                <AnimatedNumber value={item.value} suffix={item.suffix} prefix={item.prefix} />

                <p className="mt-4 font-body text-xs text-charcoal dark:text-foreground font-semibold tracking-[0.2em] uppercase">
                  {item.label}
                </p>
                <p className="mt-2 font-body text-[10px] text-charcoal/50 dark:text-foreground/50 tracking-wider">
                  {item.detail}
                </p>

                {/* Technical Micro-line */}
                <div className="mt-6 w-12 h-px bg-gradient-to-r from-champagne/60 to-transparent group-hover:w-full transition-all duration-1000" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={1200}>
          <div className="mt-32 p-12 bg-white/60 dark:bg-card/40 backdrop-blur-sm rounded-2xl border border-black/[0.06] dark:border-white/5 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-champagne to-champagne/20 rounded-sm" />
            <p className="font-body text-sm md:text-base text-charcoal/75 dark:text-foreground/75 leading-relaxed max-w-4xl italic">
              "The window for establishing a dominant private advisory brand in the UAE is
              <span className="text-champagne font-medium"> 18–24 months </span>
              before saturation. Success requires moving beyond simple mediation toward a
              <span className="text-charcoal dark:text-foreground font-semibold"> structural fiduciary mandate </span>
              that treats real estate as a multi-generational asset class."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InsightsSection;
