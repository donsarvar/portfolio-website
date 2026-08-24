import { useRef, useState } from "react";

interface MagneticCTAProps {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "glass";
  className?: string;
}

export function MagneticCTA({
  href,
  label,
  variant = "primary",
  className = "",
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // max ~8-10px subtle drift
    const dx = (e.clientX - cx) * 0.16;
    const dy = (e.clientY - cy) * 0.16;
    setOffset({ x: dx, y: dy });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.625rem",
    padding: "0.875rem 1.625rem",
    borderRadius: 12,
    fontFamily: "var(--font-sans)",
    fontSize: "0.8125rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    textDecoration: "none",
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), background 200ms ease, border-color 200ms ease",
    whiteSpace: "nowrap",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: "var(--foreground)",
      color: "var(--elevated)",
      border: "1px solid var(--foreground)",
      boxShadow: "0 4px 16px rgba(23, 23, 22, 0.08)",
    },
    outline: {
      background: "transparent",
      color: "var(--foreground)",
      border: "1px solid var(--border-color)",
    },
    glass: {
      background: "var(--glass-bg)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      color: "var(--foreground)",
      border: "1px solid var(--glass-border)",
      boxShadow: "0 4px 20px rgba(20, 20, 15, 0.04)",
    },
  };

  return (
    <a
      ref={ref}
      href={href}
      data-cursor="cta"
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      }}
    >
      <span>{label}</span>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 8L8 2M8 2H3.5M8 2V6.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
