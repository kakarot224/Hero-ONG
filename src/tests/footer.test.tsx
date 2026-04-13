import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock next/image
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock react-icons
vi.mock("react-icons/fa", () => ({
  FaTiktok: () => <svg data-testid="tiktok-icon" />,
}));

import Footer from "@/components/Footer";

describe("Footer — liens légaux", () => {
  it("contient le lien Politique de confidentialité avec la bonne URL", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /Politique de confidentialité/i });
    expect(link).toHaveAttribute("href", "/politique-de-confidentialite");
  });

  it("contient le lien Mentions légales avec la bonne URL", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /Mentions légales/i });
    expect(link).toHaveAttribute("href", "/mentions-legales");
  });

  it("contient le lien Rapports financiers avec la bonne URL", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /Rapports financiers/i });
    expect(link).toHaveAttribute("href", "/rapports-financiers");
  });

  it("affiche l'e-mail de contact", () => {
    render(<Footer />);
    expect(screen.getByText(/heronational224@gmail\.com/i)).toBeInTheDocument();
  });

  it("affiche le numéro de téléphone", () => {
    render(<Footer />);
    expect(screen.getByText(/\+224/i)).toBeInTheDocument();
  });
});
