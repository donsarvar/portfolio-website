import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

interface ViewLinkProps {
  hovered: boolean;
  slug?: string;
  text?: string;
  style?: React.CSSProperties;
}

export function ViewLink({
  hovered,
  slug,
  text,
  style: customStyle,
}: ViewLinkProps) {
  const { t } = useI18n();
  const linkLabel = text || t("view_case_study");

  return (
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
        {linkLabel}
      </span>
      <span
        style={{
          color: "var(--foreground)",
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
}
