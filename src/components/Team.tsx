"use client";

import { useState } from "react";
import Image from "next/image";
import OpportunitesModal from "@/components/modals/OpportunitesModal";
import CandidatureModal from "@/components/modals/CandidatureModal";
import type { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ChevronDown, ChevronUp, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import monequipe from "@/assets/4.jpg";

import doussouba  from "@/assets/Doussouba Sylla.jpg";
import robert     from "@/assets/Robert Bangoura.jpg";
import billy      from "@/assets/Billy Nakouman kanté.jpg";
import fatoumata  from "@/assets/Fatoumata Kallo.jpg";
import lanssana   from "@/assets/Sylla Lanssana.jpg";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  email: string;
  phone: string;
  image?: StaticImageData;
  initials?: string;
}

interface ActiveMember {
  name: string;
  initials: string;
  color: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Doussouba Sylla",
    role: "Présidente",
    description: "Leader expérimentée en développement communautaire.",
    expertise: ["Leadership", "Environnement"],
    email: "fabourama24@gmail.com",
    phone: "+224623618821",
    image: doussouba,
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
    description: "Stratège digital derrière Héros National. Il veille à ce que chaque message du mouvement soit entendu et compris.",
    expertise: ["Réseaux sociaux", "Communication"],
    email: "benetibusiness@gmail.com",
    phone: "+224612170040",
    initials: "MP",
  },
];

const activeMembers: ActiveMember[] = [
  { name: "Ibrahima Sory Camara", initials: "IC", color: "from-blue-500 to-blue-700",      role: "Bénévole terrain"           },
  { name: "Moussa Sidibé",        initials: "MS", color: "from-emerald-500 to-emerald-700", role: "Animateur communautaire"    },
  { name: "Sounkamba Condé",      initials: "SC", color: "from-violet-500 to-violet-700",   role: "Chargée de sensibilisation" },
  { name: "Mariama Diallo",       initials: "MD", color: "from-rose-500 to-rose-700",       role: "Coordinatrice de quartier"  },
];

const Team = () => {
  const [showActiveMembers, setShowActiveMembers] = useState(false);
  const [opportunitesOpen, setOpportunitesOpen] = useState(false);
  const [candidatureOpen, setCandidatureOpen] = useState(false);

  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: photoRef, inView: photoInView } = useInView();
  const { ref: cardsRef, inView: cardsInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

  return (
    <section id="equipe" className="py-24 bg-muted/30 overflow-hidden">
      <OpportunitesModal
        open={opportunitesOpen}
        onClose={() => setOpportunitesOpen(false)}
        onCandidature={() => setCandidatureOpen(true)}
      />
      <CandidatureModal open={candidatureOpen} onClose={() => setCandidatureOpen(false)} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center shadow-sm">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Les acteurs du changement
            </span>
            <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center shadow-sm">
              <Users className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="section-title">Notre Équipe</h2>
          <p className="section-subtitle">
            Nous sommes une équipe passionnée et expérimentée, unie par la vision de transformer
            Conakry en un modèle de développement durable pour toute l&apos;Afrique de l&apos;Ouest.
          </p>
        </div>

        {/* Group photo */}
        <div
          ref={photoRef}
          className={`mb-16 transition-all duration-700 ${photoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative rounded-2xl overflow-hidden group shadow-card">
            <Image
              src={monequipe}
              alt="Équipe Hero National"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white">
              <h3 className="text-lg md:text-2xl font-bold mb-1">Équipe Hero National</h3>
              <p className="text-white/85 text-sm md:text-base">
                Une équipe multidisciplinaire engagée pour le changement
              </p>
            </div>
          </div>
        </div>

        {/* Member cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`modern-card group overflow-hidden transition-all duration-700 ${cardsRef ? (cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10") : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="p-6">
                {/* Avatar + info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative flex-shrink-0">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="rounded-2xl object-cover border-2 border-primary/15 group-hover:border-primary/40 transition-colors duration-300 shadow-sm"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center text-white text-lg font-bold shadow-sm border-2 border-primary/15 group-hover:border-primary/40 transition-colors duration-300">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-foreground text-base leading-tight">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mt-0.5">{member.role}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px] px-2 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Contact icons */}
                <div className="flex gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    title={`Envoyer un mail à ${member.name}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/8 hover:bg-primary/15 text-primary text-xs font-medium transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    title={`Appeler ${member.name}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/8 hover:bg-primary/15 text-primary text-xs font-medium transition-colors duration-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Appeler
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active members */}
        <div className="mb-14 text-center">
          <Button
            variant="outline"
            onClick={() => setShowActiveMembers(!showActiveMembers)}
            className="gap-2 mx-auto"
          >
            <Users className="w-4 h-4" />
            Membres Actifs
            {showActiveMembers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${showActiveMembers ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
          >
            <div className="bg-primary/5 border border-primary/15 rounded-2xl max-w-2xl mx-auto p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {activeMembers.map((member) => (
                  <div key={member.name} className="flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-lg font-bold mb-2 border-2 border-border group-hover:border-primary/50 transition-colors duration-300 shadow-sm`}>
                      {member.initials}
                    </div>
                    <p className="text-sm text-foreground font-medium leading-tight">{member.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`transition-all duration-700 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative overflow-hidden bg-hero-gradient rounded-2xl p-8 md:p-10 text-white text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">Rejoignez Notre Équipe</h3>
              <p className="text-white/85 mb-7 max-w-2xl mx-auto leading-relaxed">
                Nous recherchons constamment des personnes passionnées pour renforcer notre équipe
                et amplifier notre impact sur le terrain.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 font-semibold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  onClick={() => setOpportunitesOpen(true)}
                >
                  Voir les opportunités
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  onClick={() => setCandidatureOpen(true)}
                >
                  Candidature spontanée
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
