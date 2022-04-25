import customTheme from './custom-theme'
import { vueI18n } from './loacals/i18n-config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Arzon bizda',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        // href: '@/layouts/global.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
    '@/assets/variables.scss',
    // '@/layouts/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@chakra-ui/nuxt', '@nuxtjs/emotion', '@nuxtjs/i18n'],
  i18n: vueI18n,

  chakra: {
    extendTheme: customTheme,
  },

  loaders: {
    sass: {
      implementation: require('sass'),
    },
    scss: {
      implementation: require('sass'),
    },
  },

  build: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
}
