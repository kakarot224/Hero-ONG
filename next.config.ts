import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint est géré séparément via pnpm lint
    ignoreDuringBuilds: true,
  },
  images: {
    // Les images locales importées depuis src/assets/ sont gérées automatiquement
  },
};

export default nextConfig;
