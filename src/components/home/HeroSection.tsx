import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Subtle Gradient Orb */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container-cinematic relative z-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Eyebrow Text */}
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6 animate-fade-up">
              Curated by Industry Experts
            </p>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 animate-fade-up stagger-1">
              Premier online
              <br />
              learning platform.
            </h1>

            {/* CTA Button */}
            <div className="animate-fade-up stagger-2">
              <Link to="/explore">
                <Button 
                  size="xl" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider font-semibold px-10 py-6 text-base"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:flex flex-col gap-6 animate-fade-up stagger-3">
            {/* Featured Course Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg p-6 hover:border-primary/30 transition-colors">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Now Enrolling • Online
              </p>
              <p className="text-sm font-medium text-foreground/80 mb-3">
                School of Design
              </p>
              <Link 
                to="/explore" 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/20">
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground">50K+</span>
                <p className="text-xs text-muted-foreground mt-1">Students</p>
              </div>
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/20">
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground">200+</span>
                <p className="text-xs text-muted-foreground mt-1">Courses</p>
              </div>
              <div className="text-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/20">
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground">95%</span>
                <p className="text-xs text-muted-foreground mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
