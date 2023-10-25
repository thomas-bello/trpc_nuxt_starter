<template>
  <div>
    <div v-if="isLoginRef">
      <div class="cursor-pointer" @click="() => (rightDrawerShowRef = true)">
        <UserAvatarCard :user="userRef" :round="true" :just-avatar="true" />
      </div>
    </div>
    <div v-else>
      <NButton @click="() => signIn()">{{ i18nRef.headerUserMenuLoginBtn }}</NButton>
    </div>

    <NDrawer v-model:show="rightDrawerShowRef" :mask-closable="true">
      <NDrawerContent closable>
        <template #header>
          <UserAvatarCard class="w-full text-sm" :user="userRef" :round="true" />
        </template>
        <template #footer>
          <NButton class="w-full" quaternary @click="() => signOut()">{{ i18nRef.headerUserMenuSignOutBtn }}</NButton>
        </template>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<script setup lang="ts">
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'

const getI18nConfig = () => ({
  headerUserMenuLoginBtn: '登录',
  headerUserMenuSignOutBtn: '退出登录',
})

const { i18nRef } = useI18n(getI18nConfig())

const { signIn, signOut } = useSession()

const userRef = useCurrentUser()

const isLoginRef = computed(() => {
  return !!userRef.value
})

const rightDrawerShowRef = ref(false)
</script>
