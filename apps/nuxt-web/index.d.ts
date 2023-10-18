/// <reference types="vite/client" />

// import { createTRPCNuxtClient } from 'trpc-nuxt/client'
import type { AppRouter } from './types'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface ImportMeta {
  url: string
  readonly vitest?: typeof import('vitest')
}

// declare module '#app' {
//   interface NuxtApp {
//     $trpc: ReturnType<typeof createTRPCNuxtClient<AppRouter>>
//   }
// }
