import Provider from 'next-auth/providers/github'

import { env } from '~/env'

export const getProvider = () => {
  // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
  return Provider.default({
    clientId: env.GITHUB_CLIENT_ID,
    clientSecret: env.GITHUB_CLIENT_SECRET,
  })
}
