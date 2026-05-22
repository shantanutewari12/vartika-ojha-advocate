import { motion } from "framer-motion";
import { SectionTitle } from "./Ornament";
import frame from "@/assets/about-frame.jpg";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle eyebrow="An Introduction" title="About the Advocate" />

        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          {/* Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-sm gold-glow"
              style={{
                backgroundImage: `url(${frame})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-[18%] flex items-center justify-center">
                <div className="leather-card flex h-full w-full items-center justify-center rounded-sm">
                  <div className="text-center">
                    <p className="font-display text-7xl text-gradient-gold">VO</p>
                    <p className="mt-4 font-display text-xs uppercase tracking-[0.4em] text-gold">
                      Lex · Veritas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-display text-2xl italic leading-relaxed text-ivory md:text-3xl">
              "Justice is not merely a profession — it is a quiet discipline of
              <span className="text-gold"> truth, intellect, and integrity</span>."
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Advocate and Legal Consultant with extensive internship experience and hands-on
              expertise in diverse areas of law. Skilled in legal drafting, legal research, case
              analysis, and client advisory.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { k: "7+", v: "Years of Study" },
                { k: "6", v: "Offices Served" },
                { k: "8", v: "Practice Areas" },
              ].map((s) => (
                <div key={s.v} className="leather-card rounded-sm p-5 text-center">
                  <p className="font-display text-4xl text-gold">{s.k}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p
                className="font-display text-4xl italic text-gold"
                style={{ fontFamily: "'Brush Script MT', cursive" }}
              >
                Vartika Ojha
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — Advocate &amp; Counsel
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
