import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getLikes, toggleLike } from "@/lib/likes";
import { useI18n } from "@/lib/i18n";

const THRESHOLD = 0;

export function LikeButton({ slug }: { slug: string }) {
  const { t } = useI18n();
  const [state, setState] = useState({ count: 0, liked: false });

  useEffect(() => setState(getLikes(slug)), [slug]);

  const onClick = () => setState(toggleLike(slug));
  const showCount = state.count >= THRESHOLD;

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      className={`group inline-flex items-center gap-3 rounded-full px-5 py-3 hairline transition-colors ${
        state.liked ? "bg-primary/10 text-primary" : "bg-surface text-foreground hover:bg-surface-2"
      }`}
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
        {showCount && state.count > 0 && (
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
