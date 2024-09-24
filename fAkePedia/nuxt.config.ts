// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: "https://secure-olimpia-shihoaka-fd09df42.koyeb.app"
    }    
  },
  devtools: { enabled: true },
  ssr: false,
  css: ["@/assets/css/general.css", "amasugar/amasugar.css"]
})
