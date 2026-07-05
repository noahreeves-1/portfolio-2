import { Reveal } from "./Reveal";
import { INDEX } from "../content";

// The quieter index: everything else, one scannable row each. Rows with a URL
// link out; Accenture (no url) renders as plain text.
export function ProjectIndex() {
  return (
    <section>
      <h2 className="m-eyebrow-s">{INDEX.eyebrow}</h2>
      <Reveal className="m-index">
        {INDEX.rows.map((row) =>
          row.url ? (
            <a key={row.name} href={row.url} target="_blank" rel="noopener noreferrer">
              <span className="m-iname">{row.name}</span>
              <span className="m-idesc">{row.desc}</span>
            </a>
          ) : (
            <div key={row.name} className="m-index-row">
              <span className="m-iname">{row.name}</span>
              <span className="m-idesc">{row.desc}</span>
            </div>
          )
        )}
      </Reveal>
    </section>
  );
}
