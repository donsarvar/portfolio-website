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
        paddingTop: "5.5rem", // Navbar height clearance
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
      <div aria-hidden="true" style={{ height: "1.5rem" }} />

      {/* Main hero container */}
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          width: "100%",
          padding: "0 3.5rem",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-container"
      >
        {/* Main headline - Full Grand Scale */}
        <h1
          className="display-text"
          style={{
            fontSize: "clamp(2.75rem, 5.8vw, 5.5rem)",
            color: "var(--foreground)",
            lineHeight: 1.12,
            whiteSpace: "pre-line",
            letterSpacing: "-0.03em",
            marginBottom: "3.5rem",
          }}
        >
          {t("hero_greeting")}
        </h1>

        {/* Subtitle & CTA buttons row - Perfectly aligned with large elements */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
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
              letterSpacing: "0.04em",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {t("hero_subtitle")}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <MagneticCTA href="#work" label={t("hero_cta")} variant="primary" />
            <MagneticCTA href="#contact" label={t("hero_secondary")} variant="glass" />
          </div>
        </div>
      </div>

      {/* Scroll indicator pinned at the bottom */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <ScrollIndicator targetId="work" />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-container { padding: 0 1.5rem !important; }
          .hero-sub-row { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
