import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { ProjectWideCard } from "@/components/ProjectWideCard";
import { useI18n } from "@/lib/i18n";

export function SelectedWork() {
  const { t } = useI18n();

  return (
    <section id="work" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div style={{ maxWidth: 1460, margin: "0 auto", padding: "0 3.5rem 6rem" }} className="work-section-container">
        {/* Section Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "end",
            gap: "2.5rem",
            paddingTop: "3.5rem",
            paddingBottom: "3.5rem",
            marginBottom: "3.5rem",
            borderBottom: "1px solid var(--border-color)",
          }}
          className="work-section-header"
        >
          <div>
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

        {/* Unified Full-Width 16:10 Project Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5.5rem" }}>
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectWideCard key={project.slug} project={project} />
          ))}
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
