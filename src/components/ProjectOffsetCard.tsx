import { useState } from "react";
import type { ProjectItem } from "@/types/portfolio";
import { useCursor } from "@/components/CustomCursor";
import { ProjectMeta } from "./ProjectMeta";
import { ViewLink } from "./ViewLink";

interface ProjectOffsetCardProps {
  project: ProjectItem;
}

export function ProjectOffsetCard({ project }: ProjectOffsetCardProps) {
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
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "2rem",
          alignItems: "start",
        }}
        className="offset-card-grid"
      >
        <div style={{ gridColumn: "1 / 5", gridRow: 1 }} className="offset-card-meta">
          <ProjectMeta project={project} hovered={hovered} />
          <ViewLink hovered={hovered} style={{ marginTop: "2rem" }} />
        </div>

        <div
          style={{
            gridColumn: "5 / 13",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--border-color)",
            background: "var(--surface)",
            boxShadow: hovered
              ? "0 24px 60px rgba(20, 20, 15, 0.09)"
              : "0 12px 40px rgba(20, 20, 15, 0.05)",
            transition: "box-shadow 400ms ease, border-color 300ms ease",
          }}
          className="offset-card-visual"
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

      <style>{`
        .offset-card-grid { display: flex !important; flex-direction: column !important; gap: 2rem !important; }
        .offset-card-meta, .offset-card-visual { grid-column: unset !important; grid-row: unset !important; }
        @media (min-width: 768px) {
          .offset-card-grid { display: grid !important; grid-template-columns: repeat(12, 1fr) !important; gap: 2rem !important; }
          .offset-card-meta { grid-column: 1 / 5 !important; grid-row: 1 !important; }
          .offset-card-visual { grid-column: 5 / 13 !important; }
        }
      `}</style>
    </article>
  );
}
