import type { Entry } from "../../content";
import { StackChips } from "./StackChips";

export const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

// One line of experience: a name, a date, one sentence, the stack. The whole
// row is a link to the product's own site when there is one. Current work gets
// the green dot and a bolder name.
export function EntryRow({ entry }: { readonly entry: Entry }) {
  const className = entry.current ? "m-row m-now" : "m-row";
  const body = (
    <>
      <div className="m-row-top">
        <span className="m-row-name">
          {entry.current && <span className="m-dot" role="img" aria-label="Working on this now" />}
          <span className="m-t">{entry.name}</span>
          {entry.url && (
            <span className="m-arrow" aria-hidden="true">
              ↗
            </span>
          )}
        </span>
        <span className="m-when">{entry.when}</span>
      </div>
      <p className="m-row-desc">{entry.desc}</p>
      {entry.stack && <StackChips stack={entry.stack} />}
    </>
  );

  return entry.url ? (
    <a className={className} href={entry.url} {...EXTERNAL}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
