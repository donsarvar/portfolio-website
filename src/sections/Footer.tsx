import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer>
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "3.5rem 3.5rem",
        }}
        className="footer-container"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "2rem",
          }}
          className="footer-row"
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 28,
                height: 28,
                borderRadius: 7,
                border: "1px solid var(--border-color)",
                fontSize: "0.5625rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "var(--foreground)",
                background: "var(--elevated)",
                flexShrink: 0,
              }}
            >
              SS
            </span>
            <span className="meta-label" style={{ color: "var(--foreground)", fontWeight: 600 }}>
              Sarvarbek Salimov
            </span>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem", justifyContent: "flex-end" }}>
            <a
              href="/#work"
              className="meta-label"
              style={{
                color: "var(--fg-muted)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              {t("nav_work")}
            </a>
            <Link
              to="/about"
              className="meta-label"
              style={{
                color: "var(--fg-muted)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              {t("nav_about")}
            </Link>
            <a
              href="/#contact"
              className="meta-label"
              style={{
                color: "var(--fg-muted)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
            >
              {t("nav_contact")}
            </a>
          </nav>
        </div>

        {/* Bottom meta */}
        <div
          style={{
            marginTop: "2.25rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span className="meta-label" style={{ color: "var(--fg-subtle)" }}>
            © 2026 Sarvarbek Salimov. {t("footer_rights")}
          </span>
          <span className="meta-label" style={{ color: "var(--fg-subtle)" }}>
            {t("footer_city")}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-container { padding: 2.5rem 1.5rem !important; }
          .footer-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </footer>
  );
}
