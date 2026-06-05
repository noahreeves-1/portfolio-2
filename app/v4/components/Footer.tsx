// Minimal footer (socials live in the contact panel above). Server component, so
// the year is rendered once with no hydration concern.
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-[var(--v4-s5)] pb-[calc(var(--v4-s9)+env(safe-area-inset-bottom))] pt-[var(--v4-s7)] text-center">
      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--v4-ink-soft)]">
        © {year} Noah Kim · Built with Next.js
      </p>
    </footer>
  );
}
