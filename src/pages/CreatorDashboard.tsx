import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Plus, DollarSign, Users, BookOpen, TrendingUp, 
  BarChart3, Settings, Bell, Eye, Video
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: DollarSign, label: "This Month", value: "$4,280", change: "+12%", positive: true },
  { icon: Users, label: "Total Students", value: "1,245", change: "+8%", positive: true },
  { icon: Eye, label: "Views", value: "24.5K", change: "+23%", positive: true },
  { icon: BookOpen, label: "Active Series", value: "5", change: "0%", positive: true },
];

const recentSeries = [
  {
    title: "UI/UX Design Masterclass",
    status: "Published",
    students: 842,
    revenue: "$2,150",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
  },
  {
    title: "Brand Strategy Fundamentals",
    status: "Draft",
    students: 0,
    revenue: "$0",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&q=80",
  },
  {
    title: "Motion Design Essentials",
    status: "Published",
    students: 403,
    revenue: "$980",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
  },
];

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-cinematic">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="animate-fade-up">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Creator <span className="text-gradient-primary">Studio</span>
              </h1>
              <p className="text-muted-foreground">Manage your content and earnings</p>
            </div>
            <div className="flex gap-3 animate-fade-up stagger-1">
              <Button variant="glass" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="hero">
                <Plus className="w-4 h-4" />
                New Series
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="glass-card p-5 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`text-xs font-medium ${item.positive ? "text-green-500" : "text-red-500"}`}>
                    {item.change}
                  </span>
                </div>
                <p className="text-2xl font-display font-bold text-foreground">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Series */}
              <section className="animate-fade-up stagger-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="section-title mb-0">Your Series</h2>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentSeries.map((series) => (
                    <div
                      key={series.title}
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <img
                        src={series.thumbnail}
                        alt={series.title}
                        className="w-20 h-14 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{series.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              series.status === "Published"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {series.status}
                          </span>
                          <span>{series.students} students</span>
                          <span>{series.revenue}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Actions */}
              <section className="grid sm:grid-cols-3 gap-4 animate-fade-up stagger-3">
                <Link
                  to="/creator/series-builder"
                  className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <Video className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Series Builder</p>
                  <p className="text-xs text-muted-foreground">Create new content</p>
                </Link>
                <Link
                  to="/creator/students"
                  className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Students</p>
                  <p className="text-xs text-muted-foreground">Manage enrollments</p>
                </Link>
                <Link
                  to="/creator/sales"
                  className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Analytics</p>
                  <p className="text-xs text-muted-foreground">View insights</p>
                </Link>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Revenue Chart Placeholder */}
              <div className="glass-card p-6 animate-fade-up stagger-4">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Revenue Overview
                </h3>
                <div className="h-48 flex items-center justify-center border border-dashed border-border rounded-lg">
                  <p className="text-sm text-muted-foreground">Revenue chart coming soon</p>
                </div>
              </div>

              {/* Payout Info */}
              <div className="glass-card p-6 animate-fade-up stagger-5">
                <h3 className="font-semibold mb-4">Next Payout</h3>
                <p className="text-3xl font-display font-bold text-gradient-primary mb-2">$1,840</p>
                <p className="text-sm text-muted-foreground mb-4">Processing on Jan 15, 2024</p>
                <Button variant="outline" className="w-full" size="sm">
                  Payout Settings
                </Button>
              </div>

              {/* Tips */}
              <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <h3 className="font-semibold mb-3">💡 Pro Tip</h3>
                <p className="text-sm text-muted-foreground">
                  Series with 8+ episodes have 3x higher completion rates. Consider breaking your 
                  content into digestible chapters!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
