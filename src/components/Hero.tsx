import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Target, Globe } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Volontaires nettoyant les rues de Conakry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6 animate-fadeInUp">
            <span className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
              <Target className="w-4 h-4 mr-2" />
              Projet Won fintin
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Faire de Conakry la 
            <span className="bg-accent-gradient bg-clip-text text-transparent"> capitale la plus propre</span> 
            {" "}d'Afrique de l'Ouest
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            Hero National mobilise la jeunesse guinéenne pour transformer Conakry en un modèle d'assainissement urbain et de développement communautaire durable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Volontaires</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">25</div>
              <div className="text-sm text-white/80">Quartiers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Partenaires</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
            <Button variant="hero" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Rejoindre le mouvement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="w-5 h-5 mr-2" />
              Découvrir nos actions
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float">
        <Globe className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-20 animate-float" style={{animationDelay: '2s'}}>
        <Users className="w-12 h-12 text-white" />
      </div>
    </section>
  );
};

export default Hero;