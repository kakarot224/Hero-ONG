"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Target, Globe, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

const stats = [
  { target: 500, suffix: "+", label: "Volontaires" },
  { target: 25,  suffix: "",  label: "Quartiers"   },
  { target: 50,  suffix: "+", label: "Partenaires" },
];

function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const c0 = useCountUp(stats[0].target, 1800, started);
  const c1 = useCountUp(stats[1].target, 1400, started);
  const c2 = useCountUp(stats[2].target, 1600, started);
  const counts = [c0, c1, c2];

  return (
    <div ref={ref} className="grid grid-cols-3 gap-3 md:gap-5 mb-10 animate-fadeInUp delay-300">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="glass rounded-xl px-4 py-3 text-center hover:bg-white/15 transition-colors duration-300"
        >
          <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">
            {counts[i]}{stat.suffix}
          </div>
          <div className="text-xs md:text-sm text-white/75 mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

const Hero = () => {
  return (
    <section id="accueil" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Nettoyage de Conakry — Projet Won Fintin"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/75 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-20 right-[15%] w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse" />
      <div className="hidden lg:block absolute bottom-32 right-[5%] w-48 h-48 rounded-full bg-white/5 blur-2xl animate-float" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 animate-fadeInUp">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-accent/60 bg-accent/20 backdrop-blur-sm text-accent shadow-[0_0_20px_hsl(45_95%_60%/0.3)]">
              <Target className="w-4 h-4 text-accent" />
              Projet Won Fintin
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight animate-fadeInUp delay-100"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
          >
            Faire de Conakry la{" "}
            <span
              className="text-accent"
              style={{ textShadow: "0 0 40px hsl(45 95% 60% / 0.6), 0 2px 20px rgba(0,0,0,0.4)" }}
            >
              capitale la plus propre
            </span>{" "}
            d&apos;Afrique de l&apos;Ouest
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed animate-fadeInUp delay-200">
            Hero National est engagée dans l&apos;amélioration des conditions de vie en Guinée,
            avec un accent sur l&apos;assainissement urbain et le développement communautaire.
          </p>

          {/* Stats — glass cards animées */}
          <AnimatedStats />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fadeInUp delay-400">
            <Button
              variant="hero"
              size="lg"
              className="gap-2 shadow-hero hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Users className="w-5 h-5" />
              Rejoindre le mouvement
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById("actions")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-4 h-4" />
              Découvrir nos actions
            </Button>
          </div>
        </div>
      </div>

      {/* Floating decorative icons */}
      <div className="hidden lg:flex absolute top-1/4 right-12 opacity-15 animate-float">
        <Globe className="w-20 h-20 text-white" />
      </div>
      <div className="hidden lg:flex absolute bottom-1/3 right-1/4 opacity-10 animate-float delay-500">
        <Users className="w-14 h-14 text-white" />
      </div>

      {/* Scroll indicator */}
      <button
        aria-label="Défiler vers le bas"
        onClick={() => document.getElementById("equipe")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors duration-300 group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Défiler</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
