import ScrollReveal from "@/components/ScrollReveal";
import DoodleLine from "@/components/DoodleLine";

const FounderSection = () => {
  const timeline = [
    { year: "10+ Years", label: "Private Wealth & UHNWI Advisory" },
    { year: "Global", label: "London · Mumbai · Singapore · GCC" },
    { year: "RERA", label: "Certified Real Estate Broker, Dubai" },
    { year: "DIFC", label: "Dubai Chamber of Commerce Member" },
  ];

  return (
    <section id="founder" className="relative bg-pearl pt-12 pb-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ivory to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <span className="font-body text-xs tracking-[0.4em] uppercase text-champagne/50">
            The Founder
          </span>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="mt-8 font-display text-4xl md:text-6xl font-light leading-tight">
            The Person Behind{" "}
            <span className="text-gradient-gold">the Practice</span>
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid md:grid-cols-2 gap-16">
          {/* Left - Story */}
          <div>
            <ScrollReveal delay={400}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Investors and clients are not engaging Pearl Realty — they are engaging{" "}
                <span className="text-foreground font-medium">Raghunath Nallamuthu</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="mt-6 font-body text-base text-muted-foreground leading-relaxed">
                A career-long UHNWI relationship specialist with over a decade of experience
                across private wealth, luxury real estate advisory, and family office mandates.
                Operating at the intersection of ultra-prime real estate, family wealth strategy,
                and AI-augmented client service.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <p className="mt-6 font-body text-base text-muted-foreground leading-relaxed">
                The firm operates on three non-negotiables: <span className="text-champagne">exclusivity</span> — all engagements by invitation only;{" "}
                <span className="text-champagne">discretion</span> — no transaction is ever announced;{" "}
                <span className="text-champagne">precision</span> — a maximum of 35 active client mandates to preserve advisory quality.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1000}>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-10 font-body text-xs tracking-[0.2em] uppercase text-champagne/60 hover:text-champagne transition-colors duration-500 flex items-center gap-3"
              >
                <span className="w-8 h-px bg-champagne/40" />
                Work Directly With Me
              </button>
            </ScrollReveal>
          </div>

          {/* Right - Timeline */}
          <div className="relative">
            <DoodleLine className="absolute left-0 top-0 h-full w-2" direction="vertical" />

            <div className="pl-10 space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} delay={400 + i * 200}>
                  <div className="relative">
                    <div className="absolute -left-10 top-1 w-3 h-3 rounded-full border border-champagne/40 bg-background" />
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-champagne/60">
                      {item.year}
                    </span>
                    <p className="mt-1 font-display text-lg text-foreground">{item.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
