import { FeatureGrid } from "./components/home/FeatureGrid";
import { HeroSection } from "./components/home/HeroSection";
import { LandingBackground } from "./components/home/LandingBackground";
import { PreviewPanel } from "./components/home/PreviewPanel";

export default function Home() {
  return (
    <main className="landing-bg relative h-screen overflow-hidden">
      <LandingBackground />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <HeroSection />
          <PreviewPanel />
        </div>
      </div>
    </main>
  );
}
