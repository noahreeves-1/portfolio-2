import { SITE } from "../content";
import { EXTERNAL } from "./lib/EntryRow";

// Top row: name on the left, profiles on the right.
export function Header() {
  return (
    <header className="m-top">
      <span className="m-name">{SITE.name}</span>
      <nav className="m-nav" aria-label="Profiles">
        {SITE.nav.map((item) => (
          <a key={item.href} href={item.href} {...EXTERNAL}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
