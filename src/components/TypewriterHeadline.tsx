import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterHeadlineProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function TypewriterHeadline({
  text,
  speed = 34,
  onComplete,
}: TypewriterHeadlineProps) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedLength(0);
    setIsTyping(true);

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedLength(currentIndex);

      if (currentIndex >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  const visibleText = text.slice(0, displayedLength);

  return (
    <div style={{ position: "relative" }}>
      {/* Invisible ghost text prevents layout shift */}
      <h1
        className="display-text"
        aria-hidden="true"
        style={{
          fontSize: "clamp(2.75rem, 5.8vw, 5.5rem)",
          lineHeight: 1.12,
          whiteSpace: "pre-line",
          letterSpacing: "-0.03em",
          visibility: "hidden",
          marginBottom: "3.5rem",
          userSelect: "none",
        }}
      >
        {text}
      </h1>

      {/* Visible typewriter text */}
      <h1
        className="display-text"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          fontSize: "clamp(2.75rem, 5.8vw, 5.5rem)",
          color: "var(--foreground)",
          lineHeight: 1.12,
          whiteSpace: "pre-line",
          letterSpacing: "-0.03em",
          marginBottom: "3.5rem",
        }}
      >
        {visibleText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            repeat: Infinity,
            duration: 0.75,
            ease: "easeInOut",
          }}
          style={{
            display: "inline-block",
            width: "3px",
            height: "0.82em",
            backgroundColor: "var(--accent)",
            marginLeft: "0.12em",
            verticalAlign: "baseline",
            borderRadius: "2px",
          }}
        />
      </h1>
    </div>
  );
}
