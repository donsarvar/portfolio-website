import type { ProjectItem } from "@/types/portfolio";
import { useI18n } from "@/lib/i18n";

interface CaseStudyMetaProps {
  project: ProjectItem;
}

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  const { t, lang } = useI18n();

  const clientValue =
    lang === "uz" ? (project.client_uz ?? project.client ?? "Sog'liqni Saqlash Vazirligi") :
    lang === "ru" ? (project.client_ru ?? project.client ?? "Министерство здравоохранения") :
    (project.client ?? "Ministry of Health");

  const timelineValue =
    lang === "uz" ? (project.timeline_uz ?? project.timeline ?? "2026 (Iyul — Avgust)") :
    lang === "ru" ? (project.timeline_ru ?? project.timeline ?? "2026 (Июль — Август)") :
    (project.timeline ?? "2026 (July — August)");

  const platformValue =
    lang === "uz" ? (project.platform_uz ?? "Veb Platforma (Desktop va Moslashuvchan)") :
    lang === "ru" ? (project.platform_ru ?? "Веб-платформа (ПК и адаптивная)") :
    (project.platform ?? "Web Platform (Desktop & Responsive)");

  const categoryValue =
    lang === "uz" ? (project.type_uz ?? project.descriptor_uz ?? "Tibbiyot innovatsiyalari va tadqiqotlar") :
    lang === "ru" ? (project.type_ru ?? project.descriptor_ru ?? "Медицинские инновации и исследования") :
    (project.type ?? project.descriptor);

  const metaList = [
    { label: t("meta_client"), value: clientValue },
    { label: t("meta_timeline"), value: timelineValue },
    { label: t("meta_platform"), value: platformValue },
    { label: t("meta_category"), value: categoryValue },
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
