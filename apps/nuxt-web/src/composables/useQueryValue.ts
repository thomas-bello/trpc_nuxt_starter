const getQueryKeyMap = () => ({
  inviterId: '_it',
})

type QueryKeyType = keyof ReturnType<typeof getQueryKeyMap>

export const useQueryValue = (keys: QueryKeyType[]) => {
  const route = useRoute()

  const queryKeyMap = getQueryKeyMap()

  const queryValueRef = computed(() => {
    const query = route.query || {}

    const queryValue: Record<QueryKeyType, any> = {} as any

    return keys.reduce((obj, key) => {
      const queryKey = queryKeyMap[key]
      const val = query[queryKey] || ''

      obj[key] = val

      return obj
    }, queryValue)
  })

  return queryValueRef
}
