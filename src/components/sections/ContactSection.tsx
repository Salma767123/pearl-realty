import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative min-h-screen py-32 overflow-hidden bg-ivory dark:bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne/[0.15] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-beige/80 dark:bg-card/20 blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <span className="font-body text-xs tracking-[0.4em] uppercase text-champagne font-semibold">
            Private Access
          </span>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="mt-8 font-display text-4xl md:text-6xl font-light leading-tight text-foreground">
            Enter{" "}
            <span className="text-gradient-gold">the Circle</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-6 font-body text-sm text-muted-foreground max-w-lg">
            Every engagement begins with a private conversation. Share your details below.
            Handled with absolute discretion.
          </p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="mt-16 bg-white/80 dark:bg-card/40 backdrop-blur-sm rounded-2xl p-12 text-center border border-black/[0.06] dark:border-white/5 shadow-[0_4px_40px_-8px_rgba(0,0,0,0.1)]">
              <h3 className="font-display text-2xl text-foreground">Thank you.</h3>
              <p className="mt-4 font-body text-sm text-muted-foreground">
                Your request has been received. We will be in touch within 48 hours.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={600}>
            <form onSubmit={handleSubmit} className="mt-16 bg-white/80 dark:bg-card/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-black/[0.06] dark:border-white/5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-foreground/50 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-champagne outline-none py-3 font-body text-sm text-foreground transition-colors duration-500 placeholder:text-foreground/25"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-foreground/50 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-champagne outline-none py-3 font-body text-sm text-foreground transition-colors duration-500 placeholder:text-foreground/25"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-foreground/50 mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-champagne outline-none py-3 font-body text-sm text-foreground transition-colors duration-500 placeholder:text-foreground/25"
                    placeholder="+971 ..."
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-[0.2em] uppercase text-foreground/50 mb-3">
                    Investment Interest
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-foreground/20 focus:border-champagne outline-none py-3 font-body text-sm text-foreground transition-colors duration-500"
                  >
                    <option value="" className="bg-background">Select range</option>
                    <option value="5-10" className="bg-background">$5M – $10M</option>
                    <option value="10-25" className="bg-background">$10M – $25M</option>
                    <option value="25-50" className="bg-background">$25M – $50M</option>
                    <option value="50+" className="bg-background">$50M+</option>
                  </select>
                </div>
              </div>

              <div className="mt-12 flex flex-col items-center gap-6">
                <MagneticButton>Enter the Circle</MagneticButton>
                <p className="font-body text-[10px] tracking-wider uppercase text-foreground/35">
                  Handled with absolute discretion
                </p>
              </div>
            </form>
          </ScrollReveal>
        )}

        {/* Direct contact */}
        <ScrollReveal delay={800}>
          <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-2">Email</p>
              <p className="font-body text-sm text-foreground/80">advisory@pearlrealty.ae</p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-2">Phone</p>
              <p className="font-body text-sm text-foreground/80">+971 4 XXX XXXX</p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/40 mb-2">Location</p>
              <p className="font-body text-sm text-foreground/80">DIFC, Dubai, UAE</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
