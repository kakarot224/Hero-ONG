import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PolitiqueDeConfidentialite from "@/app/politique-de-confidentialite/page";
import MentionsLegales from "@/app/mentions-legales/page";
import RapportsFinanciers from "@/app/rapports-financiers/page";

describe("Page — Politique de confidentialité", () => {
  it("affiche le titre principal", () => {
    render(<PolitiqueDeConfidentialite />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Politique de confidentialité"
    );
  });

  it("affiche les sections obligatoires", () => {
    render(<PolitiqueDeConfidentialite />);
    expect(screen.getByText(/Données collectées/i)).toBeInTheDocument();
    expect(screen.getByText(/Vos droits/i)).toBeInTheDocument();
    expect(screen.getByText(/heronational224@gmail\.com/i)).toBeInTheDocument();
  });
});

describe("Page — Mentions légales", () => {
  it("affiche le titre principal", () => {
    render(<MentionsLegales />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Mentions légales"
    );
  });

  it("affiche les informations de l'organisation", () => {
    render(<MentionsLegales />);
    expect(screen.getByText(/Hero National/i)).toBeInTheDocument();
    expect(screen.getByText(/Conakry/i)).toBeInTheDocument();
    expect(screen.getByText(/ONG/i)).toBeInTheDocument();
  });

  it("affiche l'e-mail de contact", () => {
    render(<MentionsLegales />);
    expect(screen.getAllByText(/heronational224@gmail\.com/i).length).toBeGreaterThan(0);
  });
});

describe("Page — Rapports financiers", () => {
  it("affiche le titre principal", () => {
    render(<RapportsFinanciers />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Rapports financiers"
    );
  });

  it("affiche les rapports listés", () => {
    render(<RapportsFinanciers />);
    expect(screen.getByText(/Rapport annuel 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/Rapport annuel 2023/i)).toBeInTheDocument();
  });

  it("affiche le statut 'Bientôt disponible' pour les rapports non publiés", () => {
    render(<RapportsFinanciers />);
    const badges = screen.getAllByText(/Bientôt disponible/i);
    expect(badges.length).toBeGreaterThan(0);
  });

  it("affiche le lien e-mail pour les demandes", () => {
    render(<RapportsFinanciers />);
    const link = screen.getByRole("link", { name: /heronational224@gmail\.com/i });
    expect(link).toHaveAttribute("href", "mailto:heronational224@gmail.com");
  });
});
