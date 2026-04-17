import { useRef, MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
}

const MagneticButton = ({ children, className = "", onClick, primary = false }: MagneticButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (btn) btn.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={btnRef as any}
      onMouseMove={handleMouseMove as any}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ isolation: "isolate" }}
      className={`magnetic-btn font-body text-xs tracking-[0.3em] uppercase px-10 py-5 transition-all duration-500 overflow-hidden relative group cursor-pointer ${
        primary
          ? // Primary: solid champagne pill — works on both light & dark
            "bg-champagne text-white dark:text-background border border-transparent hover:bg-champagne/80 shadow-[0_2px_20px_-4px_hsla(38,45%,60%,0.45)] dark:shadow-[0_2px_20px_-4px_hsla(38,55%,47%,0.35)]"
          : // Secondary: visible on light bg, visible on dark bg
            "border border-charcoal/30 dark:border-champagne/30 text-charcoal/80 dark:text-champagne hover:border-champagne hover:text-champagne dark:hover:border-champagne/60 bg-transparent"
      } ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {primary && (
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </div>
  );
};

export default MagneticButton;
