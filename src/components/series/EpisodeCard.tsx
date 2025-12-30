import { Play, Lock, Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface EpisodeCardProps {
  id: string;
  seriesId: string;
  title: string;
  thumbnail: string;
  duration: string;
  episodeNumber: number;
  description: string;
  isLocked?: boolean;
  isCompleted?: boolean;
  progress?: number;
}

export function EpisodeCard({
  id,
  seriesId,
  title,
  thumbnail,
  duration,
  episodeNumber,
  description,
  isLocked = false,
  isCompleted = false,
  progress,
}: EpisodeCardProps) {
  return (
    <Link to={isLocked ? "#" : `/series/${seriesId}/episode/${id}`}>
      <article
        className={cn(
          "group flex gap-4 p-3 rounded-xl transition-all duration-300",
          isLocked
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-muted/50 cursor-pointer"
        )}
      >
        {/* Thumbnail */}
        <div className="relative w-40 md:w-48 aspect-video rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {isLocked ? (
              <Lock className="w-6 h-6 text-foreground" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground fill-current ml-0.5" />
              </div>
            )}
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm text-xs font-medium">
            {duration}
          </div>

          {/* Progress */}
          {progress !== undefined && progress > 0 && !isCompleted && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
              <div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Completed Badge */}
          {isCompleted && (
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 py-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-primary">Episode {episodeNumber}</span>
            {isLocked && (
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Lock className="w-3 h-3" /> Premium
              </span>
            )}
          </div>
          <h4 className="font-display font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
