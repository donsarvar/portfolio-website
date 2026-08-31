import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/sections/Hero";
import { SelectedWork } from "@/sections/SelectedWork";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarvarbek Salimov — Product Designer" },
      {
        name: "description",
        content: "Toshkentlik UI/UX dizayner — veb va mobil platformalar uchun raqamli mahsulotlar yarataman.",
      },
      { property: "og:title", content: "Sarvarbek Salimov — Product Designer" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
