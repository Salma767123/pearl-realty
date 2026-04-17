"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

// --- Sub-Component: Magnetic Button ---
const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative group px-10 py-5 rounded-full font-body text-xs tracking-[0.4em] uppercase overflow-hidden border border-champagne/30 text-background bg-champagne hover:bg-transparent hover:text-champagne transition-colors duration-500 ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-background translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </motion.button>
  );
};

// --- Sub-Component: Counter ---
const DynamicCounter = ({ value, prefix = "", suffix = "", delay = 0 }: { value: number; prefix?: string; suffix?: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: value,
            duration: 2.5,
            delay,
            ease: "power2.out",
            onUpdate: function () {
              setCount(Math.floor(this.targets()[0].val));
            }
          });
        }
      });
    });
    return () => ctx.revert();
  }, [value, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const IntroductionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<SVGSVGElement>(null);

  // --- Mouse Tilt Effect ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = sectionRef.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 };
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x * 20); // Tilt amount
    mouseY.set(y * -20);
  };

  // --- Parallax Values ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const skylineX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const mapOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -100]);

  // --- Client-side random values to prevent hydration mismatch ---
  const [particles, setParticles] = useState<{ width: number; height: number; left: string; top: string; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] bg-ivory dark:bg-background py-10 overflow-hidden flex flex-col items-center"
      style={{ perspective: "1200px" }}
    >
      {/* 1. LAYERED BACKGROUND: Deep space & Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(200,160,80,0.1)_0%,transparent_70%)] opacity-80" />

        {/* Abstract Grid / Rotating Lines */}
        <div className="absolute inset-x-0 top-0 h-full opacity-[0.03] rotate-[15deg] scale-150">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #C19B6C 1px, transparent 1px), linear-gradient(to bottom, #C19B6C 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        {/* Soft Particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-champagne/20 blur-[1px]"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 2. MIDGROUND LAYER: Dubai Skyline & Wealth Map (Parallaxed) */}
      {/* <motion.div
        style={{ rotateX: springY, rotateY: springX, x: skylineX }}
        className="absolute inset-0 z-10 pointer-events-none flex items-end justify-start opacity-30"
      >
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-auto max-h-[60vh] fill-none stroke-champagne/60 stroke-[0.5]"
          preserveAspectRatio="none"
        >
          Abstract Dubai Skyline Outline
          <path d="M0 600 L100 600 L100 550 L120 540 L140 560 L140 600 L200 600 L200 400 L210 380 L220 400 L220 600 L300 600 L300 200 L320 0 L340 200 L340 600 L450 600 L450 350 L470 340 L490 350 L490 600 L600 600 L600 150 L615 130 L630 150 L630 600 L750 600 L750 450 L770 430 L790 450 L790 600 L950 600 L950 300 L970 280 L990 300 L990 600 L1200 600" />
        </svg>
      </motion.div> */}

      {/* Wealth Flow Map (Abstract) */}
      <motion.div
        style={{ opacity: mapOpacity, scale: 1.1 }}
        className="absolute inset-0 z-5 pointer-events-none flex items-center justify-center pt-20"
      >
        <svg viewBox="0 0 800 400" className="w-[80%] h-auto max-w-6xl stroke-champagne/30 stroke-[0.5] fill-none opacity-40">
          {/* Abstract World Circles */}
          <circle cx="150" cy="150" r="4" fill="currentColor" className="text-champagne/60" />
          <circle cx="300" cy="100" r="3" fill="currentColor" className="text-champagne/60" />
          <circle cx="650" cy="180" r="10" fill="currentColor" className="text-champagne/80" /> {/* Dubai */}

          {/* Flow Lines */}
          <motion.path
            d="M150 150 Q400 50 650 180"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3, delay: 0.5 }}
            strokeDasharray="5 5"
          />
          <motion.path
            d="M300 100 Q450 120 650 180"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, delay: 1 }}
            strokeDasharray="5 5"
          />
          <motion.path
            d="M100 250 Q300 350 650 180"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3.5, delay: 1.5 }}
            strokeDasharray="5 5"
          />
        </svg>
      </motion.div>

      {/* 3. FOREGROUND LAYER: Content & Dynamic Stats */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col justify-start items-center pt-24 md:pt-12 pb-20">

        <motion.div
          style={{ rotateX: springY, rotateY: springX, y: textY }}
          className="text-center max-w-5xl"
        >
          <ScrollReveal>
            <h2 className="font-display text-xs tracking-[0.6em] uppercase text-champagne mb-4 block">
              Where Discretion Meets Legacy
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-foreground">
              A quiet but powerful shift is<br />
              <span className="text-gradient-gold">reshaping global wealth</span>
            </h1>
          </ScrollReveal>

          {/* Floating Data Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">

            <motion.div
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/[0.05] dark:border-white/5 shadow-sm backdrop-blur-sm group"
            >
              <div className="text-4xl lg:text-5xl font-display text-champagne mb-4">
                <DynamicCounter value={4.2} prefix="$" suffix="T" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal/70 leading-relaxed">
                UHNWI Capital Migration <br />
                <span className="text-champagne/80">BCG Global Wealth Report 2025</span>
              </p>
              {/* Animated growth line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-champagne/30"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/[0.05] dark:border-white/5 shadow-sm backdrop-blur-sm group"
            >
              <div className="text-4xl lg:text-5xl font-display text-champagne mb-4">
                <DynamicCounter value={750} suffix="+" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal/70 leading-relaxed">
                Family Offices Registered <br />
                <span className="text-champagne/80">Dubai International Financial Centre</span>
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-champagne/30"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/[0.05] dark:border-white/5 shadow-sm backdrop-blur-sm group"
            >
              <div className="text-4xl lg:text-5xl font-display text-champagne mb-4">
                <DynamicCounter value={528} prefix="AED " suffix="B" />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal/70 leading-relaxed">
                Transaction Volume (2023) <br />
                <span className="text-champagne/80">Dubai Land Department</span>
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-champagne/30"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* 4. TRANSITION CONTENT LAYER */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 mt-10 text-center lg:text-left">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <p className="font-body text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
                At the center of this movement, <span className="text-champagne font-medium">Dubai</span> has emerged as the world’s leading destination — ranked #1 for four consecutive years.
              </p>
              <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Yet behind the momentum lies a fragmented advisory landscape, transactional in nature and lacking true trust. For those building generational legacy, guidance is no longer optional — it is essential.
              </p>
            </div>
            <div className="lg:w-1/3 pt-4">
              <div className="font-display text-sm tracking-widest text-champagne mb-4 uppercase">The Advisory Gap</div>
              <p className="text-xs text-muted-foreground leading-loose uppercase tracking-[0.2em]">
                No dominant, UHNWI-dedicated private real estate advisory brand exists in this market. PEARL REALTY fills this gap.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex justify-center">
          <ScrollReveal delay={600}>
            <MagneticButton className="mx-auto">
              Discover the Opportunity
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>

      {/* Aesthetic Doodle (Bottom Right) */}
      <svg className="absolute bottom-10 right-10 w-48 h-48 opacity-[0.05] pointer-events-none" viewBox="0 0 200 200">
        <motion.path
          d="M20 20 Q100 0 180 180"
          stroke="currentColor"
          className="text-champagne"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <path d="M170 160 L180 180 L160 175" stroke="currentColor" className="text-champagne" fill="none" />
      </svg>

    </section>
  );
};

export default IntroductionSection;
