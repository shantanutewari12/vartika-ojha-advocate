import { motion } from "framer-motion";
import { SectionTitle } from "./Ornament";

const items = [
  { t: "Constitutional Law", d: "Fundamental rights, writs, and constitutional interpretation." },
  { t: "Corporate Law", d: "Compliance, governance, and corporate advisory." },
  { t: "Criminal Law", d: "Trial strategy, bail applications, and statutory defense." },
  { t: "Competition Law", d: "Anti-trust, market conduct, and CCI matters." },
  { t: "Consumer Dispute Law", d: "Redressal commissions and consumer rights." },
  { t: "International Trade Law", d: "WTO frameworks, treaties, and cross-border counsel." },
  { t: "Legal Drafting", d: "Pleadings, contracts, opinions, and policy notes." },
  { t: "Litigation Support", d: "Case research, citation analysis, and brief preparation." },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-32 wood-panel">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Domains of Practice" title="Legal Expertise" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="gold-border group relative rounded-sm p-6 transition-all duration-500 hover:gold-glow"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 text-gold transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.4">
                  <path d="M12 3v18M5 7h14M7 7l-2 6a4 4 0 0 0 8 0L11 7M17 7l-2 6a4 4 0 0 0 8 0l-2-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-ivory">{it.t}</h3>
              <div className="my-3 h-px w-8 bg-gold/60" />
              <p className="text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
