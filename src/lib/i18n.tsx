import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en } from "./i18n/en";
import { ru } from "./i18n/ru";
import { uz } from "./i18n/uz";

export type Lang = "uz" | "ru" | "en";

const dict = { en, ru, uz } as const;

export type DictKey = keyof typeof en;

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
}

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
