import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/lib/theme";
import { I18nProvider } from "@/lib/i18n";
import { CursorProvider } from "@/components/CustomCursor";

function NotFoundComponent() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "var(--background)", padding: "1rem" }}>
      <div style={{ maxWidth: 400, textAlign: "center" }}>
        <h1 style={{ fontSize: "5rem", fontWeight: 700, color: "var(--foreground)", lineHeight: 1 }}>404</h1>
        <h2 style={{ marginTop: "1rem", fontSize: "1.125rem", fontWeight: 500, color: "var(--foreground)" }}>Page not found</h2>
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--fg-muted)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.625rem 1.25rem", borderRadius: 10, background: "var(--foreground)", color: "var(--elevated)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {}, [error]);

  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "var(--background)", padding: "1rem" }}>
      <div style={{ maxWidth: 400, textAlign: "center" }}>
        <h1 style={{ fontSize: "1.125rem", fontWeight: 500, color: "var(--foreground)" }}>This page didn't load</h1>
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--fg-muted)" }}>Something went wrong on our end.</p>
        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            style={{ padding: "0.625rem 1.25rem", borderRadius: 10, background: "var(--foreground)", color: "var(--elevated)", fontSize: "0.875rem", fontWeight: 500, border: "none" }}
          >
            Try again
          </button>
          <a href="/" style={{ padding: "0.625rem 1.25rem", borderRadius: 10, border: "1px solid var(--border-color)", background: "transparent", color: "var(--foreground)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sarvarbek Salimov — Product Designer" },
      { name: "description", content: "Toshkentlik UI/UX dizayner — veb va mobil platformalar uchun raqamli mahsulotlar yarataman." },
      { name: "author", content: "Sarvarbek Salimov" },
      { property: "og:title", content: "Sarvarbek Salimov — Product Designer" },
      { property: "og:description", content: "UI/UX Designer based in Tashkent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="uz">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <CursorProvider>
            <Outlet />
          </CursorProvider>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
