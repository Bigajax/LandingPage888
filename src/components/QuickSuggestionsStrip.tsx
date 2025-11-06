import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Suggestion {
  id: string;
  label: string;
  icon?: string;
}

interface QuickSuggestionsStripProps {
  suggestions: Suggestion[];
  onSelect?: (suggestion: Suggestion) => void;
}

const QuickSuggestionsStrip: React.FC<QuickSuggestionsStripProps> = ({
  suggestions,
  onSelect,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 240;
    const targetScroll =
      scrollContainerRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full py-4">
      {/* Scroll Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 glass rounded-full p-2 shadow-eco-soft hover-lift hidden md:flex items-center justify-center focus-eco"
        aria-label="Rolar para esquerda"
      >
        <ChevronLeft size={20} className="text-eco-ink-soft" />
      </button>

      {/* Pills Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-12 scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {suggestions.map((suggestion, index) => (
          <button
            key={suggestion.id}
            onClick={() => onSelect?.(suggestion)}
            className="glass flex-shrink-0 px-6 py-3 rounded-pill text-sm font-medium text-eco-ink-soft hover:text-eco-clay hover:bg-eco-bg-subtle hover-lift shadow-eco-soft transition-all duration-300 ease-calm focus-eco whitespace-nowrap"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
            aria-label={`Sugestão: ${suggestion.label}`}
          >
            {suggestion.icon && <span className="mr-2">{suggestion.icon}</span>}
            {suggestion.label}
          </button>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 glass rounded-full p-2 shadow-eco-soft hover-lift hidden md:flex items-center justify-center focus-eco"
        aria-label="Rolar para direita"
      >
        <ChevronRight size={20} className="text-eco-ink-soft" />
      </button>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default QuickSuggestionsStrip;
