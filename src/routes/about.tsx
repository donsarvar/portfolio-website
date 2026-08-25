import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Palette, Sparkles, Layers, Brain } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/sections/Footer";
import { useI18n } from "@/lib/i18n";
import { AboutExperience } from "@/components/About/AboutExperience";
import { AboutEduConnect } from "@/components/About/AboutEduConnect";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sarvarbek Salimov" },
      { name: "description", content: "Learn more about Sarvarbek Salimov, UI/UX Designer." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();

  const interests = [
    { name: t("interest_kurash"), icon: Palette, color: "text-amber-500", bg: "bg-amber-500/10" },
    { name: t("interest_running"), icon: Sparkles, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { name: t("interest_books"), icon: Layers, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: t("interest_hiking"), icon: Brain, color: "text-rose-500", bg: "bg-rose-500/10" },
  ];

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden relative">
      <Nav />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-0">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square w-full sm:w-[280px] max-h-[260px] sm:max-h-none mx-auto sm:mx-0 rounded-3xl overflow-hidden hairline shadow-card group bg-surface"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-2" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_60%)]" />
            
            <img 
              src="/profile_photo.jpg" 
              alt="Sarvarbek Salimov profile" 
              className="absolute inset-0 h-full w-full object-cover select-none transition-transform duration-500 group-hover:scale-105" 
            />
          </motion.div>

          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface hairline text-xs text-muted-foreground mb-4">
              <MapPin className="h-3.5 w-3.5" />
              <span>{t("about_location")}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {t("about_title")}
            </h1>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>{t("about_bio")}</p>
            </div>
          </div>
        </section>

        {/* 2x2 BALANCED GRID */}
        <div className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-stretch border-t border-border/40 pt-16 mb-20">
          {/* EXPERIENCE */}
          <div className="lg:order-1">
            <AboutExperience />
          </div>

          {/* INTERESTS */}
          <section className="lg:order-2">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold tracking-tight">{t("about_interests")}</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {interests.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl bg-surface hairline p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all"
                  >
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* EDUCATION & CONNECT */}
          <AboutEduConnect />
        </div>
      </main>

      <Footer />
    </div>
  );
}
