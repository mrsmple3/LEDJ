// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtModule } from "nuxt";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  routeRules: {
    // Generated at build time for SEO purpose
    "/": { prerender: true },
  },
});
