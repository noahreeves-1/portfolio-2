import type { CSSProperties } from "react";
import { TECH_COLORS, TECH_ICONS } from "./techIcons";

// Hands a chip its brand color as --chip; the tint itself is in globals.css.
function tintStyle(color: string): CSSProperties {
  return { "--chip": color } as CSSProperties;
}

// The tech behind one entry, as small chips. A chip gets a brand mark when
// TECH_ICONS has one for it, and a soft tint when TECH_COLORS has its color.
// Without either it is a plain text chip.
export function StackChips({ stack }: { readonly stack: readonly string[] }) {
  return (
    <ul className="m-chips" aria-label="Tech stack">
      {stack.map((name) => {
        const icon = TECH_ICONS[name];
        const color = TECH_COLORS[name];
        return (
          <li
            key={name}
            className={color ? "m-chip m-tint" : "m-chip"}
            style={color ? tintStyle(color) : undefined}
          >
            {icon && (
              <svg className="m-ti" viewBox="0 0 24 24" aria-hidden="true">
                <use href={`#${icon.id}`} />
              </svg>
            )}
            {name}
          </li>
        );
      })}
    </ul>
  );
}

// Every brand mark, defined once per page. The chips point at these with <use>,
// so a path that appears on ten chips is only sent once.
export function TechSprite() {
  return (
    <svg className="m-sprite" aria-hidden="true">
      <defs>
        {Object.values(TECH_ICONS).map((icon) => (
          <symbol key={icon.id} id={icon.id} viewBox="0 0 24 24">
            <path d={icon.path} />
          </symbol>
        ))}
      </defs>
    </svg>
  );
}
