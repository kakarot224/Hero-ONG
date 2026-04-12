# Hero National — ONG Guinée

Site web de l'ONG Hero National, projet Won Fintin — pour faire de Conakry la capitale la plus propre d'Afrique de l'Ouest.

## Stack technique

- **Next.js 15** (App Router, SSG) + **React 18** + **TypeScript**
- **Tailwind CSS 3** + **shadcn/ui** + **Radix UI**
- **React Hook Form** + **Zod** (formulaire de contact)
- **pnpm** comme gestionnaire de paquets

## Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/installation) (`npm install -g pnpm`)

### Installation

```sh
# Cloner le dépôt
git clone <YOUR_GIT_URL>

# Naviguer dans le dossier
cd <YOUR_PROJECT_NAME>

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Serveur de développement (port 3000) |
| `pnpm build` | Build de production |
| `pnpm start` | Démarrer le serveur de production |
| `pnpm lint` | Linter ESLint |

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # Layout racine (SEO, Header, Footer)
│   ├── page.tsx         # Page d'accueil (one-page)
│   ├── providers.tsx    # Providers client (Tooltip, Toaster)
│   ├── not-found.tsx    # Page 404
│   └── globals.css      # Design system Hero National
├── assets/              # Images et ressources statiques
├── components/
│   ├── ui/              # Composants shadcn/ui
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Actions.tsx
│   ├── Team.tsx
│   ├── HomePage.tsx     # Témoignages
│   ├── Support.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
└── lib/
```

## Déploiement

Le projet est configuré pour être déployé sur **Vercel** (à configurer).

```sh
# Build de production
pnpm build
```

Les pages sont générées en statique (SSG) par défaut.
