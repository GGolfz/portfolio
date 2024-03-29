const fs = require('fs')
const routes = []
const getRoutes = async () => {
  await fs.readdir('./content/', async (err, dirs) => {
    for (let i of dirs) {
      await fs.readdir('./content/' + i, (err, files) => {
        for (let j of files) {
          let route = j.split('.')
          routes.push('/' + i + '/' + route[0])
        }
      })
    }
  })
}
getRoutes()
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  router: {
    base: '/',
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: process.env.npm_package_name || 'GGolfz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'm1xMiv2eLLg484iC2NZL_PxiySQEL-N3LhyGev6ZlaU',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || "GGolfz's portfolio",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/*', href: 'logo.png' },
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
        integrity:
          'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
        crossorigin: 'anonymous',
        onload: "this.onload=null;this.rel='stylesheet'",
        defer: true,
      }
    ],
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css','style/fafont.css','style/gfont.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GA_ID || '',
      },
    ],
    'nuxt-compress',
    '@nuxtjs/sitemap',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      remarkPlugins: () => [
        'remark-squeeze-paragraphs',
        'remark-slug',
        'remark-external-links',
        'remark-math',
        'remark-attr',
        '~/plugins/remark-sub-super-modified.js',
      ],
      rehypePlugins: ['rehype-katex'],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
    publicPath: '/nuxt-dist',
    filenames: {
      chunk: '[id].[contenthash].js',
    },
  },
  sitemap: {
    hostname: 'https://portfolio.ggolfz.me/',
    routes: () => {
      let route = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/about', priority: 0.9 },
        { url: '/contact', priority: 0.9 },
        '/showcase',
        '/showcase/award',
        '/showcase/project',
      ]
      for (let i of routes) {
        route.push(i)
      }
      return route
    },
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
    },
  },
  generate: {
    routes: routes,
  },
}