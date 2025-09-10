import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
    'global': 'globalThis',
  },
  build: {
    lib: {
      entry: "src/plugin.tsx",
      name: "CheckoutPlugin",
      fileName: "checkout-plugin",
      formats: ["umd"], // Only build UMD for single file usage
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true, // Ensure everything is bundled into one file
      },
    },
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
});
