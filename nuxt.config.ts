// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtModule } from "nuxt";
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@pinia/nuxt"],
  routeRules: {
    // Generated at build time for SEO purpose
    "/": { prerender: true },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
