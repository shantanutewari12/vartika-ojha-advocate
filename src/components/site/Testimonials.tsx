import { motion } from "framer-motion";
import { SectionTitle } from "./Ornament";

const items = [
  {
    quote:
      "Vartika's research and drafting display a rare command of doctrine and detail. Her work on competition matters was exemplary.",
    name: "Senior Counsel",
    org: "Competition Commission of India",
  },
  {
    quote:
      "An exceptionally diligent young advocate — sharp, articulate, and always meticulously prepared.",
    name: "Supervising Officer",
    org: "Ministry of Law and Justice",
  },
  {
    quote:
      "Her grasp of consumer protection law and her ability to translate complexity into clarity is remarkable.",
    name: "Mentor",
    org: "NCDRC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle eyebrow="Letters of Recommendation" title="Client Appreciations" />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.figure
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="leather-card relative rounded-sm p-8 hover-gold-glow"
            >
              <svg
                viewBox="0 0 24 24"
                className="absolute right-6 top-6 h-8 w-8 text-gold/30"
                fill="currentColor"
              >
                <path d="M7 7h4v4H7c0 2.2 1.8 4 4 4v2c-3.3 0-6-2.7-6-6V7zm10 0h4v4h-4c0 2.2 1.8 4 4 4v2c-3.3 0-6-2.7-6-6V7z" />
              </svg>
              <blockquote className="font-display text-lg italic leading-relaxed text-ivory">
                "{it.quote}"
              </blockquote>
              <div className="mt-6 h-px w-12 bg-gold/60" />
              <figcaption className="mt-4">
                <p className="font-display text-base text-gold">{it.name}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{it.org}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
