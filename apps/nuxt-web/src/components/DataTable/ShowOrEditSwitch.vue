<template>
  <div class="min-h-[1.375rem]">
    <NSwitch v-model:value="inputValueRef" @change="handleChange" />
  </div>
</template>

<script setup lang="ts">
import { NSwitch } from 'naive-ui'

const props = defineProps<{
  value: boolean
  onUpdateValue: (v: boolean) => Promise<boolean>
}>()

const inputValueRef = ref(props.value)

watch(
  () => props.value,
  (newValue) => {
    if (newValue !== inputValueRef.value) {
      inputValueRef.value = newValue
    }
  }
)

const handleChange = useDebounce(async () => {
  if (props.value !== inputValueRef.value) {
    await props.onUpdateValue(inputValueRef.value)
  }
}, 300)
</script>
