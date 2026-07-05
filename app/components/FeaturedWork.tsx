import { Reveal } from "./Reveal";
import { Rich } from "./lib/Rich";
import { FEATURED } from "../content";

// Three deep cards, the heaviest work. Bronze metric, role, short note, stack.
// On desktop the cards sit in a 3-up grid; single column on mobile.
export function FeaturedWork() {
  return (
    <section id="work">
      <h2 className="m-eyebrow-s">{FEATURED.eyebrow}</h2>
      <div className="m-cards">
        {FEATURED.cards.map((card, idx) => (
          <Reveal key={card.id} className="m-card" delay={idx * 0.06}>
            <a href={card.url} target="_blank" rel="noopener noreferrer" className="m-card-top">
              <h2>{card.name}</h2>
              <span className="m-card-metric">{card.metric}</span>
            </a>
            <div className="m-card-role">{card.role}</div>
            <p>
              <Rich parts={card.body} />
            </p>
            <div className="m-card-tech">{card.tech}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
