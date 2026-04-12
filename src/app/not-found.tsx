import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-2 text-xl font-semibold text-foreground">Page introuvable</p>
        <p className="mb-8 text-muted-foreground">
          La page demandée n&apos;existe pas.
        </p>
        <Button asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Retour à l&apos;accueil
          </Link>
        </Button>
      </div>
    </div>
  );
}
