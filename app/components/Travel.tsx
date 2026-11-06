import { TRAVEL } from "../content";
import { SectionHead } from "./lib/SectionHead";
import { TravelGlobe } from "./TravelGlobe";

// Countries visited: the count and a slowly turning globe with them filled in.
export function Travel() {
  const count = TRAVEL.visited.length;
  const names = TRAVEL.visited.map((country) => country.name).join(", ");
  return (
    <section className="m-sec">
      <SectionHead icon="globe" title={TRAVEL.title} />
      <p className="m-line">
        <span className="m-fig">{count}</span> countries so far.
      </p>
      <TravelGlobe
        visited={TRAVEL.visited.map((country) => country.iso)}
        label={`Globe with the ${count} countries I have visited highlighted: ${names}`}
      />
    </section>
  );
}
