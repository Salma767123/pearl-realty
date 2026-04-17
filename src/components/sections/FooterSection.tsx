"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const FooterSection = () => {
  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden" style={{ background: "linear-gradient(180deg, #14140F 0%, #0E0E0B 100%)" }}>
      {/* Cinematic Background Branding */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
        <h2 className="font-display text-[25vw] leading-none select-none uppercase tracking-tighter" style={{ color: "rgba(199,165,106,0.04)" }}>
          Pearl
        </h2>
      </div>
      {/* Subtle gold glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand Identity */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block transform -translate-x-4">
              <Image
                src={logo}
                alt="Pearl Realty"
                width={200}
                height={60}
                className="h-16 w-auto object-contain opacity-80"
              />
            </Link>
            <p className="mt-8 font-body text-sm text-white/40 leading-relaxed max-w-sm">
              Strategic Real Estate Advisory & Private Wealth Positioning. 
              Headquartered in the Dubai International Financial Centre (DIFC).
            </p>
            <div className="mt-8 flex items-center gap-6">
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-champagne/80">Discretion · Integrity · Legacy</span>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* Navigation Mandate */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs tracking-[0.4em] uppercase text-white/30 mb-8 underline underline-offset-8 decoration-champagne/30">The Mandate</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Private Advisory", id: "founder" },
                { label: "Value Pillars", id: "services" },
                { label: "Market Intelligence", id: "insights" },
                { label: "Client Portfolio", id: "clients" },
                { label: "Contact Mandate", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-body text-sm text-white/50 hover:text-champagne transition-all duration-500 text-left group flex items-center gap-2"
                >
                  <span className="w-0 h-px bg-champagne group-hover:w-4 transition-all duration-500" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Institutional Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs tracking-[0.4em] uppercase text-white/30 mb-8 underline underline-offset-8 decoration-champagne/30">Global Reach</h4>
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs text-white/30 uppercase tracking-widest mb-2">Secure Correspondence</p>
                <p className="font-display text-lg text-champagne/90">advisory@pearlrealty.ae</p>
              </div>
              <div>
                <p className="font-body text-xs text-white/30 uppercase tracking-widest mb-2">Hub Operations</p>
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  Gate Avenue, DIFC<br />
                  Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Compliance Bar */}
        <div className="pt-12 border-t border-champagne/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <p className="font-body text-[10px] tracking-widest text-white/25 uppercase italic">
              Strictly Private & Confidential
            </p>
            <p className="font-body text-[10px] tracking-widest text-white/25 uppercase">
              Authorised Access Only
            </p>
          </div>
          <p className="font-body text-[10px] tracking-widest text-white/25">
            © 2026 Pearl Realty Group · Integrated Advisory
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
