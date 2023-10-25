import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { hashPassword } from '~/server/auth'

export const appRouter = router({
  hash: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .query(({ input }) => {
      const { email, password } = input || {}
      return hashPassword(email, password)
    }),
})
