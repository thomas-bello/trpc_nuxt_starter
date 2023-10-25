import Provider from 'next-auth/providers/github'

import { env } from '~/env'

export const getProvider = () => {
  if (env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) {
    return Provider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    })
  }
}
