import ScrollReveal from "@/components/ScrollReveal";

const segments = [
  {
    title: "Global Tech Founders & Billionaires",
    detail: "US, UK, India, Europe-based · $10M–$500M+ net worth · Age 35–60",
    need: "Tax optimisation, physical relocation optionality, portfolio diversification into tangible assets, Golden Visa for global mobility.",
  },
  {
    title: "Family Office Principals & Heirs",
    detail: "Multi-generational families · $50M–$1B+ total assets",
    need: "Succession-proof ownership structures, yield generation alongside capital appreciation, heir-friendly asset selection.",
  },
  {
    title: "GCC Royals & Elite Families",
    detail: "Saudi, Kuwaiti, Qatari, Bahraini, Omani elite",
    need: "Privacy — zero public listings is non-negotiable. Branded residences. Emirati developer relationships at the senior level.",
  },
  {
    title: "Private Bankers & Wealth Advisors",
    detail: "The gatekeepers · Credit Suisse, Julius Baer, HSBC Private Bank",
    need: "A single strong relationship manager can introduce 5–15 qualifying clients per year. Building 20+ such relationships is the highest-leverage activity.",
  },
];

const ClientsSection = () => {
  return (
    <section id="clients" className="relative pt-14 pb-2 overflow-hidden bg-background font-body">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-champagne/10 blur-[150px]" />

      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <span className="font-body text-xs tracking-[0.4em] uppercase text-champagne/90 font-semibold text-center block mb-2">
            Clientele
          </span>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="mt-8 font-display text-4xl md:text-6xl font-light leading-tight text-foreground text-center">
            Who We{" "}
            <span className="text-gradient-gold">Serve</span>
          </h2>
        </ScrollReveal>

        <div className="mt-20 space-y-0">
          {segments.map((seg, i) => (
            <ScrollReveal key={i} delay={400 + i * 150}>
              <div className="group py-10 border-b border-border/35 hover:border-champagne/30 transition-colors duration-700">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="font-body text-xs text-champagne/70 tracking-wider font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-champagne transition-colors duration-500">
                        {seg.title}
                      </h3>
                    </div>
                    <p className="mt-2 ml-10 font-body text-xs tracking-wider text-muted-foreground/80 uppercase font-medium">
                      {seg.detail}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-champagne/45 group-hover:text-champagne/80 transition-all duration-500 group-hover:translate-x-1 mt-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path d="M5,10 L15,10 M10,5 L15,10 L10,15" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <p className="mt-4 ml-10 font-body text-sm text-muted-foreground leading-relaxed max-w-xl opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700 overflow-hidden">
                  {seg.need}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* <ScrollReveal delay={1000}>
          <div className="mt-16 text-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-body text-xs tracking-[0.2em] uppercase text-champagne/60 hover:text-champagne transition-colors duration-500 flex items-center gap-2 mx-auto"
            >
              <span className="w-8 h-px bg-champagne/40" />
              See If You Qualify
            </button>
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default ClientsSection;
