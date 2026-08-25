import type { ProjectItem } from "@/types/portfolio";
import { useI18n } from "@/lib/i18n";

interface CaseStudyMetaProps {
  project: ProjectItem;
}

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  const { t } = useI18n();

  const metaList = [
    { label: t("meta_role"), value: project.role || "Lead Product Designer" },
    { label: t("meta_year"), value: project.year },
    { label: t("meta_platform"), value: project.platform || "Web & Mobile" },
    { label: t("meta_category"), value: project.type || project.descriptor },
  ];

  return (
    <div>
      {/* 4-column Meta Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          marginTop: "2.5rem",
        }}
        className="casestudy-meta-grid"
      >
        {metaList.map((item) => (
          <div
            key={item.label}
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid var(--glass-border)",
              borderRadius: 14,
              padding: "1.25rem 1.5rem",
              boxShadow: "0 4px 16px rgba(20, 20, 15, 0.03)",
            }}
          >
            <span
              className="meta-label"
              style={{
                color: "var(--fg-subtle)",
                fontSize: "0.6875rem",
                letterSpacing: "0.14em",
                display: "block",
                marginBottom: "0.375rem",
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .casestudy-meta-grid { grid-template-columns: repeat(2, 1fr) !important; }
        @media (min-width: 768px) {
          .casestudy-meta-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
