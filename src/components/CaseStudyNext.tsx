import { Link } from "@tanstack/react-router";
import type { ProjectItem } from "@/types/portfolio";
import { useI18n } from "@/lib/i18n";

interface CaseStudyNextProps {
  nextProject: ProjectItem;
}

export function CaseStudyNext({ nextProject }: CaseStudyNextProps) {
  const { t, lang } = useI18n();

  const nextDisplayName =
    lang === "uz" ? (nextProject.name_uz ?? nextProject.name) :
    lang === "ru" ? (nextProject.name_ru ?? nextProject.name) :
    nextProject.name;

  const nextDisplayDescriptor =
    lang === "uz" ? (nextProject.descriptor_uz ?? nextProject.descriptor) :
    lang === "ru" ? (nextProject.descriptor_ru ?? nextProject.descriptor) :
    nextProject.descriptor;

  return (
    <div
      style={{
        marginTop: "6rem",
        paddingTop: "3.5rem",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <span className="meta-label" style={{ color: "var(--fg-subtle)", display: "block", marginBottom: "1rem" }}>
        {t("next_project")}
      </span>

      <Link
        to="/projects/$slug"
        params={{ slug: nextProject.slug }}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 2.5rem",
          background: "var(--glass-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--glass-border)",
          borderRadius: 18,
          boxShadow: "0 8px 32px rgba(20, 20, 15, 0.04)",
          transition: "transform 300ms ease, border-color 250ms ease",
        }}
      >
        <div>
          <span className="meta-label" style={{ color: "var(--fg-subtle)" }}>
            {nextProject.number}
          </span>
          <h3
            className="display-text"
            style={{
              fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)",
              color: "var(--foreground)",
              marginTop: "0.25rem",
            }}
          >
            {nextDisplayName}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", marginTop: "0.25rem" }}>
            {nextDisplayDescriptor}
          </p>
        </div>

        <span
          style={{
            width: 48,
            height: 48,
            minWidth: 48,
            minHeight: 48,
            borderRadius: "50%",
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            color: "var(--foreground)",
            flexShrink: 0,
            transition: "transform 250ms ease, background 250ms ease",
          }}
        >
          →
        </span>
      </Link>
    </div>
  );
}
