import { PrismaClient } from '@prisma/client'

import { getEnhancedPrisma, getPrisma } from '~/server/database'

import { getServerSession } from '#auth'

import type { Session } from '~/server/auth'

declare module 'h3' {
  interface H3EventContext {
    prisma: PrismaClient
    session: Session | null
    user: Session['user'] | null
  }
}

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  const { user } = session || {}

  let prisma
  // if (user) {
  //   prisma = getEnhancedPrisma(user)
  // } else {
  //   prisma = getPrisma()
  // }

  prisma = getPrisma()

  event.context.session = session
  event.context.user = user || null
  event.context.prisma = prisma
})
