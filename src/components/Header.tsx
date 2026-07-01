import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n, type Lang } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Header() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();
  const langs: Lang[] = ["uz", "ru", "en"];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 shadow-card">
          <Link to="/" className="flex items-center gap-2 pl-1" onClick={() => setMobileOpen(false)}>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background text-[11px] font-bold">
              SS
            </span>
            <span className="text-sm font-semibold tracking-tight">sarvarbeksalimov</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-6">
              <Link
                to="/"
                activeProps={{ className: "text-foreground font-semibold" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="text-sm font-medium hover:text-foreground transition-colors"
              >
                {t("nav_work")}
              </Link>
              <Link
                to="/about"
                activeProps={{ className: "text-foreground font-semibold" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="text-sm font-medium hover:text-foreground transition-colors"
              >
                {t("nav_about")}
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <div className="hairline flex rounded-full p-0.5 bg-surface-2/60">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`relative px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full transition-colors ${
                      lang === l ? "text-background" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang === l && (
                      <motion.span
                        layoutId="lang-pill"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{l}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="hairline grid h-9 w-9 place-items-center rounded-full bg-surface-2/60 text-foreground transition-colors hover:bg-surface-2"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className="sm:hidden hairline grid h-9 w-9 place-items-center rounded-full bg-surface-2/60 text-foreground transition-colors hover:bg-surface-2"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 glass rounded-3xl px-6 py-5 shadow-card flex flex-col gap-4 sm:hidden"
            >
              <Link
                to="/"
                activeProps={{ className: "text-foreground font-semibold" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="text-base font-medium hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav_work")}
              </Link>
              <Link
                to="/about"
                activeProps={{ className: "text-foreground font-semibold" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="text-base font-medium hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav_about")}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

