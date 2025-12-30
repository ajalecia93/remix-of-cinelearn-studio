import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Play, Users, Award, Sparkles, ArrowRight, Target, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Expert Creators" },
  { value: "1M+", label: "Lessons Completed" },
  { value: "95%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe education should feel like entertainment, not homework.",
  },
  {
    icon: Zap,
    title: "Quality First",
    description: "Every series is crafted with cinematic production standards.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with learners and creators from around the world.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

        <div className="container-cinematic relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up stagger-1">
              Making Learning
              <br />
              <span className="text-gradient-primary">Feel Like Magic</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 animate-fade-up stagger-2">
              GSDT Platform was born from a simple idea: what if learning felt as engaging 
              as watching your favorite show? We're building the Netflix of education, 
              where every lesson is a cinematic experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="container-cinematic">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container-cinematic">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What We Believe In
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our core values guide everything we do, from the creators we partner with 
              to the experiences we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-8 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-muted/20">
        <div className="container-cinematic">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're looking for passionate people who want to reshape the future of education. 
              Check out our open positions and become part of the journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Users className="w-5 h-5" />
                View Careers
              </Button>
              <Link to="/register">
                <Button variant="glass" size="lg">
                  Become a Creator
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
