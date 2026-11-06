import { INTRO } from "../content";
import { EXTERNAL } from "./lib/EntryRow";

// The top of the page: one line, where I work, a short bio, one way to reach me.
export function Intro() {
  return (
    <section className="m-intro">
      <h1 className="m-h1">{INTRO.headline}</h1>
      <p className="m-title">
        {INTRO.title.map((part, index) =>
          part.href ? (
            <a key={index} href={part.href} {...EXTERNAL}>
              {part.text}
            </a>
          ) : (
            part.text
          )
        )}
      </p>
      {INTRO.bio.map((paragraph) => (
        <p key={paragraph} className="m-lede">
          {paragraph}
        </p>
      ))}
      <a className="m-cta" href={INTRO.cta.href} {...EXTERNAL}>
        {INTRO.cta.label}
      </a>
    </section>
  );
}
