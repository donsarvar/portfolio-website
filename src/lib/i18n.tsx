import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "uz" | "ru" | "en";

const dict = {
  en: {
    // Navigation
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",
    contact_cta: "Contact",

    // Hero
    hero_greeting: "Simple solutions for complex digital products.",
    hero_subtitle: "UI/UX Designer based in Tashkent — designing digital products for web and mobile platforms.",
    hero_cta: "See selected work",
    hero_secondary: "Get in touch",

    // Selected Work
    work_title: "Selected Work",
    work_subtitle: "Curated digital products and user experience case studies.",
    view_case_study: "View case study",
    next_project: "Next Project",
    back_to_work: "Back to selected work",

    // Case study labels
    meta_role: "Role",
    meta_year: "Year",
    meta_platform: "Platform",
    meta_category: "Category",
    sec_overview: "Overview",
    sec_challenge: "Challenge",
    sec_solution: "Solution",

    // About Section (Home)
    about_eyebrow: "About",
    about_heading: "Transforming complex systems and digital products into simple, intuitive interfaces.",
    about_full_bio: "Full bio",

    // Approach Section
    approach_eyebrow: "Approach",
    approach_1_title: "Understand",
    approach_1_desc: "Deep research into user behavior, business objectives, and technical constraints.",
    approach_2_title: "Structure",
    approach_2_desc: "Information architecture, user journey maps, and structured wireframing.",
    approach_3_title: "Design",
    approach_3_desc: "Visual design systems, typographic rhythm, and interactive prototyping.",
    approach_4_title: "Refine",
    approach_4_desc: "User testing, micro-interaction polishing, and design system scaling.",

    // Contact Section
    contact_eyebrow: "Contact",
    contact_heading: "Let's build meaningful products together.",
    contact_subtitle: "Available for new projects, design systems, and product consulting.",
    contact_btn: "Get in touch",

    // Cursor
    cursor_view: "VIEW",
    cursor_open: "OPEN",

    // Feedback & Likes
    like: "Like",
    leave_feedback: "Leave Feedback",
    feedback_title: "Leave feedback",
    feedback_desc: "Thoughts, critique, or an opportunity — it all lands directly in my inbox.",
    feedback_name: "Your Name",
    feedback_name_placeholder: "Enter your name",
    feedback_tg: "Contact Info",
    feedback_tg_placeholder: "Gmail or Telegram username",
    feedback_placeholder: "Write something thoughtful…",
    submit: "Send feedback",
    sending: "Sending…",
    sent: "Sent — thank you.",
    error: "Something went wrong. Try again.",

    // Footer
    footer_rights: "All rights reserved.",
    footer_city: "Tashkent, UZ",

    // Full About Page
    about_title: "I design digital products that people love to use.",
    about_bio: "I'm a product designer passionate about creating accessible, beautiful, and functional interfaces. I focus on bridging the gap between business goals and user needs.",
    about_experience: "Experience",
    about_education: "Education",
    about_interests: "Interests",
    about_connect: "Connect",
    about_present: "Present",
    about_location: "Tashkent, Uzbekistan",
    about_role_designer: "UI/UX Designer",
    about_desc_designer: "Designing user interfaces and experiences for national digital government services.",
    about_period_intern: "2025 (Jan — Aug)",
    about_role_intern: "UI/UX Design Intern",
    about_role_realsoft: "UI/UX Designer Intern",
    about_period_realsoft: "2025 (Mar — May)",
    about_desc_realsoft: "Contributed to UI design projects at Realsoft, gaining hands-on experience in product design workflows.",
    about_desc_intern: "Completed an intensive internship program, contributing to real-world digital product design.",
    about_edu_degree: "Bachelor's Degree",
    about_edu_school: "UTAS (University of Applied Sciences Tashkent)",
    interest_kurash: "UI/UX Design",
    interest_running: "Vibe Coding",
    interest_books: "No-Code Web Build",
    interest_hiking: "AI Prompts",

    // Legacy/Old schema support
    cat_portal: "Virtual Portal",
    cat_admin_panel: "Admin Panel",
    proj_tp_role: "UI/UX Designer & Researcher",
    proj_tp_platform: "Web (Fully Responsive)",
    proj_tp_type: "Interface Design",
    proj_tp_summary: "Design of a virtual platform showcasing parks and green zones of Tashkent city.",
    proj_tp_challenge: "Consolidate Tashkent city's parks into a single platform offering virtual tours.",
    proj_tp_outcome: "Designed an intuitive 360° VR interface.",
    proj_am_role: "UI/UX Designer",
    proj_am_platform: "Web (Desktop)",
    proj_am_type: "Interface Design",
    proj_am_summary: "High-fidelity UI concept for a medical database management dashboard.",
    proj_am_challenge: "Design a clean dashboard for pharmaceutical catalog management.",
    proj_am_outcome: "Designed a premium dashboard concept.",
    metric_format: "Format",
    metric_responsiveness: "Responsiveness",
    metric_status: "Status",
    metric_platform: "Platform",
    metric_type: "Type",
    val_360_vr: "360° VR",
    val_mobile_pc: "Mobile + PC",
    val_launched: "Launched",
    val_web: "Web",
    val_concept_design: "Interface Design",
    val_in_progress: "In progress",
  },
  ru: {
    // Navigation
    nav_work: "Работы",
    nav_about: "Обо мне",
    nav_contact: "Контакты",
    contact_cta: "Связаться",

    // Hero
    hero_greeting: "Простые решения для сложных цифровых продуктов.",
    hero_subtitle: "UI/UX дизайнер из Ташкента — проектирую цифровые продукты для веб и мобильных платформ.",
    hero_cta: "Смотреть работы",
    hero_secondary: "Связаться",

    // Selected Work
    work_title: "Избранные работы",
    work_subtitle: "Подборка кейсов: веб, мобильные и продуктовый дизайн.",
    view_case_study: "Смотреть кейс",
    next_project: "Следующий проект",
    back_to_work: "К списку работ",

    // Case study labels
    meta_role: "Роль",
    meta_year: "Год",
    meta_platform: "Платформа",
    meta_category: "Категория",
    sec_overview: "Обзор",
    sec_challenge: "Задача",
    sec_solution: "Решение",

    // About Section (Home)
    about_eyebrow: "Обо мне",
    about_heading: "Превращаю сложные системы и цифровые продукты в простые и удобные интерфейсы.",
    about_full_bio: "Полная биография",

    // Approach Section
    approach_eyebrow: "Подход",
    approach_1_title: "Понимание",
    approach_1_desc: "Глубокое исследование потребностей пользователей, целей бизнеса и технических рамок.",
    approach_2_title: "Структура",
    approach_2_desc: "Информационная архитектура, сценарии пользователей и четкие прототипы.",
    approach_3_title: "Дизайн",
    approach_3_desc: "Визуальные дизайн-системы, типографический ритм и интерактивные прототипы.",
    approach_4_title: "Доработка",
    approach_4_desc: "Тестирование с пользователями, доводка микро-взаимодействий и масштабирование.",

    // Contact Section
    contact_eyebrow: "Контакты",
    contact_heading: "Давайте создадим отличный продукт вместе.",
    contact_subtitle: "Открыт для новых проектов, сложных систем и продуктовых задач.",
    contact_btn: "Связаться",

    // Cursor
    cursor_view: "СМОТРЕТЬ",
    cursor_open: "ОТКРЫТЬ",

    // Feedback & Likes
    like: "Нравится",
    leave_feedback: "Оставить отзыв",
    feedback_title: "Оставить отзыв",
    feedback_desc: "Мысли, критика или предложение — всё придёт прямо мне.",
    feedback_name: "Ваше Имя",
    feedback_name_placeholder: "Введите ваше имя",
    feedback_tg: "Контакты",
    feedback_tg_placeholder: "Gmail почта или Telegram username",
    feedback_placeholder: "Напишите что-нибудь полезное…",
    submit: "Отправить",
    sending: "Отправка…",
    sent: "Отправлено — спасибо.",
    error: "Что-то пошло не так. Попробуйте ещё раз.",

    // Footer
    footer_rights: "Все права защищены.",
    footer_city: "Ташкент, UZ",

    // Full About Page
    about_title: "Я создаю цифровые продукты, которыми удобно пользоваться.",
    about_bio: "Я продуктовый дизайнер, увлеченный созданием доступных, красивых и функциональных интерфейсов. Моя цель — соединить бизнес-задачи и потребности пользователей.",
    about_experience: "Опыт работы",
    about_education: "Образование",
    about_interests: "Интересы",
    about_connect: "Связаться",
    about_present: "Настоящее время",
    about_location: "Ташкент, Узбекистан",
    about_role_designer: "UI/UX дизайнер",
    about_desc_designer: "Разработка пользовательских интерфейсов и пользовательского опыта для национальных государственных цифровых сервисов.",
    about_period_intern: "2025 (Янв — Авг)",
    about_role_intern: "Стажер UI/UX дизайнер",
    about_role_realsoft: "UI/UX дизайнер-стажёр",
    about_period_realsoft: "2025 (Март — Май)",
    about_desc_realsoft: "Участвовал в проектах по UI-дизайну в компании Realsoft, приобретая практический опыт в процессах продуктового дизайна.",
    about_desc_intern: "Прошел интенсивную программу стажировки, участвуя в разработке реальных цифровых продуктов.",
    about_edu_degree: "Бакалавр",
    about_edu_school: "UTAS (Ташкентский университет прикладных наук)",
    interest_kurash: "UI/UX дизайн",
    interest_running: "Вайб-кодинг",
    interest_books: "No-Code разработка",
    interest_hiking: "AI Промптинг",

    // Legacy/Old schema support
    cat_portal: "Виртуальный портал",
    cat_admin_panel: "Панель управления",
    proj_tp_role: "UI/UX дизайнер и исследователь",
    proj_tp_platform: "Веб (Полная адаптивность)",
    proj_tp_type: "Дизайн интерфейса",
    proj_tp_summary: "Дизайн виртуальной платформы для прогулок по паркам и зеленым зонам Ташкента.",
    proj_tp_challenge: "Объединение парков Ташкента на единой платформе.",
    proj_tp_outcome: "Создан удобный 360° VR интерфейс.",
    proj_am_role: "UI/UX дизайнер",
    proj_am_platform: "Веб (ПК)",
    proj_am_type: "Дизайн интерфейса",
    proj_am_summary: "Интерфейсный концепт панели управления для медицинских баз данных.",
    proj_am_challenge: "Интерфейс для фармацевтического каталога.",
    proj_am_outcome: "Разработан концепт панели управления.",
    metric_format: "Формат",
    metric_responsiveness: "Адаптивность",
    metric_status: "Статус",
    metric_platform: "Платформа",
    metric_type: "Тип",
    val_360_vr: "360° VR",
    val_mobile_pc: "Моб. + ПК",
    val_launched: "Запущен",
    val_web: "Веб",
    val_concept_design: "Дизайн интерфейса",
    val_in_progress: "В процессе",
  },
  uz: {
    // Navigation
    nav_work: "Ishlar",
    nav_about: "Men haqimda",
    nav_contact: "Aloqa",
    contact_cta: "Bog'lanish",

    // Hero
    hero_greeting: "Murakkab tizimlar uchun sodda va qulay yechimlar yarataman.",
    hero_subtitle: "Toshkentlik UI/UX dizayner — veb va mobil platformalar uchun raqamli mahsulotlar yarataman.",
    hero_cta: "Ishlarni ko'rish",
    hero_secondary: "Bog'lanish",

    // Selected Work
    work_title: "Tanlangan ishlar",
    work_subtitle: "Veb, mobil va raqamli mahsulotlar uchun tanlangan ishlar.",
    view_case_study: "Keysni ko'rish",
    next_project: "Keyingi loyiha",
    back_to_work: "Ishlarga qaytish",

    // Case study labels
    meta_role: "Rol",
    meta_year: "Yil",
    meta_platform: "Platforma",
    meta_category: "Kategoriya",
    sec_overview: "Loyiha haqida",
    sec_challenge: "Muammo",
    sec_solution: "Yechim",

    // About Section (Home)
    about_eyebrow: "Men haqimda",
    about_heading: "Murakkab tizimlar, raqamli mahsulotlar va foydalanuvchi tajribasini sodda va tushunarli interfeyslarga aylantiraman.",
    about_full_bio: "To'liq bio",

    // Approach Section
    approach_eyebrow: "Yondashuv",
    approach_1_title: "Tushunish",
    approach_1_desc: "Foydalanuvchi xulq-atvori, biznes talablari va texnik imkoniyatlarni chuqur o'rganish.",
    approach_2_title: "Tuzilma",
    approach_2_desc: "Informatsion arxitektura, foydalanuvchi ssenariylari va wireframe'larni qat'iy rejalashtirish.",
    approach_3_title: "Dizayn",
    approach_3_desc: "Vizual tizim, tipografik ritm va yuqori darajadagi interaktiv prototiplarni yaratish.",
    approach_4_title: "Sayqallash",
    approach_4_desc: "Foydalanuvchilar bilan testlash, micro-interaksiyalarni sozlash va mukammallashtirish.",

    // Contact Section
    contact_eyebrow: "Bog'lanish",
    contact_heading: "Yaxshi mahsulot yaratish haqida gaplashamiz.",
    contact_subtitle: "Yangi loyiha, raqamli mahsulot yoki murakkab tizim ustida ishlash uchun bog'laning.",
    contact_btn: "Bog'lanish",

    // Cursor
    cursor_view: "KO'RISH",
    cursor_open: "OCHISH",

    // Feedback & Likes
    like: "Yoqdi",
    leave_feedback: "Fikr qoldirish",
    feedback_title: "Fikr qoldiring",
    feedback_desc: "Fikr, tanqid yoki taklif — to‘g‘ridan-to‘g‘ri menga keladi.",
    feedback_name: "Ismingiz",
    feedback_name_placeholder: "Ismingizni kiriting",
    feedback_tg: "Aloqa ma'lumoti",
    feedback_tg_placeholder: "Gmail pochta yoki Telegram username",
    feedback_placeholder: "Fikringizni bu yerga yozing…",
    submit: "Yuborish",
    sending: "Yuborilmoqda…",
    sent: "Yuborildi — rahmat.",
    error: "Xatolik yuz berdi. Qayta urinib ko‘ring.",

    // Footer
    footer_rights: "Barcha huquqlar himoyalangan.",
    footer_city: "Toshkent, UZ",

    // Full About Page
    about_title: "Foydalanuvchilar sevib ishlatadigan raqamli mahsulotlar yarataman.",
    about_bio: "Men qulay, chiroyli va foydali interfeyslar yaratishga qiziqadigan mahsulot dizayneriman. Mening maqsadim biznes talablari va foydalanuvchi ehtiyojlarini birlashtirishdir.",
    about_experience: "Ish tajribasi",
    about_education: "Ta'lim",
    about_interests: "Qiziqishlar",
    about_connect: "Bog'lanish",
    about_present: "Hozirgi vaqt",
    about_location: "Toshkent, O'zbekiston",
    about_role_designer: "UI/UX dizayner",
    about_desc_designer: "Milliy davlat raqamli xizmatlari uchun foydalanuvchi interfeyslari va tajribasini loyihalash.",
    about_period_intern: "2025 (Yanvar — Avgust)",
    about_role_intern: "UI/UX dizayner amaliyotchi",
    about_role_realsoft: "UI/UX dizayner amaliyotchi",
    about_period_realsoft: "2025 (Mart — May)",
    about_desc_realsoft: "Realsoft kompaniyasida UI dizayn loyihalarida ishtirok etdi, mahsulot dizayni jarayonlarida amaliy tajriba ortirdi.",
    about_desc_intern: "Haqiqiy raqamli mahsulotlar dizayniga hissa qo'shgan holda intensiv amaliyot dasturini yakunladi.",
    about_edu_degree: "Bakalavr",
    about_edu_school: "UTAS (Toshkent Amaliy Fanlar Universiteti)",
    interest_kurash: "UI/UX dizayn",
    interest_running: "Vibe coding",
    interest_books: "No-code saytlar",
    interest_hiking: "AI promptlash",

    // Legacy/Old schema support
    cat_portal: "Virtual portal",
    cat_admin_panel: "Admin panel",
    proj_tp_role: "UI/UX dizayner va tadqiqotchi",
    proj_tp_platform: "Veb (To'liq moslashuvchan)",
    proj_tp_type: "Interfeys dizayni",
    proj_tp_summary: "Toshkent shahridagi yashil hududlar va istirohat bog'lari bo'ylab virtual sayohat platformasi.",
    proj_tp_challenge: "Toshkent shahridagi istirohat bog'larini yagona platformaga jamlash.",
    proj_tp_outcome: "360° formatidagi qulay VR interfeys.",
    proj_am_role: "UI/UX dizayner",
    proj_am_platform: "Veb (Kompyuter)",
    proj_am_type: "Interfeys dizayni",
    proj_am_summary: "Tibbiy ma'lumotlar bazasi boshqaruv paneli konsepti.",
    proj_am_challenge: "Farmatsevtika kataloglarini boshqarish uchun interfeys.",
    proj_am_outcome: "Admin panel konsepti.",
    metric_format: "Format",
    metric_responsiveness: "Moslashuvchanlik",
    metric_status: "Holati",
    metric_platform: "Platforma",
    metric_type: "Turi",
    val_360_vr: "360° VR",
    val_mobile_pc: "Mobil + Kompyuter",
    val_launched: "Ishga tushirilgan",
    val_web: "Veb",
    val_concept_design: "Interfeys dizayni",
    val_in_progress: "Jarayonda",
  },
} as const;

export type DictKey = keyof typeof dict["en"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (stored && ["uz", "ru", "en"].includes(stored)) {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
    }
  };

  const t = (k: DictKey) => dict[lang][k] ?? dict.en[k];

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
}
