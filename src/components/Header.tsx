import { Link } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n, type Lang } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();
  const langs: Lang[] = ["uz", "ru", "en"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 shadow-card">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 pl-1 shrink-0" onClick={() => setMobileOpen(false)}>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground text-background text-[11px] font-bold">
              SS
            </span>
            <span className="text-sm font-semibold tracking-tight">sarvarbeksalimov</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-6 mr-2">
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

            {/* Language dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="hairline flex items-center gap-1 rounded-full px-2.5 py-1.5 bg-surface-2/60 text-[11px] font-semibold uppercase tracking-wider text-foreground hover:bg-surface-2 transition-colors"
              >
                {lang}
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 glass rounded-2xl shadow-card overflow-hidden min-w-[72px] z-50"
                  >
                    {langs.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={`w-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-left transition-colors hover:bg-surface-2 ${
                          lang === l ? "text-foreground bg-surface-2/60" : "text-muted-foreground"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle — desktop only */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="hidden sm:grid hairline h-9 w-9 place-items-center rounded-full bg-surface-2/60 text-foreground transition-colors hover:bg-surface-2"
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
              <div className="pt-2 border-t border-hairline flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {theme === "dark" ? "Qorong'i rejim" : "Yorug' rejim"}
                </span>
                <button
                  onClick={toggle}
                  aria-label="Toggle theme"
                  className="hairline grid h-9 w-9 place-items-center rounded-full bg-surface-2/60 text-foreground transition-colors hover:bg-surface-2"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
