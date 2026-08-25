import { Link } from "@tanstack/react-router";

interface ViewLinkProps {
  hovered: boolean;
  slug?: string;
  text?: string;
  style?: React.CSSProperties;
}

export function ViewLink({
  hovered,
  slug,
  text = "View case study",
  style: customStyle,
}: ViewLinkProps) {
  const content = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "1.25rem",
        cursor: "pointer",
        ...customStyle,
      }}
    >
      <span
        className="meta-label"
        style={{
          color: "var(--foreground)",
          fontWeight: 600,
        }}
      >
        {text}
      </span>
      <span
        style={{
          color: "var(--accent)",
          fontSize: "0.8125rem",
          transform: hovered ? "translate(3px, -3px)" : "none",
          transition: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
          display: "inline-block",
        }}
      >
        ↗
      </span>
    </div>
  );

  if (slug) {
    return (
      <Link
        to="/projects/$slug"
        params={{ slug }}
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        {content}
      </Link>
    );
  }

  return content;
}
