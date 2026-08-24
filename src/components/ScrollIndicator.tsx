import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  targetId: string;
}

export function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick}
      data-cursor="cta"
      role="button"
      tabIndex={0}
      aria-label="Scroll to selected work"
      style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : 14}px)`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition:
          "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "var(--glass-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--glass-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(20, 20, 15, 0.05)",
          transition: "transform 250ms ease, background 200ms ease, border-color 200ms ease",
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            animation: "scrollArrowBreath 2.2s cubic-bezier(0.45, 0, 0.55, 1) infinite",
            color: "var(--foreground)",
          }}
        >
          <path
            d="M6 2L6 10M3 7L6 10L9 7"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        @keyframes scrollArrowBreath {
          0%, 100% { transform: translateY(0px); opacity: 0.45; }
          50% { transform: translateY(3px); opacity: 0.95; }
        }
      `}</style>
    </div>
  );
}
