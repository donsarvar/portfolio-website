import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  targetId: string;
}

export function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 80);
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
        bottom: "2.5rem",
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : 16}px)`,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--glass-border)",
          borderRadius: 9999,
          padding: "0.75rem 0.875rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          boxShadow: "0 8px 24px rgba(20, 20, 15, 0.05)",
        }}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{
            animation: "scrollBreathing 2.5s cubic-bezier(0.45, 0, 0.55, 1) infinite",
            color: "var(--fg-muted)",
          }}
        >
          <path
            d="M5 1L5 9M2 6.5L5 9L8 6.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div style={{ width: 1, height: 16, background: "rgba(23, 23, 22, 0.15)" }} />

        <span
          style={{
            fontSize: "0.5625rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "var(--fg-muted)",
            whiteSpace: "nowrap",
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
          }}
        >
          Scroll to explore
        </span>
      </div>

      <style>{`
        @keyframes scrollBreathing {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(5px); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
