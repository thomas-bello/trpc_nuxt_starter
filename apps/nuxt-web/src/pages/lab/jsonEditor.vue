<template>
  <div class="flex flex-col gap-2">
    <h1>Json Editor</h1>

    <JsonEditor v-model:value="valueRef" />
    <div>valueRef:</div>
    <div class="whitespace-pre-wrap">
      {{ JSON.stringify(valueRef, null, 2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
const valueRef = ref({})
</script>
