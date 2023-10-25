import Provider from 'next-auth/providers/discord'

import { env } from '~/env'

export const getProvider = () => {
  if (env.DISCORD_CLIENT_ID && env.DISCORD_CLIENT_SECRET) {
    return Provider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    })
  }
}
