"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const navigation = [
    { name: "Accueil", href: "/#accueil", id: "accueil" },
    { name: "À propos", href: "/#apropos", id: "apropos" },
    { name: "Nos Actions", href: "/#actions", id: "actions" },
    { name: "Équipe", href: "/#equipe", id: "equipe" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = navigation.map((n) => n.id);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Trier par position réelle dans la page (descendant)
      const positions = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          return { id, top: el ? el.getBoundingClientRect().top + window.scrollY : 0 };
        })
        .sort((a, b) => b.top - a.top);

      for (let i = 0; i < positions.length; i++) {
        if (window.scrollY >= positions[i].top - 120) {
          setActiveSection(positions[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_1px_20px_hsl(var(--foreground)/0.08)] border-b border-border"
          : "bg-background/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="/#accueil" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
              <Image
                src={logo}
                alt="Hero National Logo"
                width={42}
                height={42}
                className="object-contain rounded-full"
              />
            </div>
            <div>
              <div className="font-bold text-base text-primary leading-none">Hero National</div>
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">ONG Guinée</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    activeSection === item.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  } origin-center`}
                />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md border border-border text-muted-foreground select-none">
              FR
            </span>
            <Button
              variant="donate"
              size="sm"
              className="gap-1.5 shadow-sm hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => document.getElementById("soutenir")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Heart className="w-3.5 h-3.5" />
              Faire un don
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <span className={`transition-all duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 border-t border-border/50 space-y-0.5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {activeSection === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-bounce-in" />
                )}
                {item.name}
              </a>
            ))}
            <div className="pt-3 px-1 space-y-2 border-t border-border/50 mt-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
                <span className="text-xs font-semibold px-2 py-0.5 rounded border border-border">FR</span>
                Français
              </div>
              <Button
                variant="donate"
                size="sm"
                className="w-full gap-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById("soutenir")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Heart className="w-4 h-4" />Faire un don
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
