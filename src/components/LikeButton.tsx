import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { fetchLikesCount, toggleLikeInFirebase } from "@/lib/likes";

export function LikeButton({ slug, title }: { slug: string; title?: string }) {
  const { t } = useI18n();
  const [state, setState] = useState({ count: 0, liked: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (typeof window === "undefined") return;
      try {
        const localLiked = localStorage.getItem(`like:${slug}`) === "1";
        const count = await fetchLikesCount(slug);
        if (active) {
          setState({ count, liked: localLiked });
          setLoading(false);
        }
      } catch (e) {
        console.error("Failed to load likes count", e);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [slug]);

  const onClick = async () => {
    if (loading) return;
    
    // Optimistic UI update to feel instant
    const nextLiked = !state.liked;
    const nextCount = nextLiked ? state.count + 1 : Math.max(0, state.count - 1);
    
    setState({ count: nextCount, liked: nextLiked });
    
    try {
      // Async database update
      const result = await toggleLikeInFirebase(slug);
      setState(result);

      // If the user liked the project, notify the Telegram Bot
      if (nextLiked) {
        const token = "8566617538:AAE-rV84ahtpy51MQzqCdfJeaHMnCri7sGE";
        const chat = "922839560";
        const text = `<b>❤️ Yangi Layk!</b>\n\n` +
                     `<b>Loyiha:</b> ${title || slug}\n` +
                     `<b>Jami layklar:</b> ${result.count} ta`;

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chat, text, parse_mode: "HTML" }),
        }).catch((err) => console.error("Telegram notification failed", err));
      }
    } catch (e) {
      console.error("Failed to sync like in Firebase", e);
      // Revert if it fails
      setState({ count: state.count, liked: state.liked });
    }
  };

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      disabled={loading}
      className={`group inline-flex items-center gap-3 rounded-full px-5 py-3 hairline transition-colors ${
        state.liked ? "bg-primary/10 text-primary" : "bg-surface text-foreground hover:bg-surface-2"
      } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      <motion.span
        key={state.liked ? "on" : "off"}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 14 }}
        className="relative"
      >
        <Heart
          className={`h-5 w-5 transition-colors ${state.liked ? "fill-primary text-primary" : ""}`}
        />
        {state.liked && (
          <motion.span
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-full bg-primary/30"
          />
        )}
      </motion.span>
      <span className={`text-sm font-semibold transition-colors duration-200 ${state.liked ? "text-primary" : "text-foreground"}`}>
        {t("like")}
      </span>
      <AnimatePresence initial={false}>
        {!loading && state.count > 0 && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="flex items-center gap-2 overflow-hidden shrink-0"
          >
            <span className="h-3.5 w-px bg-foreground/15 dark:bg-foreground/25" />
            <span className={`text-sm font-bold tabular-nums transition-colors duration-200 ${state.liked ? "text-primary" : "text-muted-foreground"}`}>
              {state.count}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
