"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Clock, Send, Users, Handshake, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import InscriptionModal from "@/components/modals/InscriptionModal";
import PartenariatModal from "@/components/modals/PartenariatModal";
import { FaTiktok } from "react-icons/fa";
import { useInView } from "@/hooks/useInView";

const contactSchema = z.object({
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().optional(),
  sujet: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [inscriptionOpen, setInscriptionOpen] = useState(false);
  const [partenariatOpen, setPartenariatOpen] = useState(false);

  const { ref: headerRef, inView: headerInView } = useInView();
  const { ref: contentRef, inView: contentInView } = useInView();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    const subject = encodeURIComponent(`[Hero National] ${data.sujet}`);
    const body = encodeURIComponent(
      `Prénom: ${data.prenom}\nNom: ${data.nom}\nEmail: ${data.email}\nTéléphone: ${data.telephone || "Non renseigné"}\n\nMessage:\n${data.message}`
    );
    const mailtoUrl = `mailto:heronational224@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    toast.success("Message prêt à envoyer !", {
      description: "Si votre client email ne s'ouvre pas, écrivez-nous directement à heronational224@gmail.com",
      action: {
        label: "Copier l'email",
        onClick: () => {
          void navigator.clipboard.writeText("heronational224@gmail.com");
          toast.success("Email copié !");
        },
      },
      duration: 8000,
    });
    reset();
  };

  const contactInfo = [
    { icon: MapPin, title: "Adresse",   details: ["Quartier Kaloum, Conakry", "République de Guinée"], color: "text-rose-500",   bg: "bg-rose-500/10"   },
    { icon: Phone,  title: "Téléphone", details: ["+224 622 30 99 09", "+224 623 61 88 21"],           color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: Mail,   title: "Email",     details: ["heronational224@gmail.com"],                        color: "text-blue-500",   bg: "bg-blue-500/10"   },
    { icon: Clock,  title: "Horaires",  details: ["Lun - Ven : 8h30 – 16h30"],                        color: "text-violet-500", bg: "bg-violet-500/10" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 overflow-hidden">
      <InscriptionModal open={inscriptionOpen} onClose={() => setInscriptionOpen(false)} />
      <PartenariatModal open={partenariatOpen} onClose={() => setPartenariatOpen(false)} />

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
            N&apos;hésitez pas à nous contacter. Nous sommes là pour vous accompagner.
          </p>
        </div>

        <div
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* Left — Info */}
          <div className={`transition-all duration-700 delay-100 ${contentInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-xl font-bold text-foreground mb-6">Informations de Contact</h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="modern-card p-4 flex items-start gap-3 group"
                >
                  <div className={`icon-box flex-shrink-0 ${info.bg} w-9 h-9 rounded-lg`}>
                    <info.icon className={`w-4 h-4 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">{info.title}</p>
                    {info.details.map((d, di) => (
                      <p key={di} className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">Suivez-nous</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/16EGX97ugH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@heronational"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <FaTiktok className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setInscriptionOpen(true)}
                className="modern-card p-4 flex flex-col items-start gap-2 group hover:border-primary/30 text-left w-full"
              >
                <div className="icon-box bg-primary/10 w-9 h-9 rounded-lg">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Devenir Bénévole</p>
                  <p className="text-xs text-muted-foreground">Rejoignez nos équipes</p>
                </div>
              </button>
              <button
                onClick={() => setPartenariatOpen(true)}
                className="modern-card p-4 flex flex-col items-start gap-2 group hover:border-primary/30 text-left w-full"
              >
                <div className="icon-box bg-primary/10 w-9 h-9 rounded-lg">
                  <Handshake className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Partenariat</p>
                  <p className="text-xs text-muted-foreground">Collaborons ensemble</p>
                </div>
              </button>
            </div>

            {/* Map */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                Quartier Kaloum, Conakry
              </p>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm h-56">
                <iframe
                  src="https://maps.google.com/maps?q=Kaloum,+Conakry,+Guin%C3%A9e&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Hero National — Kaloum, Conakry"
                />
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-700 delay-200 ${contentInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="modern-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-box bg-primary/10">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Envoyez-nous un Message</h3>
              </div>

              <form
                onSubmit={(e) => { e.preventDefault(); void handleSubmit(onSubmit)(e); }}
                className="space-y-4"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="text-sm font-medium text-foreground mb-1.5 block">Prénom *</label>
                    <Input id="prenom" placeholder="Votre prénom" {...register("prenom")} aria-invalid={!!errors.prenom} />
                    {errors.prenom && <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="nom" className="text-sm font-medium text-foreground mb-1.5 block">Nom *</label>
                    <Input id="nom" placeholder="Votre nom" {...register("nom")} aria-invalid={!!errors.nom} />
                    {errors.nom && <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input id="email" type="email" placeholder="votre.email@example.com" {...register("email")} aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="telephone" className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                  <Input id="telephone" placeholder="+224 XXX XXX XXX" {...register("telephone")} />
                </div>

                <div>
                  <label htmlFor="sujet" className="text-sm font-medium text-foreground mb-1.5 block">Sujet *</label>
                  <Input id="sujet" placeholder="Objet de votre message" {...register("sujet")} aria-invalid={!!errors.sujet} />
                  {errors.sujet && <p className="text-destructive text-xs mt-1">{errors.sujet.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre demande, suggestion ou comment vous souhaitez nous aider..."
                    rows={5}
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    className="resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  className="w-full gap-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Nous nous engageons à répondre dans les 24h.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
