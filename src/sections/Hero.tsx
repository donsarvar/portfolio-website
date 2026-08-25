import { useI18n } from "@/lib/i18n";
import { MagneticCTA } from "@/components/MagneticCTA";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border-color)",
        overflow: "hidden",
        paddingTop: "4.5rem", // Navbar height clearance
        paddingBottom: "2.5rem",
      }}
    >
      {/* Editorial background grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(25, 25, 22, 0.035) 0, rgba(25, 25, 22, 0.035) 1px, transparent 1px)",
          backgroundSize: "8.3333% 100%",
          pointerEvents: "none",
        }}
      />

      {/* Optical balance spacer */}
      <div aria-hidden="true" style={{ height: "1rem" }} />

      {/* Main hero content container */}
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          width: "100%",
          padding: "0 3.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-container"
      >
        <div style={{ maxWidth: 1240 }}>
          {/* Main headline */}
          <h1
            className="display-text"
            style={{
              fontSize: "clamp(2.5rem, 4.8vw, 4.75rem)",
              color: "var(--foreground)",
              maxWidth: "100%",
              marginBottom: "3.25rem",
              lineHeight: 1.16,
              whiteSpace: "pre-line",
              letterSpacing: "-0.025em",
            }}
          >
            {t("hero_greeting")}
          </h1>

          {/* Subtitle & CTA buttons row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "2.5rem",
            }}
            className="hero-sub-row"
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "var(--fg-muted)",
                letterSpacing: "0.02em",
                fontWeight: 500,
              }}
            >
              {t("hero_subtitle")}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", alignItems: "center" }}>
              <MagneticCTA href="#work" label={t("hero_cta")} variant="primary" />
              <MagneticCTA href="#contact" label={t("hero_secondary")} variant="glass" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator pinned nicely at the bottom */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <ScrollIndicator targetId="work" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-container { padding: 0 1.5rem !important; }
          .hero-sub-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
