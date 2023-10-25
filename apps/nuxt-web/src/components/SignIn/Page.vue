import { SignInLeft } from '#build/components';
<!-- file: ~/pages/login.vue -->
<template>
  <div className="relative min-h-screen flex flex-col lg:flex-row items-stretch justify-center">
    <SignInLeft />
    <SignInRight />
  </div>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
const queryValueRef = useQueryValue(['inviterId'])

const inviterIdRef = computed(() => {
  return queryValueRef.value.inviterId
})

const inviterIdStorageRef = useStorage('inviterId', '')

watch(
  () => inviterIdRef.value,
  (newValue) => {
    if (newValue) {
      inviterIdStorageRef.value = newValue
    }
  },
  {
    immediate: true,
  }
)
</script>
