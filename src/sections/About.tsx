import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CAPABILITIES } from "@/data/portfolioData";
import type { CapabilityItem } from "@/types/portfolio";

export function About() {
  return (
    <section id="about" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "6rem 3.5rem",
        }}
        className="about-section-container"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Statement */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "2rem" }}>
              Men haqimda
            </p>
            <h2
              className="display-text"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.35rem)",
                color: "var(--foreground)",
                lineHeight: 1.25,
                maxWidth: "24ch",
              }}
            >
              Murakkab tizimlar, raqamli mahsulotlar va foydalanuvchi tajribasini sodda va tushunarli interfeyslarga
              aylantiraman.
            </h2>

            <div style={{ marginTop: "2.75rem" }}>
              <Link
                to="/about"
                className="meta-label"
                data-cursor="cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  color: "var(--foreground)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "0.5rem",
                  transition: "border-color 200ms ease",
                }}
              >
                <span>To'liq bio</span>
                <span style={{ color: "var(--accent)" }}>→</span>
              </Link>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>
              Capabilities
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {CAPABILITIES.map((item) => (
                <CapabilityRow key={item.number} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; gap: 5rem !important; }
        }
        @media (max-width: 768px) {
          .about-section-container { padding: 4.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function CapabilityRow({ item }: { item: CapabilityItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
        padding: "1rem 0",
        borderTop: "1px solid var(--border-color)",
        cursor: "default",
      }}
    >
      <span
        className="meta-label"
        style={{
          color: hovered ? "var(--accent)" : "var(--fg-subtle)",
          transition: "color 200ms ease",
          fontSize: "0.75rem",
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        {item.number}
      </span>
      <span
        style={{
          fontSize: "0.9375rem",
          color: "var(--foreground)",
          fontWeight: 450,
          transform: hovered ? "translateX(4px)" : "none",
          transition: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {item.title}
      </span>
      <span
        style={{
          marginLeft: "auto",
          color: "var(--accent)",
          fontSize: "0.75rem",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 250ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        →
      </span>
    </li>
  );
}
