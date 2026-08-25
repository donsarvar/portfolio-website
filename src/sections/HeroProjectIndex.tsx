import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { useCursor } from "@/components/CustomCursor";

export function HeroProjectIndex() {
  const { setVariant, setPreview, reset } = useCursor();

  return (
    <aside
      aria-label="Project Index"
      style={{
        position: "absolute",
        right: "3.5rem",
        bottom: "4.5rem",
        animation: "heroFadeUp 0.9s 200ms cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
      className="hero-sidebar"
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
        }}
      >
        {PORTFOLIO_PROJECTS.map((p) => (
          <li
            key={p.number}
            onPointerEnter={() => {
              setVariant("view", "VIEW");
              setPreview({ src: p.image, label: p.name, sub: p.year });
            }}
            onPointerLeave={() => reset()}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.875rem",
              cursor: "pointer",
              transition: "transform 200ms ease",
            }}
          >
            <span className="meta-label" style={{ color: "var(--accent)" }}>
              {p.number}
            </span>
            <span style={{ fontSize: "0.8125rem", color: "var(--fg-muted)" }}>{p.name}</span>
          </li>
        ))}
      </ul>
      <p
        className="meta-label"
        style={{
          marginTop: "1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.375rem",
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "var(--accent)",
            display: "inline-block",
          }}
        />
        41.31 N · 69.28 E
      </p>
    </aside>
  );
}
