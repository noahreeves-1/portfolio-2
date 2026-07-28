import { Reveal } from "./Reveal";
import { StatusDot } from "./lib/StatusDot";
import { INDEX, PRIOR } from "../content";

// The quieter index: everything else, one scannable row each. Every row is a
// project I own, so each carries a live/sunset dot; Accenture (employment, no
// url) sits in its own block underneath with no dot.
export function ProjectIndex() {
  return (
    <section>
      <h2 className="m-eyebrow-s">{INDEX.eyebrow}</h2>
      <p className="m-legend">
        <span className="m-dot m-dot-live" aria-hidden="true" /> Live
        <span className="m-dot m-dot-sunset" aria-hidden="true" /> Sunset
      </p>
      <Reveal className="m-index">
        {INDEX.rows.map((row) =>
          row.url ? (
            <a key={row.name} href={row.url} target="_blank" rel="noopener noreferrer">
              <span className="m-iname">
                <StatusDot status={row.status} />
                {row.name}
              </span>
              <span className="m-idesc">{row.desc}</span>
            </a>
          ) : (
            <div key={row.name} className="m-index-row">
              <span className="m-iname">
                <StatusDot status={row.status} />
                {row.name}
              </span>
              <span className="m-idesc">{row.desc}</span>
            </div>
          )
        )}
      </Reveal>

      <h2 className="m-eyebrow-s">{PRIOR.eyebrow}</h2>
      <Reveal className="m-index">
        {PRIOR.rows.map((row) => (
          <div key={row.name} className="m-index-row">
            <span className="m-iname">{row.name}</span>
            <span className="m-idesc">{row.desc}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
