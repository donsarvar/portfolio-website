import { useState } from "react";
import { APPROACH_STEPS } from "@/data/portfolioData";
import type { ApproachStep } from "@/types/portfolio";

export function Approach() {
  return (
    <section style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "6rem 3.5rem",
        }}
        className="approach-section-container"
      >
        <p className="eyebrow" style={{ marginBottom: "3rem" }}>
          Approach
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
          className="approach-grid"
        >
          {APPROACH_STEPS.map((step) => (
            <ApproachCard key={step.number} step={step} />
          ))}
        </div>
      </div>

      <style>{`
        .approach-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) {
          .approach-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .approach-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .approach-section-container { padding: 4.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function ApproachCard({ step }: { step: ApproachStep }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "2.25rem 2rem 2.25rem 0",
        paddingRight: "2.5rem",
      }}
    >
      <span
        className="meta-label"
        style={{
          color: hovered ? "var(--accent)" : "var(--fg-subtle)",
          transition: "color 250ms ease",
          fontSize: "0.75rem",
          fontWeight: 600,
        }}
      >
        {step.number}
      </span>

      <h3
        className="display-text"
        style={{
          fontSize: "1.125rem",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginTop: "1.5rem",
          color: "var(--foreground)",
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          marginTop: "0.875rem",
          fontSize: "0.8125rem",
          lineHeight: 1.7,
          color: "var(--fg-muted)",
          maxWidth: "24ch",
        }}
      >
        {step.description}
      </p>
    </div>
  );
}
