import { motion } from "framer-motion";

type Props = { accent: string; variant?: "phone" | "dashboard" | "card" | "wide"; className?: string };

// All UI in mockups uses FAKE data — strict NDA masking.
export function ProjectMockup({ accent, variant = "card", className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: accent }}>
      <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.3), transparent 50%)",
      }} />
      <div className="absolute inset-0 grid place-items-center p-6">
        {variant === "phone" && <PhoneMock />}
        {variant === "dashboard" && <DashMock />}
        {variant === "wide" && <WideMock />}
        {variant === "card" && <CardMock />}
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[200px] rounded-[28px] bg-white/95 p-3 shadow-2xl ring-1 ring-black/10"
    >
      <div className="rounded-[20px] bg-slate-50 p-3">
        <div className="flex items-center justify-between text-[8px] text-slate-500 font-semibold">
          <span>9:41</span>
          <span>••• ⌃</span>
        </div>
        <div className="mt-3 text-[10px] text-slate-500">Good morning,</div>
        <div className="text-[13px] font-bold text-slate-900">John Doe</div>
        <div className="mt-3 rounded-xl bg-slate-900 p-3 text-white">
          <div className="text-[8px] uppercase tracking-wider text-white/60">Balance</div>
          <div className="text-base font-bold">•••• ••••</div>
          <div className="mt-2 flex justify-between text-[8px] text-white/70">
            <span>•• •• •• 4242</span>
            <span>VISA</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {["Send", "Pay", "Top up", "More"].map((a) => (
            <div key={a} className="rounded-lg bg-white p-1.5 text-center text-[7px] font-semibold text-slate-700 shadow-sm">
              {a}
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {[["Coffee Lab", "−$•.••"], ["Transfer", "+$••.••"], ["Spotify", "−$•.••"]].map(([n, v]) => (
            <div key={n} className="flex items-center justify-between rounded-lg bg-white p-1.5 text-[8px]">
              <span className="font-semibold text-slate-700">{n}</span>
              <span className="font-mono text-slate-500">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DashMock() {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[280px] rounded-xl bg-white/95 p-3 shadow-2xl ring-1 ring-black/10"
    >
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-bold text-slate-900">Overview</div>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[["MRR", "$•••k"], ["Users", "•,•••"], ["Churn", "•.•%"]].map(([l, v]) => (
          <div key={l} className="rounded-lg bg-slate-50 p-1.5">
            <div className="text-[7px] uppercase tracking-wider text-slate-500">{l}</div>
            <div className="text-[10px] font-bold text-slate-900">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 h-16 rounded-lg bg-gradient-to-tr from-indigo-50 to-cyan-50 p-2">
        <svg viewBox="0 0 100 40" className="h-full w-full">
          <polyline
            fill="none"
            stroke="#6366F1"
            strokeWidth="1.5"
            points="0,30 15,22 30,26 45,12 60,18 75,8 100,14"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function CardMock() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-2"
    >
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-16 w-20 rounded-lg bg-white/95 p-2 shadow-lg ring-1 ring-black/5">
          <div className="h-1 w-6 rounded-full bg-slate-200" />
          <div className="mt-1.5 h-2 w-12 rounded bg-slate-300" />
          <div className="mt-2 h-3 w-10 rounded bg-slate-800" />
        </div>
      ))}
    </motion.div>
  );
}

function WideMock() {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex gap-3 max-w-full overflow-hidden px-4"
    >
      {[0, 1, 2].map((i) => (
        <div key={i} className="w-32 rounded-xl bg-white/95 p-2.5 shadow-2xl ring-1 ring-black/10">
          <div className="h-12 rounded-md bg-gradient-to-br from-slate-100 to-slate-200" />
          <div className="mt-2 h-1.5 w-16 rounded bg-slate-300" />
          <div className="mt-1 h-1 w-10 rounded bg-slate-200" />
        </div>
      ))}
    </motion.div>
  );
}
