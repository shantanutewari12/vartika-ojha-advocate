import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-6"
      }`}
      style={{
        backgroundColor: scrolled ? "oklch(0.16 0.018 50 / 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid oklch(0.78 0.13 78 / 0.2)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path d="M12 3v18M5 7h14M7 7l-2 6a4 4 0 0 0 8 0L11 7M17 7l-2 6a4 4 0 0 0 8 0l-2-6"
              stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-display text-xl tracking-wider text-ivory">
            Vartika <span className="text-gold">Ojha</span>
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
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
          href="#contact"
          className="hidden rounded-sm border border-gold/60 px-5 py-2 font-display text-sm tracking-wider text-gold transition-all hover:bg-gold hover:text-background md:inline-block"
        >
          Consult
        </a>
      </nav>
    </header>
  );
}
