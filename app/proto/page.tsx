import Link from "next/link";

const OPTIONS = [
  {
    href: "/proto/a",
    tag: "A",
    title: "Kinetic verb-cycle",
    note: "My recommendation. A big serif headline where one word morphs through your story — fix → rebuild → rescue → ship — over a backdrop that just barely breathes. The 'dope animation' lives in the typography. Mobile-perfect.",
  },
  {
    href: "/proto/b",
    tag: "B",
    title: "Editorial quiet",
    note: "Massive negative space. The headline reveals line-by-line behind a mask on load. Mono labels pinned to the corners, one accent line that draws itself. Quiet, senior, confident. Almost no motion — the restraint is the flex.",
  },
  {
    href: "/proto/c",
    tag: "C",
    title: "Atmospheric swing",
    note: "Headline over a living gradient mesh + film grain, with a magnetic button. This is what 'crazy animation' feels like without the WebGL/3D tax — and it falls back to a static gradient on mobile and reduced-motion.",
  },
] as const;

export default function ProtoIndexPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-24">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[color:var(--color-accent-soft)]">
        Hero prototypes
      </p>
      <h1
        style={{ fontFamily: "var(--font-serif)" }}
        className="mt-4 text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl"
      >
        Three heroes. Open each, feel the motion, pick one — or tell me to blend them.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
        Same story, three treatments. They&apos;re production-grade, not throwaway — the one
        you choose gets promoted into the full redesign. Use the switcher at the bottom to
        flip between them.
      </p>

      <div className="mt-12 flex flex-col gap-3">
        {OPTIONS.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[color:var(--color-accent)]/50 hover:bg-white/[0.04]"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-[color:var(--color-accent-soft)]">
                {o.tag}
              </span>
              <h2 className="text-lg font-semibold text-white">{o.title}</h2>
              <span className="ml-auto text-zinc-500 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{o.note}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
