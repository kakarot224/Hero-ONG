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
  ArrowRight, CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import InscriptionModal from "@/components/modals/InscriptionModal";
import PartenariatModal from "@/components/modals/PartenariatModal";
import { FaTiktok } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

const contactSchema = z.object({
  prenom:    z.string().min(2, "Au moins 2 caractères"),
  nom:       z.string().min(2, "Au moins 2 caractères"),
  email:     z.string().email("Adresse email invalide"),
  telephone: z.string().optional(),
  sujet:     z.string().min(3, "Au moins 3 caractères"),
  message:   z.string().min(10, "Au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+224 622 30 99 09", "+224 623 61 88 21"],
    href: "tel:+224622309909",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-200",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["heronational224@gmail.com"],
    href: "mailto:heronational224@gmail.com",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-200",
  },
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Quartier Kaloum, Conakry", "République de Guinée"],
    href: null,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-200",
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lun – Ven : 8h30 – 16h30"],
    href: null,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "hover:border-violet-200",
  },
];

const Contact = () => {
  const [inscriptionOpen, setInscriptionOpen]   = useState(false);
  const [partenariatOpen, setPartenariatOpen]   = useState(false);
  const [submitted, setSubmitted]               = useState(false);

  const { ref: headerRef,  inView: headerInView  } = useInView();
  const { ref: contentRef, inView: contentInView } = useInView();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const messageValue = watch("message") ?? "";

  const onSubmit = async (data: ContactFormData) => {
    const subject = encodeURIComponent(`[Hero National] ${data.sujet}`);
    const body = encodeURIComponent(
      `Prénom: ${data.prenom}\nNom: ${data.nom}\nEmail: ${data.email}\nTéléphone: ${data.telephone || "Non renseigné"}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:heronational224@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Message prêt à envoyer !", {
      description: "Si votre client email ne s'ouvre pas, écrivez à heronational224@gmail.com",
      action: {
        label: "Copier l'email",
        onClick: () => {
          void navigator.clipboard.writeText("heronational224@gmail.com");
          toast.success("Email copié !");
        },
      },
      duration: 8000,
    });
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 overflow-hidden">
      <InscriptionModal  open={inscriptionOpen}  onClose={() => setInscriptionOpen(false)}  />
      <PartenariatModal  open={partenariatOpen}  onClose={() => setPartenariatOpen(false)}  />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-badge">
            <MessageSquare className="w-3.5 h-3.5" />
            Parlons-nous
          </span>
          <h2 className="section-title">Contactez-Nous</h2>
          <p className="section-subtitle">
            Une question, une suggestion ou envie de rejoindre notre mouvement&nbsp;?
            Nous sommes là pour vous. Réponse garantie sous 24h.
          </p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Colonne gauche (2/5) ── */}
          <div className={`lg:col-span-2 space-y-5 transition-all duration-700 delay-100 ${contentInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            {/* Cartes info */}
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((info) => {
                const Inner = (
                  <div className={`modern-card p-4 flex flex-col gap-3 h-full transition-all duration-200 ${info.border} ${info.href ? "cursor-pointer" : ""}`}>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${info.bg}`}>
                      <info.icon className={`w-4 h-4 ${info.color}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${info.color}`}>{info.title}</p>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-sm text-foreground font-medium leading-snug">{line}</p>
                      ))}
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.title} href={info.href} className="block h-full">{Inner}</a>
                ) : (
                  <div key={info.title}>{Inner}</div>
                );
              })}
            </div>

            {/* Actions rapides */}
            <div className="space-y-2">
              <button
                onClick={() => setInscriptionOpen(true)}
                className="w-full flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">Devenir Bénévole</p>
                    <p className="text-xs text-muted-foreground">Rejoignez nos équipes terrain</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </button>

              <button
                onClick={() => setPartenariatOpen(true)}
                className="w-full flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">Devenir Partenaire</p>
                    <p className="text-xs text-muted-foreground">Collaborons pour plus d'impact</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </button>
            </div>

            {/* Réseaux sociaux */}
            <div className="modern-card p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Suivez-nous</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/16EGX97ugH/"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@heronational"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors duration-200"
                >
                  <FaTiktok className="w-4 h-4" />
                  TikTok
                </a>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="modern-card overflow-hidden p-0">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <MapPin className="w-4 h-4 text-rose-500" />
                <p className="text-sm font-semibold text-foreground">Quartier Kaloum, Conakry</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Kaloum,+Conakry,+Guin%C3%A9e&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Hero National — Kaloum, Conakry"
              />
            </div>
          </div>

          {/* ── Colonne droite : Formulaire (3/5) ── */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${contentInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="modern-card overflow-hidden">

              {/* En-tête formulaire */}
              <div className="bg-hero-gradient px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Envoyez-nous un message</h3>
                    <p className="text-white/75 text-xs">Réponse garantie sous 24h</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                  <span className="text-white text-xs font-medium">Sécurisé</span>
                </div>
              </div>

              {/* Corps formulaire */}
              {submitted ? (
                <div className="p-10 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Message envoyé !</h4>
                    <p className="text-sm text-muted-foreground">Merci de nous avoir contacté. Nous vous répondrons dans les 24h.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); void handleSubmit(onSubmit)(e); }}
                  className="p-6 md:p-8 space-y-5"
                  noValidate
                >
                  {/* Prénom + Nom */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="prenom" className="text-sm font-semibold text-foreground">
                        Prénom <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="prenom"
                        placeholder="Ex : Mamadou"
                        {...register("prenom")}
                        aria-invalid={!!errors.prenom}
                        className={errors.prenom ? "border-destructive focus-visible:ring-destructive/30" : ""}
                      />
                      {errors.prenom && <p className="text-destructive text-xs">{errors.prenom.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="nom" className="text-sm font-semibold text-foreground">
                        Nom <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="nom"
                        placeholder="Ex : Diallo"
                        {...register("nom")}
                        aria-invalid={!!errors.nom}
                        className={errors.nom ? "border-destructive focus-visible:ring-destructive/30" : ""}
                      />
                      {errors.nom && <p className="text-destructive text-xs">{errors.nom.message}</p>}
                    </div>
                  </div>

                  {/* Email + Téléphone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        className={errors.email ? "border-destructive focus-visible:ring-destructive/30" : ""}
                      />
                      {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="telephone" className="text-sm font-semibold text-foreground">
                        Téléphone <span className="text-muted-foreground font-normal text-xs">(optionnel)</span>
                      </label>
                      <Input
                        id="telephone"
                        placeholder="+224 XXX XXX XXX"
                        {...register("telephone")}
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="space-y-1.5">
                    <label htmlFor="sujet" className="text-sm font-semibold text-foreground">
                      Sujet <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="sujet"
                      placeholder="Ex : Bénévolat, Partenariat, Question…"
                      {...register("sujet")}
                      aria-invalid={!!errors.sujet}
                      className={errors.sujet ? "border-destructive focus-visible:ring-destructive/30" : ""}
                    />
                    {errors.sujet && <p className="text-destructive text-xs">{errors.sujet.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message <span className="text-primary">*</span>
                      </label>
                      <span className={`text-xs ${messageValue.length < 10 ? "text-muted-foreground" : "text-emerald-500"}`}>
                        {messageValue.length} caractères
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande, suggestion ou comment vous souhaitez nous aider…"
                      rows={5}
                      {...register("message")}
                      aria-invalid={!!errors.message}
                      className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive/30" : ""}`}
                    />
                    {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
                  </div>

                  {/* Submit */}
                  <Button
                    className="w-full gap-2 h-12 text-base font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Vos informations sont confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
