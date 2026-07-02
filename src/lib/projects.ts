import type { DictKey } from "./i18n";

export type Project = {
  slug: string;
  title: string;
  categoryKey: DictKey;
  span: "lg" | "md" | "sm" | "wide" | "tall" | "xl" | "half";
  accent: string; // gradient
  year: string;
  role: string;
  platform: string;
  summaryKey: DictKey;
  challengeKey: DictKey;
  outcomeKey: DictKey;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "tashkent-parks",
    title: "tashkentparks.uz",
    categoryKey: "cat_portal",
    span: "wide",
    accent: "linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)",
    year: "2025",
    role: "UI/UX Designer (Concept & Research)",
    platform: "Web (Fully Responsive)",
    summaryKey: "proj_tp_summary",
    challengeKey: "proj_tp_challenge",
    outcomeKey: "proj_tp_outcome",
    metrics: [
      { label: "Format", value: "360° VR" },
      { label: "Responsiveness", value: "Mobile + PC" },
      { label: "Status", value: "Concept" },
    ],
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
