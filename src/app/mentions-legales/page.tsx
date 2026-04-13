import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Hero National ONG",
  description: "Mentions légales de Hero National, ONG Guinée.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-2">Mentions légales</h1>
        <p className="text-muted-foreground text-sm mb-10">Dernière mise à jour : janvier 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Éditeur du site</h2>
            <ul className="space-y-1">
              <li><span className="font-medium text-foreground">Nom de l'organisation :</span> Hero National</li>
              <li><span className="font-medium text-foreground">Forme juridique :</span> Organisation Non Gouvernementale (ONG)</li>
              <li><span className="font-medium text-foreground">Siège social :</span> Quartier Kaloum, Conakry, République de Guinée</li>
              <li><span className="font-medium text-foreground">E-mail :</span> heronational224@gmail.com</li>
              <li><span className="font-medium text-foreground">Téléphone :</span> +224 622 30 99 09</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Objet de l'organisation</h2>
            <p>
              Hero National est une ONG guinéenne dont la mission principale est de contribuer
              à l'assainissement et au développement durable de Conakry à travers le projet
              <strong> Won Fintin</strong>, avec pour objectif de faire de Conakry la capitale
              la plus propre d'Afrique de l'Ouest.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Hébergement du site</h2>
            <p>
              Le site est hébergé par un prestataire tiers. Pour toute réclamation relative
              à l'hébergement, veuillez contacter directement l'équipe Hero National.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété
              exclusive de Hero National, sauf mention contraire. Toute reproduction, distribution
              ou utilisation sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Responsabilité</h2>
            <p>
              Hero National s'efforce d'assurer l'exactitude et la mise à jour des informations
              publiées sur ce site. Toutefois, l'ONG ne saurait être tenue responsable des erreurs,
              omissions ou résultats obtenus par une mauvaise utilisation des informations présentes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. Hero National n'est pas
              responsable du contenu de ces sites et ne saurait être tenu pour responsable
              des dommages résultant de leur consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              Pour toute question ou réclamation, contactez-nous à{" "}
              <span className="font-medium text-primary">heronational224@gmail.com</span>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
