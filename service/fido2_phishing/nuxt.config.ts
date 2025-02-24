export default defineNuxtConfig({

  devtools: { enabled: false },

  css: [
    "~/assets/styles/bootstrap.scss",
  ],

  plugins: [
    {
      src: 'plugins/bootstrap.js',
      mode: 'client'
    }
  ],

})
