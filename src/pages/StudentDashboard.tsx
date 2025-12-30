import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SeriesCard } from "@/components/series/SeriesCard";
import { Button } from "@/components/ui/button";
import { 
  Play, Clock, BookOpen, Award, TrendingUp, Target, 
  ChevronRight, Calendar, Settings, Bell, User
} from "lucide-react";
import { Link } from "react-router-dom";

const continueWatching = [
  {
    id: "1",
    title: "Complete UI/UX Design Masterclass",
    creator: "Sarah Chen",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    episodes: 24,
    duration: "12h 30m",
    progress: 45,
    category: "Design",
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
];

const achievements = [
  { icon: "🔥", label: "7 Day Streak", value: "Keep it up!" },
  { icon: "📚", label: "Lessons Done", value: "42" },
  { icon: "⏱️", label: "Hours Learned", value: "18.5" },
  { icon: "🏆", label: "Certificates", value: "2" },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-cinematic">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="animate-fade-up">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Welcome back, <span className="text-gradient-primary">John</span>
              </h1>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
            <div className="flex gap-3 animate-fade-up stagger-1">
              <Button variant="glass" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="hero" asChild>
                <Link to="/explore">
                  <Play className="w-4 h-4 fill-current" />
                  Resume Learning
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {achievements.map((item, index) => (
              <div
                key={item.label}
                className="glass-card p-5 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-2xl font-display font-bold text-foreground">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Continue Watching */}
              <section className="animate-fade-up stagger-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="section-title mb-0">Continue Watching</h2>
                  <Link
                    to="/explore"
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {continueWatching.map((series) => (
                    <SeriesCard key={series.id} {...series} />
                  ))}
                </div>
              </section>

              {/* Recommended */}
              <section className="animate-fade-up stagger-3">
                <h2 className="section-title">Recommended For You</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <SeriesCard
                    id="5"
                    title="AI & Machine Learning for Creatives"
                    creator="Dr. Alex Park"
                    thumbnail="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                    episodes={28}
                    duration="14h 00m"
                    category="AI & Tech"
                  />
                  <SeriesCard
                    id="4"
                    title="Brand Strategy & Identity Design"
                    creator="David Kim"
                    thumbnail="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
                    episodes={20}
                    duration="10h 15m"
                    category="Branding"
                  />
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Weekly Goal */}
              <div className="glass-card p-6 animate-fade-up stagger-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Weekly Goal</h3>
                    <p className="text-sm text-muted-foreground">5h of 10h completed</p>
                  </div>
                </div>
                <div className="progress-cinematic h-2 mb-2">
                  <div className="progress-cinematic-bar" style={{ width: "50%" }} />
                </div>
                <p className="text-xs text-muted-foreground">Keep going! You're halfway there.</p>
              </div>

              {/* Upcoming */}
              <div className="glass-card p-6 animate-fade-up stagger-5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Upcoming
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">Live Q&A Session</p>
                      <p className="text-xs text-muted-foreground">Tomorrow, 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">Project Deadline</p>
                      <p className="text-xs text-muted-foreground">Friday, 11:59 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link
                    to="/student/projects"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">My Projects</span>
                  </Link>
                  <Link
                    to="/student/career-toolkit"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Career Toolkit</span>
                  </Link>
                  <Link
                    to="/student/settings"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Profile Settings</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
