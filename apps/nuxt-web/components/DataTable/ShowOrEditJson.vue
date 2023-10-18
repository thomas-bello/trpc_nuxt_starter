<template>
  <div class="min-h-[1.375rem]" @click="handleOnClick">
    <JsonEditor v-if="isEdit" ref="inputRef" v-model:value="inputValue" :options="options" />
    <div v-else class="cursor-pointer whitespace-pre-wrap">{{ JSON.stringify(value, null, 2) }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: Record<string, any>
  onUpdateValue: (v: Record<string, any>) => Promise<boolean>
}>()

const isEdit = ref(false)
const inputRef = ref(null)
const inputValue = ref(props.value)
function handleOnClick() {
  isEdit.value = true
  inputValue.value = props.value
  nextTick(() => {
    inputRef.value.focus()
  })
}
const handleChange = useDebounce(async () => {
  if (JSON.stringify(props.value) !== JSON.stringify(inputValue.value)) {
    const isSuccess = await props.onUpdateValue(inputValue.value)

    if (isSuccess) {
      isEdit.value = false
    }
  } else {
    isEdit.value = false
  }
}, 300)

const options = {
  onBlur: () => {
    handleChange()
  },
}
</script>
