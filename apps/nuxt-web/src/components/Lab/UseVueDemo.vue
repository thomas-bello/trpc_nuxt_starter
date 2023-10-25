<template>
  <div v-if="isSupported">
    <NFormItem label="will copy value">
      <NInput v-model:value="valRef" />
    </NFormItem>

    <NButton @click="copy(valRef)">
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </NButton>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
  </div>
  <p v-else>Your browser does not support Clipboard API</p>
</template>

<script setup lang="ts">
import { NButton, NFormItem, NInput } from 'naive-ui'

const valRef = ref('test')

const { text, copy, copied, isSupported } = useClipboard({ source: valRef })
</script>
