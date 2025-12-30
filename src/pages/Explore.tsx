import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SeriesCard } from "@/components/series/SeriesCard";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Design",
  "Development",
  "Business",
  "AI & Tech",
  "Photography",
  "Animation",
  "3D Design",
  "Content",
  "Data",
];

const allSeries = [
  {
    id: "1",
    title: "Complete UI/UX Design Masterclass",
    creator: "Sarah Chen",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    episodes: 24,
    duration: "12h 30m",
    category: "Design",
  },
  {
    id: "2",
    title: "Full-Stack Development with React",
    creator: "Marcus Johnson",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    episodes: 36,
    duration: "18h 45m",
    category: "Development",
  },
  {
    id: "3",
    title: "Motion Design Fundamentals",
    creator: "Elena Rodriguez",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    episodes: 18,
    duration: "8h 20m",
    category: "Animation",
  },
  {
    id: "4",
    title: "Brand Strategy & Identity Design",
    creator: "David Kim",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    episodes: 20,
    duration: "10h 15m",
    category: "Design",
  },
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
  {
    id: "11",
    title: "Advanced CSS & Modern Layouts",
    creator: "Tom Bradley",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    episodes: 20,
    duration: "9h 30m",
    category: "Development",
  },
  {
    id: "12",
    title: "Business Strategy & Growth",
    creator: "Amanda Foster",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    episodes: 18,
    duration: "8h 45m",
    category: "Business",
  },
];

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSeries = allSeries.filter((series) => {
    const matchesCategory = selectedCategory === "All" || series.category === selectedCategory;
    const matchesSearch =
      series.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      series.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-cinematic">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              Explore <span className="text-gradient-primary">Series</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up stagger-1">
              Discover cinematic courses from world-class creators
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8 animate-fade-up stagger-2">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search series, creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="glass" size="lg" className="lg:w-auto">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 animate-fade-up stagger-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredSeries.length}</span> series
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSeries.map((series, index) => (
              <div
                key={series.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <SeriesCard {...series} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSeries.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">No series found matching your criteria</p>
              <Button variant="outline" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
