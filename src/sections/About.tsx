import { Link } from "@tanstack/react-router";
import { CAPABILITIES } from "@/data/portfolioData";
import type { CapabilityItem } from "@/types/portfolio";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "6rem 3.5rem",
        }}
        className="about-section-container"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Statement */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "2rem" }}>
              {t("about_eyebrow")}
            </p>
            <h2
              className="display-text"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.35rem)",
                color: "var(--foreground)",
                lineHeight: 1.25,
                maxWidth: "24ch",
              }}
            >
              {t("about_heading")}
            </h2>

            <div style={{ marginTop: "2.75rem" }}>
              <Link
                to="/about"
                className="meta-label"
                data-cursor="cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  color: "var(--foreground)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "0.5rem",
                  transition: "border-color 200ms ease",
                }}
              >
                <span>{t("about_full_bio")}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <span className="eyebrow" style={{ display: "block", marginBottom: "2rem" }}>
              {t("about_capabilities")}
            </span>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, borderBottom: "1px solid var(--border-color)" }}>
              {CAPABILITIES.map((cap) => (
                <CapabilityRow key={cap.number} cap={cap} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; gap: 5rem !important; }
        }
        @media (max-width: 768px) {
          .about-section-container { padding: 4.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function CapabilityRow({ cap }: { cap: CapabilityItem }) {
  const { lang } = useI18n();

  const title =
    lang === "uz" ? (cap.title_uz ?? cap.title) :
    lang === "ru" ? (cap.title_ru ?? cap.title) :
    cap.title;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3.25rem 1fr",
        alignItems: "center",
        padding: "1.375rem 0",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <span className="meta-label" style={{ color: "var(--fg-subtle)" }}>
        {cap.number}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1.0625rem",
          fontWeight: 500,
          color: "var(--foreground)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </span>
    </div>
  );
}
