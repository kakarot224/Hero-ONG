"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, Users } from "lucide-react";

interface Opportunite {
  titre: string;
  description: string;
  type: string;
  lieu: string;
  engagement: string;
  profil: string;
}

const opportunites: Opportunite[] = [
  {
    titre: "Bénévole Terrain",
    description:
      "Participez directement aux opérations de nettoyage dans les quartiers de Conakry.",
    type: "Bénévolat",
    lieu: "Conakry (tous quartiers)",
    engagement: "1 à 2 jours / semaine",
    profil: "Toute personne motivée, 16 ans minimum",
  },
  {
    titre: "Responsable Communication",
    description:
      "Gérez les réseaux sociaux, rédigez du contenu et amplifiez la visibilité de l'ONG.",
    type: "Bénévolat",
    lieu: "À distance / Conakry",
    engagement: "Quelques heures / semaine",
    profil: "Maîtrise des réseaux sociaux, créativité",
  },
  {
    titre: "Formateur / Sensibilisateur",
    description:
      "Animez des sessions d'éducation sur l'assainissement dans les écoles et les communautés.",
    type: "Bénévolat",
    lieu: "Conakry",
    engagement: "Ponctuellement",
    profil: "Pédagogie, aisance à l'oral",
  },
  {
    titre: "Photographe / Vidéaste",
    description:
      "Documentez les actions de terrain et produisez des contenus visuels impactants.",
    type: "Bénévolat",
    lieu: "Conakry",
    engagement: "Lors des événements",
    profil: "Équipement photo/vidéo, sens artistique",
  },
  {
    titre: "Bénévole Logistique",
    description:
      "Organisez le transport du matériel, la coordination des équipes et la préparation des événements.",
    type: "Bénévolat",
    lieu: "Conakry",
    engagement: "Selon les activités",
    profil: "Organisé, disponible, esprit d'équipe",
  },
  {
    titre: "Agent de Collecte de Fonds",
    description:
      "Participez aux campagnes de financement participatif et de recherche de partenaires.",
    type: "Bénévolat",
    lieu: "Conakry / Distance",
    engagement: "Flexible",
    profil: "Réseau, sens de la communication",
  },
];

const typeColors: Record<string, string> = {
  "Bénévolat": "bg-green-100 text-green-700",
  "Stage": "bg-blue-100 text-blue-700",
};

interface OpportunitesModalProps {
  open: boolean;
  onClose: () => void;
  onCandidature: () => void;
}

export default function OpportunitesModal({
  open,
  onClose,
  onCandidature,
}: OpportunitesModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Opportunités Hero National</DialogTitle>
              <DialogDescription>
                Rejoignez notre équipe et contribuez au changement.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          {opportunites.map((opp, i) => (
            <div
              key={i}
              className="border border-border rounded-xl p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-foreground">{opp.titre}</h3>
                <Badge
                  className={`${typeColors[opp.type] ?? "bg-muted text-muted-foreground"} text-xs flex-shrink-0`}
                >
                  {opp.type}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {opp.description}
              </p>
              <div className="grid grid-cols-2 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {opp.lieu}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {opp.engagement}
                </span>
                <span className="flex items-center gap-1 col-span-2">
                  <Users className="w-3 h-3" /> Profil : {opp.profil}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <Button
            className="flex-1"
            onClick={() => {
              onClose();
              setTimeout(onCandidature, 200);
            }}
          >
            Envoyer une candidature
          </Button>
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
