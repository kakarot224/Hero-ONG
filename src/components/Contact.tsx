"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin, Phone, Mail, Facebook, Clock,
  Send, Users, Handshake, MessageSquare,
  CheckCircle, ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import InscriptionModal  from "@/components/modals/InscriptionModal";
import PartenariatModal  from "@/components/modals/PartenariatModal";
import { FaTiktok } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

const contactSchema = z.object({
  prenom:    z.string().min(2, "Au moins 2 caractères"),
  nom:       z.string().min(2, "Au moins 2 caractères"),
  email:     z.string().email("Email invalide"),
  telephone: z.string().optional(),
  sujet:     z.string().min(3, "Au moins 3 caractères"),
  message:   z.string().min(10, "Au moins 10 caractères"),
});
type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [inscriptionOpen, setInscriptionOpen] = useState(false);
  const [partenariatOpen, setPartenariatOpen] = useState(false);
  const [submitted,       setSubmitted]       = useState(false);

  const { ref: sectionRef, inView } = useInView(0.1);

  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } =
    useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const msgLen = (watch("message") ?? "").length;

  const onSubmit = async (data: ContactFormData) => {
    const subject = encodeURIComponent(`[Hero National] ${data.sujet}`);
    const body    = encodeURIComponent(
      `Prénom: ${data.prenom}\nNom: ${data.nom}\nEmail: ${data.email}\nTél: ${data.telephone || "—"}\n\n${data.message}`
    );
    window.location.href = `mailto:heronational224@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Message prêt !", {
      description: "Si l'email ne s'ouvre pas : heronational224@gmail.com",
      action: { label: "Copier", onClick: () => { void navigator.clipboard.writeText("heronational224@gmail.com"); toast.success("Copié !"); } },
      duration: 8000,
    });
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 overflow-hidden">
      <InscriptionModal open={inscriptionOpen} onClose={() => setInscriptionOpen(false)} />
      <PartenariatModal open={partenariatOpen} onClose={() => setPartenariatOpen(false)} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Badge + Titre ── */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Badge custom */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center shadow-sm">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">
              Parlons-nous
            </span>
            <div className="w-8 h-8 rounded-xl bg-hero-gradient flex items-center justify-center shadow-sm">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
          </div>

          <h2 className="section-title">Contactez-Nous</h2>

          <p className="section-subtitle max-w-xl mx-auto">
            Une question, une idée ou l&apos;envie de nous rejoindre&nbsp;?<br />
            Écrivez-nous — nous répondons sous 24h.
          </p>
        </div>

        {/* ── Grille principale ── */}
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* ══ Panneau gauche : info + actions ══ */}
          <div className={`flex flex-col gap-5 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>

            {/* Bloc gradient – contacts cliquables */}
            <div className="relative bg-hero-gradient rounded-2xl p-7 text-white overflow-hidden">
              {/* Déco blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-xl" />

              <p className="relative text-xs font-bold uppercase tracking-widest text-white/60 mb-5">
                Informations de contact
              </p>

              <div className="relative space-y-4">
                {/* Téléphone */}
                <a href="tel:+224622309909" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Téléphone</p>
                    <p className="text-sm font-semibold text-white leading-snug">+224 622 30 99 09</p>
                    <p className="text-sm font-semibold text-white/80">+224 623 61 88 21</p>
                  </div>
                </a>

                <div className="h-px bg-white/10" />

                {/* Email */}
                <a href="mailto:heronational224@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-white break-all">heronational224@gmail.com</p>
                  </div>
                </a>

                <div className="h-px bg-white/10" />

                {/* Adresse */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Adresse</p>
                    <p className="text-sm font-semibold text-white">Quartier Kaloum, Conakry</p>
                    <p className="text-sm text-white/70">République de Guinée</p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                {/* Horaires */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Horaires</p>
                    <p className="text-sm font-semibold text-white">Lun – Ven : 8h30 – 16h30</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="relative mt-7 pt-5 border-t border-white/15 flex gap-3">
                <a
                  href="https://www.facebook.com/share/16EGX97ugH/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-colors"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@heronational"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-colors"
                >
                  <FaTiktok className="w-4 h-4" /> TikTok
                </a>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setInscriptionOpen(true)}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 text-left group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Bénévole</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Rejoindre l'équipe</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </button>

              <button
                onClick={() => setPartenariatOpen(true)}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 text-left group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Partenariat</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Collaborons ensemble</p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Kaloum,+Conakry,+Guin%C3%A9e&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaloum, Conakry"
              />
            </div>
          </div>

          {/* ══ Panneau droit : Formulaire ══ */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="bg-card rounded-2xl border border-border shadow-sm h-full flex flex-col">

              {/* Header */}
              <div className="px-7 pt-7 pb-5 border-b border-border">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Envoyer un message</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-12">Tous les champs marqués <span className="text-primary font-semibold">*</span> sont obligatoires.</p>
              </div>

              {submitted ? (
                /* ── État succès ── */
                <div className="flex-1 flex flex-col items-center justify-center gap-4 p-10 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Message envoyé !</h4>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Merci de nous avoir contacté. Nous vous répondrons dans les 24 heures.
                    </p>
                  </div>
                </div>
              ) : (
                /* ── Formulaire ── */
                <form
                  onSubmit={(e) => { e.preventDefault(); void handleSubmit(onSubmit)(e); }}
                  className="flex-1 flex flex-col p-7 gap-4"
                  noValidate
                >
                  {/* Prénom + Nom */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="prenom" className="text-sm font-semibold text-foreground">
                        Prénom <span className="text-primary">*</span>
                      </label>
                      <Input id="prenom" placeholder="Mamadou" {...register("prenom")}
                        className={errors.prenom ? "border-destructive" : ""} />
                      {errors.prenom && <p className="text-destructive text-xs">{errors.prenom.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="nom" className="text-sm font-semibold text-foreground">
                        Nom <span className="text-primary">*</span>
                      </label>
                      <Input id="nom" placeholder="Diallo" {...register("nom")}
                        className={errors.nom ? "border-destructive" : ""} />
                      {errors.nom && <p className="text-destructive text-xs">{errors.nom.message}</p>}
                    </div>
                  </div>

                  {/* Email + Téléphone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <Input id="email" type="email" placeholder="votre@email.com" {...register("email")}
                        className={errors.email ? "border-destructive" : ""} />
                      {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="telephone" className="text-sm font-semibold text-foreground">
                        Téléphone
                        <span className="text-muted-foreground font-normal text-xs ml-1">(optionnel)</span>
                      </label>
                      <Input id="telephone" placeholder="+224 6XX XXX XXX" {...register("telephone")} />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="space-y-1.5">
                    <label htmlFor="sujet" className="text-sm font-semibold text-foreground">
                      Sujet <span className="text-primary">*</span>
                    </label>
                    <Input id="sujet" placeholder="Bénévolat, partenariat, question…" {...register("sujet")}
                      className={errors.sujet ? "border-destructive" : ""} />
                    {errors.sujet && <p className="text-destructive text-xs">{errors.sujet.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message <span className="text-primary">*</span>
                      </label>
                      <span className={`text-xs transition-colors ${msgLen >= 10 ? "text-emerald-500 font-medium" : "text-muted-foreground"}`}>
                        {msgLen} / 10 min
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande ou comment vous souhaitez contribuer…"
                      rows={6}
                      {...register("message")}
                      className={`resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
                  </div>

                  {/* Bouton */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-semibold gap-2 shadow hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 mt-auto"
                  >
                    {isSubmitting ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Envoi en cours…</>
                    ) : (
                      <><Send className="w-4 h-4" />Envoyer le message</>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Vos données sont confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
