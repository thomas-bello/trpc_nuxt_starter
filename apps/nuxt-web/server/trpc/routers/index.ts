import { publicProcedure, router } from '../trpc'
import { createRouter } from './db/routers'
import { appRouter as tencentCos } from './tencentCos'
import { appRouter as password } from './password'

export const appRouter = router({
  db: createRouter(router, publicProcedure),
  tencentCos,
  password,
})

// export type definition of API
export type AppRouter = typeof appRouter
