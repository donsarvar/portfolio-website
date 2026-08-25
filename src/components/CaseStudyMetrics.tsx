interface CaseStudyMetricsProps {
  metrics?: { label: string; value: string }[];
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div
      style={{
        marginTop: "4.5rem",
        padding: "2.5rem",
        background: "var(--glass-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--glass-border)",
        borderRadius: 18,
        display: "grid",
        gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
        gap: "2rem",
      }}
      className="casestudy-metrics-grid"
    >
      {metrics.map((m) => (
        <div key={m.label}>
          <span
            className="display-text"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--foreground)",
              display: "block",
            }}
          >
            {m.value}
          </span>
          <span
            className="meta-label"
            style={{ color: "var(--fg-muted)", marginTop: "0.5rem", display: "block" }}
          >
            {m.label}
          </span>
        </div>
      ))}

      <style>{`
        .casestudy-metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media (min-width: 768px) {
          .casestudy-metrics-grid { grid-template-columns: repeat(${metrics.length}, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
