<template>
  <div class="flex flex-1 items-center justify-center px-6 py-24 lg:px-8 2xl:max-w-xl">
    <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <!-- <ErrorTips /> -->

      <SignInCredentialsForm v-if="hasCredentials" />
      <NDivider>{{ i18nRef.signInRightDividerTextOr }}</NDivider>

      <SignInEmailForm v-if="hasEmail" />

      <NDivider>{{ i18nRef.signInRightDividerTextOther }}</NDivider>

      <SignInProviders v-if="hasOtherProviders" />
      <div class="flex items-center justify-center gap-1 px-8 text-sm">
        <div>{{ i18nRef.signInRightAgreePolicyTips }}</div>
        <NuxtLink to="/terms">
          <NButton text type="primary">
            {{ i18nRef.signInRightTermsOfService }}
          </NButton>
        </NuxtLink>
        <div>{{ i18nRef.signInRightAgreePolicyTipsAnd }}</div>
        <NuxtLink to="/privacy">
          <NButton text type="primary">
            {{ i18nRef.signInRightPrivacyPolicy }}
          </NButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NDivider, NButton } from 'naive-ui'
import type { SignInFormProvidersType } from '~/types/login'

const getI18nConfig = () => ({
  signInRightDividerTextOther: '其他登录方式',
  signInRightDividerTextOr: '或',
  signInRightAgreePolicyTips: '登录则同意', // By clicking continue, you agree to our
  signInRightAgreePolicyTipsAnd: '和', // and
  signInRightTermsOfService: '服务条款', // Terms of Service
  signInRightPrivacyPolicy: '隐私政策', // Privacy Policy
})

const { i18nRef } = useI18n(getI18nConfig())

const { getProviders } = useSession()

const providers = await getProviders()

const providerTypes = Object.values(providers).map(({ id }) => id) as SignInFormProvidersType[]

const hasCredentials = providerTypes.includes('credentials')
const hasEmail = providerTypes.includes('email')
const formProvidersTypes: SignInFormProvidersType[] = ['credentials', 'email']

const hasOtherProviders = providerTypes.filter((provider) => !formProvidersTypes.includes(provider)).length > 0
</script>
