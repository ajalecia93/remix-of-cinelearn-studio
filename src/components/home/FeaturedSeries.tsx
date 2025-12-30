import { SeriesCard } from "@/components/series/SeriesCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredSeries = [
  {
    id: "1",
    title: "Complete UI/UX Design Masterclass",
    creator: "Sarah Chen",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    episodes: 24,
    duration: "12h 30m",
    progress: 45,
    category: "Design",
    featured: true,
  },
  {
    id: "2",
    title: "Full-Stack Development with React",
    creator: "Marcus Johnson",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    episodes: 36,
    duration: "18h 45m",
    progress: 0,
    category: "Development",
  },
  {
    id: "3",
    title: "Motion Design Fundamentals",
    creator: "Elena Rodriguez",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    episodes: 18,
    duration: "8h 20m",
    progress: 78,
    category: "Animation",
  },
  {
    id: "4",
    title: "Brand Strategy & Identity Design",
    creator: "David Kim",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    episodes: 20,
    duration: "10h 15m",
    progress: 0,
    category: "Branding",
  },
];

export function FeaturedSeries() {
  return (
    <section className="py-20">
      <div className="container-cinematic">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">Continue Watching</h2>
            <p className="text-muted-foreground">Pick up where you left off</p>
          </div>
          <Link 
            to="/explore" 
            className="hidden md:flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors group"
          >
            View All
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSeries.map((series, index) => (
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
