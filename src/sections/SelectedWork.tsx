import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { ProjectWideCard } from "@/components/ProjectWideCard";
import { ProjectSplitCard } from "@/components/ProjectSplitCard";
import { ProjectOffsetCard } from "@/components/ProjectOffsetCard";
import { useI18n } from "@/lib/i18n";

export function SelectedWork() {
  const { t } = useI18n();

  return (
    <section id="work" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div style={{ maxWidth: 1460, margin: "0 auto", padding: "6rem 3.5rem" }} className="work-section-container">
        {/* Section Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
            gap: "2.5rem",
            marginBottom: "5.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid var(--border-color)",
          }}
          className="work-section-header"
        >
          <div>
            <p
              className="eyebrow"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              2025 — 2026
            </p>
            <h2
              className="display-text"
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.5rem)",
                color: "var(--foreground)",
              }}
            >
              {t("work_title")}
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "var(--fg-muted)",
              maxWidth: "36ch",
              justifySelf: "end",
            }}
          >
            {t("work_subtitle")}
          </p>
        </div>

        {/* 4 Distinct Project Compositions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6.5rem" }}>
          <ProjectWideCard project={PORTFOLIO_PROJECTS[0]} />
          <ProjectSplitCard project={PORTFOLIO_PROJECTS[1]} />
          <ProjectOffsetCard project={PORTFOLIO_PROJECTS[2]} />
          <ProjectWideCard project={PORTFOLIO_PROJECTS[3]} />
        </div>
      </div>

      <style>{`
        .work-section-header { grid-template-columns: 1fr !important; }
        @media (min-width: 768px) {
          .work-section-header { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .work-section-container { padding: 4.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
