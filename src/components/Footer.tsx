import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Globe } from "lucide-react";

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
    { icon: Facebook, url: "#", color: "hover:text-blue-500" },
    { icon: Twitter, url: "#", color: "hover:text-sky-500" },
    { icon: Instagram, url: "#", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-bold text-lg">Hero National</div>
                <div className="text-xs text-primary-foreground/80">ONG Guinée</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Organisation non gouvernementale dédiée à faire de Conakry la capitale 
              la plus propre d'Afrique de l'Ouest à travers le projet M'won Fintin.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Support Links */}
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

          {/* Contact Info */}
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
                <span className="text-primary-foreground/80 text-sm">+224 622 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">contact@heronational.gn</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-primary-foreground/60 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">www.heronational.gn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Hero National. Tous droits réservés. | ONG enregistrée en République de Guinée
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
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