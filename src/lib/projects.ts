import type { DictKey } from "./i18n";

export type Project = {
  slug: string;
  title: string;
  categoryKey: DictKey;
  span: "lg" | "md" | "sm" | "wide" | "tall";
  accent: string; // gradient
  year: string;
  role: string;
  platform: string;
  summary: string;
  challenge: string;
  outcome: string;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "halo-bank",
    title: "Halo — Neobank App",
    categoryKey: "cat_fintech",
    span: "lg",
    accent: "linear-gradient(135deg,#6366F1 0%,#8B5CF6 50%,#EC4899 100%)",
    year: "2025",
    role: "Lead Product Designer",
    platform: "iOS · Android",
    summary: "A calm, focused neobank experience designed around a single principle: every screen answers one question.",
    challenge: "Legacy banking apps overload users with dashboards. We rebuilt the IA around intents, not accounts.",
    outcome: "Activation up 38%, support tickets down 22% in the first quarter after release.",
    metrics: [
      { label: "Activation", value: "+38%" },
      { label: "Support load", value: "−22%" },
      { label: "App Store", value: "4.8 ★" },
    ],
  },
  {
    slug: "lumen-pos",
    title: "Lumen POS — Redesign",
    categoryKey: "cat_redesign",
    span: "md",
    accent: "linear-gradient(135deg,#0EA5E9 0%,#22D3EE 100%)",
    year: "2024",
    role: "Product Designer",
    platform: "iPad · Web",
    summary: "A point-of-sale system redesigned for one-handed use during peak hours.",
    challenge: "Cashiers couldn’t reach key actions during rush. We rebuilt the gesture model and thumb zone.",
    outcome: "Transactions per hour up 14%, training time halved.",
    metrics: [
      { label: "Throughput", value: "+14%" },
      { label: "Onboarding", value: "−50%" },
      { label: "Errors", value: "−31%" },
    ],
  },
  {
    slug: "atlas-saas",
    title: "Atlas — Analytics Suite",
    categoryKey: "cat_saas",
    span: "md",
    accent: "linear-gradient(135deg,#10B981 0%,#0EA5E9 100%)",
    year: "2024",
    role: "Senior UX",
    platform: "Web",
    summary: "Dashboards that respect attention — built around progressive disclosure and quiet states.",
    challenge: "Analysts drowned in widgets. We introduced a 3-tier hierarchy and a focus mode.",
    outcome: "Time-to-insight reduced by 41% across power users.",
    metrics: [
      { label: "Time-to-insight", value: "−41%" },
      { label: "NPS", value: "+19" },
      { label: "Retention", value: "+12%" },
    ],
  },
  {
    slug: "north-fitness",
    title: "North — Training App",
    categoryKey: "cat_mobile",
    span: "sm",
    accent: "linear-gradient(135deg,#F59E0B 0%,#EF4444 100%)",
    year: "2025",
    role: "Product Designer",
    platform: "iOS",
    summary: "A weight-room companion modeled on the feel of clipping a plate into place.",
    challenge: "Existing trackers felt clinical. We designed for momentum, not data entry.",
    outcome: "Session completion up 27%.",
    metrics: [
      { label: "Completion", value: "+27%" },
      { label: "D30 retention", value: "+18%" },
      { label: "Rating", value: "4.9 ★" },
    ],
  },
  {
    slug: "verse-cms",
    title: "Verse — Editorial CMS",
    categoryKey: "cat_web",
    span: "sm",
    accent: "linear-gradient(135deg,#A855F7 0%,#6366F1 100%)",
    year: "2024",
    role: "UX Lead",
    platform: "Web",
    summary: "A writing surface for journalists, not engineers — keyboard-first, distraction-free.",
    challenge: "Editors avoided the CMS. We rebuilt it around the document, not the schema.",
    outcome: "Time-to-publish down 33%.",
    metrics: [
      { label: "Publish time", value: "−33%" },
      { label: "Drafts/week", value: "+42%" },
      { label: "Adoption", value: "92%" },
    ],
  },
  {
    slug: "kavir-brand",
    title: "Kavir — Product System",
    categoryKey: "cat_branding",
    span: "wide",
    accent: "linear-gradient(135deg,#0F172A 0%,#334155 50%,#6366F1 100%)",
    year: "2025",
    role: "Design Systems",
    platform: "Multi-product",
    summary: "A unified design language across 6 product surfaces — built on tokens, not screenshots.",
    challenge: "Six teams shipping in six directions. We aligned on primitives, not pages.",
    outcome: "Shipping velocity up 2.3× across the org.",
    metrics: [
      { label: "Velocity", value: "2.3×" },
      { label: "Tokens", value: "412" },
      { label: "Teams", value: "6" },
    ],
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
