<template>
  <span></span>
</template>

<script setup lang="ts">
import { useStorage } from '@vueuse/core'
const inviterIdStorageRef = useStorage('inviterId', '')

const userRef = useCurrentUser()

const checkPropsRef = computed(() => {
  const inviterId = inviterIdStorageRef.value
  const user = userRef.value
  const { id } = user || {}

  if (inviterId && id && id !== inviterId) {
    return {
      inviterId,
      id,
    }
  }
})

watch(
  () => checkPropsRef.value,
  async (newValue) => {
    if (newValue) {
      const { inviterId, id } = newValue

      const currentUser = await getTrpc().db.user.findUnique.query({
        where: {
          id,
        },
        select: {
          inviterId: true,
        },
      })

      if (!currentUser.inviterId) {
        await getTrpc().db.user.update.mutate({
          data: {
            inviterId,
          },
          where: {
            id,
          },
        })

        inviterIdStorageRef.value = ''
      }
    }
  },
  {
    immediate: true,
  }
)
</script>
