<template>
  <NButton v-if="isSupported" text @click="copy(inviteLinkRef)">{{ copyBtnTextRef }}</NButton>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
const props = defineProps<{
  id: string
}>()

const getI18nConfig = () => ({
  userInviteLinkText: '复制邀请链接',
  userInviteLinkCopied: '复制成功',
})

const { i18nRef } = useI18n(getI18nConfig())

// 邀请链接

const inviteLinkRef = computed(() => {
  const { origin } = window.location

  return `${origin}/signin?_it=${props.id}`
})

const { copy, copied, isSupported } = useClipboard({ source: inviteLinkRef })

const copyBtnTextRef = computed(() => {
  if (copied.value) {
    return i18nRef.userInviteLinkCopied
  }

  return i18nRef.userInviteLinkText
})
</script>
