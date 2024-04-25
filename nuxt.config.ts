// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtModule } from "nuxt";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-swiper", "@pinia/nuxt", "@nuxt/content"],
  routeRules: {
    // Generated at build time for SEO purpose
    "/": { prerender: true },
  },
  plugins: [{ src: "~/plugins/maps", mode: "client" }],
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
