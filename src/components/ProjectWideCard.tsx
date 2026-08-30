import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ProjectItem } from "@/types/portfolio";
import { useCursor } from "@/components/CustomCursor";
import { useI18n } from "@/lib/i18n";
import { ProjectMeta } from "./ProjectMeta";

interface ProjectWideCardProps {
  project: ProjectItem;
}

export function ProjectWideCard({ project }: ProjectWideCardProps) {
  const [hovered, setHovered] = useState(false);
  const { setVariant, setPreview, reset } = useCursor();
  const { t, lang } = useI18n();

  const displayName =
    lang === "uz" ? (project.name_uz ?? project.name) :
    lang === "ru" ? (project.name_ru ?? project.name) :
    project.name;

  const handleEnter = () => {
    setHovered(true);
    setVariant("view", t("cursor_view"));
    setPreview({ src: project.image, label: displayName, sub: project.year });
  };

  const handleLeave = () => {
    setHovered(false);
    reset();
  };

  return (
    <article
      data-cursor="project"
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ position: "relative" }}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        onClick={handleLeave}
        onPointerEnter={handleEnter}
        onMouseEnter={handleEnter}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <ProjectMeta project={project} hovered={hovered} />

        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--border-color)",
              background: "var(--surface)",
              aspectRatio: "16 / 10",
              boxShadow: hovered
                ? "0 24px 60px rgba(20, 20, 15, 0.09)"
                : "0 12px 40px rgba(20, 20, 15, 0.05)",
              transition: "box-shadow 400ms ease, border-color 300ms ease",
            }}
          >
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                transform: hovered ? "scale(1.015)" : "scale(1)",
                transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
