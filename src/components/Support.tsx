import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, CreditCard, Phone, Gift } from "lucide-react";
const Support = () => {
  const supportOptions = [{
    icon: CreditCard,
    title: "Faire un Don",
    description: "Soutenez nos actions avec un don sécurisé via Orange Money, Wave, MTN MoMo ou virement bancaire.",
    actions: ["Orange Money", "Wave", "MTN MoMo", "Virement"],
    variant: "donate" as const,
    featured: true
  }, {
    icon: Users,
    title: "Devenir Bénévole",
    description: "Rejoignez notre équipes sur le terrain et participez directement aux actions de nettoyage et de la sensibilisation.",
    actions: ["S'inscrire", "En savoir plus"],
    variant: "default" as const
  }, {
    icon: Handshake,
    title: "Partenariat",
    description: "Entreprises, institutions, associations : collaborons pour amplifier notre impact sur l'assainissement urbain.",
    actions: ["Devenir partenaire", "Contact"],
    variant: "secondary" as const
  }, {
    icon: Gift,
    title: "Don Matériel",
    description: "Contribuez avec du matériel de nettoyage, équipements ou ressources logistiques pour nos opérations.",
    actions: ["Proposer", "Liste besoins"],
    variant: "outline" as const
  }];
  const paymentMethods = [{
    name: "Orange Money",
    code: "*144*1#",
    color: "bg-orange-500"
  }, {
    name: "Wave",
    code: "#144#",
    color: "bg-blue-500"
  }, {
    name: "MTN MoMo",
    code: "*155#",
    color: "bg-yellow-500"
  }, {
    name: "Moov Money",
    code: "*555#",
    color: "bg-green-500"
  }];
  return <section id="soutenir" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nous Soutenir
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vos soutien sont essentiel pour réaliser notre vision de faire Conakry en une capitale propre et durable. 
            Découvrez les différentes façons de contribuer à notre mission.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option, index) => <Card key={index} className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${option.featured ? 'ring-2 ring-accent/50 bg-accent/5' : ''}`}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${option.featured ? 'bg-accent/20' : 'bg-primary/10'} group-hover:scale-110 transition-transform`}>
                    <option.icon className={`w-6 h-6 ${option.featured ? 'text-accent-foreground' : 'text-primary'}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    {option.featured && <span className="text-sm text-accent font-medium">Recommandé</span>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {option.actions.map((action, actionIndex) => <Button key={actionIndex} variant={actionIndex === 0 ? option.variant : "ghost"} size="sm">
                      {action}
                    </Button>)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Méthodes de Paiement Mobile
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${method.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{method.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">Composez :</p>
                  <code className="bg-muted px-3 py-1 rounded text-sm font-mono">
                    {method.code}
                  </code>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Votre Impact en Chiffres
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-accent">25€</div>
              <div className="text-white/90">Nettoie 1 rue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">50€</div>
              <div className="text-white/90">Forme 5 jeunes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100€</div>
              <div className="text-white/90">Équipe 1 équipe</div>
            </div>
          </div>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Chaque contribution, qu'elle soit petite ou grande, elle nous rapproche de notre objectif : 
            faire de Conakry une des capitale la plus propre de toute l'Afrique de l'Ouest.
          </p>
          <Button variant="secondary" size="lg" className="font-semibold">
            <Heart className="w-5 h-5 mr-2" />
            Faire un don maintenant
          </Button>
        </div>
      </div>
    </section>;
};
export default Support;