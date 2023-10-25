<template>
  <div class="flex items-center justify-between gap-4 px-4 py-2">
    <NImage v-if="menuLogoRef" lazy :src="menuLogoRef" height="64" />
    <div>{{ menuTitleRef }}</div>

    <div class="flex items-center justify-end gap-2">
      <HeaderLang />

      <HeaderUserMenu />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NImage } from 'naive-ui'

const { uiRef } = useSystemConfig()

const menuLogoRef = computed(() => {
  const { logo, menuLogo } = uiRef.value || {}

  return menuLogo || logo || ''
})

const menuTitleRef = computed(() => {
  const { menuTitle } = uiRef.value || {}

  return menuTitle || ''
})
</script>
