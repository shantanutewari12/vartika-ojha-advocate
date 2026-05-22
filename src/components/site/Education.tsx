import { motion } from "framer-motion";
import { SectionTitle } from "./Ornament";

const items = [
  {
    period: "2024 — Present",
    title: "Master of Laws (LL.M.)",
    institution: "University of Allahabad",
    note: "Advanced specialization in jurisprudence and contemporary legal frameworks.",
  },
  {
    period: "2019 — 2024",
    title: "B.A. LL.B. (Hons.)",
    institution: "Invertis University",
    note: "Five-year integrated law degree with distinction in Constitutional Law.",
  },
];

function Seal() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full gold-border">
      <div className="absolute inset-1 rounded-full border border-gold/40" />
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-gold">
        <path
          d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-20 md:py-32 wood-panel">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionTitle eyebrow="Academic Pursuit" title="Education" />

        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:left-1/2" />

          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative mb-12 flex flex-col gap-6 md:flex-row md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2">
                <Seal />
              </div>
              <div className="w-full pl-24 md:w-1/2 md:pl-0 md:px-12">
                <div className="leather-card rounded-sm p-8 hover-gold-glow">
                  <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">
                    {it.period}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-ivory">{it.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {it.institution}
                  </p>
                  <div className="my-4 h-px w-12 bg-gold/50" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{it.note}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
