export const provideJsonEditorJsLoaded = () => {
  const jsonEditorJsLoadedRef = ref(!!(getWindow() as any)?.JSONEditor)
  provide('jsonEditorJsLoaded', jsonEditorJsLoadedRef)
  return jsonEditorJsLoadedRef
}
export const useJsonEditorJsLoaded = () => {
  const jsonEditorJsLoadedRef = inject('jsonEditorJsLoaded', provideJsonEditorJsLoaded, true)

  return jsonEditorJsLoadedRef
}
