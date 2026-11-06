import { FOOTER, SITE } from "../content";
import { EXTERNAL } from "./lib/EntryRow";

// Closing line, profiles, and a favorite quote as the sign-off. Server component,
// so the year renders on the server with no hydration concern.
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="m-foot">
      <p className="m-foot-big">
        {FOOTER.lead}{" "}
        <a href={FOOTER.cta.href} {...EXTERNAL}>
          {FOOTER.cta.label}
        </a>
      </p>
      <div className="m-foot-links">
        {FOOTER.socials.map((social) => (
          <a key={social.href} href={social.href} {...EXTERNAL}>
            {social.label}
          </a>
        ))}
      </div>
      <p className="m-quote">
        <q>{FOOTER.quote.text}</q> <cite>{FOOTER.quote.by}</cite>
      </p>
      <p className="m-fine">
        © {year} {SITE.name}, {SITE.site}
      </p>
    </footer>
  );
}
