import { motion } from "framer-motion";
import heroBg from "@/assets/hero-chamber.jpg";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.015 40 / 0.85) 0%, oklch(0.16 0.018 50 / 0.7) 50%, oklch(0.12 0.015 40 / 0.95) 100%)",
        }}
      />
      <div className="absolute inset-0 vignette" />

      <Particles count={40} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-xs uppercase tracking-[0.6em] text-gold"
        >
          — Chamber of —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-6 font-display text-6xl font-light leading-[0.95] text-ivory md:text-[8rem] lg:text-[10rem]"
        >
          <span className="shimmer-gold">Vartika</span>
          <br />
          <span className="italic text-ivory">Ojha</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="my-8 h-px w-48 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="font-display text-xl tracking-[0.3em] text-muted-foreground md:text-2xl"
        >
          ADVOCATE &nbsp;·&nbsp; LEGAL CONSULTANT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#experience"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-gold px-8 py-4 font-display text-sm uppercase tracking-[0.3em] text-background transition-all hover:gold-glow"
          >
            <span className="relative z-10">View Experience</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-gold/70 px-8 py-4 font-display text-sm uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold/10 hover:gold-glow"
          >
            Book Consultation
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gold/70">
            <span className="font-display text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
