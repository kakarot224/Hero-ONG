import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Rapports financiers — Hero National ONG",
  description: "Rapports financiers annuels de Hero National, ONG Guinée.",
};

const rapports = [
  {
    annee: "2024",
    titre: "Rapport annuel 2024",
    description: "Bilan des activités et état financier de l'exercice 2024.",
    disponible: false,
  },
  {
    annee: "2023",
    titre: "Rapport annuel 2023",
    description: "Bilan des activités et état financier de l'exercice 2023.",
    disponible: false,
  },
];

export default function RapportsFinanciers() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-2">Rapports financiers</h1>
        <p className="text-muted-foreground text-sm mb-4">
          Dans un souci de transparence, Hero National publie ses rapports financiers annuels.
        </p>
        <p className="text-muted-foreground text-sm mb-10">
          Ces documents présentent l'utilisation des fonds collectés et les résultats obtenus
          sur le terrain.
        </p>

        <div className="space-y-4">
          {rapports.map((rapport) => (
            <div
              key={rapport.annee}
              className="flex items-center justify-between p-5 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">{rapport.titre}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">{rapport.description}</p>
                </div>
              </div>
              {rapport.disponible ? (
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex-shrink-0 ml-4">
                  <Download className="w-4 h-4" />
                  Télécharger
                </button>
              ) : (
                <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-lg flex-shrink-0 ml-4">
                  Bientôt disponible
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 rounded-xl border border-border bg-muted/20">
          <h2 className="font-semibold text-foreground mb-2">Demande d'information</h2>
          <p className="text-sm text-muted-foreground">
            Pour toute demande de document financier ou d'audit, contactez-nous directement à{" "}
            <a href="mailto:heronational224@gmail.com" className="text-primary hover:underline font-medium">
              heronational224@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
