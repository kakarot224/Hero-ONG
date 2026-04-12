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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { generateAndDownloadPDF, openMailtoWithPdf } from "@/lib/pdf";
import { Download, Send, Gift } from "lucide-react";

const schema = z.object({
  prenom: z.string().min(2, "Minimum 2 caractères"),
  nom: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(8, "Numéro invalide"),
  materiel: z.string().min(3, "Précisez le matériel"),
  quantite: z.string().optional(),
  description: z.string().optional(),
  disponibilite: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const etats = ["Neuf", "Bon état", "Usagé mais fonctionnel"];

interface ProposerModalProps {
  open: boolean;
  onClose: () => void;
}

const EMAIL_DESTINATAIRE = "heronational224@gmail.com";

export default function ProposerModal({ open, onClose }: ProposerModalProps) {
  const [etat, setEtat] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const fields = [
        { label: "Prénom", value: data.prenom },
        { label: "Nom", value: data.nom },
        { label: "Email", value: data.email },
        { label: "Téléphone", value: data.telephone },
        { label: "Type de matériel", value: data.materiel },
        { label: "Quantité", value: data.quantite || "—" },
        { label: "État", value: etat || "—" },
        { label: "Description", value: data.description || "—" },
        { label: "Disponibilité", value: data.disponibilite || "—" },
      ];

      const filename = await generateAndDownloadPDF(
        "Proposition Don Matériel",
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
          "Proposition Don Matériel",
          data.prenom,
          data.nom,
          filename
        );
      }, 800);

      reset();
      setEtat("");
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
              <Gift className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Proposer un Don Matériel</DialogTitle>
              <DialogDescription>
                Contribuez avec du matériel pour nos opérations sur le terrain.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2" noValidate>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="prop-prenom">Prénom *</Label>
              <Input id="prop-prenom" placeholder="Mamadou" {...register("prenom")} />
              {errors.prenom && (
                <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="prop-nom">Nom *</Label>
              <Input id="prop-nom" placeholder="Diallo" {...register("nom")} />
              {errors.nom && (
                <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="prop-email">Email *</Label>
              <Input id="prop-email" type="email" placeholder="votre@email.com" {...register("email")} />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="prop-tel">Téléphone *</Label>
              <Input id="prop-tel" placeholder="+224 6XX XXX XXX" {...register("telephone")} />
              {errors.telephone && (
                <p className="text-destructive text-xs mt-1">{errors.telephone.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="prop-materiel">Type de matériel *</Label>
            <Input
              id="prop-materiel"
              placeholder="Ex. Gants, sacs poubelle, brouettes..."
              {...register("materiel")}
            />
            {errors.materiel && (
              <p className="text-destructive text-xs mt-1">{errors.materiel.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="prop-qte">Quantité</Label>
              <Input id="prop-qte" placeholder="Ex. 50 paires, 2 brouettes..." {...register("quantite")} />
            </div>
            <div>
              <Label htmlFor="prop-etat">État</Label>
              <Select onValueChange={setEtat} value={etat}>
                <SelectTrigger id="prop-etat">
                  <SelectValue placeholder="Choisir..." />
                </SelectTrigger>
                <SelectContent>
                  {etats.map((e) => (
                    <SelectItem key={e} value={e}>
                      {e}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="prop-desc">Description complémentaire</Label>
            <Textarea
              id="prop-desc"
              placeholder="Détails supplémentaires sur le matériel proposé..."
              rows={2}
              {...register("description")}
            />
          </div>

          <div>
            <Label htmlFor="prop-dispo">Disponibilité pour la remise</Label>
            <Input
              id="prop-dispo"
              placeholder="Ex. À partir du 15 mars, en semaine..."
              {...register("disponibilite")}
            />
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-700 flex gap-2">
            <Download className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              En cliquant sur Envoyer, votre proposition sera téléchargée en PDF. Votre client email
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
