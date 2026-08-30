import type { ProjectItem, CapabilityItem, ApproachStep } from "@/types/portfolio";
import fitasistImg from "@/assets/fitasist.jpg";
import dhpMobileImg from "@/assets/dhp-mobile.jpg";
import healnixImg from "@/assets/healnix.jpg";

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    number: "01",
    slug: "novatory-mediciny",
    name: "Medical Pioneers",
    name_uz: "Tibbiyot Novatorlari",
    name_ru: "Новаторы Медицины",
    descriptor: "Healthcare Innovation Platform",
    descriptor_uz: "Tibbiyot innovatsiyalari platformasi",
    descriptor_ru: "Платформа медицинских инноваций",
    meta: ["Product Design", "UX / UI", "Web Platform"],
    year: "2026",
    image: "/novatory-mediciny-mockup.jpg",
    caseStudyImage: "/novatory-mediciny-page.jpg",
    alt: "Novatory Mediciny healthcare innovation platform — MacBook workspace mockup",
    layout: "wide",
    role: "UI/UX & Product Designer",
    role_uz: "UI/UX va Mahsulot Dizayneri",
    role_ru: "UI/UX и продуктовый дизайнер",
    client: "Ministry of Health & Research Centers",
    client_uz: "Sog'liqni Saqlash Vazirligi",
    client_ru: "Министерство здравоохранения",
    timeline: "2026 (July — August)",
    timeline_uz: "2026 (Iyul — Avgust)",
    timeline_ru: "2026 (Июль — Август)",
    platform: "Web Platform (Desktop & Responsive)",
    platform_uz: "Veb Platforma (Desktop va Moslashuvchan)",
    platform_ru: "Веб-платформа (ПК и адаптивная)",
    type: "Healthcare Innovation & Medical Research",
    type_uz: "Tibbiyot innovatsiyalari va tadqiqotlar",
    type_ru: "Медицинские инновации и исследования",
    overview:
      "Shifokorlar, tadqiqotchilar, talabalar va tibbiyot mutaxassislari uchun innovatsion yechimlarni birlashtirib, tibbiy yordam sifatini oshirish va sog'liqni saqlash tizimini rivojlantirishga qaratilgan raqamli platforma.",
    challenge:
      "Turli xil foydalanuvchi guruhlarini (shifokorlar, tadqiqotchilar, talabalar) bitta qulay interfeysda jamlash, real-vaqt statistikani tushunarli dashboard formatida taqdim etish va tibbiyot sohasiga xos murakkab ma'lumot arxitekturasini soddalashtirish.",
    solution:
      "Minimal va toza hero dizayn, real-vaqt statistika kartochkalari, yashil-ko'k medical brand tizimi va foydalanuvchi guruhlariga mos moslashuvchan navigatsiya arxitekturasi ishlab chiqildi.",
  },
  {
    number: "02",
    slug: "dhp-mobile",
    name: "Patient Portal",
    name_uz: "Patient Portal",
    name_ru: "Портал Пациента",
    descriptor: "Healthcare & Patient Experience",
    descriptor_uz: "Bemorlar uchun raqamli tibbiyot portali",
    descriptor_ru: "Цифровой медицинский портал пациента",
    meta: ["Product Design", "UX Architecture", "Mobile"],
    year: "2026",
    timeline: "2026 (June — August, Ongoing)",
    timeline_uz: "2026 (Iyun — Avgust, davom etmoqda)",
    timeline_ru: "2026 (Июнь — Август, продолжается)",
    client: "Ministry of Health",
    client_uz: "Sog'liqni Saqlash Vazirligi",
    client_ru: "Министерство здравоохранения",
    image: "/dhp-mobile-mockup.jpg",
    caseStudyImage: dhpMobileImg,
    alt: "Patient Portal healthcare application — iPhone wooden workspace mockup",
    layout: "wide",
    role: "Senior UX/UI Designer",
    role_uz: "Katta UX/UI Dizayner",
    role_ru: "Старший UX/UI дизайнер",
    platform: "iOS & Android (Mobile App)",
    platform_uz: "iOS va Android (Mobil Ilova)",
    platform_ru: "iOS и Android (Мобильное приложение)",
    type: "Digital Healthcare & Telemedicine",
    type_uz: "Raqamli Tibbiyot va Telemeditsina",
    type_ru: "Цифровое здравоохранение и телемедицина",
    overview:
      "Bemorlar uchun shifokor qabuliga yozilish, elektron tibbiy kartalar va onlayn konsultatsiyalarni boshqarish tizimi.",
    challenge:
      "Barcha yoshdagi foydalanuvchilar uchun tibbiy hujjatlarni o'qishni soddalashtirish va qabulga yozilish jarayonini 3 qadamgacha qisqartirish.",
    solution:
      "Katta kontrastli tipografiya, qulay kalendar vidjeti va shifokorlar bilan xavfsiz audio/video aloqa interfeysi.",
  },
  {
    number: "03",
    slug: "fitasist",
    name: "FitAsist",
    descriptor: "Fitness & Training Application",
    meta: ["Mobile Design", "UX Flows", "iOS / Android"],
    year: "2025",
    image: fitasistImg,
    alt: "FitAsist mobile fitness application tracking and workout experience",
    layout: "wide",
    role: "Product & Mobile UI Designer",
    role_uz: "Mahsulot va Mobil UI Dizayneri",
    role_ru: "Продуктовый и мобильный UI дизайнер",
    platform: "iOS & Android (Mobile App)",
    platform_uz: "iOS & Android (Mobil Ilova)",
    platform_ru: "iOS & Android (Мобильное приложение)",
    type: "Health, Fitness & AI Coaching",
    type_uz: "Salomatlik, Fitnes va AI Trenerlik",
    type_ru: "Здоровье, фитнес и AI-трекинг",
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
    role_uz: "Dizayn Tizimi Yetakchisi va UX Arxitektor",
    role_ru: "Лид дизайн-системы и UX-архитектор",
    platform: "Web Application / Desktop Dashboard",
    platform_uz: "Veb Ilova / Desktop Boshqaruv Paneli",
    platform_ru: "Веб-приложение / Аналитическая панель",
    type: "Hospital Management & Analytics",
    type_uz: "Shifoxona Boshqaruvi va Analitika",
    type_ru: "Больничное управление и аналитика",
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
