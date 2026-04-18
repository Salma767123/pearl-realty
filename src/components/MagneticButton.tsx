import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
}

const MagneticButton = ({ children, className = "", onClick, primary = false }: MagneticButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative z-20 group font-body text-xs tracking-[0.3em] uppercase px-10 py-5 font-semibold transition-all duration-300 ease-out overflow-hidden cursor-pointer pointer-events-auto hover:-translate-y-[2px] hover:scale-[1.02] ${
        primary
          ? "bg-champagne text-charcoal dark:text-background border border-transparent shadow-[0_4px_20px_-4px_hsla(38,45%,52%,0.4)] dark:shadow-[0_2px_20px_-4px_hsla(38,55%,47%,0.35)] hover:shadow-[0_12px_30px_-4px_hsla(38,45%,52%,0.6)]"
          : "border-2 border-charcoal/60 dark:border-champagne/30 text-charcoal dark:text-champagne hover:border-champagne hover:text-champagne dark:hover:border-champagne/60 hover:bg-champagne/5 hover:shadow-[0_0_15px_-3px_hsla(38,45%,52%,0.2)] bg-transparent"
      } ${className}`}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
      
      {/* Decorative Shimmer / Glow Overlays - Pointer Events MUST be none */}
      {primary && (
        <>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="absolute inset-0 -translate-x-[150%] skew-x-[25deg] w-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer-sweep_1.5s_ease-in-out_infinite] pointer-events-none blur-[2px]" />
        </>
      )}
    </button>
  );
};

export default MagneticButton;
