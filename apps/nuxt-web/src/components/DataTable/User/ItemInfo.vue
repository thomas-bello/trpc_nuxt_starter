<template>
  <div class="flex flex-wrap gap-4">
    <div v-if="inviterRef">
      <div>{{ i18nRef.dataTableUserItemInfoInviter }}</div>
      <UserAvatarCard :user="inviterRef" :round="true" />
    </div>

    <div>
      <UserInviteLink :id="idRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@prisma/client'
const props = defineProps<{
  user: Partial<User>
}>()

const getI18nConfig = () => ({
  // User
  dataTableUserItemInfoInviter: '邀请人',
})

const { i18nRef } = useI18n(getI18nConfig())

const idRef = computed(() => {
  const { id } = props.user || {}
  return id
})

const inviterRef = computed(() => {
  const { inviter } = props.user as any
  return inviter as User
})
</script>
