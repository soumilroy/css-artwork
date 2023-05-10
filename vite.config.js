// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        practice: resolve(__dirname, "practice.html"),
        beaver: resolve(__dirname, "beaver.html"),
        mario: resolve(__dirname, "mario.html"),
        homer: resolve(__dirname, "homer.html"),
        shiba: resolve(__dirname, "shiba.html")
      }
    }
  }
});
