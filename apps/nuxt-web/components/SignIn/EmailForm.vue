import { error } from 'console';
<template>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">{{ i18nRef.emailFormTopTips1 }}</h1>
      <p class="text-muted-foreground text-sm">{{ i18nRef.emailFormTopTips2 }}</p>
    </div>
    <NForm ref="formRef" :show-label="false" :model="formValueRef" :rules="rulesRef">
      <NFormItem path="email">
        <NInput v-model:value="formValueRef.email" :placeholder="i18nRef.emailFormEmailRequiredTips" />
      </NFormItem>

      <NButton type="primary" class="w-full" :loading="loadingRef" @click="onSubmit">
        {{ i18nRef.emailFormBtn }}
      </NButton>
    </NForm>
  </div>
</template>

<script setup lang="ts">
import { NButton, NForm, NFormItem, useMessage, useDialog, NInput } from 'naive-ui'
import type { FormInst, FormRules } from 'naive-ui'

const getI18nConfig = () => ({
  emailFormEmail: '请输入邮箱',
  emailFormEmailRequiredTips: '请输入邮箱',
  emailFormEmailErrorTips: '请输入正确的邮箱格式',

  emailFormBtn: '登陆',
  emailFormTopTips1: '通过邮箱创建账号登录', // 'Create an account',
  emailFormTopTips2: '输入你的邮箱并通过接收验证邮件登录', // 'Enter your email below to create your account',

  emailFormSuccessDialogTitle: '发送成功',
  emailFormSuccessDialogContent: '请查收邮件，如长时间没有收到，请留意是否被误归类到垃圾箱，或选择重新发送。',
  emailFormSuccessDialogBtn: '知道了',
})

const { i18nRef } = useI18n(getI18nConfig())

const { signIn, getCsrfToken } = useSession()

const csrfToken = await getCsrfToken()

const formRef = ref<FormInst | null>()
const formValueRef = reactive<{ email: string }>({
  email: '',
})

const loadingRef = ref(false)

const dialog = useDialog()
const message = useMessage()

const onSubmit = async (e: MouseEvent) => {
  e.preventDefault()
  await formRef.value?.validate()

  loadingRef.value = true

  const willPost = {
    email: formValueRef.email,
    csrfToken,
    inviter: '',
    redirect: false,
  }

  const res = await signIn('email', willPost)

  const { ok, error } = res || {}

  if (!ok && error) {
    message.error(error)
  }
  if (ok) {
    dialog.success({
      title: i18nRef.emailFormSuccessDialogTitle,
      content: i18nRef.emailFormSuccessDialogContent,
      positiveText: i18nRef.emailFormSuccessDialogBtn,
    })
  }
  loadingRef.value = false
}

const rulesRef = computed(() => {
  const rules: FormRules = {
    email: [
      {
        required: true,
        message: i18nRef.emailFormEmailRequiredTips,
        trigger: ['blur'],
        type: 'email',
      },
    ],
  }

  return rules
})
</script>
