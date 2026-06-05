"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/proto/a", label: "A", name: "Kinetic" },
  { href: "/proto/b", label: "B", name: "Editorial" },
  { href: "/proto/c", label: "C", name: "Atmospheric" },
] as const;

export function ProtoSwitcher() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 p-1 backdrop-blur-md">
        <Link
          href="/proto"
          className="px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-white"
        >
          Index
        </Link>
        <span className="h-4 w-px bg-white/10" />
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-full px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition-colors ${
                active
                  ? "bg-[color:var(--color-accent)] text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className="font-semibold">{tab.label}</span>
              <span className="ml-1.5 hidden sm:inline opacity-70">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
