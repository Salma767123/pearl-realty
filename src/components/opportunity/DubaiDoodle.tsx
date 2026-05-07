"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface DubaiDoodleProps {
  className?: string;
}

export default function DubaiDoodle({ className = "" }: DubaiDoodleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const strokeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.5, delay, ease: "easeInOut" as const },
    }),
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, delay, ease: "backOut" as const },
    }),
  };

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative w-full h-full ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 480 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Financial grid lines - very subtle */}
          <defs>
            <pattern id="doodleGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C7A56A" strokeWidth="0.3" opacity="0.3" />
            </pattern>
            <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C7A56A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C7A56A" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C7A56A" stopOpacity="0" />
              <stop offset="50%" stopColor="#C7A56A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C7A56A" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Subtle grid background */}
          <rect width="480" height="520" fill="url(#doodleGrid)" opacity="0.4" />

          {/* Ground baseline */}
          <motion.line
            x1="40" y1="380" x2="440" y2="380"
            stroke="#C7A56A" strokeWidth="1.5" strokeLinecap="round"
            variants={strokeVariants}
            custom={0.2}
            initial="hidden"
            animate="visible"
          />

          {/* ——— BURJ KHALIFA (center-right, tallest) ——— */}
          {/* Main spire */}
          <motion.path
            d="M 265 380 L 265 100 L 268 80 L 271 100 L 271 380"
            stroke="url(#skylineGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round"
            variants={strokeVariants} custom={0.4} initial="hidden" animate="visible"
          />
          {/* Burj taper sections */}
          <motion.path
            d="M 258 380 L 258 260 L 265 250 L 271 250 L 278 260 L 278 380"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round"
            variants={strokeVariants} custom={0.6} initial="hidden" animate="visible"
          />
          <motion.path
            d="M 252 380 L 252 310 L 258 300 L 278 300 L 284 310 L 284 380"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"
            variants={strokeVariants} custom={0.7} initial="hidden" animate="visible"
          />
          {/* Y-fin wings */}
          <motion.path
            d="M 245 340 L 265 310 M 285 340 L 265 310"
            stroke="#C7A56A" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5"
            variants={strokeVariants} custom={0.9} initial="hidden" animate="visible"
          />

          {/* ——— BUILDING LEFT (medium) ——— */}
          <motion.path
            d="M 155 380 L 155 230 L 185 230 L 185 380"
            stroke="#C7A56A" strokeWidth="1.2" fill="none" strokeLinecap="round"
            variants={strokeVariants} custom={0.5} initial="hidden" animate="visible"
          />
          {/* Windows grid left */}
          <motion.path
            d="M 162 250 L 162 280 M 170 250 L 170 280 M 178 250 L 178 280 M 162 295 L 162 320 M 170 295 L 170 320 M 178 295 L 178 320"
            stroke="#C7A56A" strokeWidth="0.6" fill="none" strokeLinecap="round" opacity="0.4"
            variants={strokeVariants} custom={1.0} initial="hidden" animate="visible"
          />
          {/* Rooftop detail */}
          <motion.path
            d="M 155 230 L 170 215 L 185 230"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round"
            variants={strokeVariants} custom={0.8} initial="hidden" animate="visible"
          />

          {/* ——— BUILDING FAR LEFT (low) ——— */}
          <motion.path
            d="M 80 380 L 80 300 L 130 300 L 130 380"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"
            variants={strokeVariants} custom={0.6} initial="hidden" animate="visible"
          />
          <motion.path
            d="M 88 315 L 88 335 M 100 315 L 100 335 M 112 315 L 112 335 M 122 315 L 122 335"
            stroke="#C7A56A" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.35"
            variants={strokeVariants} custom={1.1} initial="hidden" animate="visible"
          />

          {/* ——— BUILDING RIGHT (curved facade) ——— */}
          <motion.path
            d="M 310 380 L 310 260 Q 330 240 350 260 L 350 380"
            stroke="#C7A56A" strokeWidth="1.2" fill="none" strokeLinecap="round"
            variants={strokeVariants} custom={0.5} initial="hidden" animate="visible"
          />
          <motion.path
            d="M 318 275 L 318 305 M 328 270 L 328 300 M 338 275 L 338 305 M 318 318 L 318 345 M 328 318 L 328 345 M 338 318 L 338 345"
            stroke="#C7A56A" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.35"
            variants={strokeVariants} custom={1.0} initial="hidden" animate="visible"
          />

          {/* ——— BUILDING FAR RIGHT (low flat) ——— */}
          <motion.path
            d="M 370 380 L 370 320 L 430 320 L 430 380"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"
            variants={strokeVariants} custom={0.7} initial="hidden" animate="visible"
          />

          {/* ——— LOCATION PINS ——— */}
          {/* Main pin (center) */}
          <motion.path
            d="M 268 80 Q 258 65 258 55 Q 258 40 268 40 Q 278 40 278 55 Q 278 65 268 80 Z"
            stroke="#C7A56A" strokeWidth="1.5" fill="none"
            variants={strokeVariants} custom={1.5} initial="hidden" animate="visible"
          />
          <motion.circle
            cx="268" cy="55" r="4"
            stroke="#C7A56A" strokeWidth="1.5" fill="none"
            variants={dotVariants} custom={2.0} initial="hidden" animate="visible"
          />

          {/* Secondary pin (left) */}
          <motion.path
            d="M 170 215 Q 162 204 162 196 Q 162 186 170 186 Q 178 186 178 196 Q 178 204 170 215 Z"
            stroke="#C7A56A" strokeWidth="1.2" fill="none" opacity="0.6"
            variants={strokeVariants} custom={1.7} initial="hidden" animate="visible"
          />
          <motion.circle
            cx="170" cy="196" r="3"
            stroke="#C7A56A" strokeWidth="1" fill="none" opacity="0.6"
            variants={dotVariants} custom={2.2} initial="hidden" animate="visible"
          />

          {/* ——— CAPITAL FLOW LINES (animated dashes) ——— */}
          <motion.path
            d="M 60 420 Q 120 400 180 415 Q 240 430 310 410 Q 370 392 440 405"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round"
            strokeDasharray="6 4"
            variants={strokeVariants} custom={1.8} initial="hidden" animate="visible"
            opacity="0.4"
          />
          <motion.path
            d="M 60 440 Q 150 425 240 440 Q 330 455 440 435"
            stroke="#C7A56A" strokeWidth="0.8" fill="none" strokeLinecap="round"
            strokeDasharray="4 6"
            variants={strokeVariants} custom={2.0} initial="hidden" animate="visible"
            opacity="0.25"
          />

          {/* Capital arrow heads */}
          <motion.path
            d="M 430 405 L 440 405 M 436 401 L 440 405 L 436 409"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round"
            variants={strokeVariants} custom={2.5} initial="hidden" animate="visible"
            opacity="0.5"
          />

          {/* ——— ORBIT ARC (global connectivity) ——— */}
          <motion.path
            d="M 100 460 Q 240 430 390 460"
            stroke="#C7A56A" strokeWidth="0.8" fill="none" strokeLinecap="round"
            strokeDasharray="3 5"
            variants={strokeVariants} custom={2.2} initial="hidden" animate="visible"
            opacity="0.3"
          />

          {/* ——— CORNER BRACKETS (intelligence dashboard feel) ——— */}
          {/* Top-left */}
          <motion.path
            d="M 20 20 L 20 50 M 20 20 L 50 20"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"
            variants={strokeVariants} custom={2.8} initial="hidden" animate="visible"
          />
          {/* Bottom-right */}
          <motion.path
            d="M 460 500 L 460 470 M 460 500 L 430 500"
            stroke="#C7A56A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"
            variants={strokeVariants} custom={2.9} initial="hidden" animate="visible"
          />

          {/* Floating dot cluster (data nodes) */}
          <motion.circle cx="100" cy="170" r="2.5" stroke="#C7A56A" strokeWidth="1" fill="none" opacity="0.5"
            variants={dotVariants} custom={2.5} initial="hidden" animate="visible" />
          <motion.circle cx="395" cy="220" r="2" stroke="#C7A56A" strokeWidth="1" fill="none" opacity="0.4"
            variants={dotVariants} custom={2.6} initial="hidden" animate="visible" />
          <motion.circle cx="340" cy="150" r="1.5" stroke="#C7A56A" strokeWidth="1" fill="#C7A56A" opacity="0.6"
            variants={dotVariants} custom={2.7} initial="hidden" animate="visible" />
          <motion.circle cx="190" cy="460" r="2" stroke="#C7A56A" strokeWidth="1" fill="none" opacity="0.35"
            variants={dotVariants} custom={2.8} initial="hidden" animate="visible" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
