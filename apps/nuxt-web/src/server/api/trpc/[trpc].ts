import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter, createContext } from '~/server/trpc'

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
})
