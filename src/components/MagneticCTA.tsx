import { useRef, useState } from "react";
import { useCursor } from "@/components/CustomCursor";

interface MagneticCTAProps {
  href?: string;
  label: string;
  variant?: "glass" | "primary" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function MagneticCTA({
  href = "#",
  label,
  variant = "glass",
  className = "",
  onClick,
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const { setVariant, reset } = useCursor();

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
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

  const handlePointerEnter = () => {
    setHovered(true);
    setVariant("open", "OPEN");
  };

  const handlePointerLeave = () => {
    setHovered(false);
    setOffset({ x: 0, y: 0 });
    reset();
  };

  const isGlass = variant === "glass";
  const isPrimary = variant === "primary";

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      data-cursor="cta"
      className={className}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "1rem 1.625rem",
        borderRadius: 13,
        fontFamily: "var(--font-sans)",
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textDecoration: "none",
        whiteSpace: "nowrap",
        background: isGlass
          ? hovered
            ? "rgba(238, 235, 227, 0.95)"
            : "rgba(248, 246, 241, 0.88)"
          : isPrimary
            ? "var(--foreground)"
            : "transparent",
        color: isPrimary ? "var(--elevated)" : "var(--foreground)",
        backdropFilter: isGlass ? "blur(20px)" : "none",
        WebkitBackdropFilter: isGlass ? "blur(20px)" : "none",
        border: isGlass
          ? `1px solid ${hovered ? "rgba(25, 25, 22, 0.18)" : "var(--border-color)"}`
          : isPrimary
            ? "1px solid var(--foreground)"
            : "1px solid var(--border-color)",
        boxShadow: isGlass
          ? hovered
            ? "0 8px 24px rgba(20, 20, 15, 0.08)"
            : "0 4px 16px rgba(20, 20, 15, 0.04)"
          : "none",
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition:
          "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), background 250ms ease, border-color 250ms ease, box-shadow 250ms ease",
      }}
    >
      <span>{label}</span>
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          fontSize: "0.8125rem",
          color: "inherit",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        →
      </span>
    </a>
  );
}
