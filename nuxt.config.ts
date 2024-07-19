// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  target: "static",
  ssr: false,
  app: {
    baseURL: '/iw4/',
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/iw4/favicon.ico" }]
    }
  }
})