import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Hero National ONG",
  description: "Politique de confidentialité de Hero National, ONG Guinée.",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-2">Politique de confidentialité</h1>
        <p className="text-muted-foreground text-sm mb-10">Dernière mise à jour : janvier 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Présentation</h2>
            <p>
              Hero National (ci-après « l'ONG ») s'engage à protéger la vie privée des personnes
              qui visitent son site web ou qui interagissent avec ses services. Cette politique
              décrit quelles informations sont collectées, comment elles sont utilisées et les
              droits dont vous disposez.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Données collectées</h2>
            <p>Nous pouvons collecter les données suivantes :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Informations de contact fournies via le formulaire de contact ou d'inscription</li>
              <li>Données de navigation (cookies, adresse IP, pages visitées)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Utilisation des données</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Répondre à vos demandes de contact ou d'adhésion</li>
              <li>Vous informer de nos activités et événements</li>
              <li>Traiter les dons et émissions de reçus fiscaux</li>
              <li>Améliorer notre site web et nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Partage des données</h2>
            <p>
              Hero National ne vend, ne loue et ne cède aucune donnée personnelle à des tiers.
              Les données peuvent être partagées uniquement avec des prestataires techniques
              nécessaires au fonctionnement du site, dans le respect de la confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Conservation des données</h2>
            <p>
              Les données personnelles sont conservées pendant la durée nécessaire à la finalité
              pour laquelle elles ont été collectées, ou selon les obligations légales applicables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Vos droits</h2>
            <p>
              Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
              concernant vos données personnelles. Pour exercer ces droits, contactez-nous à :
            </p>
            <p className="mt-2 font-medium text-primary">heronational224@gmail.com</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              Pour toute question relative à cette politique, vous pouvez nous contacter par e-mail
              à <span className="font-medium text-primary">heronational224@gmail.com</span> ou
              par téléphone au <span className="font-medium">+224 622 30 99 09</span>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
