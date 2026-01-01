import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Film, Code, Sparkles } from "lucide-react";

const tracks = [
  {
    id: 1,
    icon: BookOpen,
    title: "School of Fashion",
    description: "Master the art of fashion design, from concept to runway.",
    courses: 12,
    duration: "6 months",
  },
  {
    id: 2,
    icon: Film,
    title: "School of Film",
    description: "Learn filmmaking from industry professionals.",
    courses: 15,
    duration: "8 months",
  },
  {
    id: 3,
    icon: Code,
    title: "School of Technology",
    description: "Build the future with software engineering skills.",
    courses: 20,
    duration: "12 months",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "AI Visual Labs",
    description: "Explore AI-powered creative tools like Midjourney.",
    courses: 8,
    duration: "3 months",
  },
];

const StartJourney = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Begin Your Journey
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Choose Your Path
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Select a learning track that aligns with your passion and career goals.
            </p>
          </div>

          {/* Track Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tracks.map((track) => (
              <Link
                key={track.id}
                to="/explore"
                className="group bg-card border border-border/50 rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <track.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {track.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{track.courses} Courses</span>
                      <span>•</span>
                      <span>{track.duration}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Not sure where to start?
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Browse all courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartJourney;
