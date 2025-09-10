import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, GraduationCap, Users, Building, Lightbulb, ArrowRight } from "lucide-react";
import environmentIcon from "@/assets/environment-icon.jpg";

const Actions = () => {
  const actions = [
    {
      icon: Recycle,
      title: "Nettoyage des Quartiers",
      description: "Organisation de campagnes de nettoyage et d'entretien dans tous les quartiers de Conakry avec la participation active des résidents.",
      image: environmentIcon,
      stats: "25 quartiers ciblés"
    },
    {
      icon: GraduationCap,
      title: "Éducation à la Propreté",
      description: "Sensibilisation dans les écoles, marchés et familles sur l'importance de l'hygiène et de la propreté pour la santé publique.",
      stats: "50+ écoles sensibilisées"
    },
    {
      icon: Users,
      title: "Mobilisation Jeunesse",
      description: "Implication active des jeunes et leaders communautaires comme ambassadeurs du changement dans leurs communautés.",
      stats: "500+ jeunes mobilisés"
    },
    {
      icon: Building,
      title: "Partenariats Institutionnels",
      description: "Collaboration étroite avec les services techniques de la ville et les autorités publiques pour des actions coordonnées.",
      stats: "15 partenaires institutionnels"
    },
    {
      icon: Lightbulb,
      title: "Initiatives Pilotes",
      description: "Mise en place d'initiatives innovantes dans chaque commune pour servir de modèles reproductibles.",
      stats: "5 communes couvertes"
    }
  ];

  return (
    <section id="actions" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Axes d'Intervention
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Hero National agit concrètement pour transformer Conakry 
            en capitale modèle de propreté et de développement durable en Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <action.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {action.stats}
                  </span>
                </div>
                <CardTitle className="text-xl">{action.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {action.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={action.image} 
                      alt={action.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {action.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary-glow">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Rejoignez le Mouvement M'won Fintin
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Ensemble, nous pouvons faire de Conakry un exemple de propreté et de développement 
              durable pour toute l'Afrique de l'Ouest. Votre contribution compte !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Devenir bénévole
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Faire un don
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;