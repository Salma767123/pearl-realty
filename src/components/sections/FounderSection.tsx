import ScrollReveal from "@/components/ScrollReveal";
import DoodleLine from "@/components/DoodleLine";

const FounderSection = () => {
  const timeline = [
    { year: "10+ Years", label: "UHNWI Advisory Experience" },
    { year: "Boutique", label: "Exclusive Client Network" },
    { year: "3 Pillars", label: "Real Estate, Wealth, Legacy" },
    { year: "18 Months", label: "Institutional Evolution" },
  ];

  return (
    <section id="founder" className="relative bg-pearl pt-12 pb-12 overflow-hidden scroll-mt-32">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ivory to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <span className="font-body text-xs tracking-[0.4em] uppercase text-gold font-semibold dark:text-champagne/75 dark:font-normal">
            The Founder
          </span>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="mt-8 font-display text-3xl md:text-6xl font-light leading-tight">
            The Person Behind{" "}
            <span className="text-gradient-gold">the Practice</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left - Story */}
          <div>
            <ScrollReveal delay={400}>
              <p className="font-body text-lg text-[#444444] font-medium dark:text-muted-foreground dark:font-normal leading-relaxed">
                Pearl Realty is anchored by the trusted network of our founder, <span className="text-[#111111] font-bold dark:text-foreground">Raghunath Nallamuthu</span>. In elite real estate, these personal relationships are our most powerful asset.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="mt-6 font-body text-base text-[#444444] font-medium dark:text-muted-foreground dark:font-normal leading-relaxed">
                With expertise in ultra-luxury advisory and UHNWI portfolio management, our bespoke team delivers more than transactions—we deliver legacy.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <p className="mt-6 font-body text-base text-[#444444] font-medium dark:text-muted-foreground dark:font-normal leading-relaxed">
                <span className="text-gradient-gold font-bold">Our Evolution:</span> Over the next 18 months, Pearl Realty will transition into a premier institution through rigorous advisor standards and industry leadership.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1000}>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group mt-10 font-body text-xs tracking-[0.25em] uppercase text-gold font-semibold dark:text-champagne/80 dark:font-normal dark:hover:text-champagne transition-colors duration-500 flex items-center gap-4"
              >
                <span className="w-8 h-[1.5px] bg-[#111111] dark:bg-champagne/55 group-hover:w-12 transition-all duration-500" />
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
                    <div className="absolute -left-10 top-1 w-3 h-3 rounded-full border border-black/30 dark:border-champagne/65 bg-black/[0.05] dark:bg-background" />
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-[#222222] font-semibold dark:font-normal dark:text-champagne/80">
                      {item.year}
                    </span>
                    <p className="mt-1 font-display text-lg text-[#444444] font-medium dark:text-foreground dark:font-normal">{item.label}</p>
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
