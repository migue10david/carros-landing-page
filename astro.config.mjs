// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://cubaeasytours.com',
<<<<<<< HEAD
=======
  trailingSlash: 'ignore', // o 'always' - ser consistente
  output: 'static', // o 'server' si usas SSR  
>>>>>>> cce427103761cc26373e8eb75e488ec617fbda98
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
  },

  integrations: [react()],
});
