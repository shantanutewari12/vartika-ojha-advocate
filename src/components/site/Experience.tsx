import { motion } from "framer-motion";
import { SectionTitle } from "./Ornament";
import parchment from "@/assets/parchment.jpg";

const cases = [
  { org: "Yayskool", role: "Law Faculty", file: "VO/2024-001" },
  { org: "Competition Commission of India", role: "Legal Intern", file: "VO/2023-014" },
  { org: "National Consumer Disputes Redressal Commission", role: "Research Associate", file: "VO/2023-009" },
  { org: "Centre for Trade and Investment Law", role: "Research Intern", file: "VO/2022-022" },
  { org: "Ministry of Law and Justice", role: "Legal Intern", file: "VO/2022-005" },
  { org: "BPTP Ltd.", role: "Corporate Legal Intern", file: "VO/2021-031" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          eyebrow="Case Files"
          title="Professional Experience"
          subtitle="A record of chambers, commissions, and councils where research, drafting, and counsel have been rendered."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm hover-gold-glow"
              style={{
                backgroundImage: `linear-gradient(160deg, oklch(0.94 0.025 80 / 0.92), oklch(0.86 0.04 75 / 0.9)), url(${parchment})`,
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                border: "1px solid oklch(0.78 0.13 78 / 0.4)",
                boxShadow: "0 20px 40px -20px oklch(0 0 0 / 0.5)",
              }}
            >
              <div className="flex items-start justify-between border-b border-leather/30 px-6 py-3">
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-leather">
                  Case File · {c.file}
                </span>
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-leather">
                  Confidential
                </span>
              </div>

              <div className="p-7">
                <p className="font-display text-xs uppercase tracking-[0.4em] text-leather/70">
                  {c.role}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-mahogany">
                  {c.org}
                </h3>

                <div className="my-5 flex items-center gap-2">
                  <div className="h-px flex-1 bg-leather/30" />
                  <svg viewBox="0 0 24 24" className="h-3 w-3 text-leather" fill="currentColor">
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <div className="h-px flex-1 bg-leather/30" />
                </div>

                {/* Wax seal */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-serif text-sm italic text-leather">— Sealed & Signed</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.45_0.18_25)] text-[10px] font-bold text-ivory shadow-md">
                    VO
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
