import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import type { NLocale, NDateLocale } from 'naive-ui'
import type { I18nValue } from '@prisma/client'
import { useStorage } from '@vueuse/core'
interface I18nConfig {
  [lang: string]: Record<string, string>
}

const defaultLang = 'zh-CN'

const i18nConfigMap: I18nConfig = {
  [defaultLang]: {},
}

const provideI18nLang = () => {
  const langRef = useStorage('i18nLang', defaultLang)
  provide('i18nLang', langRef)
  return langRef
}

export const useI18nLang = () => {
  const i18nLangRef = inject('i18nLang', provideI18nLang, true)

  return i18nLangRef
}

export const provideCurrentI18n = () => {
  const i18nLangRef = useI18nLang()

  const currentI18nRef = ref({})

  watchEffect(() => {
    currentI18nRef.value = i18nConfigMap[i18nLangRef.value] || {}
  })

  provide('currentI18n', currentI18nRef)

  return currentI18nRef
}

const useCurrentI18n = () => {
  const currentI18nRef = inject('currentI18n', provideCurrentI18n, true)
  return currentI18nRef
}

const i18nOptions = {
  [defaultLang]: {
    locale: zhCN,
    dateLocale: dateZhCN,
    label: '中文',
  },
  'en-US': {
    locale: enUS,
    dateLocale: dateEnUS,
    label: 'English',
  },
}

export const getI18nSelectOptions = () => {
  return Object.keys(i18nOptions).map((value) => {
    const { label } = i18nOptions[value]

    return {
      label,
      value,
    }
  })
}

export const useCompI18n = () => {
  const langRef = useI18nLang()

  const currentLocaleRef = computed(() => {
    // console.log('currentLocaleRef computed', langRef.value)
    return i18nOptions[langRef.value]
  })

  const localeRef = computed<NLocale>(() => {
    return currentLocaleRef.value.locale || zhCN
  })

  const dateLocaleRef = computed<NDateLocale>(() => {
    return currentLocaleRef.value.dateLocale || dateZhCN
  })

  return { localeRef, dateLocaleRef }
}

export const useI18n = <T extends Record<string, string>>(i18nConfig: T) => {
  const langRef = useI18nLang()
  const currentI18nRef = useCurrentI18n()

  const defaultI18n = i18nConfigMap[defaultLang] || {}
  i18nConfigMap[defaultLang] = useMerge(defaultI18n, i18nConfig)

  const keys = Object.keys(i18nConfig)

  const i18nRef = reactive<T>(i18nConfig)

  const missValueKeysRef = ref<string[]>([])

  const whereRef = computed(() => {
    const missValueKeys = missValueKeysRef.value
    if (missValueKeys.length) {
      return {
        where: {
          key: {
            in: missValueKeys,
          },
          lang: langRef.value,
        },
      }
    }
    return null
  })

  watch(
    () => currentI18nRef.value,
    () => {
      // console.log('useI18n watchEffect', langRef.value)
      keys.forEach((key) => {
        const value = currentI18nRef.value[key]

        // console.log(langRef.value, 'useI18n key', key, 'value', value)

        if (value) {
          ;(i18nRef as any)[key] = value
        } else {
          missValueKeysRef.value.push(key)
        }
      })
    },
    {
      immediate: true,
    }
  )

  watch(
    () => whereRef.value,
    async (where) => {
      if (where) {
        const list = await getTrpc().db.i18nValue.findMany.query(whereRef.value)
        console.log('watch whereRef list', list)
        ;(list as I18nValue[]).forEach((item) => {
          const { key, value, lang } = item

          ;(i18nRef as any)[key] = value

          const langObj = i18nConfigMap[lang] || {}

          langObj[key] = value

          i18nConfigMap[lang] = langObj
        })

        missValueKeysRef.value = []
      }
    },
    {
      immediate: true,
    }
  )

  return {
    langRef,
    currentI18nRef,
    i18nRef,
  }
}
