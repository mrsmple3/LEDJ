// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtModule } from "nuxt";
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "nuxt-swiper", "@pinia/nuxt"],
  routeRules: {
    // Generated at build time for SEO purpose
    "/": { prerender: true },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
