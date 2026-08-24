import type { ProjectItem, CapabilityItem, ApproachStep } from "@/types/portfolio";
import fitasistImg from "@/assets/fitasist.jpg";
import dhpMobileImg from "@/assets/dhp-mobile.jpg";
import healnixImg from "@/assets/healnix.jpg";

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    number: "01",
    slug: "tashkent-parks",
    name: "Tashkent 360",
    descriptor: "Digital Tourism Platform",
    meta: ["Product Design", "UX / UI", "Web Platform"],
    year: "2026",
    image: "/tashkentparks.jpg",
    alt: "Tashkent 360 virtual tour web platform and interactive panoramic environment",
    layout: "wide",
  },
  {
    number: "02",
    slug: "fitasist",
    name: "FitAsist",
    descriptor: "Fitness & Training Application",
    meta: ["Mobile Design", "UX Flows", "iOS / Android"],
    year: "2025",
    image: fitasistImg,
    alt: "FitAsist mobile fitness application tracking and workout experience",
    layout: "split",
  },
  {
    number: "03",
    slug: "dhp-mobile",
    name: "DHP Mobile",
    descriptor: "Healthcare & Patient Experience",
    meta: ["Product Design", "UX Architecture", "Mobile"],
    year: "2025",
    image: dhpMobileImg,
    alt: "DHP Mobile digital healthcare appointment and records application",
    layout: "offset",
  },
  {
    number: "04",
    slug: "healnix",
    name: "Healnix",
    descriptor: "Clinical Data & Analytics Dashboard",
    meta: ["Design System", "Complex UI", "Web Application"],
    year: "2025",
    image: healnixImg,
    alt: "Healnix comprehensive clinical data and hospital management dashboard",
    layout: "wide",
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  { number: "01", title: "Product Design" },
  { number: "02", title: "UI/UX Design" },
  { number: "03", title: "Design Systems" },
  { number: "04", title: "Mobile Applications" },
  { number: "05", title: "Web Platforms" },
  { number: "06", title: "Prototyping & Motion" },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Foydalanuvchi xulq-atvori, biznes talablari va texnik imkoniyatlarni chuqur o'rganish.",
  },
  {
    number: "02",
    title: "Structure",
    description: "Informatsion arxitektura, foydalanuvchi ssenariylari va wireframe'larni qat'iy rejalashtirish.",
  },
  {
    number: "03",
    title: "Design",
    description: "Vizual tizim, tipografik ritm va yuqori darajadagi interaktiv prototiplarni yaratish.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Foydalanuvchilar bilan testlash, micro-interaksiyalarni sozlash va mukammallashtirish.",
  },
];
