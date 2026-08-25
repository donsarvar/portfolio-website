import type { ProjectPreviewData } from "@/types/portfolio";

interface CursorPreviewCardProps {
  preview: ProjectPreviewData | null;
  forwardRef: React.RefObject<HTMLDivElement | null>;
}

export function CursorPreviewCard({ preview, forwardRef }: CursorPreviewCardProps) {
  return (
    <div
      ref={forwardRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9998,
        pointerEvents: "none",
        opacity: preview ? 1 : 0,
        transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
    >
      <div
        style={{
          width: 260,
          background: "var(--glass-bg)",
          backdropFilter: "blur(24px) saturate(140%)",
          WebkitBackdropFilter: "blur(24px) saturate(140%)",
          border: "1px solid var(--glass-border)",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 16px 48px rgba(20, 20, 15, 0.12)",
        }}
      >
        <div
          style={{
            height: 136,
            background: "var(--surface)",
            borderBottom: "1px solid var(--border-color)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {preview?.src ? (
            <img
              src={preview.src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span className="meta-label">PREVIEW</span>
          )}
        </div>

        <div
          style={{
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--foreground)",
              letterSpacing: "-0.01em",
            }}
          >
            {preview?.label}
          </span>
          <span className="meta-label" style={{ color: "var(--fg-subtle)", fontSize: "0.6875rem" }}>
            {preview?.sub}
          </span>
        </div>
      </div>
    </div>
  );
}
