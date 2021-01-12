export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Jamzz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'theme-color', content: '#23232D' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vue-swiper.js' }, '~/plugins/slider.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  cloudinary: {
    cloudName: process.env.CLOUD_NAME,
  },

  loading: {
    color: '#EF5466',
    throttle: 50,
  },

  toast: {
    position: 'bottom-center',
    register: [
      // Register custom toasts
      {
        name: 'network_error',
        message: 'Oops...An error occurred',
        options: {
          type: 'error',
          duration: 3000,
        },
      },
      {
        name: 'success',
        message: 'Successful',
        options: {
          type: 'success',
          duration: 3000,
        },
      },
    ],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/cloudinary',
    '@nuxtjs/toast',
  ],

  env: {
    CLOUD_NAME: process.env.CLOUD_NAME,
    UPLOAD_PRESET: process.env.UPLOAD_PRESET,
  },

  axios: {
    baseURL: process.env.BASE_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  server: {
    host: '0',
  },

  pwa: {
    // meta: {
    //   theme_color: '#23232D',
    // },
    // manifest: {
    //   theme_color: '#23232D',
    // },
  },
}
