import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  plugins: [react()],
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/components": path.resolve(__dirname, "./src/app/components"),
      "@/contexts/*": path.resolve(__dirname, "./src/app/contexts"),
      "@/public/*": path.resolve(__dirname, "./public/*"),
    },
  },
});
