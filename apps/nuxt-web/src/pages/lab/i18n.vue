<template>
  <div>
    <h1>I18n</h1>

    <div>
      <template v-for="item in i18nSelectOptions" :key="item.value">
        <NButton
          @click="
            () => {
              langRef = item.value
            }
          "
          >{{ item.label }}</NButton
        >
      </template>
    </div>

    <div>i18nRef.test: {{ i18nRef.test }}</div>

    <NDatePicker />

    <DataTableI18n />
  </div>
</template>

<script setup lang="ts">
import { NDatePicker, NButton } from 'naive-ui'

const getI18nConfig = () => ({
  test: '测试',
})

const { i18nRef, langRef } = useI18n(getI18nConfig())

const i18nSelectOptions = getI18nSelectOptions()
</script>
