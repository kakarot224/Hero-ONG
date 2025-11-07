import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",        // permet les connexions externes
    port: 8080,             // ton port actuel
    strictPort: true,       // empêche le changement automatique du port
    allowedHosts: [".ngrok-free.app"] // autorise tous les sous-domaines ngrok
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
