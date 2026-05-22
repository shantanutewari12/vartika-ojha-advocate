import { motion } from "framer-motion";
import { SectionTitle, Ornament } from "./Ornament";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 wood-panel">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Approach the Bench"
          title="Schedule a Consultation"
          subtitle="For matters confidential or commercial, kindly forward your enquiry below."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass rounded-sm p-8 md:p-10"
          >
            <div className="space-y-6">
              {[
                { l: "Full Name", t: "text", p: "Hon'ble Sir / Madam" },
                { l: "Email Address", t: "email", p: "you@chambers.com" },
                { l: "Matter / Subject", t: "text", p: "Brief subject of consultation" },
              ].map((f) => (
                <div key={f.l}>
                  <label className="mb-2 block font-display text-xs uppercase tracking-[0.3em] text-gold">
                    {f.l}
                  </label>
                  <input
                    type={f.t}
                    placeholder={f.p}
                    className="w-full rounded-sm border border-gold/30 bg-background/40 px-4 py-3 font-sans text-ivory placeholder:text-muted-foreground/60 transition-all focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block font-display text-xs uppercase tracking-[0.3em] text-gold">
                  Brief of Matter
                </label>
                <textarea
                  rows={5}
                  placeholder="Kindly elaborate on the matter at hand..."
                  className="w-full resize-none rounded-sm border border-gold/30 bg-background/40 px-4 py-3 font-sans text-ivory placeholder:text-muted-foreground/60 transition-all focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-gold px-8 py-4 font-display text-sm uppercase tracking-[0.3em] text-background transition-all hover:gold-glow"
              >
                Submit Enquiry
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="leather-card rounded-sm p-8">
              <h3 className="font-display text-2xl text-ivory">Chamber of Vartika Ojha</h3>
              <p className="mt-2 text-sm text-muted-foreground">Advocate & Legal Consultant</p>

              <Ornament />

              <ul className="space-y-5">
                <li>
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">Email</p>
                  <p className="mt-1 text-ivory">vartika.ojha@chambers.law</p>
                </li>
                <li>
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                    Online Consultation
                  </p>
                  <p className="mt-1 text-ivory">Available Pan-India via Video Call</p>
                </li>
                <li>
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-ivory transition-colors hover:text-gold"
                  >
                    linkedin.com/in/vartika-ojha →
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="leather-card flex items-center gap-4 rounded-sm p-6"
            >
              <svg viewBox="0 0 24 24" className="h-10 w-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <div>
                <p className="font-display text-lg text-ivory">Pro-Bono Consultations</p>
                <p className="text-xs text-muted-foreground">
                  Reserved hours every Saturday for matters of public interest.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-gold/20 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-display text-sm tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Chamber of <span className="text-gold">Vartika Ojha</span>. All rights reserved.
        </p>
        <p className="font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Fiat Justitia Ruat Caelum
        </p>
      </div>
    </footer>
  );
}
