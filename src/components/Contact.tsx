import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Clock, Send, Users, Handshake } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Quartier Kaloum, Conakry", "République de Guinée"],
      color: "text-red-500"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+224 622 XX XX XX", "+224 664 XX XX XX"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@heronational.gn", "info@heronational.gn"],
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun - Ven: 8h00 - 17h00", "Sam: 8h00 - 12h00"],
      color: "text-purple-500"
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", color: "bg-blue-600", url: "#" },
    { icon: Twitter, name: "Twitter", color: "bg-sky-500", url: "#" },
    { icon: Instagram, name: "Instagram", color: "bg-pink-500", url: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
                      <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
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
                    className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Carte interactive bientôt disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Envoyez-nous un Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Prénom *
                    </label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nom *
                    </label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input type="email" placeholder="votre.email@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Téléphone
                  </label>
                  <Input placeholder="+224 XXX XXX XXX" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Sujet *
                  </label>
                  <Input placeholder="Objet de votre message" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Décrivez votre demande, suggestion ou comment vous souhaitez nous aider..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Nous nous engageons à répondre dans les 24h.
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col">
                <Users className="w-6 h-6 mb-2 text-primary" />
                <span className="font-medium">Devenir Bénévole</span>
                <span className="text-xs text-muted-foreground">Rejoignez nos équipes</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
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