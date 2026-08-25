import { useI18n } from "@/lib/i18n";
import { MagneticCTA } from "@/components/MagneticCTA";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { HeroProjectIndex } from "./HeroProjectIndex";

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
          padding: "7.5rem 3.5rem 5.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-container"
      >
        <div style={{ maxWidth: 880 }}>
          {/* Eyebrow metadata */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2.5rem",
              animation: "heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
            }}
          >
            <span className="eyebrow" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              Product Designer
            </span>
            <span className="eyebrow">Tashkent, UZ</span>
          </div>

          {/* Main headline */}
          <h1
            className="display-text"
            style={{
              fontSize: "clamp(2.75rem, 6.2vw, 5.75rem)",
              color: "var(--foreground)",
              maxWidth: "18ch",
              marginBottom: "2.5rem",
              animation: "heroFadeUp 0.7s 60ms cubic-bezier(0.16, 1, 0.3, 1) both",
            }}
          >
            Murakkab tizimlar uchun sodda va qulay yechimlar yarataman.
          </h1>

          {/* Subtitle & CTA buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "end",
              gap: "2.5rem",
              animation: "heroFadeUp 0.8s 120ms cubic-bezier(0.16, 1, 0.3, 1) both",
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
              <MagneticCTA href="#work" label="Ishlarni ko'rish" variant="primary" />
              <MagneticCTA href="#contact" label="Bog'lanish" variant="outline" />
            </div>
          </div>
        </div>

        {/* Project index sidebar indicator */}
        <HeroProjectIndex />
      </div>

      <ScrollIndicator targetId="work" />

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-container { padding: 6rem 1.5rem 4rem !important; }
          .hero-sub-row { grid-template-columns: 1fr !important; }
          .hero-sidebar { display: none !important; }
        }
      `}</style>
    </section>
  );
}
