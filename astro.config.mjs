// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://cubaeasytours.com',
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
  },

  integrations: [react()],
});
