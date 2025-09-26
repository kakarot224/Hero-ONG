import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Phone } from "lucide-react";
import teamImage from "@/assets/team-hero.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Mamadou Diallo",
      role: "Président Fondateur",
      description: "Expert en développement communautaire avec 15 ans d'expérience dans le secteur associatif guinéen.",
      expertise: ["Leadership", "Développement", "Partenariats"],
      image: teamImage
    },
    {
      name: "Aissatou Bah",
      role: "Directrice Exécutive",
      description: "Spécialiste en gestion de projets environnementaux et mobilisation communautaire.",
      expertise: ["Gestion de projets", "Environnement", "Communication"],
    },
    {
      name: "Ibrahima Sow",
      role: "Coordinateur Terrain",
      description: "Responsable de la coordination des actions de terrain et de l'encadrement des volontaires.",
      expertise: ["Coordination", "Formation", "Terrain"],
    },
    {
      name: "Fatoumata Camara",
      role: "Responsable Communication",
      description: "Chargée de la communication digitale et des relations avec les partenaires médias.",
      expertise: ["Communication", "Digital", "Relations publiques"],
    },
    {
      name: "Mohamed Touré",
      role: "Responsable Partenariats",
      description: "Développement et maintien des relations avec les partenaires institutionnels et privés.",
      expertise: ["Partenariats", "Négociation", "Stratégie"],
    },
    {
      name: "Aminata Diané",
      role: "Coordonnatrice Jeunesse",
      description: "Mobilisation et encadrement des jeunes volontaires dans les différentes communes.",
      expertise: ["Jeunesse", "Mobilisation", "Formation"],
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous sommes une équipe passionnée et expérimentée, unie par la vision de transformer 
            Conakry en un modèle de développement durable pour tout l'Afrique de l'Ouest.
          </p>
        </div>

        {/* Featured Team Photo */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={teamImage} 
              alt="Équipe Hero National"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Équipe Hero National</h3>
              <p className="text-white/90">
                Une équipe multidisciplinaire engagée pour le changement
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group/icon">
                    <Mail className="w-4 h-4 text-primary group-hover/icon:scale-110 transition-transform" />
                  </button>
                  <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group/icon">
                    <Phone className="w-4 h-4 text-primary group-hover/icon:scale-110 transition-transform" />
                  </button>
                  <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group/icon">
                    <Linkedin className="w-4 h-4 text-primary group-hover/icon:scale-110 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Rejoignez Notre Équipe
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nous recherchons constamment des personnes passionnées pour renforcer notre équipe 
                et amplifier notre impact sur le terrain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Voir les opportunités
                </button>
                <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
                  Candidature spontanée
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;