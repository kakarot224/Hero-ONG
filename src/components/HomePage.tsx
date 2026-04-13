"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const slides = [
  {
    initials: "FD",
    name: "Fatoumata Diallo",
    quote: "Grâce à Hero National, notre quartier est plus propre et nous sommes fiers de participer !",
    role: "Volontaire, Kaloum",
    color: "from-primary to-secondary",
  },
  {
    initials: "MS",
    name: "Mamadou Sylla",
    quote: "Les sessions d'éducation ont changé ma vision de l'assainissement. Je sensibilise maintenant toute ma famille.",
    role: "Bénéficiaire, Matam",
    color: "from-secondary to-primary",
  },
  {
    initials: "MS",
    name: "Mariam Sylla",
    quote: "Travailler avec Hero National m'a donné un sens d'appartenance et une fierté pour ma communauté.",
    role: "Jeune mobilisée, Ratoma",
    color: "from-primary to-primary/70",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { ref, inView } = useInView(0.1);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  const handleNext = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const handlePrev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  }, [current, goTo]);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(handleNext, 5500);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Swipe mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { if (diff > 0) handleNext(); else handlePrev(); }
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <section id="temoignages" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center shadow-sm">
              <Quote className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Ils témoignent
            </span>
            <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center shadow-sm">
              <Quote className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="section-title">Nos Témoignages</h2>
          <p className="section-subtitle">
            Découvrez ce que nos volontaires et bénéficiaires disent de notre mission.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative max-w-2xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card */}
          <div
            className={`modern-card p-8 md:p-10 text-center transition-all duration-400 ${animating ? "opacity-0 scale-[0.97]" : "opacity-100 scale-100"}`}
          >
            {/* Quote icon */}
            <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Avatar */}
            <div className={`w-16 h-16 bg-gradient-to-br ${slide.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold shadow-md`}>
              {slide.initials}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-1">{slide.name}</h3>
            <p className="text-xs text-muted-foreground mb-5">{slide.role}</p>

            <blockquote className="text-foreground/80 italic leading-relaxed text-base md:text-lg max-w-lg mx-auto">
              &ldquo;{slide.quote}&rdquo;
            </blockquote>
          </div>

          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            aria-label="Témoignage précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Témoignage suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/40 hover:text-primary transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
