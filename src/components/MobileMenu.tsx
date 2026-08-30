import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useI18n();

  if (!open) return null;

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.40)",
        padding: "1.25rem 2rem 1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        background: "rgba(248, 246, 241, 0.96)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <Link
        to="/"
        onClick={onClose}
        className="meta-label"
        style={{
          color: "var(--foreground)",
          textDecoration: "none",
          fontSize: "0.8125rem",
          letterSpacing: "0.12em",
        }}
      >
        {t("nav_work")}
      </Link>
      <Link
        to="/about"
        onClick={onClose}
        className="meta-label"
        style={{
          color: "var(--fg-muted)",
          textDecoration: "none",
          fontSize: "0.8125rem",
          letterSpacing: "0.12em",
        }}
      >
        {t("nav_about")}
      </Link>
      <a
        href="mailto:hello@sarvarbeksalimov.uz"
        onClick={onClose}
        className="meta-label"
        style={{
          color: "var(--fg-muted)",
          textDecoration: "none",
          fontSize: "0.8125rem",
          letterSpacing: "0.12em",
        }}
      >
        {t("nav_contact")}
      </a>
    </div>
  );
}
