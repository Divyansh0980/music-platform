import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedPlaylists } from './components/FeaturedPlaylists';
import { TopArtists } from './components/TopArtists';
import { Features } from './components/Features';
import { Plans } from './components/Plans';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] bg-grid-pattern bg-warm-glow">
      <Navigation />
      <main>
        <Hero />
        <FeaturedPlaylists />
        <TopArtists />
        <Features />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}
