import { Fragment } from "react";
import type { TextPart } from "../../content";

// Renders an array of copy runs, marking `strong` as bold and `accent` as the
// bronze emphasis. Keeps display copy declarative in app/content.ts.
export function Rich({ parts }: { parts: TextPart[] }) {
  return (
    <>
      {parts.map((p, i) => {
        if (p.strong) return <strong key={i}>{p.text}</strong>;
        if (p.accent) return <span key={i} className="m-accent">{p.text}</span>;
        return <Fragment key={i}>{p.text}</Fragment>;
      })}
    </>
  );
}
