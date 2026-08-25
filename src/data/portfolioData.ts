import type { ProjectItem, CapabilityItem, ApproachStep } from "@/types/portfolio";
import fitasistImg from "@/assets/fitasist.jpg";
import dhpMobileImg from "@/assets/dhp-mobile.jpg";
import healnixImg from "@/assets/healnix.jpg";

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    number: "01",
    slug: "novatory-mediciny",
    name: "Новаторы Медицины",
    descriptor: "Healthcare Innovation Platform",
    meta: ["Product Design", "UX / UI", "Web Platform"],
    year: "2025",
    image: "/novatory-mediciny.jpg",
    alt: "Novatory Mediciny healthcare innovation platform — hero dashboard with live statistics",
    layout: "wide",
    role: "Lead UI/UX & Product Designer",
    platform: "Web Platform (Desktop & Responsive)",
    type: "Healthcare Innovation & Medical Research",
    overview:
      "Shifokorlar, tadqiqotchilar, talabalar va tibbiyot mutaxassislari uchun innovatsion yechimlarni birlashtirib, tibbiy yordam sifatini oshirish va sog'liqni saqlash tizimini rivojlantirishga qaratilgan raqamli platforma.",
    challenge:
      "Turli xil foydalanuvchi guruhlarini (shifokorlar, tadqiqotchilar, talabalar) bitta qulay interfeysda jamlash, real-vaqt statistikani tushunarli dashboard formatida taqdim etish va tibbiyot sohasiga xos murakkab ma'lumot arxitekturasini soddalashtirish.",
    solution:
      "Minimal va toza hero dizayn, real-vaqt statistika kartochkalari, yashil-ko'k medical brand tizimi va foydalanuvchi guruhlariga mos moslashuvchan navigatsiya arxitekturasi ishlab chiqildi.",
    metrics: [
      { label: "Foydalanuvchilar", value: "120+" },
      { label: "Tadqiqot loyihalari", value: "45" },
      { label: "Hamkorlik muassasalari", value: "84" },
    ],
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
    role: "Product & Mobile UI Designer",
    platform: "iOS & Android (Mobile App)",
    type: "Health, Fitness & AI Coaching",
    overview:
      "Shaxsiy mashg'ulotlar dasturi, ovqatlanish rejasi va progressni real vaqtda kuzatuvchi intellektual fitness yordamchisi.",
    challenge:
      "Foydalanuvchilarning mashg'ulotlar davomiyligini doimiy saqlab qolish va murakkab statistik ma'lumotlarni tushunarli vizual grafiklarda taqdim etish.",
    solution:
      "Geymifikatsiya elementlari, mashqlar davomida minimal chalg'ituvchi 'Focus Mode' hamda silliq micro-interaksiyalar bilan boyitilgan interfeys.",
    metrics: [
      { label: "Faol foydalanuvchilar (DAU)", value: "+45%" },
      { label: "Mashq yakunlash darajasi", value: "82%" },
    ],
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
    role: "Senior UX/UI Designer",
    platform: "Cross-Platform Mobile App",
    type: "Digital Healthcare & Telemedicine",
    overview:
      "Bemorlar uchun shifokor qabuliga yozilish, elektron tibbiy kartalar va onlayn konsultatsiyalarni boshqarish tizimi.",
    challenge:
      "Barcha yoshdagi foydalanuvchilar uchun tibbiy hujjatlarni o'qishni soddalashtirish va qabulga yozilish jarayonini 3 qadamgacha qisqartirish.",
    solution:
      "Katta kontrastli tipografiya, qulay kalendar vidjeti va shifokorlar bilan xavfsiz audio/video aloqa interfeysi.",
    metrics: [
      { label: "Qabulga yozilish vaqti", value: "-60%" },
      { label: "Xatolar soni", value: "-75%" },
    ],
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
    role: "Design System Lead & UX Architect",
    platform: "Web Application / Desktop Dashboard",
    type: "Hospital Management & Analytics",
    overview:
      "Shifoxona xodimlari va boshqaruvchilari uchun katta hajmdagi klinik ma'lumotlar, bemorlar oqimi va laboratoriya natijalarini real vaqtda tahlil qiluvchi boshqaruv paneli.",
    challenge:
      "Yuzlab parametrlar, grafiklar va jadval ma'lumotlarini operator ko'zini toliqtirmaydigan, o'ta aniq va tartibli axborot arxitekturasiga joylash.",
    solution:
      "Maxsus ishlab chiqilgan modul dizayn tizimi (Design System), moslashuvchan vidjetlar va qorong'u/yorug' rejimli yuqori zichlikdagi jadvallar.",
    metrics: [
      { label: "Ma'lumot qidirish tezligi", value: "3x tezroq" },
      { label: "Dizayn komponentlari", value: "120+ Atom" },
    ],
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

export function findPortfolioProject(slug: string): ProjectItem | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
