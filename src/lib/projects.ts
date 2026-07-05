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
  metrics: { labelKey: DictKey; valueKey: DictKey }[];
};

export const projects: Project[] = [
  {
    slug: "tashkent-parks",
    title: "tashkentparks.uz",
    categoryKey: "cat_portal",
    span: "wide",
    accent: "linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)",
    year: "2026",
    roleKey: "proj_tp_role",
    platformKey: "proj_tp_platform",
    typeKey: "proj_tp_type",
    summaryKey: "proj_tp_summary",
    challengeKey: "proj_tp_challenge",
    outcomeKey: "proj_tp_outcome",
    metrics: [
      { labelKey: "metric_format", valueKey: "val_360_vr" },
      { labelKey: "metric_responsiveness", valueKey: "val_mobile_pc" },
      { labelKey: "metric_status", valueKey: "val_launched" },
    ],
  },
  {
    slug: "atlas-medical",
    title: "Atlas Medical",
    categoryKey: "cat_admin_panel",
    span: "wide",
    accent: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    year: "2026",
    roleKey: "proj_am_role",
    platformKey: "proj_am_platform",
    typeKey: "proj_am_type",
    summaryKey: "proj_am_summary",
    challengeKey: "proj_am_challenge",
    outcomeKey: "proj_am_outcome",
    metrics: [
      { labelKey: "metric_platform", valueKey: "val_web" },
      { labelKey: "metric_type", valueKey: "val_concept_design" },
      { labelKey: "metric_status", valueKey: "val_in_progress" },
    ],
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
