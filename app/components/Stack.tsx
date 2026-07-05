import { Reveal } from "./Reveal";
import { STACK } from "../content";

// Tools, as quiet mono pills.
export function Stack() {
  return (
    <section>
      <h2 className="m-eyebrow-s">{STACK.eyebrow}</h2>
      <Reveal>
        <ul className="m-stack">
          {STACK.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
