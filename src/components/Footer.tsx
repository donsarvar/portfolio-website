import { useI18n } from "@/lib/i18n";
import { Linkedin, Send } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
      <div className="glass rounded-3xl px-6 sm:px-8 py-6 shadow-card">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 sm:flex sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-foreground text-background text-[11px] font-bold">SS</span>
              <span className="truncate text-sm font-semibold">sarvarbeksalimov</span>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a href="https://www.linkedin.com/in/sarvarbek-salimov-87a78b317/" target="_blank" rel="noreferrer" className="hairline grid h-9 w-9 place-items-center rounded-full bg-surface-2 hover:bg-surface" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/sarvarsalimovv" target="_blank" rel="noreferrer" className="hairline grid h-9 w-9 place-items-center rounded-full bg-surface-2 hover:bg-surface" aria-label="Instagram">
              <span className="text-[11px] font-black">IG</span>
            </a>
            <a href="https://t.me/sarvarsalimovv" target="_blank" rel="noreferrer" className="hairline grid h-9 w-9 place-items-center rounded-full bg-surface-2 hover:bg-surface" aria-label="Telegram">
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-hairline pt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
          <span>© {new Date().getFullYear()} Sarvarbek Salimov. {t("footer_rights")}</span>
          <span>v1.0 · Tashkent</span>
        </div>
      </div>
    </footer>
  );
}
