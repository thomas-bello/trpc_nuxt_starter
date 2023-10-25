import { boolean } from 'zod';
<template>
  <div class="flex items-center gap-2 overflow-hidden" :title="showNameRef">
    <NAvatar :src="avatarUrlRef" :round="round" :size="size ?? 'small'">{{ avatarTextRef }}</NAvatar>
    <div v-if="!(justAvatar ?? false)" class="flex-1 truncate">{{ showNameRef }}</div>
  </div>
</template>

<script setup lang="ts">
import { NAvatar } from 'naive-ui'
import type { User } from '@prisma/client'
const props = defineProps<{
  user: Partial<User>
  round?: boolean
  size?: 'small' | 'medium' | 'large' | number
  justAvatar?: boolean
}>()

const showNameRef = computed(() => {
  const { name, email } = props.user || {}
  return name ?? email ?? ''
})

const avatarUrlRef = computed(() => {
  const { image } = props.user || {}
  return image
})

const avatarTextRef = computed(() => {
  const text = showNameRef.value
  if (avatarUrlRef.value) {
    return ''
  }

  if (text.length < 6) {
    return text
  }
  return text.substr(0, 1).toUpperCase()
})
</script>
