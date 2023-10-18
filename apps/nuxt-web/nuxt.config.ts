import { env } from './src/env'

const baseBuildTranspileList = ['bcryptjs', 'trpc-nuxt', 'qcloud-cos-sts', '@juggle/resize-observer']

const devBuildTranspileList = [...baseBuildTranspileList]

const productionBuildTranspileList = [...baseBuildTranspileList, 'naive-ui', 'vueuc', '@css-render/vue3-ssr']

const isProduction = env.NODE_ENV === 'production'
const isDev = env.NODE_ENV === 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  // dir: {
  //   pages: 'src/pages',
  // },
  devtools: { enabled: true },
  typescript: {
    strict: false,
  },
  modules: [
    '@sidebase/nuxt-auth', // https://nuxt.com/modules/nuxt-auth
    '@nuxtjs/tailwindcss',
    'nuxt-lodash', // https://nuxt.com/modules/lodash
    'nuxt-icon', // https://github.com/nuxt-modules/icon
  ],

  build: {
    transpile: isProduction ? productionBuildTranspileList : devBuildTranspileList,
  },

  vite: {
    optimizeDeps: {
      include: isDev ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : [],
    },
    define: {
      'import.meta.vitest': 'undefined',
    },
  },

  // module 的相关配置
  // dayjs: {
  //   locales: ['en', 'zh-cn'],
  //   plugins: ['relativeTime', 'utc', 'timezone'],
  //   defaultLocale: 'zh-cn',
  //   defaultTimezone: 'Asia/Shanghai',
  // },
})
