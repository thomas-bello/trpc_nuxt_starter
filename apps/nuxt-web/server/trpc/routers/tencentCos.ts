import { getCredential, type GetCredentialOptions } from 'qcloud-cos-sts'

import { publicProcedure, router } from '../trpc'

// https://cloud.tencent.com/document/product/436/8629#.E4.B8.8A.E4.BC.A0.E5.AF.B9.E8.B1.A1
// https://github.com/tencentyun/qcloud-cos-sts-sdk/blob/master/nodejs/demo/sts-server.js 临时密钥

const getDefConfig = () => {
  const config = {
    secretId: 'AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // 固定密钥
    secretKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // 固定密钥
    proxy: '',
    durationSeconds: 1800,
    // host: 'sts.tencentcloudapi.com', // 域名，非必须，默认为 sts.tencentcloudapi.com
    endpoint: 'sts.tencentcloudapi.com', // 域名，非必须，与host二选一，默认为 sts.tencentcloudapi.com

    // 放行判断相关参数
    bucket: 'test-1250000000',
    region: 'ap-guangzhou',
    allowPrefix: 'data/*', // 这里改成允许的路径前缀，可以根据自己网站的用户登录态判断允许上传的具体路径，例子： a.jpg 或者 a/* 或者 * (使用通配符*存在重大安全风险, 请谨慎评估使用)
    // 简单上传和分片，需要以下的权限，其他权限列表请看 https://cloud.tencent.com/document/product/436/31923
    allowActions: [
      // 简单上传
      'name/cos:PutObject',
      'name/cos:PostObject',
      // 分片上传
      'name/cos:InitiateMultipartUpload',
      'name/cos:ListMultipartUploads',
      'name/cos:ListParts',
      'name/cos:UploadPart',
      'name/cos:CompleteMultipartUpload',
    ],
  }
  return config
}

type CosProps = Partial<ReturnType<typeof getDefConfig>>

interface Credential {
  TmpSecretId: string // 临时密钥的 tmpSecretId
  TmpSecretKey: string // 临时密钥的 tmpSecretKey
  SecurityToken: string // 临时密钥的 sessionToken
  ExpiredTime: number // 临时密钥失效时间戳，是申请临时密钥时，时间戳加 durationSeconds
  StartTime: number
}

const getStsCredential = async (props?: CosProps) => {
  const config = {
    ...getDefConfig(),
    ...(props || {}),
  }
  const shortBucketName = config.bucket.substr(0, config.bucket.lastIndexOf('-'))
  const appId = config.bucket.substr(1 + config.bucket.lastIndexOf('-'))

  const policy = {
    version: '2.0',
    statement: [
      {
        action: config.allowActions,
        effect: 'allow',
        principal: { qcs: ['*'] },
        resource: [
          'qcs::cos:' +
            config.region +
            ':uid/' +
            appId +
            ':prefix//' +
            appId +
            '/' +
            shortBucketName +
            '/' +
            config.allowPrefix,
        ],
        // condition生效条件，关于 condition 的详细设置规则和COS支持的condition类型可以参考https://cloud.tencent.com/document/product/436/71306
        // 'condition': {
        //   // 比如限定ip访问
        //   'ip_equal': {
        //     'qcs:ip': '10.121.2.10/24'
        //   }
        // }
      },
    ],
  }

  const postProps: GetCredentialOptions = {
    secretId: config.secretId,
    secretKey: config.secretKey,
    proxy: config.proxy,
    durationSeconds: config.durationSeconds,
    endpoint: config.endpoint,
    policy,
  }

  console.log('getCredential postProps', postProps)

  try {
    const data = await getCredential(postProps)

    console.log('getCredential data', data)

    const { credentials, expiredTime: ExpiredTime, startTime: StartTime } = data || {}

    const credential: Credential = {
      TmpSecretId: credentials.tmpSecretId, // 临时密钥的 tmpSecretId
      TmpSecretKey: credentials.tmpSecretKey, // 临时密钥的 tmpSecretKey
      SecurityToken: credentials.sessionToken, // 临时密钥的 sessionToken
      ExpiredTime, // 临时密钥失效时间戳，是申请临时密钥时，时间戳加 durationSeconds
      StartTime,
    }
    return credential
  } catch (error) {
    console.log('getCredential error', error)
  }

  return {}
}

export const appRouter = router({
  credential: publicProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx

    const secretConfigValue = await prisma.configValue.findFirst({
      where: {
        key: 'TENCENT_COS_SECRET',
      },
      select: {
        value: true,
      },
    })
    const { value: secretValue } = secretConfigValue || {}
    const uploadConfigValue = await prisma.configValue.findFirst({
      where: {
        key: 'TENCENT_COS_UPLOAD',
      },
      select: {
        value: true,
      },
    })
    const { value: uploadValue } = uploadConfigValue || {}
    let fixObj = {}
    if (uploadValue) {
      fixObj = Object.keys(uploadValue).reduce((obj, key) => {
        obj[key.toLowerCase()] = (uploadValue as any)[key]
        return obj
      }, {} as any)
    }

    return await getStsCredential({
      ...((secretValue || {}) as any),
      ...fixObj,
    } as any)
  }),
})
