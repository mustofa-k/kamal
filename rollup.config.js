// rollup.config.js
import { defineConfig } from "rollup";
import image from "@rollup/plugin-image";

export default defineConfig({
  input: "src/main.js", // Sesuaikan dengan file masukan utama proyek Anda
  output: {
    file: "dist/bundle.js", // Sesuaikan dengan lokasi dan nama file keluaran bundel Anda
    format: "es", // Format keluaran (misalnya, 'es' untuk modul ES6)
  },
  plugins: [
    // Plugin Rollup yang Anda butuhkan
    image(),
    // Plugin lainnya jika ada
  ],
});
