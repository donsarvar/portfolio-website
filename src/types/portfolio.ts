export type ProjectLayout = "wide" | "split" | "offset" | "gallery";

export interface ProjectItem {
  number: string;
  slug: string;
  name: string;
  descriptor: string;
  meta: string[];
  year: string;
  image: string;
  alt: string;
  layout: ProjectLayout;
  externalLink?: string;
  details?: {
    overview?: string;
    role?: string;
    metrics?: { label: string; value: string }[];
  };
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
