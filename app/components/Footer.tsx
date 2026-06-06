// Minimal footer. Server component, so the year renders once with no hydration
// concern. Sits on the ivory paper.
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-[var(--v6-s5)] pb-[calc(var(--v6-s9)+env(safe-area-inset-bottom))] pt-[var(--v6-s7)] text-center">
      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--v6-ink-soft)]">
        © {year} Noah Kim · Built with Next.js
      </p>
    </footer>
  );
}
