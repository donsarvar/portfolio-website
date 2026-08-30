import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

interface ScreenItem {
  id: number;
  src: string;
  desc_uz: string;
  desc_ru: string;
  desc_en: string;
}

const SCREENS: ScreenItem[] = [
  {
    id: 1,
    src: "/dhp-screen-dashboard.png",
    desc_uz: "Shaxsiy salomatlik va dorilar nazorati ekrani",
    desc_ru: "Главный экран здоровья и контроля лекарств",
    desc_en: "Health dashboard and medication tracking screen",
  },
  {
    id: 2,
    src: "/dhp-screen-health.png",
    desc_uz: "Interaktiv tana xaritasi va faol tashxislar",
    desc_ru: "Интерактивная карта тела и активные диагнозы",
    desc_en: "Interactive body map and active diagnoses",
  },
  {
    id: 3,
    src: "/dhp-screen-ai-chat.png",
    desc_uz: "AI tibbiy yordamchi va tezkor maslahatlar",
    desc_ru: "ИИ-помощник и быстрые медицинские консультации",
    desc_en: "AI health assistant and instant consultations",
  },
  {
    id: 4,
    src: "/dhp-screen-visits.png",
    desc_uz: "Shifokor qabuliga bosqichma-bosqich qulay yozilish",
    desc_ru: "Удобная поэтапная запись на приём врача",
    desc_en: "Step-by-step doctor appointment booking system",
  },
  {
    id: 5,
    src: "/dhp-screen-profile.png",
    desc_uz: "Elektron tibbiy karta va shaxsiy ma'lumotlar",
    desc_ru: "Электронная медкарта и персональные данные пациента",
    desc_en: "Electronic health record and patient profile",
  },
];

export function MobileArcCarousel() {
  const { lang } = useI18n();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentDesc =
    lang === "uz" ? SCREENS[current].desc_uz :
    lang === "ru" ? SCREENS[current].desc_ru :
    SCREENS[current].desc_en;

  const nextScreen = () => {
    if (current < SCREENS.length - 1) {
      setDirection(1);
      setCurrent((prev) => prev + 1);
    }
  };

  const prevScreen = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <div
      style={{
        marginTop: "3.5rem",
        padding: "4.5rem 1.5rem 3.5rem",
        background: "url('/patient-portal-bg.png') center / cover no-repeat",
        borderRadius: 24,
        border: "1px solid var(--border-color)",
        position: "relative",
        boxShadow: "0 24px 64px rgba(20, 20, 15, 0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Device Stage with Left/Right Arrows */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(1.5rem, 4vw, 3.5rem)", width: "100%" }}>
        {/* Left Arrow Button (Only visible on screens 2+) */}
        <button
          onClick={prevScreen}
          disabled={current === 0}
          aria-label="Oldingi ekran"
          className="nav-arrow-btn"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--glass-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current > 0 ? "pointer" : "default",
            color: "var(--foreground)",
            fontSize: "1.25rem",
            boxShadow: "0 4px 16px rgba(20, 20, 15, 0.05)",
            opacity: current > 0 ? 1 : 0,
            pointerEvents: current > 0 ? "auto" : "none",
            transition: "opacity 240ms ease, transform 200ms ease",
          }}
        >
          ←
        </button>

        {/* User Ready Mockup Image Container */}
        <div
          style={{
            width: "clamp(260px, 30vw, 360px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={SCREENS[current].id}
              src={SCREENS[current].src}
              alt={currentDesc}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 320, damping: 32 }, opacity: { duration: 0.2 } }}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 28px 55px rgba(20, 20, 15, 0.16))",
              }}
            />
          </AnimatePresence>
        </div>

        {/* Right Arrow Button (Only visible on screens 1-4) */}
        <button
          onClick={nextScreen}
          disabled={current === SCREENS.length - 1}
          aria-label="Keyingi ekran"
          className="nav-arrow-btn"
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "var(--glass-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--glass-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current < SCREENS.length - 1 ? "pointer" : "default",
            color: "var(--foreground)",
            fontSize: "1.25rem",
            boxShadow: "0 4px 16px rgba(20, 20, 15, 0.05)",
            opacity: current < SCREENS.length - 1 ? 1 : 0,
            pointerEvents: current < SCREENS.length - 1 ? "auto" : "none",
            transition: "opacity 240ms ease, transform 200ms ease",
          }}
        >
          →
        </button>
      </div>

      {/* Footer Info: Indicator dots and current title */}
      <div style={{ marginTop: "2.75rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.875rem" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {SCREENS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              aria-label={`Ekran ${idx + 1}`}
              style={{
                width: current === idx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: current === idx ? "var(--foreground)" : "rgba(25, 25, 22, 0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          ))}
        </div>

        <span
          style={{
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: "var(--foreground)",
            letterSpacing: "-0.01em",
            textAlign: "center",
            maxWidth: "40ch",
          }}
        >
          {currentDesc}
        </span>
      </div>

      <style>{`
        .nav-arrow-btn:hover { transform: scale(1.08); background: rgba(255, 255, 255, 0.8) !important; }
      `}</style>
    </div>
  );
}
