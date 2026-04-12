"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import monequipe from "@/assets/4.jpg";

import doussou from "@/assets/Doussou Sylla.jpg";
import robert from "@/assets/Robert Bangoura.jpg";
import billy from "@/assets/Billy Nakouman kanté.jpg";
import fatoumata from "@/assets/Fatoumata Kallo.jpg";
import lanssana from "@/assets/Sylla Lanssana.jpg";
import michel from "@/assets/ui.jpg";

// Membres actifs
import ibrahima from "@/assets/gokou ui.jpg";
import moussa from "@/assets/gogeta.jpg";
import sounkamba from "@/assets/luffy.webp";
import mariama from "@/assets/mini gokou.jpg";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  email: string;
  phone: string;
  image: StaticImageData;
}

interface ActiveMember {
  name: string;
  image: StaticImageData;
}

const Team = () => {
  const [showActiveMembers, setShowActiveMembers] = useState(false);

  const activeMembers: ActiveMember[] = [
    { name: "Ibrahima Sory Camara", image: ibrahima },
    { name: "Moussa Sidibé", image: moussa },
    { name: "Sounkamba Condé", image: sounkamba },
    { name: "Mariama Diallo", image: mariama },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Doussou Sylla",
      role: "Présidente",
      description: "Leader expérimentée en développement communautaire.",
      expertise: ["Leadership", "Environnement"],
      email: "fabourama24@gmail.com",
      phone: "+224623618821",
      image: doussou,
    },
    {
      name: "Robert Bangoura",
      role: "Coordinateur National",
      description: "Expert en mobilisation citoyenne.",
      expertise: ["Partenariats", "Communication"],
      email: "robert.bangoura@example.com",
      phone: "+224621000002",
      image: robert,
    },
    {
      name: "Billy Nankouman Kanté",
      role: "Secrétaire Général",
      description: "Spécialiste en assainissement urbain.",
      expertise: ["Projets", "Jeunesse"],
      email: "billy.kante@example.com",
      phone: "+224621000003",
      image: billy,
    },
    {
      name: "Fatoumata Kallo",
      role: "Trésorière",
      description: "Spécialiste en gestion financière associative.",
      expertise: ["Finance", "Gestion"],
      email: "fatoumata.kallo@example.com",
      phone: "+224621000004",
      image: fatoumata,
    },
    {
      name: "Lanssana Sylla",
      role: "Commissaire des comptes",
      description: "Spécialiste en audit et contrôle financier.",
      expertise: ["Audit", "Comptabilité"],
      email: "lanssana.sylla@example.com",
      phone: "+224621000005",
      image: lanssana,
    },
    {
      name: "Michel II Pivi",
      role: "Chargé aux Réseaux sociaux",
      description:
        "Stratège digital derrière Héros National. Chargé des réseaux sociaux, il veille à ce que chaque message du mouvement soit entendu, partagé et compris.",
      expertise: ["Réseaux sociaux", "Communication"],
      email: "benetibusiness@gmail.com",
      phone: "+224612170040",
      image: michel,
    },
  ];

  return (
    <section id="equipe" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nous sommes une équipe passionnée et expérimentée, unie par la vision de transformer
            Conakry en un modèle de développement durable pour toute l'Afrique de l'Ouest.
          </p>
        </div>

        {/* Image principale */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden group h-64 md:h-80">
            <Image
              src={monequipe}
              alt="Équipe Hero National"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Équipe Hero National</h3>
              <p className="text-white/90">
                Une équipe multidisciplinaire engagée pour le changement
              </p>
            </div>
          </div>
        </div>

        {/* Cartes des membres */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 object-cover border-2 border-primary/20 shadow-sm"
                  />
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group/icon"
                    title={`Envoyer un mail à ${member.name}`}
                  >
                    <Mail className="w-4 h-4 text-primary group-hover/icon:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group/icon"
                    title={`Appeler ${member.name}`}
                  >
                    <Phone className="w-4 h-4 text-primary group-hover/icon:scale-110 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bouton Membres Actifs */}
        <div className="mt-16 text-center">
          <Button
            onClick={() => setShowActiveMembers(!showActiveMembers)}
            className="flex items-center mx-auto gap-2"
          >
            Membres Actifs
            {showActiveMembers ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>

          {showActiveMembers && (
            <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl shadow-sm max-w-2xl mx-auto p-6 animate-fadeIn">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {activeMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border border-border mb-2"
                    />
                    <p className="text-sm text-foreground font-medium">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA final */}
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
                <Button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Voir les opportunités
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    window.location.href =
                      "mailto:heronational224@gmail.com?subject=Candidature%20spontanée%20Hero%20National";
                  }}
                >
                  Candidature spontanée
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
