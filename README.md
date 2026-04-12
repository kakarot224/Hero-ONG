# Hero National - ONG Guinée

Site web de l'ONG Hero National, projet M'won Fintin — pour faire de Conakry la capitale la plus propre d'Afrique de l'Ouest.

## Stack technique

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **React Router** + **React Hook Form** + **Zod**

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

### Scripts disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Serveur de développement (port 6060) |
| `pnpm build` | Build de production |
| `pnpm preview` | Prévisualiser le build de production |
| `pnpm lint` | Linter ESLint |

## Structure du projet

```
src/
├── assets/          # Images et ressources statiques
├── components/
│   ├── ui/          # Composants shadcn/ui
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Actions.tsx
│   ├── Team.tsx
│   ├── HomePage.tsx  # Témoignages
│   ├── Support.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx    # Page principale (one-page)
│   └── NotFound.tsx
├── hooks/
├── lib/
└── index.css        # Design system Hero National
```

## Déploiement

Ouvrir [Lovable](https://lovable.dev/projects/54ae43ee-0cff-496e-b92e-2cec8522b7ae) et cliquer sur **Share → Publish**.
