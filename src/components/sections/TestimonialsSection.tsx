import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    id: 1,
    quote: "In a market full of noise, <span class='text-champagne font-medium'>Pearl Realty</span> operates with the precision and discretion that families like ours require. Truly exceptional service.",
    name: "Ahmed Al-Mansour",
    marker: "GCC · Family Office Principal",
    image: "/testimonials/testimonial_portrait_1_1776245991911.png",
    yOffset: -20,
  },
  {
    id: 2,
    quote: "They helped me understand how Dubai fits into my family's <span class='text-champagne font-medium'>30-year wealth strategy</span>. The level of professionalism is unmatched globally.",
    name: "Sarah Richardson",
    marker: "London · Tech Founder",
    image: "/testimonials/testimonial_portrait_2_1776246034451.png",
    yOffset: 20,
  },
  {
    id: 3,
    quote: "The strategic depth and <span class='text-champagne font-medium'>absolute discretion</span> in securing our landmark asset was perfect. Pearl Heritage is the gold standard.",
    name: "Sir Robert Sterling",
    marker: "Singapore · Ultra-Prime Investor",
    image: "/testimonials/testimonial_portrait_3_1776246156636.png",
    yOffset: -10,
  },
  {
    id: 4,
    quote: "Raghunath's approach is more akin to <span class='text-champagne font-medium'>institutional asset management</span> than simple sales. Highly recommended for serious investors.",
    name: "Kenji Tanaka",
    marker: "Tokyo · Real Estate Fund Manager",
    image: "/testimonials/testimonial_portrait_4_1776248350623.png",
    yOffset: 25,
  },
  {
    id: 5,
    quote: "Trust is hard to earn in this industry, but Pearl Realty secured it instantly through <span class='text-champagne font-medium'>impeccable curation</span> and silence.",
    name: "Catherine de Rossi",
    marker: "Geneva · Private Banking Specialist",
    image: "/testimonials/testimonial_portrait_5_1776248400745.png",
    yOffset: -15,
  },
];

const TestimonialsSection = () => {
  const [activeId, setActiveId] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTestimonial = testimonials.find((t) => t.id === activeId) || testimonials[2];

  const handleNext = useCallback(() => {
    setActiveId((prev) => (prev === testimonials.length ? 1 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveId((prev) => (prev === 1 ? testimonials.length : prev - 1));
  }, []);

  // Continuous Autoplay: Never pauses, keeps cycling indefinitely
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section
      id="insights"
      ref={containerRef}
      className="relative w-full overflow-hidden pt-24 pb-32 bg-background"
    >
      {/* Dynamic Background Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-ivory to-background opacity-60 dark:opacity-30 pointer-events-none" />

      {/* Abstract Animated Grid Background (Preserved as requested) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div
          className="absolute inset-[-100%] w-[300%] h-[300%] animate-grid-panning"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--champagne)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--champagne)) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Header Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <span className="font-body text-xs tracking-[0.5em] uppercase text-champagne/90 font-semibold">
              The Architecture of Trust
            </span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h2 className="mt-8 font-display text-4xl md:text-5xl font-light leading-tight text-foreground">
              Testimonials of <br />
              <span className="text-gradient-gold">Private Discretion.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Interactive Circular Orbit Container */}
        <div className="relative h-64 md:h-80 flex items-center justify-center mb-20 overflow-visible">
          {/* Animated Doodle Vector Path (Fixed Background) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" preserveAspectRatio="none" viewBox="0 0 1000 200">
            {/* <motion.path
              d="M 0 100 Q 250 50, 500 100 T 1000 100"
              stroke="hsl(var(--champagne))"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            /> */}
          </svg>

          {/* Orbiting Portraits Stage */}
          <div className="relative w-full h-full flex items-center justify-center">
            {testimonials.map((t, i) => {
              const isActive = t.id === activeId;

              // Circular Math: 360 / 5 = 72 degrees per item
              // We want activeId to be at the bottom forefront (90 degrees)
              const baseAngle = 72 * (i);
              const rotationShift = 72 * (activeId - 1);
              const angleInDegrees = (baseAngle - rotationShift) + 90;
              const angleInRadians = (angleInDegrees * Math.PI) / 180;

              // Elliptical Radius
              const radiusX = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 380;
              const radiusY = typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 80;

              const x = Math.cos(angleInRadians) * radiusX;
              const y = Math.sin(angleInRadians) * radiusY;

              // Depth calculations based on Sine (Y-position)
              // sin(theta) ranges from -1 (top/back) to 1 (bottom/front)
              const depthFactor = (Math.sin(angleInRadians) + 1) / 2; // 0 to 1

              return (
                <motion.div
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className="absolute cursor-pointer shrink-0"
                  initial={false}
                  animate={{
                    x: x,
                    y: y,
                    scale: 0.5 + (depthFactor * 0.8), // Scale from 0.5 to 1.3
                    opacity: 0.25 + (depthFactor * 0.75), // Opacity from 0.25 to 1
                    zIndex: Math.round(depthFactor * 100), // higher z-index in front
                  }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                >
                  {/* Profile Image Circle */}
                  <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 transition-all duration-700 ${isActive ? "border-champagne shadow-[0_0_30px_-5px_rgba(199,165,106,0.4)]" : "border-foreground/10 opacity-80"}`}>
                    <img
                      src={t.image}
                      alt={t.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${isActive ? "grayscale-0 blur-0 scale-110" : "grayscale blur-[1px] scale-100"}`}
                    />
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 border border-champagne rounded-full"
                        animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Subtle highlight ring for items in front */}
                  {!isActive && depthFactor > 0.7 && (
                    <div className="absolute inset-0 rounded-full bg-champagne/10 blur-xl -z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Floating Dot Particles (Fixed Background) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-champagne/30 rounded-full"
                style={{
                  left: `${15 + i * 8}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Active Testimonial Quote Display */}
        <div className="max-w-3xl mx-auto relative min-h-[220px]">
          <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 -mx-10 md:-mx-20 z-30">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-foreground/20 text-foreground/55 hover:text-champagne hover:border-champagne transition-all duration-300 bg-background/60 backdrop-blur-md shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-foreground/20 text-foreground/55 hover:text-champagne hover:border-champagne transition-all duration-300 bg-background/60 backdrop-blur-md shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <blockquote
                className="font-body text-xl md:text-2xl text-foreground/85 leading-relaxed italic mb-8 max-w-2xl"
                dangerouslySetInnerHTML={{ __html: `"${activeTestimonial.quote}"` }}
              />
              <div className="flex flex-col items-center">
                <p className="font-body text-base font-semibold text-foreground tracking-wide leading-none">{activeTestimonial.name}</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-8 h-px bg-champagne/75" />
                  <p className="font-body text-[11px] text-foreground/65 uppercase tracking-[0.3em] font-medium leading-none">
                    {activeTestimonial.marker}
                  </p>
                  <div className="w-8 h-px bg-champagne/75" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        @keyframes grid-panning {
          0% { transform: translate(0, 0) rotate(5deg); }
          100% { transform: translate(-100px, -100px) rotate(5deg); }
        }
        .animate-grid-panning {
          animation: grid-panning 20s linear infinite;
        }
        #insights img { pointer-events: none; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
