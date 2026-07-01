import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, MapPin, Swords, Footprints, BookOpen, Mountain, Send, Instagram, Linkedin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

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

  const experiences = [
    {
      company: "Uzinfocom",
      role: t("about_role_designer"),
      period: "2025 — " + t("about_present"),
      desc: t("about_desc_designer"),
    },
    {
      company: "Uzinfocom",
      role: t("about_role_intern"),
      period: t("about_period_intern"),
      desc: t("about_desc_intern"),
    },
  ];

  const education = {
    school: t("about_edu_school"),
    degree: t("about_edu_degree"),
    period: "2022 — 2026",
  };

  const interests = [
    { name: t("interest_kurash"), icon: Swords, color: "text-red-500", bg: "bg-red-500/10" },
    { name: t("interest_running"), icon: Footprints, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: t("interest_books"), icon: BookOpen, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: t("interest_hiking"), icon: Mountain, color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square w-full sm:w-[280px] rounded-3xl overflow-hidden hairline shadow-card group bg-surface"
          >
            {/* Background gradient for placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-2" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_60%)]" />
            
            {/* Real photo can go here */}
            {/* <img src="/avatar.jpg" alt={t("about_photo_alt")} className="absolute inset-0 h-full w-full object-cover" /> */}
            
            <div className="absolute inset-0 grid place-items-center opacity-30 group-hover:opacity-100 transition-opacity">
              <span className="text-3xl font-bold text-muted-foreground">SS</span>
            </div>
          </motion.div>

          <div className="pt-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Sarvarbek Salimov</h1>
              <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">{t("about_location")}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-xl sm:text-2xl font-medium tracking-tight text-balance leading-snug"
            >
              {t("about_title")}
            </motion.p>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl"
            >
              {t("about_bio")}
            </motion.p>
          </div>
        </section>

        <div className="mt-24 grid lg:grid-cols-[1fr_300px] gap-x-12 lg:gap-x-16 gap-y-20 items-stretch">
          {/* EXPERIENCE */}
          <section className="lg:order-1">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold tracking-tight">{t("about_experience")}</h2>
            </div>
            <div className="space-y-8 pl-4 border-l border-hairline">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-6"
                >
                  <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{exp.period}</div>
                  <h3 className="text-base font-semibold">{exp.role}</h3>
                  <div className="text-sm font-medium text-primary mb-3">{exp.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* INTERESTS */}
          <section className="lg:order-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">{t("about_interests")}</h2>
            <div className="grid grid-cols-2 gap-3">
              {interests.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ scale: 0.9, opacity: 0 }}
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

          {/* EDUCATION */}
          <section className="lg:order-3 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold tracking-tight">{t("about_education")}</h2>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-6 sm:p-8 hairline shadow-card flex-1 flex flex-col justify-center"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{education.period}</div>
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
            </motion.div>
          </section>

          {/* CONNECT */}
          <section className="lg:order-4 flex flex-col h-full">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">{t("about_connect")}</h2>
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <a href="https://instagram.com/sarvarbeksalimov" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl bg-surface hairline p-4 hover:bg-surface-2 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-pink-500/10 text-pink-500 grid place-items-center">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">Instagram</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              
              <a href="https://t.me/sarvarbeksalimov" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl bg-surface hairline p-4 hover:bg-surface-2 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-500 grid place-items-center">
                    <Send className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">Telegram</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a href="https://linkedin.com/in/sarvarbeksalimov" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl bg-surface hairline p-4 hover:bg-surface-2 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-500/10 text-indigo-500 grid place-items-center">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">LinkedIn</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
