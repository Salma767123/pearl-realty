import { useEffect, useRef } from "react";

interface DoodleLineProps {
  className?: string;
  direction?: "vertical" | "horizontal" | "diagonal";
}

const DoodleLine = ({ className = "", direction = "vertical" }: DoodleLineProps) => {
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
          path.style.transition = "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)";
          path.style.strokeDashoffset = "0";
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(path);
    return () => observer.disconnect();
  }, []);

  const paths = {
    vertical: "M2,0 C2,30 4,60 2,90 C0,120 4,150 2,180 C0,210 4,240 2,280",
    horizontal: "M0,2 C30,4 60,0 90,2 C120,4 150,0 180,2 C210,4 240,0 280,2",
    diagonal: "M0,0 C20,15 40,25 60,40 C80,55 100,65 120,80 C140,95 160,105 180,120",
  };

  const viewBoxes = {
    vertical: "0 0 6 280",
    horizontal: "0 0 280 6",
    diagonal: "0 0 180 120",
  };

  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox={viewBoxes[direction]}
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d={paths[direction]}
        className="stroke-black/20 dark:stroke-[hsl(40,50%,60%)] dark:opacity-40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DoodleLine;
