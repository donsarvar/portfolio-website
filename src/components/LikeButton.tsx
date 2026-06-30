import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getLikes, toggleLike } from "@/lib/likes";
import { useI18n } from "@/lib/i18n";

const THRESHOLD = 10;

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
      <span className="text-sm font-semibold">{t("like")}</span>
      <AnimatePresence initial={false}>
        {showCount && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="overflow-hidden text-sm font-mono tabular-nums text-muted-foreground"
          >
            {state.count}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
