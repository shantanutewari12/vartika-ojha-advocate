import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle, Ornament } from "./Ornament";

function SuccessOverlay({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-20 flex items-center justify-center rounded-sm"
        style={{ background: "oklch(0.14 0.015 45 / 0.97)", backdropFilter: "blur(8px)" }}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex flex-col items-center text-center px-6"
        >
          {/* Animated seal */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative mb-6 flex h-24 w-24 items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute inset-0 rounded-full border border-gold/40"
            />
            <div
              className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/70"
              style={{
                background: "radial-gradient(circle, oklch(0.28 0.04 50), oklch(0.18 0.02 40))",
                boxShadow: "0 0 40px oklch(0.78 0.13 78 / 0.35)",
              }}
            >
              <motion.svg
                viewBox="0 0 32 32"
                fill="none"
                className="h-10 w-10 text-gold"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M7 16l6 6 12-12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                />
              </motion.svg>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-[10px] uppercase tracking-[0.5em] text-gold"
          >
            Received &amp; Acknowledged
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-4 font-display text-3xl text-ivory"
          >
            Enquiry Submitted
          </motion.h3>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="my-5 h-px w-16 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="max-w-xs text-sm leading-relaxed text-muted-foreground"
          >
            Your matter has been duly received. Advocate Vartika Ojha shall revert at the earliest
            with due diligence.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            onClick={onClose}
            className="mt-8 rounded-sm border border-gold/50 px-8 py-3 font-display text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold/10"
          >
            Close
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function playGavelSound() {
  try {
    const ctx = new (
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    )();

    // Main thud — low frequency burst
    const buf1 = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
    const data1 = buf1.getChannelData(0);
    for (let i = 0; i < data1.length; i++) {
      const t = i / ctx.sampleRate;
      const env = Math.exp(-t * 18) * (t < 0.01 ? t / 0.01 : 1);
      data1[i] = (Math.sin(2 * Math.PI * 80 * t) * 0.6 + Math.random() * 0.25) * env;
    }
    const src1 = ctx.createBufferSource();
    src1.buffer = buf1;
    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.8, ctx.currentTime);
    src1.connect(gain1);
    gain1.connect(ctx.destination);
    src1.start(ctx.currentTime);

    // High resonant click
    const buf2 = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
    const data2 = buf2.getChannelData(0);
    for (let i = 0; i < data2.length; i++) {
      const t = i / ctx.sampleRate;
      const env = Math.exp(-t * 40);
      data2[i] = Math.sin(2 * Math.PI * 420 * t) * env * 0.5;
    }
    const src2 = ctx.createBufferSource();
    src2.buffer = buf2;
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.4, ctx.currentTime);
    src2.connect(gain2);
    gain2.connect(ctx.destination);
    src2.start(ctx.currentTime + 0.02);

    // Subtle echo
    const buf3 = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
    const data3 = buf3.getChannelData(0);
    for (let i = 0; i < data3.length; i++) {
      const t = i / ctx.sampleRate;
      const env = Math.exp(-t * 22);
      data3[i] = Math.sin(2 * Math.PI * 60 * t) * env * 0.3;
    }
    const src3 = ctx.createBufferSource();
    src3.buffer = buf3;
    const gain3 = ctx.createGain();
    gain3.gain.setValueAtTime(0.3, ctx.currentTime);
    src3.connect(gain3);
    gain3.connect(ctx.destination);
    src3.start(ctx.currentTime + 0.08);
  } catch {
    // Silently fail if AudioContext not supported
  }
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playGavelSound();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 wood-panel">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionTitle
          eyebrow="Approach the Bench"
          title="Schedule a Consultation"
          subtitle="For matters confidential or commercial, kindly forward your enquiry below."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="glass rounded-sm p-8 md:p-10"
            >
              <div className="space-y-6">
                {[
                  { l: "Full Name", t: "text", p: "Hon'ble Sir / Madam" },
                  { l: "Email Address", t: "email", p: "you@youremail.com" },
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

            {submitted && <SuccessOverlay onClose={() => setSubmitted(false)} />}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="leather-card rounded-sm p-8">
              <h3 className="font-display text-2xl text-ivory">Office of Vartika Ojha</h3>
              <p className="mt-2 text-sm text-muted-foreground">Advocate &amp; Legal Consultant</p>

              <Ornament />

              <ul className="space-y-5">
                <li>
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">Email</p>
                  <a
                    href="mailto:vartikaojha.advocate@gmail.com"
                    className="mt-1 inline-block text-ivory transition-colors hover:text-gold"
                  >
                    vartikaojha.advocate@gmail.com
                  </a>
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
                    href="https://www.linkedin.com/in/vartika-ojha"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-ivory transition-colors hover:text-gold"
                  >
                    linkedin.com/in/vartika-ojha →
                  </a>
                </li>
              </ul>
            </div>

            <div className="leather-card flex items-center gap-4 rounded-sm p-6">
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10 shrink-0 text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <div>
                <p className="font-display text-lg text-ivory">Pro-Bono Sessions</p>
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
          © {new Date().getFullYear()} Office of <span className="text-gold">Vartika Ojha</span>.
          All rights reserved.
        </p>
        <p className="font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Fiat Justitia Ruat Caelum
        </p>
      </div>
    </footer>
  );
}
