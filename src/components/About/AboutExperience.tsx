import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  desc: string;
}

export function AboutExperience() {
  const { t } = useI18n();

  const experiences: ExperienceItem[] = [
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
    {
      company: "Realsoft",
      role: t("about_role_realsoft"),
      period: t("about_period_realsoft"),
      desc: t("about_desc_realsoft"),
    },
  ];

  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold tracking-tight">{t("about_experience")}</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-surface hairline p-6 sm:p-7 shadow-sm hover:shadow-card transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="font-semibold text-base">{exp.role}</h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <div className="text-sm font-medium text-primary mb-3">{exp.company}</div>
            <p className="text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
