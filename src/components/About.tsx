import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Globe, Users, Lightbulb, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Engagement Citoyen",
      description: "Mobiliser chaque citoyen comme acteur du changement pour sa communauté et sa nation."
    },
    {
      icon: Globe,
      title: "Développement Durable",
      description: "Promouvoir des solutions environnementales durables pour un avenir prospère."
    },
    {
      icon: Users,
      title: "Solidarité",
      description: "Rassembler les forces vives autour d'objectifs communs de développement."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Développer des approches créatives et efficaces pour résoudre les défis urbains."
    },
    {
      icon: Handshake,
      title: "Partenariat",
      description: "Collaborer avec les autorités et partenaires pour maximiser l'impact."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Viser l'excellence dans toutes nos interventions pour des résultats mesurables."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Qui sommes-nous ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hero National est une organisation non gouvernementale guinéenne dédiée à l'amélioration 
            des conditions de vie en Guinée, avec un focus particulier sur l'assainissement urbain 
            et le développement communautaire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Notre Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformer Conakry en la capitale la plus propre de toute la sous-région ouest-africaine 
              à travers notre projet emblématique "M'won Fintin". Nous travaillons en partenariat direct 
              avec les autorités locales et nationales pour apporter des solutions concrètes, durables 
              et citoyennes aux défis environnementaux.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre nom, <strong>Hero National</strong>, symbolise une volonté collective : que chaque citoyen 
              devienne un héros pour sa nation, un acteur du changement positif pour la communauté.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-hero-gradient rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Projet M'won Fintin</h4>
              <p className="mb-4">
                "M'won Fintin" est notre initiative phare qui vise à révolutionner 
                l'assainissement urbain à Conakry à travers :
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-accent" />
                  Nettoyage systématique des quartiers
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-accent" />
                  Mobilisation de la jeunesse
                </li>
                <li className="flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 text-accent" />
                  Éducation à la propreté
                </li>
                <li className="flex items-center">
                  <Handshake className="w-4 h-4 mr-2 text-accent" />
                  Partenariats institutionnels
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Nos Valeurs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;