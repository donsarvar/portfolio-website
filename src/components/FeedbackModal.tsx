import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

export function FeedbackModal({ open, onClose, projectSlug }: { open: boolean; onClose: () => void; projectSlug?: string }) {
  const { t } = useI18n();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = async () => {
    if (!value.trim()) return;
    setStatus("sending");
    try {
      const token = import.meta.env.VITE_TG_BOT_TOKEN as string | undefined;
      const chat = import.meta.env.VITE_TG_CHAT_ID as string | undefined;
      const text = `🟣 Portfolio feedback${projectSlug ? ` — ${projectSlug}` : ""}\n\n${value}`;

      if (!token || !chat) {
        // Placeholder mode — pretend success so the UI flow is reviewable.
        await new Promise((r) => setTimeout(r, 700));
      } else {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chat, text, parse_mode: "HTML" }),
        });
        if (!res.ok) throw new Error("tg failed");
      }
      setStatus("sent");
      setValue("");
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 1400);
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center p-4"
        >
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative w-full max-w-md rounded-3xl p-6 shadow-card-hover"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-surface-2"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-semibold tracking-tight">{t("feedback_title")}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{t("feedback_desc")}</p>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t("feedback_placeholder")}
              rows={5}
              className="mt-4 w-full resize-none rounded-2xl bg-surface-2 hairline p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{value.length}/600</span>
              <button
                onClick={submit}
                disabled={status === "sending" || !value.trim()}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                {status === "sent" ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                {status === "sending" ? t("sending") : status === "sent" ? t("sent") : t("submit")}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-xs text-destructive">{t("error")}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
