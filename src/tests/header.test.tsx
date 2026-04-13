import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

import Header from "@/components/Header";

describe("Header — navigation", () => {
  it("affiche tous les liens de navigation", () => {
    render(<Header />);
    expect(screen.getAllByText("Accueil").length).toBeGreaterThan(0);
    expect(screen.getAllByText("À propos").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Nos Actions").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Équipe").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
  });

  it("les liens pointent vers les bonnes ancres", () => {
    render(<Header />);
    // On cible le desktop nav (premier lien trouvé)
    const accueil = screen.getAllByRole("link", { name: "Accueil" })[0];
    const apropos = screen.getAllByRole("link", { name: "À propos" })[0];
    const actions = screen.getAllByRole("link", { name: "Nos Actions" })[0];
    const equipe  = screen.getAllByRole("link", { name: "Équipe" })[0];
    const contact = screen.getAllByRole("link", { name: "Contact" })[0];

    expect(accueil).toHaveAttribute("href", "#accueil");
    expect(apropos).toHaveAttribute("href", "#apropos");
    expect(actions).toHaveAttribute("href", "#actions");
    expect(equipe).toHaveAttribute("href", "#equipe");
    expect(contact).toHaveAttribute("href", "#contact");
  });

  it("l'ordre des liens est correct : Accueil > À propos > Nos Actions > Équipe > Contact", () => {
    render(<Header />);
    const links = screen.getAllByRole("link").filter((el) =>
      ["Accueil", "À propos", "Nos Actions", "Équipe", "Contact"].includes(
        el.textContent?.trim() ?? ""
      )
    );
    const names = links.map((l) => l.textContent?.trim());
    const expected = ["Accueil", "À propos", "Nos Actions", "Équipe", "Contact"];
    // L'ordre apparaît deux fois (desktop + mobile), on vérifie le premier groupe
    expect(names.slice(0, 5)).toEqual(expected);
  });

  it("affiche le bouton Faire un don", () => {
    render(<Header />);
    expect(screen.getAllByText(/Faire un don/i).length).toBeGreaterThan(0);
  });
});
