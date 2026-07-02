import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl sm:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]"
          >
            {project.slug === "tashkent-parks" ? (
              <a 
                href="https://tashkentparks.uz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 hover:text-primary transition-colors duration-300"
              >
                {project.title}
                <svg 
                  className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              project.title
            )}
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">{t(project.summaryKey)}</p>
        </header>

        {/* Meta */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-3xl bg-hairline">
          {[
            [t("role"), t(project.roleKey)],
            [t("year"), project.year],
            [t("platform"), t(project.platformKey)],
            [t("type"), t(project.typeKey)],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{k}</div>
              <div className="mt-1.5 text-sm font-semibold">{v}</div>
            </div>
          ))}
        </div>

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
          {project.metrics.map((m) => (
            <div key={m.labelKey} className="rounded-3xl bg-surface hairline p-6 shadow-card">
              <div className="text-4xl font-semibold tracking-tight">{t(m.valueKey)}</div>
              <div className="mt-2 text-sm text-muted-foreground">{t(m.labelKey)}</div>
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


        {/* Process */}
        <section className="mt-20 grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t("process")}</h2>
          <div className="rounded-3xl bg-surface hairline p-7 shadow-card">
            <h3 className="text-2xl font-semibold tracking-tight">{t("process_title")}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("process_body")}</p>
          </div>
        </section>

        {/* Mobile Showcase */}
        {project.slug === "tashkent-parks" && (
          <section className="mt-20 grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t("mobile_interface")}</h2>
            
            <div className="grid grid-cols-2 gap-6 sm:gap-12 max-w-2xl mx-auto w-full">
              {/* Phone 1: Catalog */}
              <div className="relative aspect-[9/19.5] rounded-[40px] sm:rounded-[48px] ring-[10px] sm:ring-[14px] ring-zinc-950 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.24)] overflow-hidden bg-zinc-950 border-[3px] border-zinc-800/80 flex flex-col">
                {/* Status Bar Container */}
                <div className="h-9 bg-black w-full relative shrink-0 z-30 flex items-center justify-between px-6 text-white text-[9px] font-semibold tracking-tight select-none">
                  <span>9:41</span>
                  {/* Dynamic Island */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-zinc-900 rounded-full flex items-center justify-between px-2">
                    <div className="w-1 h-1 rounded-full bg-zinc-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Signal */}
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 100 100">
                      <rect x="5" y="65" width="15" height="25" rx="3" />
                      <rect x="28" y="50" width="15" height="40" rx="3" />
                      <rect x="51" y="30" width="15" height="60" rx="3" />
                      <rect x="74" y="10" width="15" height="80" rx="3" />
                    </svg>
                    {/* Wifi */}
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 100 100">
                      <path d="M50 80c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM17.2 47.2c18.1-18.1 47.5-18.1 65.6 0l-7.1 7.1c-14.2-14.2-37.3-14.2-51.4 0l-7.1-7.1zm-14.2-14.2c25.9-25.9 67.9-25.9 93.8 0l-7.1 7.1c-22-22-57.7-22-79.6 0l-7.1-7.1z" />
                    </svg>
                    {/* Battery */}
                    <div className="w-4 h-2.5 border border-white/80 rounded-md p-0.5 flex items-center">
                      <div className="h-full w-full bg-white rounded-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Screen Image */}
                <div className="flex-1 w-full overflow-hidden relative">
                  <img
                    src="/tashkentparks_vr_mobile1.png"
                    alt="VR mobile view close"
                    className="h-full w-full object-cover object-top animate-fade-in"
                  />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 inset-x-0 z-20 flex justify-center">
                  <div className="w-28 h-1 bg-white/95 rounded-full" />
                </div>
              </div>

              {/* Phone 2: Main VR */}
              <div className="relative aspect-[9/19.5] rounded-[40px] sm:rounded-[48px] ring-[10px] sm:ring-[14px] ring-zinc-950 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.24)] overflow-hidden bg-zinc-950 border-[3px] border-zinc-800/80 flex flex-col">
                {/* Status Bar Container */}
                <div className="h-9 bg-black w-full relative shrink-0 z-30 flex items-center justify-between px-6 text-white text-[9px] font-semibold tracking-tight select-none">
                  <span>9:41</span>
                  {/* Dynamic Island */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-zinc-900 rounded-full flex items-center justify-between px-2">
                    <div className="w-1 h-1 rounded-full bg-zinc-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40" />
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Signal */}
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 100 100">
                      <rect x="5" y="65" width="15" height="25" rx="3" />
                      <rect x="28" y="50" width="15" height="40" rx="3" />
                      <rect x="51" y="30" width="15" height="60" rx="3" />
                      <rect x="74" y="10" width="15" height="80" rx="3" />
                    </svg>
                    {/* Wifi */}
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 100 100">
                      <path d="M50 80c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM17.2 47.2c18.1-18.1 47.5-18.1 65.6 0l-7.1 7.1c-14.2-14.2-37.3-14.2-51.4 0l-7.1-7.1zm-14.2-14.2c25.9-25.9 67.9-25.9 93.8 0l-7.1 7.1c-22-22-57.7-22-79.6 0l-7.1-7.1z" />
                    </svg>
                    {/* Battery */}
                    <div className="w-4 h-2.5 border border-white/80 rounded-md p-0.5 flex items-center">
                      <div className="h-full w-full bg-white rounded-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Screen Image */}
                <div className="flex-1 w-full overflow-hidden relative">
                  <img
                    src="/tashkentparks_vr_mobile2.png"
                    alt="VR mobile view distance"
                    className="h-full w-full object-cover object-top animate-fade-in"
                  />
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 inset-x-0 z-20 flex justify-center">
                  <div className="w-28 h-1 bg-white/95 rounded-full" />
                </div>
              </div>
            </div>
          </section>
        )}

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
