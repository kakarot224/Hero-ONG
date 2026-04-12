"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Smartphone, CheckCircle2, AlertCircle, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface OrangeMoneyModalProps {
  open: boolean;
  onClose: () => void;
}

const NUMERO = "+224 622 30 99 09";

const steps = [
  {
    num: 1,
    title: "Ouvrez Orange Money",
    desc: 'Composez le *144# ou ouvrez l\'application Orange Money sur votre téléphone.',
  },
  {
    num: 2,
    title: "Choisissez «\u202fPaiement marchand\u202f»",
    desc: "Dans le menu principal, sélectionnez «\u202fPaiement marchand\u202f» ou «\u202fEnvoyer de l'argent\u202f».",
  },
  {
    num: 3,
    title: "Entrez le numéro",
    desc: `Saisissez le numéro ci-dessous, entrez le montant de votre choix, puis confirmez.`,
    highlight: NUMERO,
  },
  {
    num: 4,
    title: "Confirmez avec votre PIN",
    desc: "Validez la transaction avec votre code PIN Orange Money.",
  },
  {
    num: 5,
    title: "Conservez le reçu",
    desc: "Un SMS de confirmation vous sera envoyé. Gardez-le comme preuve de votre don.",
  },
];

export default function OrangeMoneyModal({ open, onClose }: OrangeMoneyModalProps) {
  const copyNumber = () => {
    navigator.clipboard.writeText(NUMERO.replace(/\s/g, ""));
    toast.success("Numéro copié !");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-orange-500" />
            </div>
            <DialogTitle className="text-xl">Don via Orange Money</DialogTitle>
          </div>
        </DialogHeader>

        {/* Numéro principal */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-orange-600 font-medium mb-1">Numéro de paiement</p>
            <p className="text-2xl font-bold text-orange-700 tracking-widest">{NUMERO}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={copyNumber} title="Copier le numéro">
            <Copy className="w-4 h-4 text-orange-500" />
          </Button>
        </div>

        {/* Étapes */}
        <div className="space-y-3">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-white">{step.num}</span>
              </div>
              <div className="pt-0.5">
                <p className="text-sm font-semibold text-foreground">{step.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                {step.highlight && (
                  <Badge className="mt-1 bg-orange-100 text-orange-700 hover:bg-orange-100 font-mono text-sm">
                    {step.highlight}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-4 flex gap-2 bg-blue-50 border border-blue-100 rounded-lg p-3">
          <AlertCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-700 leading-relaxed">
            Pour tout don, un SMS de remerciement vous sera envoyé par Hero National dans les 48h.
            Votre générosité est précieuse.
          </p>
        </div>

        <div className="mt-2 flex gap-2 bg-green-50 border border-green-100 rounded-lg p-3">
          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-green-700 leading-relaxed">
            100% des dons sont utilisés directement pour les actions de terrain du projet Won Fintin.
          </p>
        </div>

        <Button className="w-full mt-4" onClick={onClose}>
          Compris, je vais faire mon don
        </Button>
      </DialogContent>
    </Dialog>
  );
}
