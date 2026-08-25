import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ProjectItem } from "@/types/portfolio";
import { useCursor } from "@/components/CustomCursor";
import { ProjectMeta } from "./ProjectMeta";
import { ViewLink } from "./ViewLink";

interface ProjectSplitCardProps {
  project: ProjectItem;
}

export function ProjectSplitCard({ project }: ProjectSplitCardProps) {
  const [hovered, setHovered] = useState(false);
  const { setVariant, setPreview, reset } = useCursor();

  const handlePointerEnter = () => {
    setHovered(true);
    setVariant("view", "VIEW");
    setPreview({ src: project.image, label: project.name, sub: project.year });
  };

  const handlePointerLeave = () => {
    setHovered(false);
    reset();
  };

  return (
    <article
      data-cursor="project"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        onClick={handlePointerLeave}
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.25fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="split-card-grid"
        >
          <div>
            <ProjectMeta project={project} hovered={hovered} />
            <ViewLink hovered={hovered} slug={project.slug} style={{ marginTop: "2rem" }} />
          </div>

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
        </div>
      </Link>

      <style>{`
        .split-card-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        @media (min-width: 768px) {
          .split-card-grid { grid-template-columns: 1fr 1.25fr !important; gap: 3.5rem !important; }
        }
      `}</style>
    </article>
  );
}
