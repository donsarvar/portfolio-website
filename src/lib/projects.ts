import type { DictKey } from "./i18n";

export type Project = {
  slug: string;
  title: string;
  categoryKey: DictKey;
  span: "lg" | "md" | "sm" | "wide" | "tall" | "xl" | "half";
  accent: string; // gradient
  year: string;
  roleKey: DictKey;
  platformKey: DictKey;
  typeKey: DictKey;
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
    roleKey: "proj_tp_role",
    platformKey: "proj_tp_platform",
    typeKey: "proj_tp_type",
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
