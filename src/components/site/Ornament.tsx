export function Ornament({ label }: { label?: string }) {
  return (
    <div className="divider-ornament my-8">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
        <path
          d="M12 2 L14 9 L21 11 L14 13 L12 22 L10 13 L3 11 L10 9 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      {label && (
        <span className="font-display text-xs uppercase tracking-[0.4em] text-gold">
          {label}
        </span>
      )}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
        <path
          d="M12 2 L14 9 L21 11 L14 13 L12 22 L10 13 L3 11 L10 9 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-4 font-display text-xs uppercase tracking-[0.5em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-light leading-tight text-ivory sm:text-4xl md:text-6xl">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
      <Ornament />
    </div>
  );
}
