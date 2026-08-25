import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Instagram, Linkedin, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function AboutEduConnect() {
  const { t } = useI18n();

  const education = {
    school: t("about_edu_school"),
    degree: t("about_edu_degree"),
    period: "2022 — 2026",
  };

  return (
    <>
      {/* EDUCATION */}
      <section className="lg:order-3 lg:flex lg:flex-col lg:h-full">
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
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            {education.period}
          </div>
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{education.school}</p>
        </motion.div>
      </section>

      {/* CONNECT */}
      <section className="lg:order-4 lg:flex lg:flex-col lg:h-full">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          {t("about_connect")}
        </h2>
        <div className="space-y-3">
          <a
            href="https://instagram.com/sarvarsalimovv"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-surface hairline p-4 hover:bg-surface-2 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-pink-500/10 text-pink-500 grid place-items-center">
                <Instagram className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold">Instagram</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>

          <a
            href="https://t.me/sarvarsalimovv"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-surface hairline p-4 hover:bg-surface-2 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-500 grid place-items-center">
                <Send className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold">Telegram</span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/sarvarbek-salimov-87a78b317/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl bg-surface hairline p-4 hover:bg-surface-2 transition-colors"
          >
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
    </>
  );
}
