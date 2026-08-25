import { useState } from "react";
import type { ProjectItem } from "@/types/portfolio";
import { useCursor } from "@/components/CustomCursor";
import { ProjectMeta } from "./ProjectMeta";
import { ViewLink } from "./ViewLink";

interface ProjectWideCardProps {
  project: ProjectItem;
}

export function ProjectWideCard({ project }: ProjectWideCardProps) {
  const [hovered, setHovered] = useState(false);
  const { setVariant, setPreview, reset } = useCursor();

  return (
    <article
      data-cursor="project"
      onMouseEnter={() => {
        setHovered(true);
        setVariant("view", "VIEW");
        setPreview({ src: project.image, label: project.name, sub: project.year });
      }}
      onMouseLeave={() => {
        setHovered(false);
        reset();
      }}
      style={{ position: "relative" }}
    >
      <ProjectMeta project={project} hovered={hovered} />

      <div style={{ marginTop: "1.75rem", position: "relative" }}>
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--border-color)",
            background: "var(--surface)",
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
              height: "auto",
              display: "block",
              transform: hovered ? "scale(1.015)" : "scale(1)",
              transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>

        {/* Floating quiet luxury glass metadata */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            background: "var(--glass-bg)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid var(--glass-border)",
            borderRadius: 14,
            padding: "0.875rem 1.25rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem 1.25rem",
            maxWidth: 320,
            boxShadow: "0 8px 32px rgba(20, 20, 15, 0.06)",
            opacity: hovered ? 1 : 0.85,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {project.meta.map((tag) => (
            <span key={tag} className="meta-label" style={{ color: "rgba(23, 23, 22, 0.65)" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ViewLink hovered={hovered} />
    </article>
  );
}
