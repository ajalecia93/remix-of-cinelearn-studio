import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Play, Clock, BookOpen, Star, Heart, Share2, ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { EpisodeCard } from "@/components/series/EpisodeCard";

const seriesData = {
  id: "1",
  title: "Complete UI/UX Design Masterclass",
  creator: {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    bio: "Lead Product Designer at Figma, 10+ years of experience",
  },
  thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  banner: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80",
  episodes: 24,
  duration: "12h 30m",
  category: "Design",
  rating: 4.9,
  students: 12450,
  description: "Master the complete UI/UX design process from research to prototyping. Learn industry-standard tools and techniques used by top designers at companies like Apple, Google, and Airbnb.",
  learnings: [
    "User research and persona creation",
    "Wireframing and prototyping with Figma",
    "Design systems and component libraries",
    "Usability testing and iteration",
    "Portfolio-ready project creation",
  ],
};

const episodes = [
  {
    id: "1",
    seriesId: "1",
    title: "Introduction to UI/UX Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80",
    duration: "24:30",
    episodeNumber: 1,
    description: "An overview of what you'll learn and the tools we'll be using throughout the course.",
    isCompleted: true,
  },
  {
    id: "2",
    seriesId: "1",
    title: "Understanding User Research",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    duration: "32:15",
    episodeNumber: 2,
    description: "Learn how to conduct effective user research and gather insights that drive design decisions.",
    isCompleted: true,
    progress: 100,
  },
  {
    id: "3",
    seriesId: "1",
    title: "Creating User Personas",
    thumbnail: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&q=80",
    duration: "28:45",
    episodeNumber: 3,
    description: "Build detailed user personas that represent your target audience and guide design decisions.",
    progress: 65,
  },
  {
    id: "4",
    seriesId: "1",
    title: "Wireframing Basics",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&q=80",
    duration: "35:20",
    episodeNumber: 4,
    description: "Learn the fundamentals of wireframing and how to quickly sketch out your ideas.",
  },
  {
    id: "5",
    seriesId: "1",
    title: "Introduction to Figma",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
    duration: "42:00",
    episodeNumber: 5,
    description: "Get started with Figma, the industry-standard design tool used by top companies.",
    isLocked: true,
  },
  {
    id: "6",
    seriesId: "1",
    title: "Building Component Libraries",
    thumbnail: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=400&q=80",
    duration: "38:15",
    episodeNumber: 6,
    description: "Create reusable component libraries that ensure consistency across your designs.",
    isLocked: true,
  },
];

export default function SeriesPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={seriesData.banner}
          alt={seriesData.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        
        <div className="container-cinematic relative h-full flex items-end pb-12">
          <div className="max-w-2xl">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Explore
            </Link>

            <span className="tag-streaming mb-4 inline-block">{seriesData.category}</span>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">
              {seriesData.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground animate-fade-up stagger-1">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                {seriesData.rating}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {seriesData.episodes} Episodes
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {seriesData.duration}
              </span>
              <span>{seriesData.students.toLocaleString()} students</span>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-up stagger-2">
              <Button variant="hero" size="lg">
                <Play className="w-5 h-5 fill-current" />
                Continue Watching
              </Button>
              <Button variant="glass" size="lg">
                <Heart className="w-5 h-5" />
                Save
              </Button>
              <Button variant="glass" size="icon" className="h-12 w-12">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-12">
        <div className="container-cinematic">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Episodes List */}
            <div className="lg:col-span-2">
              <h2 className="section-title">Episodes</h2>
              <div className="space-y-2">
                {episodes.map((episode) => (
                  <EpisodeCard key={episode.id} {...episode} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Creator */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">Your Instructor</h3>
                <div className="flex items-center gap-4">
                  <img
                    src={seriesData.creator.avatar}
                    alt={seriesData.creator.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{seriesData.creator.name}</p>
                    <p className="text-sm text-muted-foreground">{seriesData.creator.bio}</p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold mb-4">About This Series</h3>
                <p className="text-muted-foreground mb-6">{seriesData.description}</p>
                
                <h4 className="font-semibold mb-3">What You'll Learn</h4>
                <ul className="space-y-2">
                  {seriesData.learnings.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
