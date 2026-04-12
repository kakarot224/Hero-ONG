"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { generateAndDownloadPDF, openMailtoWithPdf } from "@/lib/pdf";
import { Download, Send, Users } from "lucide-react";

const schema = z.object({
  prenom: z.string().min(2, "Minimum 2 caractères"),
  nom: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(8, "Numéro invalide"),
  quartier: z.string().optional(),
  motivation: z.string().min(10, "Minimum 10 caractères"),
});

type FormData = z.infer<typeof schema>;

const disponibilites = [
  "Samedi matin",
  "Samedi après-midi",
  "Dimanche matin",
  "Dimanche après-midi",
  "En semaine",
];

const domaines = [
  "Nettoyage terrain",
  "Sensibilisation communautaire",
  "Communication / Réseaux sociaux",
  "Logistique",
  "Photographie / Vidéo",
  "Autre",
];

interface InscriptionModalProps {
  open: boolean;
  onClose: () => void;
}

const EMAIL_DESTINATAIRE = "heronational224@gmail.com";

export default function InscriptionModal({ open, onClose }: InscriptionModalProps) {
  const [selectedDispos, setSelectedDispos] = useState<string[]>([]);
  const [selectedDomaines, setSelectedDomaines] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const toggleItem = (
    list: string[],
    setList: (v: string[]) => void,
    item: string
  ) => {
    setList(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const fields = [
        { label: "Prénom", value: data.prenom },
        { label: "Nom", value: data.nom },
        { label: "Email", value: data.email },
        { label: "Téléphone", value: data.telephone },
        { label: "Quartier / Commune", value: data.quartier || "—" },
        {
          label: "Disponibilités",
          value: selectedDispos.length ? selectedDispos.join(", ") : "—",
        },
        {
          label: "Domaines d'intérêt",
          value: selectedDomaines.length ? selectedDomaines.join(", ") : "—",
        },
        { label: "Motivation", value: data.motivation },
      ];

      const filename = await generateAndDownloadPDF(
        "Inscription Bénévole",
        fields,
        data.prenom,
        data.nom
      );

      toast.success("Formulaire PDF téléchargé !", {
        description:
          "Votre client email va s'ouvrir. Pensez à joindre le PDF téléchargé avant d'envoyer.",
        duration: 6000,
        icon: <Download className="w-4 h-4" />,
      });

      setTimeout(() => {
        openMailtoWithPdf(
          EMAIL_DESTINATAIRE,
          "Inscription Bénévole",
          data.prenom,
          data.nom,
          filename
        );
      }, 800);

      reset();
      setSelectedDispos([]);
      setSelectedDomaines([]);
      onClose();
    } catch {
      toast.error("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Inscription Bénévole</DialogTitle>
              <DialogDescription>
                Rejoignez l'équipe Hero National sur le terrain.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2" noValidate>
          {/* Prénom / Nom */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="insc-prenom">Prénom *</Label>
              <Input id="insc-prenom" placeholder="Mamadou" {...register("prenom")} />
              {errors.prenom && (
                <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="insc-nom">Nom *</Label>
              <Input id="insc-nom" placeholder="Diallo" {...register("nom")} />
              {errors.nom && (
                <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>
              )}
            </div>
          </div>

          {/* Email / Téléphone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="insc-email">Email *</Label>
              <Input id="insc-email" type="email" placeholder="votre@email.com" {...register("email")} />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="insc-tel">Téléphone *</Label>
              <Input id="insc-tel" placeholder="+224 6XX XXX XXX" {...register("telephone")} />
              {errors.telephone && (
                <p className="text-destructive text-xs mt-1">{errors.telephone.message}</p>
              )}
            </div>
          </div>

          {/* Quartier */}
          <div>
            <Label htmlFor="insc-quartier">Quartier / Commune</Label>
            <Input id="insc-quartier" placeholder="Ex. Kaloum, Matam..." {...register("quartier")} />
          </div>

          {/* Disponibilités */}
          <div>
            <Label className="mb-2 block">Disponibilités</Label>
            <div className="grid grid-cols-2 gap-2">
              {disponibilites.map((d) => (
                <div key={d} className="flex items-center gap-2">
                  <Checkbox
                    id={`dispo-${d}`}
                    checked={selectedDispos.includes(d)}
                    onCheckedChange={() => toggleItem(selectedDispos, setSelectedDispos, d)}
                  />
                  <label htmlFor={`dispo-${d}`} className="text-sm cursor-pointer">
                    {d}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Domaines */}
          <div>
            <Label className="mb-2 block">Domaines d'intérêt</Label>
            <div className="grid grid-cols-2 gap-2">
              {domaines.map((d) => (
                <div key={d} className="flex items-center gap-2">
                  <Checkbox
                    id={`dom-${d}`}
                    checked={selectedDomaines.includes(d)}
                    onCheckedChange={() => toggleItem(selectedDomaines, setSelectedDomaines, d)}
                  />
                  <label htmlFor={`dom-${d}`} className="text-sm cursor-pointer">
                    {d}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Motivation */}
          <div>
            <Label htmlFor="insc-motiv">Motivation *</Label>
            <Textarea
              id="insc-motiv"
              placeholder="Pourquoi souhaitez-vous rejoindre Hero National ?"
              rows={3}
              {...register("motivation")}
            />
            {errors.motivation && (
              <p className="text-destructive text-xs mt-1">{errors.motivation.message}</p>
            )}
          </div>

          {/* Info PDF */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-700 flex gap-2">
            <Download className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              En cliquant sur Envoyer, votre formulaire sera téléchargé en PDF. Votre client email
              s'ouvrira ensuite — pensez à joindre le PDF avant d'envoyer.
            </span>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Génération du PDF..." : "Télécharger & Envoyer"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
