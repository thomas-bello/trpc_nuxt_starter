/* eslint-disable camelcase */
// https://next-auth.js.org/providers/google
import Provider from 'next-auth/providers/google'
import type { TokenSet } from 'next-auth'

import type { Account } from '@prisma/client'
import { RefreshTokenFunc } from '../types'
import { getPrisma } from '~/server/database'
import { env } from '~/env'

// https://developers.google.com/identity/protocols/oauth2?hl=zh-cn

export const getProvider = () => {
  if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
    return Provider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { access_type: 'offline', prompt: 'consent' } },
    })
  }
}

export const refreshToken: RefreshTokenFunc = async (token) => {
  // https://accounts.google.com/.well-known/openid-configuration
  // We need the `token_endpoint`.

  if (!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET)) return token

  let google: Account | undefined
  if (token.id) {
    ;[google] = await getPrisma().account.findMany({
      where: { userId: token.id, provider: 'google' },
    })
  }

  const response = await fetch('https://oauth2.googleapis.com/token', {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token as string,
    }),
    method: 'POST',
  })

  const responseToken: TokenSet = await response.json()
  if (!response.ok) throw responseToken

  const { access_token, expires_in = 0, refresh_token } = responseToken

  const newToken = {
    ...token, // Keep the previous token properties
    access_token,
    expires_at: Math.floor(Date.now() / 1000 + (expires_in as number)),
    // Fall back to old refresh token, but note that
    // many providers may only allow using a refresh token once.
    refresh_token: refresh_token ?? token.refresh_token,
  }

  const { providerAccountId } = google || {}

  if (providerAccountId) {
    await getPrisma().account.update({
      data: {
        access_token: newToken.access_token,
        expires_at: new Date(newToken.expires_at).getTime(),
        refresh_token: newToken.refresh_token,
      },
      where: {
        provider_providerAccountId: {
          provider: 'google',
          providerAccountId,
        },
      },
    })
  }

  return newToken
}
