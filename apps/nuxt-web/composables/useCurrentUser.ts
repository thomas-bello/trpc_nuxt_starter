export const useCurrentUser = () => {
  const { data } = useSession()

  const userRef = computed(() => {
    const { user } = data.value || {}

    return user
  })

  return userRef
}
