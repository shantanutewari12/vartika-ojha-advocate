import { motion } from "framer-motion";
import { Ornament } from "./Ornament";

const features = [
  {
    t: "Secure Video Consultation",
    d: "Confidential one-on-one sessions over encrypted video — from anywhere in India.",
    i: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="M16 10l6-3v10l-6-3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    t: "Flexible Scheduling",
    d: "Book a slot at your convenience — weekday evenings and weekend hours available.",
    i: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Digital Documentation",
    d: "Receive drafts, notes, and legal opinions delivered straight to your inbox.",
    i: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path
          d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
          strokeLinejoin="round"
        />
        <path d="M14 3v6h6M9 14h6M9 18h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    t: "Pan-India Reach",
    d: "Counsel rendered across every state — no travel, no waiting, no office visits required.",
    i: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
];

export function OnlineConsultation() {
  return (
    <section id="online" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.78 0.13 78 / 0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-display text-[10px] uppercase tracking-[0.5em] text-gold sm:text-xs">
            Now Available
          </p>
          <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
            <span className="text-gradient-gold">Online Legal</span>
            <br />
            <span className="italic text-ivory">Consultation</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Seasoned counsel — now accessible from the comfort of your home or office. Schedule a
            confidential video consultation with Advocate Vartika Ojha and receive considered legal
            advice without ever leaving your desk.
          </p>
          <Ornament />
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="gold-border rounded-sm p-6 transition-all duration-500 hover:gold-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 text-gold">
                <span className="block h-6 w-6">{f.i}</span>
              </div>
              <h3 className="font-display text-xl text-ivory">{f.t}</h3>
              <div className="my-3 h-px w-8 bg-gold/60" />
              <p className="text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Big CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="leather-card mt-12 overflow-hidden rounded-sm md:mt-16"
        >
          <div className="grid items-center gap-8 p-7 sm:p-10 md:grid-cols-[1.5fr_1fr] md:p-12">
            <div>
              <p className="font-display text-[10px] uppercase tracking-[0.4em] text-gold sm:text-xs">
                Schedule a Session
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
                Your first consultation,
                <br />
                <span className="text-gradient-gold italic">a click away.</span>
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Reserve a 30-minute online session to discuss your matter in confidence.
                Convenient, secure, and tailored to your schedule.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-ivory sm:grid-cols-2">
                {[
                  "30 min focused session",
                  "Encrypted video link",
                  "Written follow-up note",
                  "Pan-India availability",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="text-gold">◆</span> {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-sm bg-gold px-6 py-4 font-display text-xs uppercase tracking-[0.3em] text-background transition-all hover:gold-glow sm:text-sm md:w-auto md:px-8"
              >
                Book Consultation
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-sm border border-gold/60 px-6 py-4 font-display text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold/10 sm:text-sm md:w-auto md:px-8"
              >
                Enquire First
              </a>
              <p className="mt-2 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:text-right">
                Confidential · Secure · Privileged
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
