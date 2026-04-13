"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Recycle, GraduationCap, Users, Building, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import environmentIcon from "@/assets/environment-icon.jpg";
import InscriptionModal from "@/components/modals/InscriptionModal";
import { useInView } from "@/hooks/useInView";

interface Action {
  icon: React.ElementType;
  title: string;
  description: string;
  stats: string;
  image?: StaticImageData;
  color: string;
  bg: string;
}

const actions: Action[] = [
  {
    icon: Recycle,
    title: "Nettoyage des Quartiers",
    description: "Organisation de campagnes de nettoyage et d'entretien dans tous les quartiers de Conakry avec la participation active des résidents.",
    image: environmentIcon,
    stats: "25 quartiers ciblés",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: GraduationCap,
    title: "Éducation à la Propreté",
    description: "Sensibilisation dans les écoles, marchés et familles sur l'importance de l'hygiène et de la propreté pour la santé publique.",
    stats: "50+ écoles sensibilisées",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Mobilisation de la Jeunesse",
    description: "Implication active des jeunes et leaders communautaires comme ambassadeurs du changement dans leurs communautés.",
    stats: "500+ jeunes mobilisés",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Building,
    title: "Partenariats Institutionnels",
    description: "Collaborer étroitement avec les services techniques de la ville et les autorités publiques pour des actions coordonnées.",
    stats: "15 partenaires institutionnels",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Lightbulb,
    title: "Initiatives Pilotes",
    description: "Mise en place d'initiatives innovantes dans chaque commune pour servir de modèles reproductibles.",
    stats: "5 communes couvertes",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const Actions = () => {
  const [inscriptionOpen, setInscriptionOpen] = useState(false);
  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: cardsRef, inView: cardsInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

  return (
    <section id="actions" className="py-24 overflow-hidden">
      <InscriptionModal open={inscriptionOpen} onClose={() => setInscriptionOpen(false)} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Ce que nous faisons
          </span>
          <h2 className="section-title">Nos Axes d&apos;Intervention</h2>
          <p className="section-subtitle">
            Découvrez comment Hero National agit concrètement pour transformer Conakry
            en capitale modèle de propreté et de développement durable en Afrique de l&apos;Ouest.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, i) => (
            <div
              key={action.title}
              className={`modern-card group overflow-hidden transition-all duration-700 ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${action.bg.replace("/10", "")} opacity-60`} />

              {action.image ? (
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={action.image}
                    alt={action.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
              ) : (
                <div className={`relative h-36 overflow-hidden flex items-center justify-center ${action.bg}`}>
                  <action.icon className={`w-16 h-16 ${action.color} opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`icon-box ${action.bg}`}>
                    <action.icon className={`w-5 h-5 ${action.color}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${action.bg} ${action.color}`}>
                    {action.stats}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{action.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{action.description}</p>

                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${action.color} hover:gap-2.5 transition-all duration-200`}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`mt-16 transition-all duration-700 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative overflow-hidden bg-hero-gradient rounded-2xl p-8 md:p-12 text-white">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

            <div className="relative text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Rejoignez le Mouvement Won Fintin
              </h3>
              <p className="text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ensemble, nous pouvons faire de Conakry un exemple de propreté et de développement
                durable pour toute l&apos;Afrique de l&apos;Ouest. Votre contribution compte&nbsp;!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => setInscriptionOpen(true)}
                >
                  <Users className="w-5 h-5" />
                  Devenir bénévole
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  onClick={() => document.getElementById("soutenir")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Faire un don
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;
