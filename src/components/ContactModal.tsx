import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;

    setStatus("sending");
    try {
      const token = "8566617538:AAE-rV84ahtpy51MQzqCdfJeaHMnCri7sGE";
      const chatId = "922839560";

      const contactVal = contact.trim();
      const contactDisplay = contactVal.startsWith("@") || contactVal.includes("+")
        ? contactVal
        : `@${contactVal}`;

      const text =
        `<b>🚀 Yangi Mijoz Xabari (Portfolio Contact)</b>\n\n` +
        `<b>👤 Ism:</b> ${name.trim()}\n` +
        `<b>📱 Aloqa:</b> ${contactDisplay}\n\n` +
        `<b>💬 Xabar / Loyiha:</b>\n<i>"${message.trim()}"</i>\n\n` +
        `<i>🕒 Yuborilgan vaqt: ${new Date().toLocaleString("uz-UZ")}</i>`;

      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      });

      if (!res.ok) throw new Error("Telegram send failed");

      setStatus("sent");
      setName("");
      setContact("");
      setMessage("");
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2200);
    } catch {
      setStatus("error");
    }
  };

  const isFormValid = name.trim().length > 1 && contact.trim().length > 2 && message.trim().length > 3;

  return (
    <AnimatePresence>
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(20, 20, 15, 0.45)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
              background: "var(--background)",
              border: "1px solid var(--border-color)",
              borderRadius: 24,
              boxShadow: "0 32px 80px rgba(20, 20, 15, 0.22)",
              padding: "clamp(1.75rem, 4vw, 2.5rem)",
              overflow: "hidden",
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Yopish"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--surface)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--foreground)",
                cursor: "pointer",
                transition: "transform 200ms ease, background 200ms ease",
              }}
            >
              <X size={18} />
            </button>

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "2rem 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(39, 201, 63, 0.12)",
                    border: "1px solid rgba(39, 201, 63, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#27C93F",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="display-text" style={{ fontSize: "1.5rem", color: "var(--foreground)", margin: 0 }}>
                  {t("modal_sent_title")}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--fg-muted)", margin: 0, maxWidth: "32ch" }}>
                  {t("modal_sent_desc")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Header */}
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "var(--fg-subtle)" }}>
                    <MessageSquare size={16} />
                    <span className="meta-label">TELEGRAM BOT ALOQA</span>
                  </div>
                  <h3 className="display-text" style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", color: "var(--foreground)", margin: 0 }}>
                    {t("modal_contact_title")}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", marginTop: "0.35rem", marginBottom: 0, lineHeight: 1.5 }}>
                    {t("modal_contact_desc")}
                  </p>
                </div>

                {/* Input: Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--foreground)" }}>
                    {t("modal_name_label")}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("modal_name_placeholder")}
                    style={inputStyle}
                  />
                </div>

                {/* Input: Contact */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--foreground)" }}>
                    {t("modal_contact_input_label")}
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={t("modal_contact_input_placeholder")}
                    style={inputStyle}
                  />
                </div>

                {/* Input: Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--foreground)" }}>
                    {t("modal_message_label")}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("modal_message_placeholder")}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                {status === "error" && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#FF5F56", fontSize: "0.8125rem" }}>
                    <AlertCircle size={16} />
                    <span>Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || status === "sending"}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.875rem 1.5rem",
                    borderRadius: 14,
                    background: isFormValid ? "var(--foreground)" : "var(--surface)",
                    color: isFormValid ? "var(--background)" : "var(--fg-subtle)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    cursor: isFormValid && status !== "sending" ? "pointer" : "not-allowed",
                    transition: "all 200ms ease",
                  }}
                >
                  <Send size={16} />
                  <span>{status === "sending" ? t("modal_sending") : t("modal_send_btn")}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: 12,
  background: "var(--surface)",
  border: "1px solid var(--border-color)",
  fontSize: "0.875rem",
  color: "var(--foreground)",
  fontFamily: "var(--font-sans)",
  outline: "none",
  transition: "border-color 200ms ease",
};
