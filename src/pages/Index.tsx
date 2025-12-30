import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSeries } from "@/components/home/FeaturedSeries";
import { TrendingSeries } from "@/components/home/TrendingSeries";
import { CreatorCTA } from "@/components/home/CreatorCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedSeries />
        <TrendingSeries />
        <CreatorCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
