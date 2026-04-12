"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, CreditCard, Gift } from "lucide-react";
import OrangeMoneyModal from "@/components/modals/OrangeMoneyModal";
import InscriptionModal from "@/components/modals/InscriptionModal";
import ProposerModal from "@/components/modals/ProposerModal";
import BesoinsModal from "@/components/modals/BesoinsModal";
import PartenariatModal from "@/components/modals/PartenariatModal";

const Support = () => {
  const [orangeMoneyOpen, setOrangeMoneyOpen] = useState(false);
  const [inscriptionOpen, setInscriptionOpen] = useState(false);
  const [proposerOpen, setProposerOpen] = useState(false);
  const [besoinsOpen, setBesoinsOpen] = useState(false);
  const [partenariatOpen, setPartenariatOpen] = useState(false);

  const supportOptions = [
    {
      icon: CreditCard,
      title: "Faire un Don",
      description:
        "Soutenez nos actions avec un don sécurisé via Orange Money ou paiement marchand.",
      actions: [
        {
          label: "Orange Money",
          onClick: () => setOrangeMoneyOpen(true),
        },
      ],
      variant: "donate" as const,
      featured: true,
    },
    {
      icon: Users,
      title: "Devenir Bénévole",
      description:
        "Rejoignez notre équipe sur le terrain et participez directement aux actions de nettoyage et de sensibilisation.",
      actions: [
        {
          label: "S'inscrire",
          onClick: () => setInscriptionOpen(true),
        },
        {
          label: "En savoir plus",
          onClick: () =>
            document.getElementById("actions")?.scrollIntoView({ behavior: "smooth" }),
        },
      ],
      variant: "default" as const,
    },
    {
      icon: Handshake,
      title: "Partenariat",
      description:
        "Entreprises, institutions, associations : collaborons pour amplifier notre impact sur l'assainissement urbain.",
      actions: [
        {
          label: "Devenir partenaire",
          onClick: () => setPartenariatOpen(true),
        },
        {
          label: "Contact",
          onClick: () =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
        },
      ],
      variant: "secondary" as const,
    },
    {
      icon: Gift,
      title: "Don Matériel",
      description:
        "Contribuez avec du matériel de nettoyage, équipements ou ressources logistiques pour nos opérations.",
      actions: [
        {
          label: "Proposer",
          onClick: () => setProposerOpen(true),
        },
        {
          label: "Liste des besoins",
          onClick: () => setBesoinsOpen(true),
        },
      ],
      variant: "outline" as const,
    },
  ];

  return (
    <section id="soutenir" className="py-20">
      {/* Modaux */}
      <OrangeMoneyModal open={orangeMoneyOpen} onClose={() => setOrangeMoneyOpen(false)} />
      <InscriptionModal open={inscriptionOpen} onClose={() => setInscriptionOpen(false)} />
      <ProposerModal open={proposerOpen} onClose={() => setProposerOpen(false)} />
      <BesoinsModal
        open={besoinsOpen}
        onClose={() => setBesoinsOpen(false)}
        onProposer={() => setProposerOpen(true)}
      />
      <PartenariatModal open={partenariatOpen} onClose={() => setPartenariatOpen(false)} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nous Soutenir
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Votre soutien est essentiel pour réaliser notre vision de faire de Conakry une capitale
            propre et durable. Découvrez les différentes façons de contribuer à notre mission.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${
                option.featured ? "ring-2 ring-accent/50 bg-accent/5" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      option.featured ? "bg-accent/20" : "bg-primary/10"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <option.icon
                      className={`w-6 h-6 ${
                        option.featured ? "text-accent-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    {option.featured && (
                      <span className="text-sm text-accent font-medium">Recommandé</span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{option.description}</p>
                <div className="flex flex-wrap gap-3">
                  {option.actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      variant={actionIndex === 0 ? option.variant : "ghost"}
                      size="sm"
                      onClick={action.onClick}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Votre Impact en Chiffres</h3>
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-accent">25 000 GNF</div>
              <div className="text-white/90">Nettoie 1 rue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">50 000 GNF</div>
              <div className="text-white/90">Forme 5 jeunes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">100 000 GNF</div>
              <div className="text-white/90">Équipe 1 équipe</div>
            </div>
          </div>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Chaque contribution, petite ou grande, nous rapproche de notre objectif :
            faire de Conakry l'une des capitales les plus propres de toute l'Afrique de l'Ouest.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="font-semibold"
            onClick={() => setOrangeMoneyOpen(true)}
          >
            <Heart className="w-5 h-5 mr-2" />
            Faire un don maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Support;
