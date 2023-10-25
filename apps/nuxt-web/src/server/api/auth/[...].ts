import { NuxtAuthHandler } from '#auth'
import { getAuthOptions } from '~/server/auth'

export default NuxtAuthHandler(getAuthOptions())
