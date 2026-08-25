import type { ProjectItem } from "@/types/portfolio";

interface ProjectMetaProps {
  project: ProjectItem;
  hovered: boolean;
}

export function ProjectMeta({ project, hovered }: ProjectMetaProps) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
        <span
          className="meta-label"
          style={{
            color: hovered ? "var(--accent)" : "var(--fg-subtle)",
            transition: "color 280ms ease",
            paddingTop: "0.25rem",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          {project.number}
        </span>
        <div style={{ minWidth: 0 }}>
          <h3
            className="display-text"
            style={{
              fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
              color: "var(--foreground)",
              transform: hovered ? "translateX(6px)" : "none",
              transition: "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              marginTop: "0.375rem",
              fontSize: "0.9375rem",
              color: "var(--fg-muted)",
              lineHeight: 1.5,
            }}
          >
            {project.descriptor}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "1.25rem",
          marginTop: "1.25rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        {project.meta.map((tag) => (
          <span key={tag} className="meta-label">
            {tag}
          </span>
        ))}
        <span
          className="meta-label"
          style={{
            marginLeft: "auto",
            color: "var(--fg-subtle)",
          }}
        >
          {project.year}
        </span>
      </div>
    </div>
  );
}
