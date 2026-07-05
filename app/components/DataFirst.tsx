import { Reveal } from "./Reveal";
import { Rich } from "./lib/Rich";
import { DATA_FIRST } from "../content";

// The differentiator: the data-first creed + the credentials that back it.
export function DataFirst() {
  return (
    <section>
      <h2 className="m-eyebrow-s">{DATA_FIRST.eyebrow}</h2>
      <Reveal className="m-creed">
        <p className="m-creed-big">
          <Rich parts={DATA_FIRST.creed} />
        </p>
        <p>
          <Rich parts={DATA_FIRST.body1} />
        </p>
        <ul className="m-creds">
          {DATA_FIRST.creds.map((cred, i) => (
            <li key={i}>
              <Rich parts={cred} />
            </li>
          ))}
        </ul>
        <p>
          <Rich parts={DATA_FIRST.body2} />
        </p>
      </Reveal>
    </section>
  );
}
