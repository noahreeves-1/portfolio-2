import { TECH_ICONS } from "./techIcons";

// The tech behind one entry, as small chips. A chip gets a brand mark when
// TECH_ICONS has one for it and stays text-only otherwise.
export function StackChips({ stack }: { readonly stack: readonly string[] }) {
  return (
    <ul className="m-chips" aria-label="Tech stack">
      {stack.map((name) => {
        const icon = TECH_ICONS[name];
        return (
          <li key={name} className="m-chip">
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
