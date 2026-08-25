import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouterState } from "@tanstack/react-router";
import type { CursorVariant, ProjectPreviewData } from "@/types/portfolio";
import { CursorPreviewCard } from "./CursorPreviewCard";

interface CursorContextType {
  setVariant: (variant: CursorVariant, label?: string) => void;
  setPreview: (preview: ProjectPreviewData | null) => void;
  reset: () => void;
}

const CursorContext = createContext<CursorContextType>({
  setVariant: () => {},
  setPreview: () => {},
  reset: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [fine, setFine] = useState(false);
  const [variant, setVariantState] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("VIEW");
  const [preview, setPreviewState] = useState<ProjectPreviewData | null>(null);

  const ringRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -300, y: -300 });
  const pos = useRef({ x: -300, y: -300 });
  const slow = useRef({ x: -300, y: -300 });

  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const setVariant = useCallback((v: CursorVariant, l?: string) => {
    setVariantState(v);
    if (l) setLabel(l);
  }, []);

  const setPreview = useCallback((p: ProjectPreviewData | null) => {
    setPreviewState(p);
  }, []);

  const reset = useCallback(() => {
    setVariantState("default");
    setPreviewState(null);
  }, []);

  // Har safar sahifa (URL) o'zgarganda tozalash
  useEffect(() => {
    reset();
  }, [pathname, reset]);

  const api = useMemo(() => ({ setVariant, setPreview, reset }), [setVariant, setPreview, reset]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(mq.matches);
    const onMediaChange = () => setFine(mq.matches);
    mq.addEventListener("change", onMediaChange);
    return () => mq.removeEventListener("change", onMediaChange);
  }, []);

  useEffect(() => {
    if (!fine) return;
    let raf = 0;

    const onPointerMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(loop);

    function loop() {
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;
      slow.current.x += (target.current.x - slow.current.x) * 0.09;
      slow.current.y += (target.current.y - slow.current.y) * 0.09;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${slow.current.x + 28}px, ${slow.current.y + 24}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [fine]);

  const ringSize = variant === "view" ? 86 : variant === "open" ? 44 : 26;

  return (
    <CursorContext.Provider value={api}>
      {children}
      {fine && (
        <>
          <div
            ref={ringRef}
            aria-hidden="true"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 9999,
              pointerEvents: "none",
              width: ringSize,
              height: ringSize,
              borderRadius: "50%",
              border:
                variant === "default"
                  ? "1.2px solid rgba(23, 23, 22, 0.45)"
                  : "1px solid var(--glass-border)",
              background: variant === "default" ? "transparent" : "var(--glass-bg)",
              backdropFilter: variant === "default" ? "none" : "blur(20px) saturate(150%)",
              WebkitBackdropFilter: variant === "default" ? "none" : "blur(20px) saturate(150%)",
              boxShadow:
                variant === "default" ? "none" : "0 8px 24px rgba(20, 20, 15, 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition:
                "width 350ms cubic-bezier(0.16, 1, 0.3, 1), height 350ms cubic-bezier(0.16, 1, 0.3, 1), background 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
              willChange: "transform",
            }}
          >
            {variant === "view" && (
              <span
                className="meta-label"
                style={{
                  fontSize: "0.625rem",
                  color: "var(--foreground)",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  userSelect: "none",
                }}
              >
                {label}
              </span>
            )}

            {variant === "open" && (
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ color: "var(--foreground)", display: "block" }}>
                <path d="M3 10L10 3M10 3H4.5M10 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>

          <CursorPreviewCard preview={preview} forwardRef={previewRef} />
        </>
      )}
    </CursorContext.Provider>
  );
}
