import { Button } from "@/components/ui/button";
import { Sparkles, DollarSign, Users, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Users,
    title: "Build Your Audience",
    description: "Reach thousands of engaged learners worldwide",
  },
  {
    icon: DollarSign,
    title: "Earn Revenue",
    description: "Monetize your expertise with flexible pricing",
  },
  {
    icon: BarChart3,
    title: "Track Performance",
    description: "Analytics and insights to grow your school",
  },
  {
    icon: Sparkles,
    title: "White-Label Schools",
    description: "Launch your own branded learning platform",
  },
];

export function CreatorCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px]" />

      <div className="container-cinematic relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">For Creators</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Turn Your Expertise Into
              <br />
              <span className="text-gradient-primary">A Thriving Business</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Join the creator economy and build your own education empire. 
              Launch courses, grow your audience, and earn doing what you love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                  Start Creating
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 animate-fade-up hover:border-primary/30 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
