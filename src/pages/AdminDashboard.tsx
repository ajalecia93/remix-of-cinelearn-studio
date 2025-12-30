import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, DollarSign, TrendingUp, AlertTriangle, 
  Settings, Bell, Shield, Database, Activity
} from "lucide-react";

const stats = [
  { icon: Users, label: "Total Users", value: "52,481", change: "+18%", positive: true },
  { icon: DollarSign, label: "Revenue (MTD)", value: "$284,500", change: "+32%", positive: true },
  { icon: TrendingUp, label: "Active Creators", value: "245", change: "+12%", positive: true },
  { icon: AlertTriangle, label: "Pending Reviews", value: "12", change: "-4", positive: true },
];

const recentActivity = [
  { action: "New creator application", user: "Alex Thompson", time: "2 min ago", type: "creator" },
  { action: "Content flagged for review", user: "Series: ML Basics", time: "15 min ago", type: "flag" },
  { action: "Payout processed", user: "Sarah Chen - $4,280", time: "1 hour ago", type: "payout" },
  { action: "New user registration", user: "500+ users today", time: "2 hours ago", type: "user" },
  { action: "Server health check", user: "All systems nominal", time: "3 hours ago", type: "system" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-cinematic">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-2">
                <div className="px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-semibold">
                  Admin
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold">
                  Platform <span className="text-gradient-primary">Control</span>
                </h1>
              </div>
              <p className="text-muted-foreground">Monitor and manage platform operations</p>
            </div>
            <div className="flex gap-3 animate-fade-up stagger-1">
              <Button variant="glass" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="hero">
                <Shield className="w-4 h-4" />
                Security Center
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
              {/* Recent Activity */}
              <section className="glass-card p-6 animate-fade-up stagger-2">
                <h2 className="section-title flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/30"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.type === "flag"
                            ? "bg-yellow-500"
                            : item.type === "payout"
                            ? "bg-green-500"
                            : "bg-primary"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.user}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Actions */}
              <section className="grid sm:grid-cols-3 gap-4 animate-fade-up stagger-3">
                <div className="glass-card p-6 text-center hover:border-primary/30 transition-colors cursor-pointer">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">User Management</p>
                  <p className="text-xs text-muted-foreground">52,481 users</p>
                </div>
                <div className="glass-card p-6 text-center hover:border-primary/30 transition-colors cursor-pointer">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Moderation</p>
                  <p className="text-xs text-muted-foreground">12 pending</p>
                </div>
                <div className="glass-card p-6 text-center hover:border-primary/30 transition-colors cursor-pointer">
                  <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold">Analytics</p>
                  <p className="text-xs text-muted-foreground">View reports</p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Status */}
              <div className="glass-card p-6 animate-fade-up stagger-4">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  System Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">API</span>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Database</span>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Storage</span>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Payments</span>
                    <span className="text-sm text-green-500">Operational</span>
                  </div>
                </div>
              </div>

              {/* Pending Actions */}
              <div className="glass-card p-6 animate-fade-up stagger-5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  Pending Actions
                </h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <p className="text-sm font-medium">5 creator applications</p>
                    <p className="text-xs text-muted-foreground">Awaiting review</p>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <p className="text-sm font-medium">3 content reports</p>
                    <p className="text-xs text-muted-foreground">Need moderation</p>
                  </div>
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
