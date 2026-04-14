"use client";

import Image from "next/image";
import { MagicCard } from "@/components/ui/magic-card";
import { BentoGrid } from "@/components/ui/bento-grid";
import { getRescueProjects } from "@/app/lib/data/rescueProjects";

const ALARM_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2" />
    <path d="M5 3 2 6" />
    <path d="m22 6-3-3" />
  </svg>
);

export function RescueBento() {
  const rescues = getRescueProjects("rescue");
  const [primary, secondary] = rescues;

  return (
    <section
      id="rescue"
      className="relative border-t border-white/5 bg-zinc-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-red-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            Emergency Rescues
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            When the build is broken,
            <br />
            <span className="text-zinc-500">they call me.</span>
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 md:text-lg">
            Two rescues at OSMOS in the span of months. Both started with architecture that hadn&apos;t worked in weeks. Both ended with production systems the team could actually run.
          </p>
        </div>

        <BentoGrid className="auto-rows-auto">
          {primary && (
            <BentoRescueCard
              project={primary}
              className="col-span-3 lg:col-span-2"
              gradientFrom="#a78bfa"
              gradientTo="#ec4899"
            />
          )}
          {secondary && (
            <BentoRescueCard
              project={secondary}
              className="col-span-3 lg:col-span-1"
              gradientFrom="#22d3ee"
              gradientTo="#3b82f6"
            />
          )}
        </BentoGrid>
      </div>
    </section>
  );
}

interface BentoRescueCardProps {
  project: ReturnType<typeof getRescueProjects>[number];
  className: string;
  gradientFrom: string;
  gradientTo: string;
}

function BentoRescueCard({
  project,
  className,
  gradientFrom,
  gradientTo,
}: BentoRescueCardProps) {
  const card = (
    <MagicCard
      className="group h-full rounded-2xl"
      gradientSize={260}
      gradientFrom={gradientFrom}
      gradientTo={gradientTo}
      gradientColor="#a78bfa"
      gradientOpacity={0.35}
    >
      <div className="flex h-full flex-col gap-8 p-8 md:p-10">
        <div>
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-red-300/80">
              {ALARM_ICON}
              {project.client} · Rescue
            </div>
            {project.url && (
              <span className="inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors group-hover:text-violet-300">
                Visit
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
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {project.imageSrc && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <Image
                  src={project.imageSrc}
                  alt={`${project.name} logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
            )}
            <h3 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {project.name}
            </h3>
          </div>
          <p className="mt-3 text-lg font-medium text-violet-200 md:text-xl">
            {project.tagline}
          </p>
        </div>

        <ul className="flex flex-1 flex-col gap-3 text-sm text-zinc-300 md:text-base">
          {project.beats.map((beat) => (
            <li key={beat} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              <span>{beat}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300 backdrop-blur-sm"
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
        className={`${className} block`}
        aria-label={`Visit ${project.name}`}
      >
        {card}
      </a>
    );
  }

  return <div className={className}>{card}</div>;
}
