import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import businessmanImg from "@/assets/businessman.png";

const philosophyPoints = [
  {
    label: "Philosophy",
    title: "We don't list properties. We curate legacies.",
    description:
      "Every recommendation is evaluated across a 30-year time horizon — not a 30-day one.",
  },
  {
    label: "Strategy",
    title: "Precision over volume. Always.",
    description:
      "A maximum of 35 active mandates ensures every client receives undivided strategic counsel.",
  },
  {
    label: "Wealth",
    title: "Your asset is an extension of your identity.",
    description:
      "We align real estate with wealth preservation, family legacy, and generational planning.",
  },
  {
    label: "Legacy",
    title: "Success fee. Zero conflicts.",
    description:
      "Our 1.5–2% structure means we earn only when you transact — and only when you're satisfied the asset represents genuine value.",
  },
];

/* Animated doodle connector line */
const ConnectorSVG = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition =
            "stroke-dashoffset 3s cubic-bezier(0.16, 1, 0.3, 1)";
          path.style.strokeDashoffset = "0";
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(path);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      className="absolute left-6 top-0 h-full w-px pointer-events-none hidden md:block"
      viewBox="0 0 2 400"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        ref={pathRef}
        d="M1,0 C1,50 1,100 1,150 C1,200 1,250 1,300 C1,350 1,380 1,400"
        className="stroke-black/20 dark:stroke-[hsl(40,55%,48%)]"
        strokeWidth="1.2"
      />
    </svg>
  );
};

/* Animated background doodle elements */
const BackgroundDoodles = () => {
  const refs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((path, i) => {
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            path.style.transition = `stroke-dashoffset ${2 + i * 0.5}s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.3}s`;
            path.style.strokeDashoffset = "0";
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(path);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Growth arrow */}
      {/* <svg className="absolute top-[15%] left-[8%] w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none">
        <path
          ref={(el) => { refs.current[0] = el; }}
          d="M10,80 C30,75 40,60 50,45 C60,30 70,20 90,10"
          stroke="hsl(40, 50%, 60%)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          ref={(el) => { refs.current[1] = el; }}
          d="M78,8 L90,10 L86,22"
          stroke="hsl(40, 50%, 60%)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}

      {/* Abstract building outline */}
      <svg className="absolute bottom-[10%] right-[5%] w-40 h-48 opacity-15" viewBox="0 0 120 160" fill="none">
        <path
          ref={(el) => { refs.current[2] = el; }}
          d="M20,160 L20,80 L40,80 L40,60 L60,60 L60,40 L80,40 L80,60 L100,60 L100,160"
          stroke="hsl(40, 50%, 60%)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      {/* Bar chart doodle */}
      <svg className="absolute top-[60%] left-[4%] w-24 h-20 opacity-15" viewBox="0 0 80 60" fill="none">
        <path ref={(el) => { refs.current[3] = el; }} d="M10,60 L10,40" stroke="hsl(40, 50%, 60%)" strokeWidth="4" strokeLinecap="round" />
        <path ref={(el) => { refs.current[4] = el; }} d="M25,60 L25,30" stroke="hsl(40, 50%, 60%)" strokeWidth="4" strokeLinecap="round" />
        <path ref={(el) => { refs.current[5] = el; }} d="M40,60 L40,20" stroke="hsl(40, 50%, 60%)" strokeWidth="4" strokeLinecap="round" />
        <path ref={(el) => { refs.current[6] = el; }} d="M55,60 L55,10" stroke="hsl(43, 80%, 55%)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
};

/* Letter-by-letter heading reveal */
const LetterReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isGradient = className?.includes("text-gradient-gold");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${delay + i * 40}ms`,
            /* Fix: Ensure gradient and glow are inherited/rendered on individual characters */
            background: isGradient ? "inherit" : undefined,
            WebkitBackgroundClip: isGradient ? "text" : undefined,
            backgroundClip: isGradient ? "text" : undefined,
            filter: isGradient ? "drop-shadow(0 0 15px hsla(38, 55%, 47%, 0.4))" : undefined
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

/* Philosophy point with staggered reveal */
const PhilosophyPoint = ({
  point,
  index,
}: {
  point: (typeof philosophyPoints)[0];
  index: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 200);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="relative pl-10 md:pl-14 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      {/* Node dot */}
      <div
        className={`absolute left-4 md:left-5 top-1.5 w-3 h-3 rounded-full border transition-all duration-700 ${visible ? "border-black/30 bg-black/[0.05] shadow-[0_0_12px_rgba(0,0,0,0.05)] dark:border-[hsl(40,55%,45%)] dark:bg-[hsl(40,55%,45%,0.18)] dark:shadow-[0_0_12px_hsla(40,55%,45%,0.4)]" : "border-black/15 bg-transparent dark:border-[hsl(0,0%,68%)]"}`}
      />

      {/* Label chip */}
      <span className="font-body text-[10px] tracking-[0.35em] uppercase text-[#222222] font-semibold dark:text-champagne/75 dark:font-normal">
        {point.label}
      </span>

      <h4 className="mt-2 font-display text-lg md:text-xl font-medium text-gold leading-snug">
        {point.title}
      </h4>

      <p className="mt-2 font-body text-sm text-[#444444] font-medium dark:text-muted-foreground dark:font-normal leading-relaxed max-w-md">
        {point.description}
      </p>
    </div>
  );
};

const ManifestoSection = () => {
  const [imageVisible, setImageVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImageVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative flex items-center py-12 md:py-16 overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-beige via-ivory to-background opacity-80"
          style={{ transform: `translateY(${scrollY * 15}px)` }}
        />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-champagne-glow/[0.1] blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/[0.1] blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        {/* Moving light streak */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, hsl(40, 50%, 60%) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
            animation: "shimmer 8s ease-in-out infinite",
          }}
        />
      </div>

      <BackgroundDoodles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-12 gap-8 md:gap-8 items-center">
          {/* LEFT — Content (7 cols) */}
          <div className="md:col-span-7 relative">
            {/* Section label */}
            <div className="mb-2">
              <span className="font-body text-[10px] tracking-[0.5em] uppercase text-[#222222] font-semibold dark:text-champagne/70 dark:font-normal">
                Our Philosophy
              </span>
            </div>

            {/* Heading with letter reveal */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-light leading-[1.1] tracking-tight">
              <LetterReveal text="Not a Broker." className="inline-block text-foreground mr-4" />
              <LetterReveal
                text="A Counsel."
                className="inline-block text-gradient-gold"
                delay={800}
              />
            </h2>

            {/* Subheading */}
            <div className="mt-2 max-w-lg">
              <p className="font-body text-base md:text-lg text-[#444444] font-medium dark:text-muted-foreground dark:font-normal leading-relaxed">
                Where every engagement is built on trust, every decision on insight,
                and every outcome on lasting value.
              </p>
            </div>

            {/* Philosophy points with connector */}
            <div className="mt-14 relative space-y-8">
              <ConnectorSVG />
              {philosophyPoints.map((point, i) => (
                <PhilosophyPoint key={i} point={point} index={i} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 pl-10 md:pl-14">
              <button
                onClick={() =>
                  document
                    .getElementById("founder")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group font-body text-xs tracking-[0.25em] uppercase text-[#111111] font-semibold dark:text-champagne/80 dark:hover:text-champagne transition-colors duration-500 flex items-center gap-4"
              >
                <span className="w-8 h-[1.5px] bg-[#111111] dark:bg-champagne/55 group-hover:w-12 transition-all duration-500" />
                Understand the Difference
              </button>
            </div>
          </div>

          {/* RIGHT — Businessman image (5 cols) */}
          <div className="md:col-span-5 relative flex justify-end self-end -mb-12 md:-mb-16" ref={imageRef}>
            {/* Glow behind image */}
            <div
              className="absolute bottom-10 right-10 w-[80%] h-[80%] rounded-full blur-[80px] transition-opacity duration-1000"
              style={{
                background: "radial-gradient(circle, hsl(40, 50%, 60%, 0.12), transparent 70%)",
                opacity: imageVisible ? 1 : 0,
              }}
            />

            {/* Image container */}
            <div
              className="relative w-full transition-all duration-1000 ease-out"
              style={{
                opacity: imageVisible ? 1 : 0,
                transform: `translateX(0) scale(${imageVisible ? 1 : 0.95})`,
                transformOrigin: "bottom right",
              }}
            >
              <div
                className="relative w-full max-w-none lg:-ml-12 h-[500px] md:h-[750px] lg:h-[900px] mx-auto md:mr-0 origin-bottom-right"
                style={{ filter: "drop-shadow(0 0 50px hsl(40, 50%, 60%, 0.15))" }}
              >
                <Image
                  src={businessmanImg}
                  alt="Pearl Realty — Premium Advisory"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom md:object-right-bottom"
                />
              </div>

              {/* Floating label */}
              {/* <div
                className="absolute -left-6 bottom-[20%] glass-panel rounded-sm px-4 py-2 transition-all duration-700 delay-500"
                style={{
                  opacity: imageVisible ? 1 : 0,
                  transform: imageVisible ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-champagne/70">
                  Invitation Only
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
