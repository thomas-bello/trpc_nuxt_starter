<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-end">
      <NButton @click="() => (addDrawerShowRef = true)">{{ i18nRef.dataTableAddBtn }}</NButton>
    </div>
    <NDataTable
      :row-key="(row) => row.id"
      :columns="columnsRef"
      :data="listRef"
      :loading="loadingRef"
      :row-props="rowProps"
      :pagination="paginationReactive"
      :on-update:page="handlePageChange"
      :on-update:page-size="handlePageSizeChange"
      :on-update:sorter="handleSorterChange"
      :on-update:filters="handleFiltersChange"
    />
    <NDrawer v-model:show="addDrawerShowRef" :mask-closable="false" resizable>
      <NDrawerContent closable>
        <NForm ref="formRef" :model="formValueRef" :rules="rulesRef">
          <NFormItem :label="i18nRef.dataTableUserEmail" path="email">
            <NInput v-model:value="formValueRef.email" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableUserName" path="name">
            <NInput v-model:value="formValueRef.name" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableUserPassword" path="password">
            <NInput v-model:value="formValueRef.password" />
          </NFormItem>
        </NForm>
        <template #footer>
          <div class="flex justify-end">
            <NButton round type="primary" @click="handleSaveButtonClick">
              {{ i18nRef.dataTableSaveBtn }}
            </NButton>
          </div>
        </template>
      </NDrawerContent>
    </NDrawer>

    <NDropdown
      placement="bottom-start"
      trigger="manual"
      :x="xRef"
      :y="yRef"
      :options="dropdownOptionsRef"
      :show="showDropdownRef"
      :on-clickoutside="onClickDropdownOutside"
      @select="handleDropdownSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { NDataTable, NButton, NDrawer, NDrawerContent, NForm, NFormItem, NInput, NDropdown } from 'naive-ui'
import type { DataTableColumn, FormRules } from 'naive-ui'
import type { User } from '@prisma/client'
import ShowOrEditInput from './ShowOrEditInput.vue'

const getI18nConfig = () => ({
  // User
  dataTableUserEmail: '邮箱(email)',
  dataTableUserName: '昵称(name)',
  dataTableUserPassword: '密码(password)',
})

type I18nType = ReturnType<typeof getI18nConfig>

// const userRef = useCurrentUser()

const {
  paginationReactive,
  loadingRef,

  listRef,
  i18nRef,
  columnsRef,
  rowProps,
  dropdownOptionsRef,
  xRef,
  yRef,
  showDropdownRef,
  rulesRef,
  formValueRef,
  addDrawerShowRef,
  formRef,
  handlePageChange,
  handlePageSizeChange,
  handleSorterChange,
  handleFiltersChange,

  handleDropdownSelect,
  onClickDropdownOutside,
  handleSaveButtonClick,
} = useDataTable<User, I18nType>({
  model: 'user',
  getI18nConfig,

  getColumns: (update) => {
    const columns: DataTableColumn<User>[] = [
      {
        title: i18nRef.dataTableUserEmail,
        key: 'email',
        width: 200,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.email,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                email: v as string,
              })
            },
          })
        },
      },
      {
        title: i18nRef.dataTableUserName,
        key: 'name',
        width: 300,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.name,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                name: v as string,
              })
            },
          })
        },
      },
      {
        title: i18nRef.dataTableUserPassword,
        key: 'password',

        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.password,
            editValueEmpty: true,
            onUpdateValue: async (v) => {
              if (v) {
                const password = await getTrpc().password.hash.query({
                  email: row.email,
                  password: v as string,
                })

                return await update(row.id, {
                  password,
                })
              }
              return true
            },
          })
        },
      },
    ]
    return columns
  },
  getRules: (i18nRef) => {
    const rules: FormRules = {
      email: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableUserEmail }),
          trigger: ['blur'],
        },
      ],
      password: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableUserPassword }),
          trigger: ['blur'],
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    name: '',
    email: '',
    password: '',
  }),
})
</script>
