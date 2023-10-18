<template>
  <NButton text @click="() => signIn(type)">
    <Icon :name="iconMap[type]" size="24" />
  </NButton>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import type { ThirdPartLoginType } from '~/types/login'

defineProps<{
  type: ThirdPartLoginType
}>()

const { signIn } = useSession()

const iconMap: Record<ThirdPartLoginType, string> = {
  github: 'uil:github',
  google: 'flat-color-icons:google',
}
</script>
