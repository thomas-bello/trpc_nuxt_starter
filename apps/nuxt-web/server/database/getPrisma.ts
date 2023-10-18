import { PrismaClient } from '@prisma/client'
import { env } from '~/env'

const globalForPrisma = {} as unknown as {
  prisma: PrismaClient | undefined
}

export const getPrisma = () => {
  const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
      log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })
  if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

  return prisma
}
