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
import { ShoppingBag, AlertTriangle, CheckCircle } from "lucide-react";

interface Besoin {
  nom: string;
  quantite: string;
  urgence: "haute" | "moyenne" | "normale";
  description?: string;
}

const besoins: Besoin[] = [
  {
    nom: "Gants de protection",
    quantite: "Boîtes de 100 paires",
    urgence: "haute",
    description: "Gants en latex ou nitrile pour les opérations de nettoyage.",
  },
  {
    nom: "Sacs poubelle grande contenance",
    quantite: "Cartons (200L ou 100L)",
    urgence: "haute",
    description: "Sacs résistants pour la collecte des déchets.",
  },
  {
    nom: "Brouettes",
    quantite: "20 unités minimum",
    urgence: "haute",
    description: "Pour transporter les déchets lourds sur le terrain.",
  },
  {
    nom: "Pelles et balais",
    quantite: "50 unités",
    urgence: "moyenne",
    description: "Outils de balayage et ramassage de déchets fins.",
  },
  {
    nom: "Gilets fluorescents",
    quantite: "100 unités",
    urgence: "moyenne",
    description: "Visibilité des bénévoles lors des opérations en zone urbaine.",
  },
  {
    nom: "Masques de protection",
    quantite: "Boîtes de 50",
    urgence: "haute",
    description: "Protection respiratoire contre les poussières et odeurs.",
  },
  {
    nom: "Produits désinfectants",
    quantite: "Bidons de 5L ou 10L",
    urgence: "moyenne",
    description: "Pour l'assainissement des zones nettoyées.",
  },
  {
    nom: "Mégaphones",
    quantite: "5 unités",
    urgence: "normale",
    description: "Pour les sessions de sensibilisation communautaire.",
  },
  {
    nom: "T-shirts Hero National",
    quantite: "200 unités (toutes tailles)",
    urgence: "normale",
    description: "Tenues pour identifier les bénévoles sur le terrain.",
  },
  {
    nom: "Affiches et supports de communication",
    quantite: "Selon stock",
    urgence: "normale",
    description: "Pour les campagnes de sensibilisation dans les quartiers.",
  },
];

const urgenceConfig = {
  haute: { label: "Urgent", className: "bg-red-100 text-red-700" },
  moyenne: { label: "Prioritaire", className: "bg-orange-100 text-orange-700" },
  normale: { label: "En cours", className: "bg-green-100 text-green-700" },
};

interface BesoinsModalProps {
  open: boolean;
  onClose: () => void;
  onProposer: () => void;
}

export default function BesoinsModal({ open, onClose, onProposer }: BesoinsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Liste des Besoins Matériels</DialogTitle>
              <DialogDescription>
                Voici les besoins actuels de Hero National pour nos opérations.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Légende */}
        <div className="flex gap-3 flex-wrap mt-1">
          {Object.entries(urgenceConfig).map(([, v]) => (
            <span key={v.label} className={`text-xs px-2 py-0.5 rounded-full font-medium ${v.className}`}>
              {v.label}
            </span>
          ))}
        </div>

        {/* Besoins urgents */}
        <div className="mt-3">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <h3 className="text-sm font-semibold text-foreground">Besoins urgents</h3>
          </div>
          <div className="space-y-2">
            {besoins
              .filter((b) => b.urgence === "haute")
              .map((b, i) => (
                <BesoinItem key={i} besoin={b} />
              ))}
          </div>
        </div>

        {/* Autres besoins */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <h3 className="text-sm font-semibold text-foreground">Autres besoins</h3>
          </div>
          <div className="space-y-2">
            {besoins
              .filter((b) => b.urgence !== "haute")
              .map((b, i) => (
                <BesoinItem key={i} besoin={b} />
              ))}
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button
            className="flex-1"
            onClick={() => {
              onClose();
              setTimeout(onProposer, 200);
            }}
          >
            Proposer un don matériel
          </Button>
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function BesoinItem({ besoin }: { besoin: Besoin }) {
  const config = urgenceConfig[besoin.urgence];
  return (
    <div className="flex items-start justify-between gap-2 border border-border rounded-lg p-3">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{besoin.nom}</p>
        <p className="text-xs text-muted-foreground">{besoin.quantite}</p>
        {besoin.description && (
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
            {besoin.description}
          </p>
        )}
      </div>
      <Badge className={`${config.className} text-xs flex-shrink-0`}>{config.label}</Badge>
    </div>
  );
}
