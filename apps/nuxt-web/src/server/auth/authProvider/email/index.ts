import Provider from 'next-auth/providers/email'

import { sendVerificationRequest } from './sendVerificationRequest'
import { env } from '~/env'

export const getProvider = () => {
  if (env.EMAIL_SERVER_HOST && env.EMAIL_SERVER_PORT && env.EMAIL_SERVER_USER && env.EMAIL_SERVER_PASSWORD) {
    return Provider({
      // server: env.EMAIL_SERVER,
      server: {
        host: env.EMAIL_SERVER_HOST,
        port: parseInt(env.EMAIL_SERVER_PORT, 10),
        auth: {
          user: env.EMAIL_SERVER_USER,
          pass: env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: env.EMAIL_FROM,
      // 自定义验证邮件的样式
      sendVerificationRequest,
    })
  }
}
