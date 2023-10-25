<template>
  <NConfigProvider :locale="localeRef" :date-locale="dateLocaleRef" :theme="themeRef">
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <NGlobalStyle />
            <NuxtLayout>
              <NuxtPage />
              <UserSaveInviter />
            </NuxtLayout>
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import {
  NConfigProvider,
  NGlobalStyle,
  NDialogProvider,
  NMessageProvider,
  NNotificationProvider,
  NLoadingBarProvider,
} from 'naive-ui'
const { localeRef, dateLocaleRef } = useCompI18n()
const { themeRef } = useSystemConfig()
provideCurrentI18n()
provideJsonEditorJsLoaded()

// import type { NLocale, NDateLocale } from 'naive-ui'

// // console.log('localeRef', localeRef)
// // console.log('dateLocaleRef', dateLocaleRef)

// const locale = ref<NLocale | null>(null)
// const dateLocale = ref<NDateLocale | null>(null)
</script>
