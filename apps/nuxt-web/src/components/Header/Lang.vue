<template>
  <NButton v-if="justOneI18nRef" quaternary size="small" @click="() => handleI18nSelect(showCanChangeI18nRef.key)">{{
    showCanChangeI18nRef.label
  }}</NButton>
  <NDropdown v-else :options="canChangeI18nSelectOptionsRef" trigger="hover" @select="handleI18nSelect">
    <NButton quaternary size="small">{{ currentI18nRef.label }}</NButton>
  </NDropdown>
</template>

<script setup lang="ts">
import { NButton, NDropdown } from 'naive-ui'

const langRef = useI18nLang()

const i18nSelectOptions = getI18nSelectOptions()

const canChangeI18nSelectOptionsRef = computed(() => {
  const lang = langRef.value
  return i18nSelectOptions.filter(({ value }) => value !== lang).map((item) => ({ ...item, key: item.value }))
})
const justOneI18nRef = computed(() => {
  return canChangeI18nSelectOptionsRef.value.length === 1
})

const showCanChangeI18nRef = computed(() => {
  const [first] = canChangeI18nSelectOptionsRef.value
  return first
})

const currentI18nRef = computed(() => {
  const lang = langRef.value
  return i18nSelectOptions.find(({ value }) => value === lang)
})

const handleI18nSelect = (key: string) => {
  langRef.value = key
}
</script>
