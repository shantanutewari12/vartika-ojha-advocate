import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#online", label: "Online" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "py-3 backdrop-blur-md" : "py-5 md:py-6"
      }`}
      style={{
        backgroundColor: scrolled || open ? "oklch(0.16 0.018 50 / 0.9)" : "transparent",
        borderBottom: scrolled || open ? "1px solid oklch(0.78 0.13 78 / 0.2)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="flex items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold sm:h-7 sm:w-7">
            <path d="M12 3v18M5 7h14M7 7l-2 6a4 4 0 0 0 8 0L11 7M17 7l-2 6a4 4 0 0 0 8 0l-2-6"
              stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-display text-lg tracking-wider text-ivory sm:text-xl">
            Vartika <span className="text-gold">Ojha</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#online"
          className="hidden rounded-sm border border-gold/60 px-5 py-2 font-display text-xs uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-background lg:inline-block"
        >
          Consult
        </a>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 text-gold lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-gold transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-full bg-gold transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-full bg-gold transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`absolute inset-x-0 top-full origin-top overflow-hidden border-t border-gold/15 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "oklch(0.14 0.015 45 / 0.96)" }}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-gold/10 py-3 font-display text-sm uppercase tracking-[0.3em] text-ivory transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#online"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-gold px-5 py-3 text-center font-display text-xs uppercase tracking-[0.3em] text-background"
            >
              Book Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
