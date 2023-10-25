<template>
  <div class="relative flex flex-col p-10 dark:border-r lg:flex-1" :style="wrapperStyleRef">
    <div class="absolute inset-0" />
    <div class="relative z-20 flex items-center text-lg font-medium">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        class="mr-2 h-6 w-6"
      >
        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
      </svg>
      Acme Inc
    </div>
    <div class="text-base-100 relative z-20 mt-auto">
      <blockquote class="space-y-2">
        <p class="text-lg">
          &ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my clients
          faster than ever before.&rdquo;
        </p>
        <footer class="text-sm">Sofia Davis</footer>
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()

const wrapperStyleRef = computed(() => ({
  'background-color': themeVars.value.primaryColor,
  color: themeVars.value.textColorBase,
}))
</script>
