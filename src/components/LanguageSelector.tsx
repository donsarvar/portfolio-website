import { useRef, useState, useEffect } from "react";
import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageSelector() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const langs: Lang[] = ["uz", "ru", "en"];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="meta-label"
        aria-label="Select language"
        style={{
          background: "none",
          border: "none",
          padding: "0.25rem 0",
          color: "var(--foreground)",
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          fontFamily: "var(--font-sans)",
          fontSize: "0.6875rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        <span>{lang}</span>
        <svg
          width="7"
          height="5"
          viewBox="0 0 7 5"
          fill="none"
          style={{
            transition: "transform 200ms ease",
            transform: open ? "rotate(180deg)" : "none",
          }}
        >
          <path
            d="M1 1l2.5 2.5L6 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            background: "rgba(248, 246, 241, 0.90)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.60)",
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(20, 20, 15, 0.08)",
            minWidth: 72,
            zIndex: 60,
          }}
        >
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className="meta-label"
              style={{
                display: "block",
                width: "100%",
                padding: "0.5rem 0.875rem",
                textAlign: "left",
                background: lang === l ? "rgba(23, 23, 22, 0.08)" : "transparent",
                border: "none",
                color: lang === l ? "var(--foreground)" : "var(--fg-muted)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                letterSpacing: "0.14em",
                fontWeight: lang === l ? 700 : 500,
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 150ms ease, color 150ms ease",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
