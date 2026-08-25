import { useState } from "react";
import { APPROACH_STEPS } from "@/data/portfolioData";
import type { ApproachStep } from "@/types/portfolio";
import { useI18n, type DictKey } from "@/lib/i18n";

export function Approach() {
  const { t } = useI18n();

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
          {t("approach_eyebrow")}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
          className="approach-grid"
        >
          {APPROACH_STEPS.map((step, idx) => (
            <ApproachCard key={step.number} index={idx + 1} step={step} />
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

function ApproachCard({ step, index }: { step: ApproachStep; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useI18n();

  const titleKey = `approach_${index}_title` as DictKey;
  const descKey = `approach_${index}_desc` as DictKey;

  const title = t(titleKey) || step.title;
  const desc = t(descKey) || step.description;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "2.25rem 2rem 2.25rem 0",
        paddingRight: "2.5rem",
        transition: "opacity 200ms ease",
      }}
    >
      <span
        className="meta-label"
        style={{
          color: hovered ? "var(--accent)" : "var(--fg-subtle)",
          transition: "color 200ms ease",
          display: "block",
          marginBottom: "1.5rem",
        }}
      >
        {step.number}
      </span>

      <h3
        className="display-text"
        style={{
          fontSize: "1.375rem",
          color: "var(--foreground)",
          marginBottom: "0.875rem",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "var(--fg-muted)",
          maxWidth: "28ch",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
