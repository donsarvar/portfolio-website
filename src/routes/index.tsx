import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BentoCard } from "@/components/BentoCard";
import { projects } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarvarbek Salimov — UI/UX Designer in Tashkent" },
      { name: "description", content: "Selected case studies in fintech, mobile and SaaS — by Sarvarbek Salimov." },
      { property: "og:title", content: "Sarvarbek Salimov — UI/UX Designer" },
      { property: "og:description", content: "Selected case studies in fintech, mobile and SaaS." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 sm:pt-48 pb-24">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60">
          <div className="absolute left-1/2 top-20 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)" }} />
        </div>

        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full hairline bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {t("hero_available")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl text-balance text-[40px] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02]"
        >
          {t("hero_greeting")}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
            {t("hero_cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="mailto:hello@sarvarbeksalimov.com" className="inline-flex items-center gap-2 rounded-full hairline bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface-2">
            {t("hero_secondary")}
          </a>
        </motion.div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:justify-between">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3 w-3" /> 2022 — 2026
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">{t("work_title")}</h2>
          </div>
          <p className="hidden sm:block max-w-sm text-sm text-muted-foreground">{t("work_subtitle")}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 auto-rows-[220px]">
          {projects.map((p, i) => (
            <BentoCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
