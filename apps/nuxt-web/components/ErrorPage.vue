<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center gap-5">
    <NResult size="huge" :status="status" :title="errorMsgRef">
      <template #footer>
        <NButton v-if="showGoToSignIn" size="large" quaternary @click="() => signIn()">{{
          i18nRef.errorPageBtnGotoSignIn
        }}</NButton>
        <NuxtLink to="/">
          <NButton v-if="showGoToSignIn" size="large" quaternary>{{ i18nRef.errorPageBtnGotoHome }}</NButton>
        </NuxtLink>
      </template>
    </NResult>
  </div>
</template>

<script setup lang="ts">
import { NButton, NResult } from 'naive-ui'

type ErrorType = 'Verification'

const getI18nConfig = () => ({
  errorPage404: '404 页面不存在',
  errorPageErrorVerification: '链接已失效',
  errorPageBtnGotoSignIn: '重新登录',

  errorPageBtnGotoHome: '回到首页',
})

const { i18nRef } = useI18n(getI18nConfig())

const { query } = useRoute()

const { error = '', msg } = (query || {}) as {
  error: string
  msg: string
}
let { status } = (query || {}) as {
  status?: string
}

const showGoToSignIn = error === 'Verification'

if (!status) {
  status = error && msg ? 'error' : '404'
}

const errorMsgRef = computed(() => {
  const errorMap: Record<ErrorType, string> = {
    Verification: i18nRef.errorPageErrorVerification,
  }
  return errorMap[error as ErrorType] || msg || i18nRef.errorPage404
})

const { signIn } = useSession()
</script>
