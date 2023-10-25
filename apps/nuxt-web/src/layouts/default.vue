<template>
  <NLayout>
    <NLayoutHeader>
      <Header />
    </NLayoutHeader>
    <NLayout has-sider>
      <NLayoutSider> </NLayoutSider>
      <NLayoutContent>
        <slot />
      </NLayoutContent>
    </NLayout>
    <NLayoutFooter> </NLayoutFooter>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider, NLayoutFooter } from 'naive-ui'
</script>
