import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { getRedis } from '~/server/database/getRedis'

export const appRouter = router({
  get: publicProcedure
    .input(
      z.object({
        key: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { key } = input || {}

      const redis = await getRedis()

      return redis.get(key)
    }),
  set: publicProcedure
    .input(
      z.object({
        key: z.string(),
        value: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { key, value } = input || {}
      const redis = await getRedis()
      return redis.set(key, value)
    }),
})
