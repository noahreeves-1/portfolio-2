import { SITE, FOOTER } from "../content";

// Closing call to action + socials. Server component, so the year renders once
// with no hydration concern.
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="m-footer">
      <p className="m-footer-big">
        {FOOTER.lead}{" "}
        <a href={FOOTER.cta.href} target="_blank" rel="noopener noreferrer">
          {FOOTER.cta.label}
        </a>
      </p>
      <div className="m-footer-row">
        {FOOTER.socials.map((social) => (
          <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
            {social.label}
          </a>
        ))}
      </div>
      <p className="m-fine">
        © {year} {SITE.name} · {SITE.site}
      </p>
    </footer>
  );
}
