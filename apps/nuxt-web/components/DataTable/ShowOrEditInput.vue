<template>
  <div class="min-h-[1.375rem]" @click="handleOnClick">
    <NInput
      v-if="isEdit"
      ref="inputRef"
      v-model:value="inputValue"
      type="text"
      @change="handleChange"
      @blur="handleChange"
    />
    <div class="cursor-pointer" v-else>{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import { NInput } from 'naive-ui'

const props = defineProps<{
  value: string
  editValueEmpty?: boolean
  onUpdateValue: (v: string) => Promise<boolean>
}>()

const isEdit = ref(false)
const inputRef = ref(null)
const inputValue = ref(props.value)
function handleOnClick() {
  isEdit.value = true
  inputValue.value = props.editValueEmpty ? '' : props.value
  nextTick(() => {
    inputRef.value.focus()
  })
}
const handleChange = useDebounce(async () => {
  if (props.value !== inputValue.value) {
    const isSuccess = await props.onUpdateValue(inputValue.value)

    if (isSuccess) {
      isEdit.value = false
    }
  } else {
    isEdit.value = false
  }
}, 300)
</script>
