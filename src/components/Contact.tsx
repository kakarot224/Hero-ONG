"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Clock, Send, Users, Handshake } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import InscriptionModal from "@/components/modals/InscriptionModal";
import PartenariatModal from "@/components/modals/PartenariatModal";

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Construction du lien mailto avec les données du formulaire
    const subject = encodeURIComponent(`[Hero National] ${data.sujet}`);
    const body = encodeURIComponent(
      `Prénom: ${data.prenom}\nNom: ${data.nom}\nEmail: ${data.email}\nTéléphone: ${data.telephone || "Non renseigné"}\n\nMessage:\n${data.message}`
    );
    const mailtoUrl = `mailto:heronational224@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    toast.success("Votre client email va s'ouvrir pour envoyer le message.", {
      description: "Merci de nous contacter. Nous répondons sous 24h.",
    });
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Quartier Kaloum, Conakry", "République de Guinée"],
      color: "text-red-500",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+224 622 30 99 09", "+224 623 61 88 21"],
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["heronational224@gmail.com", "infoheronational.ong@gmail.com"],
      color: "text-blue-500",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven : 8h30 – 16h30"],
      color: "text-purple-500",
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      color: "bg-blue-600",
      url: "https://www.facebook.com/share/16EGX97ugH/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <InscriptionModal open={inscriptionOpen} onClose={() => setInscriptionOpen(false)} />
      <PartenariatModal open={partenariatOpen} onClose={() => setPartenariatOpen(false)} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez-Nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une question, une suggestion ou envie de rejoindre notre mouvement ?
            N'hésitez pas à nous contacter. Nous sommes là pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Informations de Contact
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Suivez-nous sur les réseaux sociaux
              </h4>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                Quartier Kaloum, Conakry
              </h4>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm h-64">
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

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Envoyez-nous un Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="prenom" className="text-sm font-medium text-foreground mb-2 block">
                        Prénom *
                      </label>
                      <Input
                        id="prenom"
                        placeholder="Votre prénom"
                        {...register("prenom")}
                        aria-invalid={!!errors.prenom}
                      />
                      {errors.prenom && (
                        <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="nom" className="text-sm font-medium text-foreground mb-2 block">
                        Nom *
                      </label>
                      <Input
                        id="nom"
                        placeholder="Votre nom"
                        {...register("nom")}
                        aria-invalid={!!errors.nom}
                      />
                      {errors.nom && (
                        <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@example.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telephone" className="text-sm font-medium text-foreground mb-2 block">
                      Téléphone
                    </label>
                    <Input
                      id="telephone"
                      placeholder="+224 XXX XXX XXX"
                      {...register("telephone")}
                    />
                  </div>

                  <div>
                    <label htmlFor="sujet" className="text-sm font-medium text-foreground mb-2 block">
                      Sujet *
                    </label>
                    <Input
                      id="sujet"
                      placeholder="Objet de votre message"
                      {...register("sujet")}
                      aria-invalid={!!errors.sujet}
                    />
                    {errors.sujet && (
                      <p className="text-destructive text-xs mt-1">{errors.sujet.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande, suggestion ou comment vous souhaitez nous aider..."
                      rows={6}
                      {...register("message")}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Nous nous engageons à répondre dans les 24h.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="h-auto p-4 flex-col"
                onClick={() => setInscriptionOpen(true)}
              >
                <Users className="w-6 h-6 mb-2 text-primary" />
                <span className="font-medium">Devenir Bénévole</span>
                <span className="text-xs text-muted-foreground">Rejoignez nos équipes</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex-col"
                onClick={() => setPartenariatOpen(true)}
              >
                <Handshake className="w-6 h-6 mb-2 text-primary" />
                <span className="font-medium">Partenariat</span>
                <span className="text-xs text-muted-foreground">Collaborons ensemble</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
