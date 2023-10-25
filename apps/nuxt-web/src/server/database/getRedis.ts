import { createClient } from 'redis'
import { env } from '~/env'

let redis: ReturnType<typeof createClient>

export const getRedis = async () => {
  if (!redis) {
    redis = await createClient({
      url: env.REDIS_URL,
    })
      .on('error', (err) => console.log('Redis Client Error', err))
      .connect()
  }

  return redis
}
