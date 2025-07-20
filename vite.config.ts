import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Retire les plugins Replit pour la compatibilité Vercel
// runtimeErrorOverlay et cartographer sont spécifiques à Replit

export default defineConfig({
  plugins: [
    react(),
    // Supprimez les plugins Replit pour le déploiement sur Vercel
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
