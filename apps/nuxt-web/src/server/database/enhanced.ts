import { enhance } from "@zenstackhq/runtime"
import { getPrisma } from "./getPrisma"

import type { User } from "@prisma/client"

/**
 * Get an authorization-enabled database client
 * @param ctx
 */
export const getEnhancedPrisma = (user: Partial<User>) => {
  return enhance(getPrisma(), { user })
}
