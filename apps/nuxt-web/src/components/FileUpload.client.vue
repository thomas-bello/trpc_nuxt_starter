<template>
  <NUpload :custom-request="customRequest">
    <NButton>上传文件</NButton>
  </NUpload>
</template>

<script setup lang="ts">
import { NUpload, NButton } from 'naive-ui'

import type { UploadCustomRequestOptions } from 'naive-ui'

// https://cloud.tencent.com/document/product/436/11459
const customRequest = async ({ file, onFinish, onError, onProgress }: UploadCustomRequestOptions) => {
  console.log('file', file)

  const formData = new FormData()

  formData.append(file.name, file.file as File)

  try {
    const data = await uploadFile(file.file, (progressData) => {
      console.log('onProgress progressData', progressData)

      const { percent } = progressData

      onProgress({ percent })
    })
    console.log('data', data)
    onFinish()
  } catch (error) {
    console.error(error)
    onError()
  }
}
</script>
