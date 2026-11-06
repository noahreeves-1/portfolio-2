import { BEFORE, CLIENT_WORK, STARTUPS } from "../content";
import { EntryRow, EXTERNAL } from "./lib/EntryRow";
import { SectionHead } from "./lib/SectionHead";

// Experience in three groups: client work (OSMOS first, with its client
// products nested under it), my own startups, and what came before engineering.
export function Experience() {
  const { org } = CLIENT_WORK;
  return (
    <>
      <section className="m-sec" id="work">
        <SectionHead icon="briefcase" title={CLIENT_WORK.title} />
        <div className="m-org">
          <div className="m-row-top">
            <h3 className="m-row-name">
              <a className="m-org-link" href={org.url} {...EXTERNAL}>
                <span className="m-t">{org.name}</span>
                <span className="m-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </h3>
            <span className="m-when">{org.when}</span>
          </div>
          <p className="m-row-desc">{org.desc}</p>
          <div className="m-sub">
            {org.entries.map((entry) => (
              <EntryRow key={entry.name} entry={entry} />
            ))}
          </div>
        </div>
        {CLIENT_WORK.entries.map((entry) => (
          <EntryRow key={entry.name} entry={entry} />
        ))}
      </section>

      <section className="m-sec">
        <SectionHead icon="rocket" title={STARTUPS.title} />
        {STARTUPS.entries.map((entry) => (
          <EntryRow key={entry.name} entry={entry} />
        ))}
      </section>

      <section className="m-sec">
        <SectionHead icon="history" title={BEFORE.title} />
        {BEFORE.entries.map((entry) => (
          <EntryRow key={entry.name} entry={entry} />
        ))}
      </section>
    </>
  );
}
