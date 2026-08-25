interface CaseStudyContentProps {
  overview?: string;
  challenge?: string;
  solution?: string;
}

export function CaseStudyContent({ overview, challenge, solution }: CaseStudyContentProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2.5rem",
        marginTop: "4.5rem",
      }}
      className="casestudy-content-grid"
    >
      {overview && (
        <div>
          <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>
            Overview
          </span>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>
            {overview}
          </p>
        </div>
      )}
      {challenge && (
        <div>
          <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>
            Challenge
          </span>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>
            {challenge}
          </p>
        </div>
      )}
      {solution && (
        <div>
          <span className="eyebrow" style={{ display: "block", marginBottom: "1rem" }}>
            Solution
          </span>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--fg-muted)" }}>
            {solution}
          </p>
        </div>
      )}

      <style>{`
        .casestudy-content-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 768px) {
          .casestudy-content-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
