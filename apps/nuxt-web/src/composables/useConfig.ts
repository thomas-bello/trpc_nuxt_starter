import { darkTheme } from 'naive-ui'

interface UiConfig {
  logo: string
  menuLogo: string
  title: string
  menuTitle: string
}

interface SystemConfig {
  ui: Partial<UiConfig>
  theme: typeof darkTheme
}

const defSystemConfig = (): SystemConfig => ({
  ui: {
    logo: '',
    title: '',
    menuLogo: '',
    menuTitle: '',
  },
  theme: darkTheme,
})

export const provideSystemConfig = () => {
  const systemConfigRef = ref<SystemConfig>(defSystemConfig())
  provide('systemConfig', systemConfigRef)
  return systemConfigRef
}

export const useSystemConfig = () => {
  const systemConfigRef = inject('systemConfig', provideSystemConfig, true)

  const themeRef = computed(() => {
    const { theme } = systemConfigRef.value
    return theme
  })

  const uiRef = computed(() => {
    const { ui } = systemConfigRef.value
    return ui
  })

  return { systemConfigRef, themeRef, uiRef }
}
