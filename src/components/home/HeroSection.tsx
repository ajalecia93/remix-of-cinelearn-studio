import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const videoCards = [
  {
    id: 1,
    video: "/videos/fashion.mp4",
    tag: "JAN 2025 ONLINE • LIVE",
    school: "SCHOOL OF FASHION",
    course: "Intro to Fashion Design",
    offset: false,
  },
  {
    id: 2,
    video: "/videos/filmmaking.mp4",
    tag: "APPLY FOR SPRING 2025",
    school: "SCHOOL OF FILM",
    course: "Intro to Filmmaking",
    offset: true,
  },
  {
    id: 3,
    video: "/videos/tech.mp4",
    tag: "NOW OPEN",
    school: "SCHOOL OF TECHNOLOGY",
    course: "Software Engineering",
    offset: false,
  },
  {
    id: 4,
    video: "/videos/midjourney.mp4",
    tag: "SEPT 26, 2025 ONLINE • LIVE",
    school: "AI VISUAL LABS",
    course: "Midjourney & AI",
    offset: true,
  },
];

function VideoCard({ card }: { card: typeof videoCards[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article
      className={`group relative flex-shrink-0 w-[423px] h-[580px] overflow-hidden rounded-lg bg-background ${
        card.offset ? "mt-12" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={card.video}
        className="w-full h-full object-cover pointer-events-none"
        muted
        loop
        preload="metadata"
      />

      <div className="hidden md:flex flex-col justify-end absolute inset-0 p-8 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xs uppercase tracking-[0.2em] text-primary mt-auto">
          {card.tag}
        </h3>
        <p className="text-xl font-semibold mt-2 text-foreground">
          {card.school}
        </p>
        <Link
          to="/explore"
          className="flex items-center mt-4 text-lg font-semibold group/link text-foreground"
        >
          <span>{card.course}</span>
          <span className="text-primary ml-4 transform transition group-hover/link:translate-x-2">
            <ArrowRight className="w-6 h-6" />
          </span>
        </Link>
      </div>
    </article>
  );
}

function MobileHero() {
  return (
    <div className="md:hidden w-full">
      <div className="relative bg-background" style={{ height: "calc(100vh - 88px)" }}>
        <video
          src="/videos/fashion.mp4"
          className="w-full h-full object-cover"
          muted
          loop
          autoPlay
          playsInline
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/60" />
        
        {/* Mobile text content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 animate-fade-up">
            Curated by Industry Experts
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] mb-6 animate-fade-up stagger-1 text-foreground">
            Premier online
            <br />
            learning platform.
          </h1>
          <div className="animate-fade-up stagger-2">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider font-semibold px-6 py-3 text-sm rounded-md transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll functionality for desktop
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId: number;
    let scrollSpeed = 0.5;

    const autoScroll = () => {
      if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
        scroller.scrollLeft = 0;
      } else {
        scroller.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    scroller.addEventListener("mouseenter", handleMouseEnter);
    scroller.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationId);
      scroller.removeEventListener("mouseenter", handleMouseEnter);
      scroller.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Mobile View */}
      <MobileHero />

      {/* Desktop View */}
      <div className="hidden md:flex relative w-full">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-32 bg-gradient-to-r from-background via-background/70 to-transparent" />

        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-96 bg-gradient-to-l from-background via-background/50 to-transparent" />

        {/* Hero Text Overlay */}
        <div className="absolute left-0 top-0 z-20 h-full flex flex-col justify-center pl-8 lg:pl-16 max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 animate-fade-up">
            Curated by Industry Experts
          </p>
          <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-8 animate-fade-up stagger-1 text-foreground">
            Premier online
            <br />
            learning platform.
          </h1>
          <div className="animate-fade-up stagger-2">
            <Link
              to="/explore"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider font-semibold px-8 py-4 text-sm rounded-md transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Scrolling Video Cards */}
        <div
          ref={scrollerRef}
          className="flex items-start gap-4 overflow-x-auto pl-[400px] lg:pl-[500px] pr-4 py-8 no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {videoCards.map((card) => (
            <VideoCard key={card.id} card={card} />
          ))}
          {/* Duplicate cards for infinite scroll effect */}
          {videoCards.map((card) => (
            <VideoCard key={`dup-${card.id}`} card={card} />
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
