import { error } from 'console';
<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">{{ i18nRef.credentialsFormTopTips1 }}</h1>
      <p class="text-sm">{{ i18nRef.credentialsFormTopTips2 }}</p>
    </div>
    <NForm ref="formRef" :show-label="false" :model="formValueRef" :rules="rulesRef">
      <NFormItem path="email">
        <NInput v-model:value="formValueRef.email" :placeholder="i18nRef.credentialsFormEmailRequiredTips" />
      </NFormItem>
      <NFormItem path="password">
        <NInput
          v-model:value="formValueRef.password"
          :placeholder="i18nRef.credentialsFormPasswordRequiredTips"
          type="password"
          show-password-on="mousedown"
        />
      </NFormItem>

      <NButton type="primary" class="w-full" :loading="loadingRef" @click="onSubmit">
        {{ i18nRef.credentialsFormBtn }}
      </NButton>
    </NForm>
  </div>
</template>

<script setup lang="ts">
import { NButton, NForm, NFormItem, useMessage, NInput } from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'

const getI18nConfig = () => ({
  credentialsFormEmail: '请输入邮箱',
  credentialsFormEmailRequiredTips: '请输入邮箱',
  credentialsFormEmailErrorTips: '请输入正确的邮箱格式',

  credentialsFormPassword: '请输入密码',
  credentialsFormPasswordRequiredTips: '请输入密码',

  credentialsFormBtn: '登陆',
  credentialsFormTopTips1: '账号密码登录', // 'Login with account',
  credentialsFormTopTips2: '请输入你的账号和密码', // 'Type in your email and password',

  credentialsFormSubmitErrorTips: '用户不存在或密码错误',
})

const { i18nRef } = useI18n(getI18nConfig())

const { signIn, getCsrfToken } = useSession()

const csrfToken = await getCsrfToken()

const formRef = ref<FormInst | null>()
const formValueRef = reactive<{ email: string; password: string }>({
  email: '',
  password: '',
})

const loadingRef = ref(false)
const message = useMessage()

const onSubmit = async (e: MouseEvent) => {
  e.preventDefault()

  await formRef.value?.validate()

  loadingRef.value = true

  const willPost = {
    email: formValueRef.email,
    password: formValueRef.password,
    csrfToken,
    inviter: '',
    redirect: false,
  }

  console.log('EmailForm onSubmit willPost', willPost)
  const res = await signIn('credentials', willPost)
  console.log('EmailForm onSubmit res', res)

  const { ok, error } = res || {}

  if (!ok && error) {
    message.error(error)
    loadingRef.value = false
  } else if (error === 'CredentialsSignin') {
    message.error(i18nRef.credentialsFormSubmitErrorTips)
  }
  if (ok) {
    // TODO
  }
  loadingRef.value = false
}

const rulesRef = computed(() => {
  const rules: FormRules = {
    email: [
      {
        required: true,
        message: i18nRef.credentialsFormEmailRequiredTips,
        trigger: ['blur'],
        type: 'email',
      },
    ],
    password: [
      {
        required: true,
        message: i18nRef.credentialsFormPasswordRequiredTips,
        trigger: ['blur'],
      },
    ],
  }

  return rules
})
</script>
