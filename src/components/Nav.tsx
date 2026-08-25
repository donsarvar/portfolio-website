import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [routerState.location.pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(255, 255, 255, 0.42)" : "rgba(255, 255, 255, 0.22)",
          backdropFilter: `blur(${scrolled ? 24 : 16}px)`,
          WebkitBackdropFilter: `blur(${scrolled ? 24 : 16}px)`,
          borderBottom: `1px solid ${scrolled ? "rgba(255, 255, 255, 0.60)" : "rgba(255, 255, 255, 0.35)"}`,
          boxShadow: scrolled ? "0 4px 24px rgba(20, 20, 15, 0.05)" : "none",
          transition: "background 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
        }}
      >
        <div
          style={{
            maxWidth: 1460,
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "1.5rem",
            height: "3.75rem",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
          >
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 30,
                height: 30,
                borderRadius: 8,
                border: "1px solid var(--border-color)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "var(--foreground)",
                background: "var(--elevated)",
                flexShrink: 0,
              }}
            >
              SS
            </span>
            <span
              className="meta-label hidden-mobile"
              style={{
                color: "var(--foreground)",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              SARVARBEK SALIMOV
            </span>
          </Link>

          {/* Desktop right nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <nav className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
              <NavLink to="/" label={t("nav_work")} />
              <NavLink to="/about" label={t("nav_about")} />
              <a
                href="mailto:hello@sarvarbeksalimov.uz"
                data-cursor="cta"
                className="meta-label"
                style={{
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
              >
                Contact
              </a>
            </nav>

            <LanguageSelector />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="show-mobile"
              style={{
                width: 32,
                height: 32,
                background: "none",
                border: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                padding: 0,
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: "var(--foreground)",
                  transition: "transform 250ms ease",
                  transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: "var(--foreground)",
                  opacity: mobileOpen ? 0 : 1,
                  transition: "opacity 200ms ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: "var(--foreground)",
                  transition: "transform 250ms ease",
                  transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>

      <style>{`
        @media (min-width: 640px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 639px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const routerState = useRouterState();
  const active = routerState.location.pathname === to;
  return (
    <Link
      to={to}
      className="meta-label"
      style={{
        color: active ? "var(--foreground)" : "var(--fg-muted)",
        textDecoration: "none",
        fontWeight: active ? 700 : 500,
        transition: "color 200ms ease",
      }}
    >
      {label}
    </Link>
  );
}
