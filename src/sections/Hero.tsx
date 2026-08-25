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
        justifyContent: "center",
        borderBottom: "1px solid var(--border-color)",
        overflow: "hidden",
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

      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          width: "100%",
          padding: "5rem 3.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
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
              fontSize: "clamp(2.25rem, 4.3vw, 4.25rem)",
              color: "var(--foreground)",
              maxWidth: "100%",
              marginBottom: "2.5rem",
              lineHeight: 1.18,
              whiteSpace: "pre-line",
            }}
          >
            {t("hero_greeting")}
          </h1>

          {/* Subtitle & CTA buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "end",
              gap: "2.5rem",
            }}
            className="hero-sub-row"
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--fg-muted)",
                maxWidth: "38ch",
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

      <ScrollIndicator targetId="work" />

      <style>{`
        @media (max-width: 768px) {
          .hero-container { padding: 6rem 1.5rem 4rem !important; }
          .hero-sub-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
