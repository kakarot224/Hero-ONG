import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, ArrowUpRight } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "Accueil",     href: "/#accueil"  },
    { name: "À propos",    href: "/#apropos"  },
    { name: "Nos Actions", href: "/#actions"  },
    { name: "Équipe",      href: "/#equipe"   },
    { name: "Contact",     href: "/#contact"  },
  ];

  const supportLinks = [
    { name: "Faire un don",       href: "/#soutenir" },
    { name: "Devenir bénévole",   href: "/#contact"  },
    { name: "Partenariat",        href: "/#contact"  },
    { name: "Nos rapports",       href: "/rapports-financiers" },
  ];

  const socialMedia = [
    { icon: Facebook, url: "https://www.facebook.com/share/16EGX97ugH/", label: "Facebook", bg: "bg-blue-600 hover:bg-blue-500" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@heronational",         label: "TikTok",   bg: "bg-zinc-900 hover:bg-zinc-700" },
  ];

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-hero-gradient" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/#accueil" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="overflow-hidden rounded-full ring-2 ring-white/20 group-hover:ring-accent/50 transition-all duration-300">
                <Image src={logo} alt="Hero National Logo" width={44} height={44} className="object-contain rounded-full" />
              </div>
              <div>
                <div className="font-bold text-white">Hero National</div>
                <div className="text-secondary-foreground/60 text-xs tracking-wider uppercase">ONG Guinée</div>
              </div>
            </Link>
            <p className="text-secondary-foreground/65 text-sm leading-relaxed mb-5">
              Organisation non gouvernementale dédiée à faire de Conakry la capitale
              la plus propre d&apos;Afrique de l&apos;Ouest à travers le projet Won Fintin.
            </p>
            <div className="flex gap-2.5">
              {socialMedia.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 ${social.bg} rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/65 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-accent rounded-full transition-all duration-300 flex-shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Nous Soutenir</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/65 hover:text-white transition-colors duration-200 text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-accent rounded-full transition-all duration-300 flex-shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Contact</h3>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-secondary-foreground/50 mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                <div className="text-secondary-foreground/65 text-sm">
                  <div>Quartier Kaloum</div>
                  <div>Conakry, Guinée</div>
                </div>
              </div>
              <a href="tel:+224622309909" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-secondary-foreground/50 flex-shrink-0 group-hover:text-accent transition-colors" />
                <span className="text-secondary-foreground/65 hover:text-white transition-colors text-sm">+224 622 30 99 09</span>
              </a>
              <a href="mailto:heronational224@gmail.com" className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-secondary-foreground/50 flex-shrink-0 group-hover:text-accent transition-colors" />
                <span className="text-secondary-foreground/65 hover:text-white transition-colors text-sm break-all">heronational224@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hero National. Tous droits réservés. | ONG enregistrée en République de Guinée
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {[
              { name: "Politique de confidentialité", href: "/politique-de-confidentialite" },
              { name: "Mentions légales",             href: "/mentions-legales"             },
              { name: "Rapports financiers",          href: "/rapports-financiers"          },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-foreground/50 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
              >
                {link.name}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Signature développeur */}
        <div className="border-t border-white/5 mt-5 pt-5 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-secondary-foreground/35">
          <span>Développé par</span>
          <span className="font-semibold text-secondary-foreground/55 tracking-wide">BamboryTech</span>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:sowtyga224@gmail.com" className="hover:text-white transition-colors duration-200">
            sowtyga224@gmail.com
          </a>
          <span>·</span>
          <a
            href="https://wa.me/224624386545"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            WhatsApp +224 624 38 65 45
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
