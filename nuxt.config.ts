// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare-pages",
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxt/ui"],
  ui: {
    global: true,
    icons: ["tabler"],
  },
  colorMode: {
    preference: "light",
  },
});
