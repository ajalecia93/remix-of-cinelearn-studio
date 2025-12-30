import { SeriesCard } from "@/components/series/SeriesCard";
import { TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const trendingSeries = [
  {
    id: "5",
    title: "AI & Machine Learning for Creatives",
    creator: "Dr. Alex Park",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    episodes: 28,
    duration: "14h 00m",
    category: "AI & Tech",
  },
  {
    id: "6",
    title: "Photography & Visual Storytelling",
    creator: "Maya Thompson",
    thumbnail: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    episodes: 22,
    duration: "11h 30m",
    category: "Photography",
  },
  {
    id: "7",
    title: "Product Management Essentials",
    creator: "Chris Williams",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    episodes: 16,
    duration: "7h 45m",
    category: "Business",
  },
  {
    id: "8",
    title: "3D Design with Blender",
    creator: "Nina Chen",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    episodes: 32,
    duration: "16h 20m",
    category: "3D Design",
  },
  {
    id: "9",
    title: "Content Creation Mastery",
    creator: "Jake Morrison",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    episodes: 20,
    duration: "9h 50m",
    category: "Content",
  },
  {
    id: "10",
    title: "Data Visualization & Analytics",
    creator: "Dr. Lisa Wang",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    episodes: 24,
    duration: "12h 10m",
    category: "Data",
  },
];

export function TrendingSeries() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container-cinematic">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="section-title mb-0">Trending Now</h2>
              <p className="text-muted-foreground">Most popular this week</p>
            </div>
          </div>
          <Link 
            to="/explore" 
            className="hidden md:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors group"
          >
            Explore All
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingSeries.map((series, index) => (
            <div
              key={series.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SeriesCard {...series} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
