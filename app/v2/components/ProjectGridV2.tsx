"use client";

import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";
import {
  getRescueProjects,
  type RescueProject,
} from "@/app/lib/data/rescueProjects";

export function ProjectGridV2() {
  const products = getRescueProjects("product");
  const foundation = getRescueProjects("foundation");

  return (
    <section
      id="projects"
      className="relative border-t border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Product & Revenue
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Greenfield to revenue.
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 md:text-lg">
            From initial call to production system — with payments, auth, multi-tenancy, and real users. Three products, three different stacks, three different problems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((project) => (
            <ProductCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-24 mb-12 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-400/20 bg-white/[0.03] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Foundation & Specialty
          </div>
          <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-[2rem] md:text-4xl">
            And everything that got me here.
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foundation.map((project) => (
            <FoundationCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ProjectImage({ project }: { project: RescueProject }) {
  if (project.imageSrc) {
    return (
      <div
        className={`relative h-28 w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 bg-zinc-950/50" />
        <Image
          src={project.imageSrc}
          alt={`${project.name} logo`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="relative object-contain p-4"
        />
      </div>
    );
  }

  // Monogram fallback when no logo/screenshot exists
  return (
    <div
      className={`relative flex h-28 w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br ${project.gradient}`}
    >
      <div className="absolute inset-0 bg-zinc-950/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
      <span className="font-display relative text-4xl font-bold tracking-tight text-white/90">
        {project.monogram ?? project.name.slice(0, 2)}
      </span>
    </div>
  );
}

function ProductCard({ project }: { project: RescueProject }) {
  const inner = (
    <MagicCard
      className="group h-full rounded-2xl"
      gradientSize={220}
      gradientFrom="var(--color-accent)"
      gradientTo="#22d3ee"
      gradientColor="var(--color-accent)"
      gradientOpacity={0.28}
    >
      <div className="flex h-full min-h-[22rem] flex-col gap-6 p-8">
        <ProjectImage project={project} />

        <div className="flex-1">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
              {project.client}
            </span>
            {project.url && (
              <span className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-[color:var(--color-accent-gold)]">
                Visit
                <ArrowIcon />
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">
            {project.tagline}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            {project.beats.slice(0, 2).map((beat) => (
              <li key={beat} className="flex items-start gap-2">
                <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{beat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[0.7rem] text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </MagicCard>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${project.name}`}
      >
        {inner}
      </a>
    );
  }

  return inner;
}

function FoundationCard({ project }: { project: RescueProject }) {
  const inner = (
    <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/[0.04]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
          {project.client}
        </span>
        {project.url ? (
          <span className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-[color:var(--color-accent-gold)]">
            Visit
            <ArrowIcon />
          </span>
        ) : (
          <div
            className={`h-2 w-2 rounded-full bg-gradient-to-br ${project.gradient}`}
          />
        )}
      </div>
      <h4 className="font-display text-xl font-semibold tracking-tight text-white">
        {project.name}
      </h4>
      <p className="text-sm leading-relaxed text-zinc-400">{project.tagline}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded border border-white/5 px-2 py-0.5 font-mono text-[0.65rem] text-zinc-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${project.name}`}
      >
        {inner}
      </a>
    );
  }

  return inner;
}
