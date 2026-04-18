import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
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
      {/* Background with Cinematic Parallax Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.08] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt="Luxury minimal architecture"
            fill
            priority
            quality={100}
            className={`object-cover transition-opacity duration-1000 ${currentTheme === 'light' ? "opacity-85" : "opacity-40"
              }`}
            sizes="100vw"
          />
        </motion.div>

        {/* Premium Layered Shadow Overlay (Enhanced Contrast) */}
        <div className={`absolute inset-0 transition-all duration-700 ${currentTheme === 'light'
          ? "bg-gradient-to-bottom"
          : "bg-gradient-to-b from-black/40 via-background/70 to-background"
          }`}
          style={currentTheme === 'light' ? {
            background: "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.28) 40%, rgba(0,0,0,0.32) 70%, rgba(0,0,0,0.42) 100%)"
          } : {}}
        />

        {/* Soft Cloud/Moving Shadow Layer */}
        {currentTheme === 'light' && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: [0, 0.15, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 pointer-events-none z-1 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-[120px]"
          />
        )}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      <SkylineDoodle className="bottom-0 left-0 w-full h-32 opacity-25 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Preheader */}
        <div
          className={`transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="font-body text-xs font-bold tracking-[0.5em] uppercase text-gold">
            Private Wealth & Real Estate Advisory · Dubai
          </span>
        </div>

        {/* Brand Heading - Graphite/Dark for Light Theme */}
        <h1
          ref={titleRef}
          className={`mt-10 font-display text-4xl md:text-6xl lg:text-8xl font-semibold leading-[1.1] tracking-tight transition-all duration-1200 delay-700 [text-shadow:0_2px_10px_rgba(255,255,255,0.08)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className={`block ${currentTheme === 'light' ? "text-[#0a0a0a]" : "text-foreground"}`}>
            Build Legacy Where
          </span>
          <span className="block mt-3 pb-2 text-gradient-gold">the World Invests</span>
        </h1>

        {/* Subtitle - Refined Contrast */}
        <p
          className={`mt-10 max-w-2xl mx-auto font-body text-base md:text-xl [text-shadow:0_2px_10px_rgba(255,255,255,0.08)] ${currentTheme === 'light' ? "text-[#1a1a1a]/90 font-medium" : "text-foreground/70"
            } leading-relaxed transition-all duration-1000 delay-[1200ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Trusted strategic guidance across real estate, portfolio growth, investments, assets, and generational wealth planning.
        </p>

        {/* CTA - Premium Luxury Gold Button */}
        <div className={`mt-14 w-full flex justify-center transition-all duration-1000 delay-[1500ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <MagneticButton
            onClick={scrollToContact}
            className="group w-[90%] md:w-full md:max-w-[420px] !h-[62px] flex items-center justify-center font-bold !text-[#111111] hover:!text-[#111111] !border !border-[rgba(255,255,255,0.15)] !bg-[linear-gradient(135deg,#C7A56A,#D8B97F)] rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(199,165,106,0.3)] !px-0 !py-0"
          >
            {/* Shimmer overlay element */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:animate-[shimmer-sweep_1.5s_ease-in-out] z-0" />
            <span className="relative z-10 flex items-center justify-center w-full h-full text-[12px] tracking-[0.4em]">REQUEST CONSULTATION</span>
          </MagneticButton>
        </div>
      </div>

      <style jsx global>{`
        @keyframes subtle-drift {
          0% { transform: translateX(-10%); opacity: 0; }
          50% { opacity: 0.1; }
          100% { transform: translateX(10%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
