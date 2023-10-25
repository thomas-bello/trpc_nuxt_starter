<template>
  <div v-loading="loadingRef">
    <h1>Redis</h1>

    <NFormItem label="key">
      <NInput v-model:value="keyRef" placeholder="key" />
    </NFormItem>
    <NFormItem label="value">
      <NInput v-model:value="valueRef" placeholder="value" />
    </NFormItem>
    <NButton @click="getRedisValueByKey">get</NButton>
    <NButton @click="setRedisValueByKey">set</NButton>
  </div>
</template>

<script setup lang="ts">
import { NButton, NFormItem, NInput, useMessage } from 'naive-ui'

const keyRef = ref('')
const valueRef = ref('')
const loadingRef = ref(false)
const message = useMessage()

const getRedisValueByKey = async () => {
  const key = keyRef.value
  if (!key) {
    message.error('need the key')
    return
  }
  loadingRef.value = true
  const value = await getTrpc().redis.get.query({
    key,
  })

  loadingRef.value = false

  if (value) {
    valueRef.value = value
  }
}

const setRedisValueByKey = async () => {
  const key = keyRef.value
  if (!key) {
    message.error('need the key')
    return
  }
  const value = valueRef.value
  if (!value) {
    message.error('need the value')
    return
  }
  loadingRef.value = true
  await getTrpc().redis.set.mutate({
    key,
    value,
  })

  message.success('success')

  await getRedisValueByKey()
}
</script>
