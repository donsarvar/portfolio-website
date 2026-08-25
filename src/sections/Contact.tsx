import { MagneticCTA } from "@/components/MagneticCTA";

export function Contact() {
  return (
    <section id="contact" style={{ borderBottom: "1px solid var(--border-color)" }}>
      <div
        style={{
          maxWidth: 1460,
          margin: "0 auto",
          padding: "7.5rem 3.5rem",
        }}
        className="contact-section-container"
      >
        <p className="eyebrow" style={{ marginBottom: "2.5rem" }}>
          Contact
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr",
            gap: "5rem",
            alignItems: "end",
          }}
          className="contact-grid"
        >
          <h2
            className="display-text"
            style={{
              fontSize: "clamp(2.2rem, 4.8vw, 4.25rem)",
              color: "var(--foreground)",
              maxWidth: "18ch",
            }}
          >
            Yaxshi mahsulot yaratish haqida gaplashamiz.
          </h2>

          <div>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "var(--fg-muted)",
                maxWidth: "32ch",
                marginBottom: "2.75rem",
              }}
            >
              Yangi loyiha, raqamli mahsulot yoki murakkab tizim ustida ishlash uchun bog'laning.
            </p>
            <MagneticCTA href="mailto:hello@sarvarbeksalimov.uz" label="Bog'lanish" variant="glass" />
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1.25fr 1fr !important; gap: 5rem !important; }
        }
        @media (max-width: 768px) {
          .contact-section-container { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
