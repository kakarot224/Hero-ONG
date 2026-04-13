# Hero National — ONG Guinée 🇬🇳

> **Projet Won Fintin** — Faire de Conakry la capitale la plus propre d'Afrique de l'Ouest.

Site web officiel de l'ONG **Hero National**, organisation non gouvernementale guinéenne dédiée à l'assainissement urbain et au développement communautaire à Conakry.

---

## Aperçu du site

<table>
  <tr>
    <td><img src="screenshots/1.png" alt="Accueil" width="400"/></td>
    <td><img src="screenshots/2.png" alt="Hero section" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/3.png" alt="À propos" width="400"/></td>
    <td><img src="screenshots/4.png" alt="Nos Actions" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/5.png" alt="Équipe" width="400"/></td>
    <td><img src="screenshots/6.png" alt="Témoignages" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/7.png" alt="Nous soutenir" width="400"/></td>
    <td><img src="screenshots/8.png" alt="Contact" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/9.png" alt="Footer" width="400"/></td>
    <td><img src="screenshots/10.png" alt="Vue mobile" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/11.png" alt="Modal inscription" width="400"/></td>
    <td><img src="screenshots/12.png" alt="Modal don" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/13.png" alt="Modal partenariat" width="400"/></td>
    <td><img src="screenshots/14.png" alt="Modal candidature" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/15.png" alt="Politique de confidentialité" width="400"/></td>
    <td><img src="screenshots/16.png" alt="Mentions légales" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/17.png" alt="Rapports financiers" width="400"/></td>
    <td><img src="screenshots/18.png" alt="Vue 18" width="400"/></td>
  </tr>
  <tr>
    <td><img src="screenshots/19.png" alt="Vue 19" width="400"/></td>
    <td><img src="screenshots/20.png" alt="Vue 20" width="400"/></td>
  </tr>
</table>

---

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
