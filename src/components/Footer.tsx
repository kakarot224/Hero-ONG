import Image from "next/image";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Nos Actions", href: "#actions" },
    { name: "Équipe", href: "#equipe" },
    { name: "Contact", href: "#contact" },
  ];

  const supportLinks = [
    { name: "Faire un don", href: "#soutenir" },
    { name: "Devenir bénévole", href: "#" },
    { name: "Partenariat", href: "#" },
    { name: "Nos rapports", href: "#" },
  ];


  const socialMedia = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/share/16EGX97ugH/",
      color: "hover:text-blue-500",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@heronational",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3">
              <Image
                src={logo}
                alt="Hero National Logo"
                width={48}
                height={48}
                className="object-contain rounded-full"
              />
              <div>
                <div className="font-semibold">Hero National</div>
                <div className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm">
                  ONG Guinée
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 mt-4">
              Organisation non gouvernementale dédiée à faire de Conakry la capitale
              la plus propre d'Afrique de l'Ouest à travers le projet M'won Fintin.
            </p>

          
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nous Soutenir */}
          <div>
            <h3 className="font-semibold mb-4">Nous Soutenir</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Quartier Kaloum</div>
                  <div>Conakry, Guinée</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +224 622 30 99 09
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  heronational224@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Hero National. Tous droits réservés. | ONG enregistrée en République de Guinée
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Rapports financiers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
