"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

const SunIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [shimmerClass, setShimmerClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggleTheme = useCallback(() => {
    if (isAnimating) return;
    const goingDark = resolvedTheme === "light";
    setIsAnimating(true);
    setShimmerClass(goingDark ? "moon-glow-active" : "sun-shimmer-active");
    setTheme(goingDark ? "dark" : "light");
    setTimeout(() => {
      setShimmerClass("");
      setIsAnimating(false);
    }, 850);
  }, [resolvedTheme, setTheme, isAnimating]);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`
        relative flex items-center gap-0 shrink-0
        w-[52px] h-[26px] rounded-full p-[3px]
        transition-all duration-500 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne/60 focus-visible:ring-offset-2
        group ${shimmerClass}
        ${isDark
          ? "bg-[#1a1a28] border border-champagne/25 hover:border-champagne/50 hover:shadow-[0_0_16px_2px_hsla(220,60%,70%,0.15)]"
          : "bg-[#f0e8d6] border border-champagne/40 hover:border-champagne/70 hover:shadow-[0_0_16px_2px_hsla(38,85%,65%,0.2)]"
        }
      `}
    >
      {/* Track icons */}
      <span className={`
        absolute left-[7px] flex items-center
        transition-all duration-400
        ${isDark ? "opacity-0 scale-75" : "opacity-70 scale-100 text-amber-500"}
      `}>
        <SunIcon />
      </span>
      <span className={`
        absolute right-[7px] flex items-center
        transition-all duration-400
        ${isDark ? "opacity-80 scale-100 text-indigo-300" : "opacity-0 scale-75"}
      `}>
        <MoonIcon />
      </span>

      {/* Animated knob */}
      <span
        className={`
          relative z-10 flex items-center justify-center
          w-[20px] h-[20px] rounded-full
          shadow-[0_1px_4px_rgba(0,0,0,0.2)]
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${isDark
            ? "translate-x-[26px] bg-gradient-to-br from-indigo-200 to-indigo-400 text-indigo-900"
            : "translate-x-0 bg-gradient-to-br from-amber-200 to-amber-400 text-amber-900"
          }
        `}
      >
        <span className="w-[8px] h-[8px] flex items-center justify-center opacity-90">
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
