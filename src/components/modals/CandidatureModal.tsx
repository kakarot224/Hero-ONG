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
import { Download, Send, FileText } from "lucide-react";

const schema = z.object({
  prenom: z.string().min(2, "Minimum 2 caractères"),
  nom: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(8, "Numéro invalide"),
  poste: z.string().min(2, "Veuillez indiquer le poste visé"),
  experience: z.string().min(10, "Minimum 10 caractères"),
  motivation: z.string().min(10, "Minimum 10 caractères"),
});

type FormData = z.infer<typeof schema>;

const postes = [
  "Bénévole terrain (nettoyage)",
  "Responsable communication",
  "Bénévole logistique",
  "Formateur / Sensibilisateur",
  "Photographe / Vidéaste",
  "Agent de collecte de fonds",
  "Autre",
];

interface CandidatureModalProps {
  open: boolean;
  onClose: () => void;
}

const EMAIL_DESTINATAIRE = "heronational224@gmail.com";

export default function CandidatureModal({ open, onClose }: CandidatureModalProps) {
  const [selectedPoste, setSelectedPoste] = useState("");
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
        { label: "Poste visé", value: selectedPoste || data.poste },
        { label: "Expérience", value: data.experience },
        { label: "Lettre de motivation", value: data.motivation },
      ];

      const filename = await generateAndDownloadPDF(
        "Candidature Spontanée",
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
          "Candidature Spontanée",
          data.prenom,
          data.nom,
          filename
        );
      }, 800);

      reset();
      setSelectedPoste("");
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
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Candidature Spontanée</DialogTitle>
              <DialogDescription>
                Rejoignez l'équipe Hero National selon vos compétences.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2" noValidate>
          {/* Prénom / Nom */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="cand-prenom">Prénom *</Label>
              <Input id="cand-prenom" placeholder="Mamadou" {...register("prenom")} />
              {errors.prenom && (
                <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="cand-nom">Nom *</Label>
              <Input id="cand-nom" placeholder="Diallo" {...register("nom")} />
              {errors.nom && (
                <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>
              )}
            </div>
          </div>

          {/* Email / Téléphone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="cand-email">Email *</Label>
              <Input id="cand-email" type="email" placeholder="votre@email.com" {...register("email")} />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="cand-tel">Téléphone *</Label>
              <Input id="cand-tel" placeholder="+224 6XX XXX XXX" {...register("telephone")} />
              {errors.telephone && (
                <p className="text-destructive text-xs mt-1">{errors.telephone.message}</p>
              )}
            </div>
          </div>

          {/* Poste visé */}
          <div>
            <Label htmlFor="cand-poste">Poste / Rôle visé *</Label>
            <Select
              onValueChange={(v) => setSelectedPoste(v)}
              value={selectedPoste}
            >
              <SelectTrigger id="cand-poste">
                <SelectValue placeholder="Choisissez un rôle..." />
              </SelectTrigger>
              <SelectContent>
                {postes.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              className="mt-2"
              placeholder="Ou précisez votre rôle ici..."
              {...register("poste")}
            />
            {errors.poste && (
              <p className="text-destructive text-xs mt-1">{errors.poste.message}</p>
            )}
          </div>

          {/* Expérience */}
          <div>
            <Label htmlFor="cand-exp">Expérience pertinente *</Label>
            <Textarea
              id="cand-exp"
              placeholder="Décrivez vos expériences, compétences ou formations en lien avec le poste..."
              rows={3}
              {...register("experience")}
            />
            {errors.experience && (
              <p className="text-destructive text-xs mt-1">{errors.experience.message}</p>
            )}
          </div>

          {/* Motivation */}
          <div>
            <Label htmlFor="cand-motiv">Lettre de motivation *</Label>
            <Textarea
              id="cand-motiv"
              placeholder="Pourquoi souhaitez-vous rejoindre Hero National ? Quels sont vos objectifs ?"
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
              En cliquant sur Envoyer, votre candidature sera téléchargée en PDF. Votre client email
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
