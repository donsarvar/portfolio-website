export type ProjectLayout = "wide" | "split" | "offset" | "gallery";

export interface ProjectItem {
  number: string;
  slug: string;
  name: string;
  name_uz?: string;
  name_ru?: string;
  descriptor: string;
  descriptor_uz?: string;
  descriptor_ru?: string;
  meta: string[];
  year: string;
  image: string;
  caseStudyImage?: string;
  alt: string;
  layout: ProjectLayout;
  liveUrl?: string;
  role?: string;
  role_uz?: string;
  role_ru?: string;
  client?: string;
  client_uz?: string;
  client_ru?: string;
  timeline?: string;
  timeline_uz?: string;
  timeline_ru?: string;
  platform?: string;
  platform_uz?: string;
  platform_ru?: string;
  type?: string;
  type_uz?: string;
  type_ru?: string;
  overview?: string;
  overview_uz?: string;
  overview_ru?: string;
  challenge?: string;
  challenge_uz?: string;
  challenge_ru?: string;
  solution?: string;
  solution_uz?: string;
  solution_ru?: string;
  metrics?: { label: string; value: string; label_uz?: string; label_ru?: string }[];
  gallery?: string[];
}

export interface CapabilityItem {
  number: string;
  title: string;
  description?: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export type CursorVariant = "default" | "view" | "open";

export interface ProjectPreviewData {
  src?: string;
  label: string;
  sub?: string;
}
