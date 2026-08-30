import type { ProjectItem } from "@/types/portfolio";
import { useI18n } from "@/lib/i18n";

interface ProjectMetaProps {
  project: ProjectItem;
  hovered: boolean;
}

export function ProjectMeta({ project, hovered }: ProjectMetaProps) {
  const { lang } = useI18n();

  const displayName =
    lang === "uz" ? (project.name_uz ?? project.name) :
    lang === "ru" ? (project.name_ru ?? project.name) :
    project.name;

  const displayDescriptor =
    lang === "uz" ? (project.descriptor_uz ?? project.descriptor) :
    lang === "ru" ? (project.descriptor_ru ?? project.descriptor) :
    project.descriptor;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.35rem, 2.2vw, 2rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: hovered ? "var(--foreground)" : "var(--fg-subtle)",
            transition: "color 280ms ease",
          }}
        >
          {project.number}
        </span>
        <h3
          className="display-text"
          style={{
            fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
            color: "var(--foreground)",
            transform: hovered ? "translateX(6px)" : "none",
            transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {displayName}
        </h3>
      </div>
    </div>
  );
}
