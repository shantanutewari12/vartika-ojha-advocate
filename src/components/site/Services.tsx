import { motion } from "framer-motion";
import { SectionTitle } from "./Ornament";

const services = [
  { t: "Legal Consultation", d: "One-to-one advisory on matters civil, criminal, and corporate.", n: "I" },
  { t: "Contract Drafting", d: "Precise drafting of agreements, MoUs, and commercial contracts.", n: "II" },
  { t: "Litigation Support", d: "Brief preparation, pleadings, and courtroom strategy.", n: "III" },
  { t: "Legal Research", d: "Doctrinal and empirical research with citation analysis.", n: "IV" },
  { t: "Consumer Dispute Assistance", d: "Representation before redressal commissions.", n: "V" },
  { t: "Policy & Compliance Research", d: "Regulatory mapping for corporates and trade entities.", n: "VI" },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 wood-panel">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle eyebrow="Services Rendered" title="The Chamber Offers" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="leather-card group relative overflow-hidden rounded-sm p-8 transition-all duration-500 hover-gold-glow"
            >
              <div className="absolute right-6 top-6 font-display text-6xl text-gold/15 transition-all duration-500 group-hover:text-gold/30">
                {s.n}
              </div>
              <div className="relative z-10">
                <div className="mb-4 h-px w-10 bg-gold" />
                <h3 className="font-display text-2xl text-ivory">{s.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.d}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.3em] text-gold transition-all hover:gap-3"
                >
                  Enquire <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
