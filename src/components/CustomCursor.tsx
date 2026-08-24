import { useEffect, useRef, useState } from "react";
import type { CursorMode } from "@/types/portfolio";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -120, y: -120 });
  const curr = useRef({ x: -120, y: -120 });
  const rafRef = useRef<number>(0);
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only activate on pointer:fine (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = cursorRef.current;
    if (!el) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      curr.current.x = lerp(curr.current.x, pos.current.x, 0.16);
      curr.current.y = lerp(curr.current.y, pos.current.y, 0.16);
      el.style.transform = `translate3d(${curr.current.x}px, ${curr.current.y}px, 0) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("[data-cursor='project']")) {
        setMode("project");
      } else if (target.closest("[data-cursor='cta']")) {
        setMode("cta");
      } else if (target.closest("p, span, h1, h2, h3, h4, li, a:not([data-cursor])")) {
        setMode("text");
      } else {
        setMode("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [visible]);

  const sizes: Record<CursorMode, number> = {
    default: 26,
    project: 84,
    cta: 50,
    text: 20,
    hidden: 0,
  };

  const size = sizes[mode];
  const isExpanded = mode === "project" || mode === "cta";

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${mode === "text" ? 1 : 1.5}px solid rgba(23, 23, 22, ${mode === "default" ? 0.5 : 0.35})`,
        background: isExpanded ? "rgba(255, 255, 255, 0.22)" : "transparent",
        backdropFilter: isExpanded ? "blur(6px)" : "none",
        WebkitBackdropFilter: isExpanded ? "blur(6px)" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transition:
          "width 280ms cubic-bezier(0.16, 1, 0.3, 1), height 280ms cubic-bezier(0.16, 1, 0.3, 1), background 250ms ease, border-color 250ms ease, opacity 200ms ease",
        willChange: "transform",
      }}
    >
      {mode === "project" && (
        <span
          style={{
            fontSize: "0.625rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "var(--foreground)",
            userSelect: "none",
          }}
        >
          VIEW
        </span>
      )}
      {mode === "cta" && (
        <span
          style={{
            fontSize: "0.6875rem",
            color: "var(--foreground)",
            userSelect: "none",
          }}
        >
          ↗
        </span>
      )}
    </div>
  );
}
