<template>
  <div ref="divRef"></div>
</template>

<script setup lang="ts">
// https://jsoneditoronline.org/docs/index.html
// https://github.com/josdejong/jsoneditor
// https://github.com/josdejong/jsoneditor/blob/master/docs/api.md

type V = Record<string, any> | (Record<string, any> | string | number)[]

const props = defineProps<{
  value: V
  options?: Record<string, any> // jsoneditoronline 上的构建参数
}>()

const emit = defineEmits<{
  (e: 'update:value', v: V): void
}>()

interface JsonEditor {
  set: (v: any) => void
  get: () => any
  focus: () => void
}

const getJsonEditor = async (): Promise<JsonEditor> => {
  const obj = (getWindow() as any)?.JSONEditor as JsonEditor

  if (!obj) {
    await sleep(1000)
    return await getJsonEditor()
  }

  return obj
}

const jsonEditorJsLoadedRef = useJsonEditorJsLoaded()

const divRef = ref(null)

const loadJs = () => {
  appendScripts([
    {
      checkFunc: () => {
        return !hasElementByTagAndAttrs('script', {
          src: '//cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.js',
        })
      },
      attrs: {
        href: '//cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
      tag: 'link',
    },
    {
      attrs: {
        src: '//cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.10.2/jsoneditor.min.js',
      },
      onload: () => {
        jsonEditorJsLoadedRef.value = true
      },
    },
  ])
}

let editor: JsonEditor

let needFocus = false
const initPropsRef = computed(() => {
  const ele = divRef.value

  if (jsonEditorJsLoadedRef.value) {
    return ele
  }

  return null
})

const init = async () => {
  const ele = initPropsRef.value
  if (ele) {
    const JsonEditorClass = (await getJsonEditor()) as any

    const hasLoaded = getElementsByClassName('jsoneditor', ele)
    if (hasLoaded.length) return

    editor = new JsonEditorClass(ele, {
      modes: ['code'],
      mainMenuBar: false,
      statusBar: false,

      onChange: () => {
        try {
          const newVal = editor.get()
          if (JSON.stringify(newVal) !== JSON.stringify(props.value)) {
            emit('update:value', newVal)
          }
        } catch (error) {}
      },
      ...(props.options || {}),
    }) as JsonEditor
    editor.set(props.value)
    if (needFocus) {
      editor.focus()
      needFocus = false
    }
  }
}

loadJs()

watch(
  () => initPropsRef.value,
  async () => {
    await init()
  },
  {
    immediate: true,
  }
)
watch(
  () => props.value,
  (newValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(editor?.get())) {
      editor?.set(newValue)
    }
  },
  {
    immediate: true,
  }
)

defineExpose({
  focus: () => {
    editor?.focus()
    if (!editor) {
      needFocus = true
    }
  },
})
</script>
