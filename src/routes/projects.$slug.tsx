import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, Sparkles } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectMockup } from "@/components/ProjectMockup";
import { LikeButton } from "@/components/LikeButton";
import { FeedbackModal } from "@/components/FeedbackModal";
import { findProject, projects } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Case Study` },
          { name: "description", content: "Case study" },
          { property: "og:title", content: `${loaderData.project.title} — Case Study` },
          { property: "og:description", content: "Case study" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <p className="text-muted-foreground">Project not found.</p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center text-center px-4">
      <div>
        <p className="text-muted-foreground">{error.message}</p>
        <Link to="/" className="mt-4 inline-block underline">Go home</Link>
      </div>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const { t } = useI18n();
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> {t("back_to_work")}
        </Link>

        <header className="mt-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface hairline px-3 py-1 text-[11px] font-semibold text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t(project.categoryKey)}
          </span>
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-balance text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
          >
            {project.title}
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t(project.summaryKey)}</p>
        </header>

        {/* Meta */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-hairline">
          {[
            [t("role"), project.role],
            [t("year"), project.year],
            [t("platform"), project.platform],
            ["Type", "Concept / University"],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{k}</div>
              <div className="mt-1.5 text-sm font-semibold">{v}</div>
            </div>
          ))}
        </div>

        {/* Hero mockup */}
        {/* Hero mockup */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[28px] hairline shadow-card bg-surface flex flex-col"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Browser Header Bar */}
          <div className="flex items-center gap-1.5 px-5 py-3 bg-surface-2/80 border-b border-hairline shrink-0">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <div className="mx-auto bg-surface px-12 py-1 rounded-md text-[10px] text-muted-foreground font-mono truncate max-w-[200px]">
              {project.slug === "tashkent-parks" ? "tashkentparks.uz/catalog" : ""}
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden">
            {project.slug === "tashkent-parks" ? (
              <img
                src="/tashkentparks_inner.jpg"
                alt={project.title}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <ProjectMockup accent={project.accent} variant="dashboard" className="h-full w-full" />
            )}
          </div>
        </motion.div>

        {/* Metrics */}
        <section className="mt-16 grid sm:grid-cols-3 gap-4">
          {project.metrics.map((m: { label: string; value: string }) => (
            <div key={m.label} className="rounded-3xl bg-surface hairline p-6 shadow-card">
              <div className="text-4xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </section>

        {/* Overview */}
        <section className="mt-20 grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t("overview")}</h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>{t(project.challengeKey)}</p>
            <p className="text-muted-foreground">{t(project.outcomeKey)}</p>
          </div>
        </section>


        {/* Interactive */}
        <section className="mt-24 flex flex-col items-center gap-4">
          <LikeButton slug={project.slug} />
          <button
            onClick={() => setFeedbackOpen(true)}
            className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors"
          >
            {t("leave_feedback")}
          </button>
        </section>

        {/* Next */}
        <section className="mt-24 pt-10 border-t border-hairline">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Next</span>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="mt-3 group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"
          >
            <h3 className="truncate text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-primary transition-colors">
              {next.title}
            </h3>
            <span className="shrink-0 grid h-12 w-12 place-items-center rounded-full hairline bg-surface group-hover:bg-foreground group-hover:text-background transition-all">
              →
            </span>
          </Link>
        </section>
      </article>

      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} projectSlug={project.slug} />
      <Footer />
    </div>
  );
}
