import { motion } from "framer-motion";
import { SectionTitle } from "./Ornament";

const skills = [
  { t: "Legal Drafting", v: 95 },
  { t: "Legal Research", v: 92 },
  { t: "Case Analysis", v: 90 },
  { t: "Client Advisory", v: 88 },
  { t: "Litigation Strategy", v: 85 },
  { t: "Policy & Compliance", v: 87 },
];

const badges = [
  "Bar Council Member",
  "Moot Court Distinction",
  "Published Researcher",
  "Pro-Bono Counsel",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="The Counsel's Craft" title="Skills & Distinctions" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="font-display text-lg text-ivory">{s.t}</span>
                  <span className="font-display text-xs tracking-[0.3em] text-gold">{s.v}%</span>
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-secondary/40">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                    className="h-full"
                    style={{ background: "var(--gradient-gold)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap content-start gap-4">
            {badges.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gold-border rounded-full px-6 py-3"
              >
                <span className="font-display text-sm tracking-wider text-ivory">{b}</span>
              </motion.div>
            ))}

            <div className="leather-card mt-4 w-full rounded-sm p-6">
              <p className="font-display text-xs uppercase tracking-[0.4em] text-gold">Languages</p>
              <p className="mt-3 font-display text-2xl text-ivory">English · Hindi</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fluent professional command for drafting, advocacy, and client counsel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
