import { Star, MapPin } from "lucide-react";
import { GoogleReview } from "@/hooks/useGoogleReviews";

interface ReviewCardProps {
  review: GoogleReview;
  isActive?: boolean;
}

export default function ReviewCard({ review, isActive = false }: ReviewCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className={`bg-white rounded-xl p-8 md:p-10 border border-border shadow-md transition-all duration-500 ${
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      }`}
    >
      {/* Header con stelle e badge Google */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-secondary text-secondary animate-fade-in-scale"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full">
          <MapPin className="w-3 h-3 text-blue-600" />
          <span className="text-xs font-semibold text-blue-600">Google</span>
        </div>
      </div>

      {/* Testo della recensione */}
      <p className="text-lg text-foreground mb-6 italic leading-relaxed line-clamp-4">
        "{review.text}"
      </p>

      {/* Footer con autore e data */}
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <div
          className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        >
          {getInitials(review.author)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-primary truncate">{review.author}</p>
          <p className="text-sm text-muted-foreground">{review.time}</p>
        </div>
      </div>
    </div>
  );
}
