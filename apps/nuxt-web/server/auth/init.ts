/* eslint-disable camelcase */
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { type NextAuthOptions, type User, DefaultSession, TokenSet } from 'next-auth'

import type { DefaultJWT } from 'next-auth/jwt'
import {
  getGithubProvider,
  getEmailProvider,
  getCredentialsProvider,
  getGoogleProvider,
  refreshGoogleToken,
} from './authProvider'
import {
  RefreshTokenFunc,
  // UserRole, PermissionsType,
  ErrorType,
} from './types'
import { getPrisma } from '~~/server/database'

import { env } from '~/env'
import { getDayjs } from '~/utils/dayjs'

const updateLastAccessed = async (userId: string) => {
  try {
    const day = getDayjs().format('YYYY/MM/DD')

    await getPrisma().loginLog.upsert({
      where: {
        day_userId: {
          userId,
          day,
        },
      },
      update: {
        endAt: new Date(),
      },
      create: {
        userId,
        day,
        endAt: new Date(),
      },
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & {
      id: string
      // roles: UserRole[]
      // permissions: PermissionsType[]
      // ...other properties
      // role: UserRole;
    }
    error?: ErrorType
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT, TokenSet {
    provider?: string
    error?: ErrorType
  }
}

const min1 = 60
const h1 = min1 * 60
const d1 = h1 * 24

const defExpiresIn = d1 // 1h
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const getAuthOptions = (): NextAuthOptions => ({
  // https://next-auth.js.org/getting-started/upgrade-v4#jwt-configuration
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: env.JWT_SECRET || 'test',
    maxAge: d1 * 7, // 7d,
  },
  callbacks: {
    jwt: async (props) => {
      const { token, user, account, profile, isNewUser } = props
      console.log('next auth callbacks jwt props', props)
      console.log('next auth callbacks jwt token', token)
      console.log('next auth callbacks jwt user', user)
      console.log('next auth callbacks jwt account', account)
      console.log('next auth callbacks jwt profile', profile)
      console.log('next auth callbacks jwt isNewUser', isNewUser)
      const { provider } = account || {}

      let userId = (token?.user_id || '') as string
      if (user) {
        const { name, email, image, id } = user || {}
        userId = id
        token.name = name
        token.email = email
        token.image = image
        token.user_id = id
      }

      if (provider) {
        token.provider = provider
      }

      const now = Date.now()

      let isWorking = false
      if (token.expires_at) {
        isWorking = now < token.expires_at * 1000
      }
      console.log('next auth callbacks jwt userId', userId)
      if (userId) {
        updateLastAccessed(userId as any)
      }

      // console.log('next auth callbacks jwt token isWorking', isWorking, 'token.expires_at', token.expires_at)

      if (account) {
        const { access_token, expires_in = defExpiresIn, refresh_token } = account
        // Save the access token and refresh token in the JWT on the initial login

        return {
          ...token,
          access_token,
          expires_at: Math.floor(now / 1000 + (expires_in as number)),
          refresh_token,
        }
      } else if (isWorking) {
        // If the access token has not expired yet, return it
        return token
      } else {
        // If the access token has expired, try to refresh it
        try {
          const funcMap: Record<string, RefreshTokenFunc> = {
            google: refreshGoogleToken,
          }

          let func
          if (provider) {
            func = funcMap[provider]
          }

          if (func) {
            const newToken = await func(token)
            return newToken
          }
        } catch (error) {
          console.error('Error refreshing access token', error)
          // The error property will be used client-side to handle the refresh token error
        }
        return { ...token, error: 'RefreshAccessTokenError' }
      }
    },
    session: (props) => {
      const { session, user, token } = props
      console.log('next auth callbacks session props', props)
      console.log('next auth callbacks session token', token)
      console.log('next auth callbacks session user', user)
      console.log('next auth callbacks session session', session)

      const { error, user_id } = token || {}

      const sessionUser = {
        ...(session.user || {}),
        ...(user || {}),
      }
      if (user_id) {
        sessionUser.id = `${user_id}`
      }

      return {
        ...session,
        user: sessionUser,
        error,
      }
    },
    redirect: (props) => {
      const { url, baseUrl } = props
      // console.log('next auth callbacks redirect props', props)
      // console.log('next auth callbacks redirect url', url)
      // console.log('next auth callbacks redirect baseUrl', baseUrl)

      const uri = new URL(url)
      // console.log('next auth callbacks redirect uri', uri)

      const { pathname, origin } = uri
      const gotoHomePathName = ['/error', '/signin']
      if (gotoHomePathName.includes(pathname)) {
        return baseUrl
      }

      // Allows relative callback URLs
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`
      }
      // Allows callback URLs on the same origin
      else if (origin === baseUrl) {
        return url
      }
      return baseUrl
    },
    signIn: (props) => {
      const { user, account, profile, email, credentials } = props
      console.log('next auth callbacks signIn props', props)
      console.log('next auth callbacks signIn user', user)
      console.log('next auth callbacks signIn account', account)
      console.log('next auth callbacks signIn profile', profile)
      console.log('next auth callbacks signIn email', email)
      console.log('next auth callbacks signIn credentials', credentials)

      return true
    },
  },
  adapter: PrismaAdapter(getPrisma()),
  providers: [
    getGoogleProvider(),
    getGithubProvider(),
    getEmailProvider(),
    getCredentialsProvider(),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  pages: {
    signIn: '/signin',
    error: '/error',
  },
  events: {
    async signIn({ user }: { user: User }) {
      console.log('events signIn', user)

      // const spaceCount = await prisma.spaceUser.count({
      //     where: {
      //         userId: user.id,
      //     },
      // });
      // if (spaceCount > 0) {
      //     return;
      // }

      // console.log(`User ${user.id} doesn't belong to any space. Creating one.`);
      // const space = await prisma.space.create({
      //     data: {
      //         name: `${user.name || user.email}'s space`,
      //         slug: nanoid(8),
      //         members: {
      //             create: [
      //                 {
      //                     userId: user.id,
      //                     role: SpaceUserRole.ADMIN,
      //                 },
      //             ],
      //         },
      //     },
      // });
    },
  },
})
