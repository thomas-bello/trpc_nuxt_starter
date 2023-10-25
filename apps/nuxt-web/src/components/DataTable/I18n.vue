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
          <NFormItem :label="i18nRef.dataTableI18nValueLang" path="lang">
            <NInput v-model:value="formValueRef.lang" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableI18nValueKey" path="key">
            <NInput v-model:value="formValueRef.key" />
          </NFormItem>
          <NFormItem :label="i18nRef.dataTableI18nValueValue" path="value">
            <NInput v-model:value="formValueRef.value" />
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
import type { I18nValue } from '@prisma/client'
import ShowOrEditInput from './ShowOrEditInput.vue'

const getI18nConfig = () => ({
  dataTableI18nValueLang: '语言(lang)',
  dataTableI18nValueKey: 'Key(key)',
  dataTableI18nValueValue: '值(value)',
})

type I18nType = ReturnType<typeof getI18nConfig>

const {
  data: groupLangRef,
  refresh: groupLangRefresh,
  status: groupLangStatusRef,
} = getTrpc().db.i18nValue.groupBy.useQuery(
  {
    by: ['lang'],
    _count: {
      lang: true,
    },
    orderBy: {
      _count: {
        lang: 'desc',
      },
    },
  },
  {
    immediate: true,
  }
)

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
} = useDataTable<I18nValue, I18nType>({
  model: 'i18nValue',
  getI18nConfig,
  getStatusLoading: (loading) => {
    return loading || groupLangStatusRef.value === 'pending'
  },
  getColumns: (update) => {
    const columns: DataTableColumn<I18nValue>[] = [
      {
        title: i18nRef.dataTableI18nValueLang,
        key: 'lang',
        width: 200,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.lang,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                lang: v as string,
              })
            },
          })
        },
        filterOptions: groupLangRef.value.map((item) => ({
          label: `${item.lang} (${item._count.lang})`,
          value: item.lang,
        })),
        filter: () => true,
      },
      {
        title: i18nRef.dataTableI18nValueKey,
        key: 'key',
        width: 300,
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.key,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                key: v as string,
              })
            },
          })
        },
      },
      {
        title: i18nRef.dataTableI18nValueValue,
        key: 'value',
        sorter: {
          multiple: 3,
        },
        resizable: true,
        render: (row) => {
          return h(ShowOrEditInput, {
            value: row.value,
            onUpdateValue: async (v) => {
              return await update(row.id, {
                value: v as string,
              })
            },
          })
        },
      },
    ]
    return columns
  },
  refresh: groupLangRefresh,
  getRules: (i18nRef) => {
    const rules: FormRules = {
      key: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableI18nValueKey }),
          trigger: ['input', 'blur'],
        },
      ],
      lang: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableI18nValueLang }),
          trigger: ['input', 'blur'],
        },
      ],
      value: [
        {
          required: true,
          message: evaluate(i18nRef.dataTableSaveRequiredTips, { text: i18nRef.dataTableI18nValueValue }),
          trigger: ['input', 'blur'],
        },
      ],
    }

    return rules
  },
  getDefFormData: () => ({
    key: '',
    lang: '',
    value: '',
  }),
})
</script>
