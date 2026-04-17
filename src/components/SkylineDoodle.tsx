import { useEffect, useRef } from "react";

const SkylineDoodle = ({ className = "" }: { className?: string }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const onScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const drawLength = length * Math.min(scrollPercent * 3, 1);
      path.style.strokeDashoffset = `${length - drawLength}`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M0,180 L50,180 L50,140 L70,140 L70,100 L90,100 L90,140 L110,140 L110,60 L130,60 L130,40 L140,20 L150,40 L150,60 L170,60 L170,140 L190,140 L190,120 L210,120 L210,80 L230,80 L230,50 L250,50 L250,80 L270,80 L270,140 L290,140 L290,100 L310,100 L310,60 L320,30 L330,60 L330,100 L350,100 L350,140 L370,140 L370,90 L390,90 L390,50 L410,50 L410,90 L430,90 L430,140 L450,140 L450,110 L470,110 L470,70 L480,40 L490,70 L490,110 L510,110 L510,140 L530,140 L530,120 L550,120 L550,80 L570,80 L570,40 L590,40 L590,20 L600,10 L610,20 L610,40 L630,40 L630,80 L650,80 L650,120 L670,120 L670,140 L690,140 L690,100 L710,100 L710,60 L730,60 L730,100 L750,100 L750,140 L770,140 L770,110 L790,110 L790,70 L810,70 L810,110 L830,110 L830,140 L850,140 L850,120 L870,120 L870,80 L890,80 L890,120 L910,120 L910,140 L930,140 L930,160 L950,160 L950,140 L970,140 L970,120 L990,120 L990,140 L1010,140 L1010,160 L1030,160 L1030,140 L1050,140 L1050,160 L1100,160 L1100,180 L1200,180"
        stroke="url(#skylineGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="skylineGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(40, 50%, 60%)" stopOpacity="0.2" />
          <stop offset="50%" stopColor="hsl(43, 80%, 55%)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(40, 50%, 60%)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SkylineDoodle;
