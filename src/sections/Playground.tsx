export function Playground() {
  return (
    <section style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "6rem 3.5rem",
        }}
        className="playground-section-container"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
            gap: "2rem",
            marginBottom: "4rem",
          }}
          className="playground-header"
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Playground
            </p>
            <h2
              className="display-text"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 3rem)",
                color: "var(--foreground)",
              }}
            >
              UI Experiments
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "var(--fg-muted)",
              maxWidth: "34ch",
              justifySelf: "end",
            }}
          >
            Micro-interactions, icon experiments va eksperimental prototiplar.
          </p>
        </div>

        {/* Clean future-ready experiment cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.75rem",
          }}
          className="playground-grid"
        >
          {[
            { id: 1, label: "Interactive Spring Physics" },
            { id: 2, label: "Dynamic Glass Refraction" },
            { id: 3, label: "Spatial UI Gestures" },
          ].map((item) => (
            <div
              key={item.id}
              style={{
                aspectRatio: "4/3",
                background: "var(--surface)",
                borderRadius: 16,
                border: "1px solid var(--border-color)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                transition: "border-color 200ms ease, background 200ms ease",
              }}
            >
              <span style={{ fontSize: "1.25rem", color: "var(--fg-subtle)", opacity: 0.35 }}>+</span>
              <span className="meta-label" style={{ color: "var(--fg-subtle)" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .playground-header { grid-template-columns: 1fr !important; }
        .playground-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) {
          .playground-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .playground-header { grid-template-columns: 1fr 1fr !important; }
          .playground-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .playground-section-container { padding: 4.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
