"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import FounderSection from "@/components/sections/FounderSection";
import OpportunitySection from "@/components/sections/OpportunitySection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import InsightsSection from "@/components/sections/InsightsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/Navbar";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Index = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Only register on client
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Refresh GSAP after a short delay to ensure all DOM elements are sized correctly
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      lenis.destroy();
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Vertical doodle guide line */}
      <div className="fixed left-6 top-0 bottom-0 w-px z-40 pointer-events-none hidden lg:block">
        <div className="h-full bg-gradient-to-b from-transparent via-champagne/10 to-transparent" />
      </div>

      <HeroSection />
      <IntroductionSection />

      <ManifestoSection />
      <FounderSection />

      <div className="relative h-16">
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-champagne/10 to-transparent" />
      </div>

      <OpportunitySection />
      <ServicesSection />
      <ClientsSection />

      <div className="relative h-32">
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-champagne/10 to-transparent" />
      </div>

      <InsightsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default Index;
