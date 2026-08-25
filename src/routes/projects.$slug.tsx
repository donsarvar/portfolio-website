import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/sections/Footer";
import { CaseStudyMeta } from "@/components/CaseStudyMeta";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { CaseStudyMetrics } from "@/components/CaseStudyMetrics";
import { CaseStudyNext } from "@/components/CaseStudyNext";
import { PORTFOLIO_PROJECTS, findPortfolioProject } from "@/data/portfolioData";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findPortfolioProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Case Study` },
          { name: "description", content: loaderData.project.descriptor },
          { property: "og:title", content: `${loaderData.project.name} — Case Study` },
          { property: "og:description", content: loaderData.project.descriptor },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--background)" }}>
      <div style={{ textAlign: "center" }}>
        <p className="meta-label">Project not found.</p>
        <Link to="/" style={{ marginTop: "1rem", display: "inline-block", color: "var(--accent)" }}>
          Back to home
        </Link>
      </div>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();
  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PORTFOLIO_PROJECTS[(currentIndex + 1) % PORTFOLIO_PROJECTS.length];

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Nav />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "8rem 2.5rem 6rem" }}>
        {/* Back Link */}
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "var(--fg-muted)",
            fontSize: "0.8125rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span>←</span>
          <span>Ishlarga qaytish</span>
        </Link>

        {/* Header with Title & Live Link Button */}
        <header
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div>
            <h1
              className="display-text"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                color: "var(--foreground)",
              }}
            >
              {project.name}
            </h1>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.875rem 1.625rem",
                borderRadius: 13,
                background: "var(--foreground)",
                color: "var(--elevated)",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                boxShadow: "0 8px 24px rgba(23, 23, 22, 0.12)",
                transition: "transform 250ms ease",
              }}
            >
              <span>Live Website</span>
              <span>↗</span>
            </a>
          )}
        </header>

        {/* Metadata Grid */}
        <CaseStudyMeta project={project} />

        {/* Browser Frame Mockup */}
        <div
          style={{
            marginTop: "3.5rem",
            borderRadius: 22,
            overflow: "hidden",
            border: "1px solid var(--border-color)",
            background: "var(--surface)",
            boxShadow: "0 24px 64px rgba(20, 20, 15, 0.08)",
          }}
        >
          <div
            style={{
              padding: "0.75rem 1.25rem",
              background: "rgba(255, 255, 255, 0.4)",
              borderBottom: "1px solid var(--border-color)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
          </div>
          <img src={project.image} alt={project.alt} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* 3-Column Content (Overview / Challenge / Solution) */}
        <CaseStudyContent
          overview={project.overview}
          challenge={project.challenge}
          solution={project.solution}
        />

        {/* Metrics Grid */}
        <CaseStudyMetrics metrics={project.metrics} />

        {/* Next Project Transition */}
        <CaseStudyNext nextProject={nextProject} />
      </main>

      <Footer />
    </div>
  );
}
