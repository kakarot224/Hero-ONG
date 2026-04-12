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
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { generateAndDownloadPDF, openMailtoWithPdf } from "@/lib/pdf";
import { Download, Send, Handshake } from "lucide-react";

const schema = z.object({
  organisation: z.string().min(2, "Minimum 2 caractères"),
  prenom: z.string().min(2, "Minimum 2 caractères"),
  nom: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  proposition: z.string().min(20, "Minimum 20 caractères"),
});

type FormData = z.infer<typeof schema>;

const typesOrg = [
  "Entreprise privée",
  "Institution publique",
  "Association / ONG",
  "Organisation internationale",
  "Autre",
];

const typesPartenariat = [
  "Financement",
  "Don matériel",
  "Expertise technique",
  "Communication / Médias",
  "Logistique",
  "Autre",
];

interface PartenariatModalProps {
  open: boolean;
  onClose: () => void;
}

const EMAIL_DESTINATAIRE = "heronational224@gmail.com";

export default function PartenariatModal({ open, onClose }: PartenariatModalProps) {
  const [typeOrg, setTypeOrg] = useState("");
  const [typesSelected, setTypesSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const toggleType = (item: string) => {
    setTypesSelected((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const fields = [
        { label: "Organisation", value: data.organisation },
        { label: "Type d'organisation", value: typeOrg || "—" },
        { label: "Prénom du contact", value: data.prenom },
        { label: "Nom du contact", value: data.nom },
        { label: "Email", value: data.email },
        { label: "Téléphone", value: data.telephone || "—" },
        {
          label: "Type de partenariat",
          value: typesSelected.length ? typesSelected.join(", ") : "—",
        },
        { label: "Proposition / Message", value: data.proposition },
      ];

      const filename = await generateAndDownloadPDF(
        "Demande de Partenariat",
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
          "Demande de Partenariat",
          data.prenom,
          data.nom,
          filename
        );
      }, 800);

      reset();
      setTypeOrg("");
      setTypesSelected([]);
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
              <Handshake className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle>Devenir Partenaire</DialogTitle>
              <DialogDescription>
                Collaborons pour amplifier notre impact sur Conakry.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2" noValidate>
          {/* Organisation */}
          <div>
            <Label htmlFor="part-org">Nom de l'organisation *</Label>
            <Input
              id="part-org"
              placeholder="Ex. Société Guinéenne de Commerce"
              {...register("organisation")}
            />
            {errors.organisation && (
              <p className="text-destructive text-xs mt-1">{errors.organisation.message}</p>
            )}
          </div>

          {/* Type d'organisation */}
          <div>
            <Label htmlFor="part-type-org">Type d'organisation</Label>
            <Select onValueChange={setTypeOrg} value={typeOrg}>
              <SelectTrigger id="part-type-org">
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
              <SelectContent>
                {typesOrg.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Prénom / Nom */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="part-prenom">Prénom du contact *</Label>
              <Input id="part-prenom" placeholder="Mamadou" {...register("prenom")} />
              {errors.prenom && (
                <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="part-nom">Nom *</Label>
              <Input id="part-nom" placeholder="Diallo" {...register("nom")} />
              {errors.nom && (
                <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>
              )}
            </div>
          </div>

          {/* Email / Téléphone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="part-email">Email *</Label>
              <Input id="part-email" type="email" placeholder="contact@org.com" {...register("email")} />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="part-tel">Téléphone</Label>
              <Input id="part-tel" placeholder="+224 6XX XXX XXX" {...register("telephone")} />
            </div>
          </div>

          {/* Type de partenariat */}
          <div>
            <Label className="mb-2 block">Type de partenariat souhaité</Label>
            <div className="grid grid-cols-2 gap-2">
              {typesPartenariat.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Checkbox
                    id={`partenariat-${t}`}
                    checked={typesSelected.includes(t)}
                    onCheckedChange={() => toggleType(t)}
                  />
                  <label htmlFor={`partenariat-${t}`} className="text-sm cursor-pointer">
                    {t}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Proposition */}
          <div>
            <Label htmlFor="part-prop">Proposition / Message *</Label>
            <Textarea
              id="part-prop"
              placeholder="Décrivez votre proposition de partenariat, vos objectifs communs, votre contribution potentielle..."
              rows={4}
              {...register("proposition")}
            />
            {errors.proposition && (
              <p className="text-destructive text-xs mt-1">{errors.proposition.message}</p>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-blue-700 flex gap-2">
            <Download className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              En cliquant sur Envoyer, votre demande sera téléchargée en PDF. Votre client email
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
