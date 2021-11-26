export default {
  loading: false,
  router: {
    base: process.env.NODE_ENV === 'production' ? '/korea/' : '',
    resourceHints: false,
    prefetchLinks: false,
  },
  head: {
    title: '千职鹤官网',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Google 搜索引擎文件
      {
        name: 'google-site-verification',
        content: 'oEDhqa3yK7t6RIteWlQxcLHxSenqpIqHsHfj36xRrXA',
      },
      {
        name: 'keywords',
        content: '985老师，线上家教，线上辅导，1对1，一对一，高中辅导，初高衔接，学科辅导，1对1收费',
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
  css: [
    '~/assets/common.css',
    '~/assets/arrow.css',
    '~/assets/normalize.min.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  plugins: [
    {
      src: '~/plugins/elementUI',
      ssr: true,
    },
    {
      src: '~/plugins/axios',
      ssr: true,
    },
  ],
  components: true,
  buildModules: [],
  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://39.104.167.224/api/biz',
    },
  },
  modules: [
    '@nuxtjs/axios',
  ],
  build: {
    vendor: ['element-ui'],
    postcss: [
      require('postcss-px2rem')({
        remUnit: 16,
      }),
    ],
  },
  generate: {
    route: [],
  },
}
