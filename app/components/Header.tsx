import { SITE } from "../content";

// Fixed top row: wordmark left, external socials right.
export function Header() {
  return (
    <header className="m-header">
      <span className="m-wordmark">{SITE.name}</span>
      <nav>
        {SITE.nav.map((item) => (
          <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
