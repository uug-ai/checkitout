import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/plugin.tsx",
      name: "CheckoutPlugin",
      fileName: "checkout-plugin",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [],
    },
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
});
