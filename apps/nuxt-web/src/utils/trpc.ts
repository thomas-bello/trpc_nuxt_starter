import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import superjson from 'superjson'
import type { AppRouter } from '../types'

let trpc: ReturnType<typeof createTRPCNuxtClient<AppRouter>>
export const getTrpc = () => {
  if (!trpc) {
    trpc = createTRPCNuxtClient<AppRouter>({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
      transformer: superjson,
    })
  }
  return trpc
}
