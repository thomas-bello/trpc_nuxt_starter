<!-- file: ~/pages/login.vue -->
<template>
  <div class="flex items-center justify-center gap-2">
    <SignInProviderItem v-for="provider in showProviders" :key="provider" :type="provider" />
  </div>
</template>

<script setup lang="ts">
import type { ThirdPartLoginType } from '~/types/login'
const { getProviders } = useSession()

const providers = await getProviders()

const thirdPartLoginTypeArr: ThirdPartLoginType[] = ['github', 'google']

const providersTypes = Object.values(providers).map(({ id }) => id) as ThirdPartLoginType[]

const showProviders = providersTypes.filter((provider) => {
  return thirdPartLoginTypeArr.includes(provider)
})
</script>
