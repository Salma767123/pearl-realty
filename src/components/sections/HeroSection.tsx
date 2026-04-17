import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import heroLight from "@/assets/hero-uae-light.png";
import heroDark from "@/assets/hero-skyline.jpg";
import SkylineDoodle from "@/components/SkylineDoodle";
import MagneticButton from "@/components/MagneticButton";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
    setTimeout(() => setLoaded(true), 300);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark';
  const heroImage = currentTheme === 'light' ? heroLight : heroDark;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Luxury minimal architecture"
          fill
          priority
          quality={100}
          className="object-cover transition-opacity duration-1000 opacity-60 dark:opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pearl/20 via-background/60 to-background dark:from-black/40 dark:via-background/70 dark:to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Skyline Doodle */}
      <SkylineDoodle className="bottom-0 left-0 w-full h-32 opacity-25" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Preheader */}
        <div
          className={`transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-gold">
            Private Wealth & Real Estate Advisory · Dubai
          </span>
        </div>

        {/* Brand */}
        <h1
          ref={titleRef}
          className={`mt-8 font-display text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight transition-all duration-1200 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="block text-foreground">Build Legacy Where</span>
          <span className="block mt-2 pb-2 text-gradient-gold">the World Invests</span>
        </h1>



        {/* Subtitle */}
        <p
          className={`mt-8 max-w-2xl mx-auto font-body text-base md:text-lg text-charcoal/80 dark:text-foreground/70 leading-relaxed transition-all duration-1000 delay-[1200ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Trusted strategic guidance across real estate, portfolio growth, investments, assets, and generational wealth planning.
        </p>

        {/* CTA */}
        <div className={`mt-12 transition-all duration-1000 delay-[1500ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <MagneticButton onClick={scrollToContact} className="px-2 py-2 text-[11px] tracking-wider">
            Request Consultation
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[2000ms] ${loaded ? "opacity-60" : "opacity-0"}`}>
        <div className="w-px h-16 bg-gradient-to-b from-champagne/40 to-transparent mx-auto" />
        <span className="block mt-2 font-body text-[10px] tracking-[0.3em] uppercase text-champagne/40">Scroll</span>
      </div> */}
    </section>
  );
};

export default HeroSection;
