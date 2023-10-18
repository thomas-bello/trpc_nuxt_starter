// import Provider from "next-auth/providers/discord"

// import { env } from "env-config"

export const getProvider = () => {
  // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
  // return Provider.default({
  //   clientId: env.DISCORD_CLIENT_ID,
  //   clientSecret: env.DISCORD_CLIENT_SECRET,
  // })
}
