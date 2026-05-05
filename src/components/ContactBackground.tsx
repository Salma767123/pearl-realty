"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ContactBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Base Pearl/Ivory/Champagne Background */}
      <div className="absolute inset-0 bg-[#F8F4EC]" />

      {/* Texture Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

      {/* Mouse Reactive Glow */}
      <motion.div
        style={{ x: sx, y: sy }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,#C7A56A1a_0%,transparent_70%)] blur-[80px]"
      />

      {/* Architectural Blueprint Patterns (SVG) */}
      {/* <motion.div 
        style={{ y: y1, rotate: 5 }}
        className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] opacity-[0.03]"
      >
        <svg viewBox="0 0 400 400" fill="none" stroke="#111111" strokeWidth="0.5">
          <path d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400 M0 300 H400 M0 350 H400" />
          <path d="M50 0 V400 M100 0 V400 M150 0 V400 M200 0 V400 M250 0 V400 M300 0 V400 M350 0 V400" />
          <circle cx="200" cy="200" r="150" strokeDasharray="10 5" />
          <path d="M50 50 L350 350 M350 50 L50 350" strokeDasharray="5 5" />
        </svg>
      </motion.div> */}

      {/* Moving Contour Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
        <motion.path
          d="M0,100 Q400,50 800,200 T1600,100"
          stroke="#C7A56A"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ y: y1 }}
        />
        <motion.path
          d="M0,400 Q600,350 1200,500 T1800,400"
          stroke="#9E7A43"
          strokeWidth="1"
          fill="none"
          style={{ y: y2 }}
        />
      </svg>

      {/* Wealth Graph Line Animations */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[15%] left-[10%] w-[30%] h-[20%] opacity-[0.05]"
      >
        <svg viewBox="0 0 200 100" fill="none" stroke="#C7A56A" strokeWidth="1">
          <motion.path
            d="M0,80 L20,70 L40,75 L60,50 L80,55 L100,30 L120,35 L140,10 L160,15 L180,0"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <path d="M0,100 V0" strokeDasharray="2 2" />
          <path d="M0,100 H200" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      {/* Soft Golden Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: ["-10%", "110%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 w-64 h-[200%] bg-gradient-to-r from-transparent via-[#C7A56A]/10 to-transparent rotate-12"
        />
      </div>

      {/* Floating Particles - Client Side Only to avoid Hydration Error */}
      {isMounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -50 + "%"],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-[#C7A56A] rounded-full blur-[1px]"
        />
      ))}

      {/* Real Estate Doodle Sketches (Subtle) */}
      <motion.div
        style={{ y: y1, rotate: -5 }}
        className="absolute bottom-[5%] right-[5%] w-32 h-32 opacity-[0.05]"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="1">
          <path d="M20,80 L20,40 L50,20 L80,40 L80,80 Z" />
          <path d="M35,80 L35,60 L45,60 L45,80" />
          <path d="M20,40 L80,40" />
        </svg>
      </motion.div>
    </div>
  );
};

export default ContactBackground;
