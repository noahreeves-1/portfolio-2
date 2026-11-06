import { Experience } from "./components/Experience";
import { Flexes } from "./components/Flexes";
import { Footer } from "./components/Footer";
import { GitHubActivity } from "./components/GitHubActivity";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Travel } from "./components/Travel";
import { TechSprite } from "./components/lib/StackChips";

// The landing page: one text-first column. Intro (one line, title, bio), then
// experience in three groups, the stories, a year of GitHub activity, and a
// globe of countries visited. The .monument-scope wrapper sets the theme; fonts,
// <html>/<body> and PostHog come from app/layout.tsx. The GitHub section makes
// the page revalidate once a day.
export default function Home() {
  return (
    <div className="monument-scope min-h-[100svh] antialiased">
      <TechSprite />
      <div className="m-wrap">
        <Header />
        <main>
          <Intro />
          <Experience />
          <Flexes />
          <GitHubActivity />
          <Travel />
        </main>
        <Footer />
      </div>
    </div>
  );
}
