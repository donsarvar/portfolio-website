import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { ProjectMockup } from "./ProjectMockup";
import type { Project } from "@/lib/projects";

const spanClasses: Record<Project["span"], string> = {
  lg: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
  md: "sm:col-span-1 lg:col-span-5",
  sm: "sm:col-span-1 lg:col-span-4",
  half: "sm:col-span-1 lg:col-span-6",
  xl: "sm:col-span-1 lg:col-span-8",
  wide: "sm:col-span-2 lg:col-span-12",
  tall: "sm:col-span-1 lg:col-span-4 lg:row-span-2",
};

const variantFor = (s: Project["span"]) =>
  s === "lg" ? "phone" : (s === "wide" || s === "xl") ? "wide" : (s === "md" || s === "half") ? "dashboard" : "card";

export function BentoCard({ project, index }: { project: Project; index: number }) {
  const { t } = useI18n();
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${spanClasses[project.span]} col-span-1`}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="block h-full"
      >
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-[360px] sm:h-full sm:min-h-[320px] flex-col overflow-hidden rounded-[24px] bg-surface hairline shadow-card transition-shadow duration-300 hover:shadow-card-hover"
        >
          <div className="relative h-[65%] sm:h-[68%] min-h-[180px] sm:min-h-[200px] flex-1">
            <ProjectMockup
              accent={project.accent}
              variant={variantFor(project.span) as never}
              className="h-full w-full"
            />
          </div>
          <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {t(project.categoryKey)}
              </span>
              <h3 className="mt-2.5 truncate text-lg font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
            </div>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface-2 text-muted-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
