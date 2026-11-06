import { FLEXES } from "../content";
import { SectionHead } from "./lib/SectionHead";

// The stories, one line each: a bold claim, then the dry follow-up.
export function Flexes() {
  return (
    <section className="m-sec">
      <SectionHead icon="smile" title={FLEXES.title} />
      <ul className="m-facts">
        {FLEXES.items.map((flex) => (
          <li key={flex.claim}>
            <strong>{flex.claim}</strong> {flex.detail}
          </li>
        ))}
      </ul>
    </section>
  );
}
