import customTheme from './custom-theme'
// import Test from './assets/icons/Test.vue'
import { vueI18n } from './locales/i18n-config'

const test = {
  path: `<path d="M11.3956 15.2315C14.6625 15.2315 16.2963 15.2315 17.3108 14.2162C18.3261 13.2018 18.3261 11.5679 18.3261 8.3011C18.3261 5.03426 18.3261 3.40042 17.3108 2.38597C16.2963 1.37067 14.6625 1.37067 11.3956 1.37067H7.93043C4.6636 1.37067 3.02975 1.37067 2.01531 2.38597C1 3.40042 1 5.03426 1 8.3011C1 11.5679 1 13.2018 2.01531 14.2162C2.581 14.7828 3.33902 15.0331 4.46521 15.1432" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.3957 15.2315C10.3249 15.2315 9.145 15.6646 8.06818 16.2234C6.33731 17.1217 5.47187 17.5713 5.04565 17.2846C4.61943 16.9987 4.69999 16.1108 4.86199 14.3357L4.89838 13.932" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
  viewBox: `0 0 20 19`,
}

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
    icons: {
      // ...
      extend: {
        test,
      },
    },
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
