export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '千职鹤官网',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Google 搜索引擎文件
      {
        name: 'google-site-verification',
        content: 'oEDhqa3yK7t6RIteWlQxcLHxSenqpIqHsHfj36xRrXA',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://webapi.amap.com/maps?v=1.4.15&key=946019370b8b10d15d4e11da07b9bc07',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/common.less',
    'assets/arrow.css',
    'assets/normalize.min.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/elementUI',
      ssr: true,
    },
    {
      src: '~plugins/axios',
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['element-ui'],
  },
}
