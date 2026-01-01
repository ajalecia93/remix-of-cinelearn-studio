import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fashion Collection Showcase",
    student: "Sarah Chen",
    program: "School of Fashion",
    image: "/videos/fashion.mp4",
    type: "video",
  },
  {
    id: 2,
    title: "Short Film: Echoes",
    student: "Marcus Johnson",
    program: "School of Film",
    image: "/videos/filmmaking.mp4",
    type: "video",
  },
  {
    id: 3,
    title: "AI Art Gallery",
    student: "Emma Williams",
    program: "AI Visual Labs",
    image: "/videos/midjourney.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "Tech Startup MVP",
    student: "Alex Rivera",
    program: "School of Technology",
    image: "/videos/tech.mp4",
    type: "video",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Student Work
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Featured Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Explore the incredible work created by our talented students.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <video
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-primary mb-2">
                    {project.program}
                  </p>
                  <h3 className="font-display text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    by {project.student}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-full bg-background/80 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
