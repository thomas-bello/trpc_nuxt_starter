import COS from 'cos-js-sdk-v5'
import { v4 as uuidv4 } from 'uuid'

let cos: COS
export const getTencentCos = () => {
  if (!cos) {
    cos = new COS({
      getAuthorization: (_, callback) => {
        getTrpc()
          .tencentCos.credential.query()
          .then((credential) => {
            console.log('credential', credential)

            callback(credential)
          })
      },
    })
  }

  return cos
}

const uploadFileByCos = (file: File, options: Partial<COS.UploadFileParams>) => {
  return new Promise((resolve, reject) => {
    const props = {
      ...options,
      Body: file,
      Key: `data/${uuidv4()}__${file.name}`,
    } as COS.UploadFileParams

    getTencentCos().uploadFile(props, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export const uploadFile = async (file: File, onProgress?: COS.UploadFileParams['onProgress']) => {
  const configValue = await getTrpc().db.configValue.findFirst.query({
    where: {
      key: 'TENCENT_COS_UPLOAD',
    },
    select: {
      value: true,
    },
  })

  const { value } = configValue || {}
  const { Bucket, Region } = value || {}

  if (!Bucket || !Region) {
    throw new Error('configValueError')
  }

  return await uploadFileByCos(file, {
    Bucket,
    Region,
    onProgress,
  })
}
