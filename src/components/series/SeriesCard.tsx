import { Play, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SeriesCardProps {
  id: string;
  title: string;
  creator: string;
  thumbnail: string;
  episodes: number;
  duration: string;
  progress?: number;
  category: string;
  featured?: boolean;
}

export function SeriesCard({
  id,
  title,
  creator,
  thumbnail,
  episodes,
  duration,
  progress,
  category,
  featured = false,
}: SeriesCardProps) {
  return (
    <Link to={`/series/${id}`}>
      <article
        className={cn(
          "card-cinematic group cursor-pointer",
          featured ? "aspect-[16/10]" : "aspect-[16/9]"
        )}
      >
        {/* Thumbnail */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/40 transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
            </div>
          </div>

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="tag-streaming">{category}</span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <h3 className={cn(
              "font-display font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors",
              featured ? "text-xl md:text-2xl" : "text-lg"
            )}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{creator}</p>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {episodes} Episodes
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {duration}
              </span>
            </div>

            {/* Progress Bar */}
            {progress !== undefined && progress > 0 && (
              <div className="mt-3 progress-cinematic">
                <div
                  className="progress-cinematic-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
